// app/api/sessions/schedule/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionClientAccountId } from "@/lib/session";

export async function POST(req: Request) {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { scheduledAt, notes } = (await req.json()) as { scheduledAt?: string; notes?: string };

    if (!scheduledAt || isNaN(Date.parse(scheduledAt))) {
      return NextResponse.json({ success: false, error: "Please choose a valid date and time." }, { status: 400 });
    }
    const when = new Date(scheduledAt);
    if (when.getTime() < Date.now() + 60 * 60 * 1000) {
      return NextResponse.json({ success: false, error: "Please choose a time at least an hour from now." }, { status: 400 });
    }

    const account = await db.clientAccount.findUnique({ where: { id: clientAccountId } });
    if (!account) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const activePackage = await db.package.findFirst({
      where: { leadId: account.leadId, status: "active", periodEnd: { gt: new Date() } },
      orderBy: { createdAt: "desc" },
    });

    if (!activePackage) {
      return NextResponse.json({ success: false, error: "You don't have an active plan to schedule against." }, { status: 400 });
    }
    if (activePackage.usedSessions >= activePackage.totalSessions) {
      return NextResponse.json({ success: false, error: "You've used all your sessions for this period." }, { status: 400 });
    }

    // Transaction: create the session and increment usedSessions together,
    // re-checking the count inside the transaction so two rapid requests
    // can't both slip through and overbook the package.
    const result = await db.$transaction(async (tx) => {
      const fresh = await tx.package.findUniqueOrThrow({ where: { id: activePackage.id } });
      if (fresh.usedSessions >= fresh.totalSessions) {
        throw new Error("ALL_SESSIONS_USED");
      }
      const session = await tx.scheduledSession.create({
        data: { packageId: fresh.id, scheduledAt: when, notes: notes?.slice(0, 500) },
      });
      await tx.package.update({ where: { id: fresh.id }, data: { usedSessions: fresh.usedSessions + 1 } });
      return session;
    });

    return NextResponse.json({ success: true, session: result });
  } catch (err) {
    if (err instanceof Error && err.message === "ALL_SESSIONS_USED") {
      return NextResponse.json({ success: false, error: "You've used all your sessions for this period." }, { status: 400 });
    }
    console.error("[sessions/schedule]", err);
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
