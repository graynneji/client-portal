// lib/session-bank.ts
//
// The bug this fixes: the dashboard and scheduler used to look at a
// single "newest active package." If someone renewed or upgraded BEFORE
// using up their current sessions, that left two active, unexpired
// packages for the same lead — and only the newest one was ever
// considered, silently stranding whatever sessions were left on the old
// one. The displayed "remaining" count looked wrong/stuck because it
// genuinely was only counting part of what the client had paid for.
//
// Fix: treat every active, unexpired package as one pooled "session
// bank." Total/used/remaining are summed across all of them, and when a
// session gets scheduled, it's drawn from whichever package expires
// soonest first (so sessions closer to expiring get used before they'd
// go to waste, not left stranded behind a later renewal).

import { db } from "@/lib/db";

export interface SessionBank {
  totalSessions: number;
  usedSessions: number;
  remaining: number;
  /** Furthest-out expiry across all active packages — what the dashboard should display as "valid until." */
  periodEnd: Date | null;
  /** All active, unexpired packages, soonest-expiring first — the order sessions get drawn from. */
  packages: {
    id: string;
    planType: string;
    totalSessions: number;
    usedSessions: number;
    periodEnd: Date;
  }[];
}

export async function getSessionBank(leadId: string): Promise<SessionBank> {
  const packages = await db.package.findMany({
    where: { leadId, status: "active", periodEnd: { gt: new Date() } },
    orderBy: { periodEnd: "asc" }, // soonest-expiring first — draw from these before later ones
  });

  const totalSessions = packages.reduce((sum, p) => sum + p.totalSessions, 0);
  const usedSessions = packages.reduce((sum, p) => sum + p.usedSessions, 0);
  const periodEnd = packages.length
    ? packages.reduce((latest, p) => (p.periodEnd > latest ? p.periodEnd : latest), packages[0].periodEnd)
    : null;

  return {
    totalSessions,
    usedSessions,
    remaining: totalSessions - usedSessions,
    periodEnd,
    packages: packages.map((p) => ({
      id: p.id,
      planType: p.planType,
      totalSessions: p.totalSessions,
      usedSessions: p.usedSessions,
      periodEnd: p.periodEnd,
    })),
  };
}

/**
 * Atomically claims one session from the bank (soonest-expiring package
 * with remaining capacity) and returns which package it came from. Throws
 * "NO_CAPACITY" if nothing has room — check getSessionBank().remaining > 0
 * before calling this to give the user a clean error first, but this is
 * the actual source of truth since it re-checks inside the transaction.
 */
export async function claimSessionFromBank(leadId: string): Promise<{ packageId: string }> {
  return db.$transaction(async (tx) => {
    const candidates = await tx.package.findMany({
      where: { leadId, status: "active", periodEnd: { gt: new Date() } },
      orderBy: { periodEnd: "asc" },
    });

    const target = candidates.find((p) => p.usedSessions < p.totalSessions);
    if (!target) {
      throw new Error("NO_CAPACITY");
    }

    await tx.package.update({
      where: { id: target.id },
      data: { usedSessions: { increment: 1 } },
    });

    return { packageId: target.id };
  });
}

/** Releases a claimed session back to its package — used when a scheduled session is cancelled. */
export async function releaseSessionToBank(packageId: string): Promise<void> {
  await db.package.update({
    where: { id: packageId },
    data: { usedSessions: { decrement: 1 } },
  });
}
