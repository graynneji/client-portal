// app/api/auth/verify/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { setSessionCookie } from "@/lib/session";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.trymentel.com";

  if (!token) {
    return NextResponse.redirect(`${appUrl}/login?error=missing_token`);
  }

  try {
    const record = await db.clientLoginToken.findUnique({ where: { token } });

    if (!record || record.usedAt || record.expiresAt < new Date()) {
      return NextResponse.redirect(`${appUrl}/login?error=expired_link`);
    }

    await db.clientLoginToken.update({ where: { id: record.id }, data: { usedAt: new Date() } });
    await setSessionCookie(record.clientAccountId);

    return NextResponse.redirect(`${appUrl}/dashboard`);
  } catch (err) {
    console.error("[auth verify]", err);
    return NextResponse.redirect(`${appUrl}/login?error=server_error`);
  }
}
