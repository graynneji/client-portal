// app/api/auth/request-link/route.ts
import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { Resend } from "resend";
import { db } from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Mentel <hello@mail.trymentel.com>";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.trymentel.com";
const TOKEN_TTL_MINUTES = 15;

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email?: string };
    const cleanEmail = String(email ?? "")
      .trim()
      .toLowerCase();

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const account = await db.clientAccount.findUnique({
      where: { email: cleanEmail },
    });

    // Same response whether or not the account exists — don't reveal
    // which emails are registered clients.
    if (!account) {
      return NextResponse.json({ success: true });
    }

    const token = randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + TOKEN_TTL_MINUTES * 60 * 1000);

    await db.clientLoginToken.create({
      data: { clientAccountId: account.id, token, expiresAt },
    });

    const link = `${APP_URL}/api/auth/verify?token=${token}`;

    await resend.emails.send({
      from: FROM,
      to: [cleanEmail],
      subject: "Your Mentel sign-in link",
      html: `
        <div style="font-family:sans-serif;font-size:15px;color:#1c3a3a;max-width:480px;margin:0 auto;">
          <h2 style="font-weight:300;">Sign in to Mentel</h2>
          <p>Click the button below to log in. This link expires in ${TOKEN_TTL_MINUTES} minutes and can only be used once.</p>
          <a href="${link}" style="display:inline-block;margin:16px 0;padding:12px 24px;background:linear-gradient(135deg,#4e7a5e,#3d8b8b);color:#fff;text-decoration:none;border-radius:12px;font-weight:600;">
            Sign in
          </a>
          ${link}
          <p style="color:#a0b8ac;font-size:12px;">If you didn't request this, you can safely ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[request-link]", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
