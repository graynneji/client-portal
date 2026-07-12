// lib/session.ts
//
// A minimal, dependency-free signed-cookie session. No passwords to
// manage — login happens entirely via the magic-link flow in
// app/api/auth/request-link and app/api/auth/verify.

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "mentel_client_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function secret(): string {
  const s = process.env.CLIENT_SESSION_SECRET;
  if (!s) throw new Error("CLIENT_SESSION_SECRET is not set in .env");
  return s;
}

function sign(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function createSessionValue(clientAccountId: string): string {
  const payload = `${clientAccountId}.${Date.now()}`;
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

export function verifySessionValue(cookieValue: string): string | null {
  const parts = cookieValue.split(".");
  if (parts.length !== 3) return null;
  const [clientAccountId, ts, signature] = parts;
  const expected = sign(`${clientAccountId}.${ts}`);

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  return clientAccountId;
}

export async function getSessionClientAccountId(): Promise<string | null> {
  const store = await cookies();
  const value = store.get(SESSION_COOKIE)?.value;
  if (!value) return null;
  return verifySessionValue(value);
}

export async function setSessionCookie(clientAccountId: string) {
  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionValue(clientAccountId), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export { SESSION_COOKIE };
