// app/api/sessions/[id]/cancel/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionClientAccountId } from "@/lib/session";
import { releaseSessionToBank } from "@/lib/session-bank";

const CAL_API_KEY = process.env.CAL_API_KEY!;
const CAL_API_VERSION_BOOKINGS = "2024-08-13";

async function cancelCalBooking(uid: string) {
  try {
    await fetch(`https://api.cal.com/v2/bookings/${uid}/cancel`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CAL_API_KEY}`,
        "cal-api-version": CAL_API_VERSION_BOOKINGS,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cancellationReason: "Cancelled by client" }),
    });
  } catch (err) {
    console.error(
      "[sessions/cancel] failed to cancel Cal.com booking",
      uid,
      err,
    );
  }
}

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> } | any,
) {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await context.params;
    const account = await db.clientAccount.findUnique({
      where: { id: clientAccountId },
    });
    if (!account)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const session = await db.scheduledSession.findUnique({
      where: { id },
      include: { package: true },
    });

    // Ownership check — a session belongs to this client only if its
    // package's lead matches their account's lead.
    if (!session || session.package.leadId !== account.leadId) {
      return NextResponse.json(
        { success: false, error: "Session not found." },
        { status: 404 },
      );
    }
    if (session.status !== "scheduled") {
      return NextResponse.json(
        { success: false, error: "Only upcoming sessions can be cancelled." },
        { status: 400 },
      );
    }
    if (session.scheduledAt.getTime() < Date.now() + 60 * 60 * 1000) {
      return NextResponse.json(
        {
          success: false,
          error: "Sessions can only be cancelled more than an hour in advance.",
        },
        { status: 400 },
      );
    }

    // calBookingUid may not be defined on the typed session shape — use a safe cast
    const calUid = (session as any).calBookingUid;
    if (calUid) await cancelCalBooking(calUid);

    await db.scheduledSession.update({
      where: { id },
      data: { status: "cancelled" },
    });
    await releaseSessionToBank(session.packageId);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[sessions/cancel]", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}
