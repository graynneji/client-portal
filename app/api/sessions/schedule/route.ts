// // app/api/sessions/schedule/route.ts
// import { NextResponse } from "next/server";
// import { db } from "@/lib/db";
// import { getSessionClientAccountId } from "@/lib/session";

// export async function POST(req: Request) {
//   const clientAccountId = await getSessionClientAccountId();
//   if (!clientAccountId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   try {
//     const { scheduledAt, notes } = (await req.json()) as { scheduledAt?: string; notes?: string };

//     if (!scheduledAt || isNaN(Date.parse(scheduledAt))) {
//       return NextResponse.json({ success: false, error: "Please choose a valid date and time." }, { status: 400 });
//     }
//     const when = new Date(scheduledAt);
//     if (when.getTime() < Date.now() + 60 * 60 * 1000) {
//       return NextResponse.json({ success: false, error: "Please choose a time at least an hour from now." }, { status: 400 });
//     }

//     const account = await db.clientAccount.findUnique({ where: { id: clientAccountId } });
//     if (!account) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//     const activePackage = await db.package.findFirst({
//       where: { leadId: account.leadId, status: "active", periodEnd: { gt: new Date() } },
//       orderBy: { createdAt: "desc" },
//     });

//     if (!activePackage) {
//       return NextResponse.json({ success: false, error: "You don't have an active plan to schedule against." }, { status: 400 });
//     }
//     if (activePackage.usedSessions >= activePackage.totalSessions) {
//       return NextResponse.json({ success: false, error: "You've used all your sessions for this period." }, { status: 400 });
//     }

//     // Transaction: create the session and increment usedSessions together,
//     // re-checking the count inside the transaction so two rapid requests
//     // can't both slip through and overbook the package.
//     const result = await db.$transaction(async (tx) => {
//       const fresh = await tx.package.findUniqueOrThrow({ where: { id: activePackage.id } });
//       if (fresh.usedSessions >= fresh.totalSessions) {
//         throw new Error("ALL_SESSIONS_USED");
//       }
//       const session = await tx.scheduledSession.create({
//         data: { packageId: fresh.id, scheduledAt: when, notes: notes?.slice(0, 500) },
//       });
//       await tx.package.update({ where: { id: fresh.id }, data: { usedSessions: fresh.usedSessions + 1 } });
//       return session;
//     });

//     return NextResponse.json({ success: true, session: result });
//   } catch (err) {
//     if (err instanceof Error && err.message === "ALL_SESSIONS_USED") {
//       return NextResponse.json({ success: false, error: "You've used all your sessions for this period." }, { status: 400 });
//     }
//     console.error("[sessions/schedule]", err);
//     return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 500 });
//   }
// }

// app/api/sessions/schedule/route.ts
// Books the chosen slot on Cal.com (real availability, real calendar —
// replaces the earlier raw date/time picker with no availability
// checking), then claims one session from the client's aggregated
// session bank (lib/session-bank.ts) and records it. If the Cal.com
// booking succeeds but the bank claim fails for some reason, the Cal.com
// booking is cancelled again so nothing is left dangling.

// import { NextResponse } from "next/server";
// import { db } from "@/lib/db";
// import { getSessionClientAccountId } from "@/lib/session";
// import { getSessionBank, claimSessionFromBank } from "@/lib/session-bank";

// const CAL_API_KEY = process.env.CAL_API_KEY!;
// const CAL_API_VERSION_BOOKINGS = "2024-08-13";

// async function cancelCalBooking(uid: string, reason: string) {
//   try {
//     await fetch(`https://api.cal.com/v2/bookings/${uid}/cancel`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${CAL_API_KEY}`,
//         "cal-api-version": CAL_API_VERSION_BOOKINGS,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ cancellationReason: reason }),
//     });
//   } catch (err) {
//     console.error(
//       "[sessions/schedule] failed to roll back Cal.com booking",
//       uid,
//       err,
//     );
//   }
// }

// export async function POST(req: Request) {
//   const clientAccountId = await getSessionClientAccountId();
//   if (!clientAccountId)
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   const eventTypeId: number = 6108062;
//   // const eventTypeId = process.env.CAL_SESSION_EVENT_TYPE_ID;
//   if (!eventTypeId) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Scheduling isn't configured yet. Please contact support.",
//       },
//       { status: 500 },
//     );
//   }

//   try {
//     const { start, notes } = (await req.json()) as {
//       start?: string;
//       notes?: string;
//     };

//     console.log("[sessions/schedule] request body:", { start, notes });
//     if (!start || isNaN(Date.parse(start))) {
//       return NextResponse.json(
//         { success: false, error: "Please choose a valid time." },
//         { status: 400 },
//       );
//     }

//     const account = await db.clientAccount.findUnique({
//       where: { id: clientAccountId },
//       include: { lead: true },
//     });
//     if (!account)
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//     const bank = await getSessionBank(account.leadId);
//     if (bank.remaining <= 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "You've used all your sessions for this period.",
//         },
//         { status: 400 },
//       );
//     }

//     // 1. Book the real slot on Cal.com first — this is the source of truth
//     // for availability, so we don't spend a session on a slot that turns
//     // out to be unavailable.
//     const calRes = await fetch("https://api.cal.com/v2/bookings", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${CAL_API_KEY}`,
//         "cal-api-version": CAL_API_VERSION_BOOKINGS,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         start,
//         eventTypeId: Number(eventTypeId),
//         attendee: {
//           name: account.lead.name,
//           email: account.email,
//           timeZone: "Africa/Lagos",
//         },
//         ...(notes
//           ? { bookingFieldsResponses: { notes: notes.slice(0, 500) } }
//           : {}),
//       }),
//     });
//     const calData = await calRes.json();

//     if (!calRes.ok) {
//       console.error("[sessions/schedule] Cal.com booking failed:", calData);
//       return NextResponse.json(
//         {
//           success: false,
//           error:
//             calData?.error?.message ||
//             "That time is no longer available. Please pick another.",
//         },
//         { status: 409 },
//       );
//     }

//     const bookingUid: string | undefined = calData?.data?.uid;

//     // 2. Claim a session from the bank and record it — re-checks capacity
//     // inside a transaction, so two rapid requests can't both slip through.
//     try {
//       const { packageId } = await claimSessionFromBank(account.leadId);
//       const session = await db.scheduledSession.create({
//         data: {
//           packageId,
//           scheduledAt: new Date(start),
//           notes: notes?.slice(0, 500),
//           calBookingUid: bookingUid ?? null,
//         },
//       });
//       return NextResponse.json({ success: true, session });
//     } catch (err) {
//       // Bank claim failed after Cal.com already booked the slot — undo
//       // the Cal.com booking so the therapist's calendar doesn't show a
//       // phantom appointment nobody paid for.
//       if (bookingUid)
//         await cancelCalBooking(
//           bookingUid,
//           "Booking could not be recorded — please try again.",
//         );
//       if (err instanceof Error && err.message === "NO_CAPACITY") {
//         return NextResponse.json(
//           {
//             success: false,
//             error: "You've used all your sessions for this period.",
//           },
//           { status: 400 },
//         );
//       }
//       throw err;
//     }
//   } catch (err) {
//     console.error("[sessions/schedule]", err);
//     return NextResponse.json(
//       { success: false, error: "Something went wrong. Please try again." },
//       { status: 500 },
//     );
//   }
// }

// app/api/sessions/schedule/route.ts
// Books the chosen slot on Cal.com (real availability, real calendar —
// replaces the earlier raw date/time picker with no availability
// checking), then claims one session from the client's aggregated
// session bank (lib/session-bank.ts) and records it. If the Cal.com
// booking succeeds but the bank claim fails for some reason, the Cal.com
// booking is cancelled again so nothing is left dangling.

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionClientAccountId } from "@/lib/session";
import { getSessionBank, claimSessionFromBank } from "@/lib/session-bank";

const CAL_API_KEY = process.env.CAL_API_KEY!;
const CAL_API_VERSION_BOOKINGS = "2024-08-13";

async function cancelCalBooking(uid: string, reason: string) {
  try {
    await fetch(`https://api.cal.com/v2/bookings/${uid}/cancel`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CAL_API_KEY}`,
        "cal-api-version": CAL_API_VERSION_BOOKINGS,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cancellationReason: reason }),
    });
  } catch (err) {
    console.error(
      "[sessions/schedule] failed to roll back Cal.com booking",
      uid,
      err,
    );
  }
}

export async function POST(req: Request) {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // const eventTypeId = process.env.CAL_SESSION_EVENT_TYPE_ID;
  const eventTypeId: number = 6108062;
  if (!eventTypeId) {
    return NextResponse.json(
      {
        success: false,
        error: "Scheduling isn't configured yet. Please contact support.",
      },
      { status: 500 },
    );
  }

  try {
    const { start, notes } = (await req.json()) as {
      start?: string;
      notes?: string;
    };
    if (!start || isNaN(Date.parse(start))) {
      console.error(
        "[sessions/schedule] received an unparseable start value:",
        start,
      );
      return NextResponse.json(
        { success: false, error: "Please choose a valid time." },
        { status: 400 },
      );
    }

    const account = await db.clientAccount.findUnique({
      where: { id: clientAccountId },
      include: { lead: true },
    });
    if (!account)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const bank = await getSessionBank(account.leadId);
    if (bank.remaining <= 0) {
      return NextResponse.json(
        {
          success: false,
          error: "You've used all your sessions for this period.",
        },
        { status: 400 },
      );
    }

    // 1. Book the real slot on Cal.com first — this is the source of truth
    // for availability, so we don't spend a session on a slot that turns
    // out to be unavailable.
    const calRes = await fetch("https://api.cal.com/v2/bookings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CAL_API_KEY}`,
        "cal-api-version": CAL_API_VERSION_BOOKINGS,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start,
        eventTypeId: Number(eventTypeId),
        attendee: {
          name: account.lead.name,
          email: account.email,
          timeZone: "Africa/Lagos",
        },
        ...(notes
          ? { bookingFieldsResponses: { notes: notes.slice(0, 500) } }
          : {}),
      }),
    });
    const calData = await calRes.json();

    if (!calRes.ok) {
      console.error("[sessions/schedule] Cal.com booking failed:", calData);
      return NextResponse.json(
        {
          success: false,
          error:
            calData?.error?.message ||
            "That time is no longer available. Please pick another.",
        },
        { status: 409 },
      );
    }

    const bookingUid: string | undefined = calData?.data?.uid;

    // 2. Claim a session from the bank and record it — re-checks capacity
    // inside a transaction, so two rapid requests can't both slip through.
    try {
      const { packageId } = await claimSessionFromBank(account.leadId);
      const session = await db.scheduledSession.create({
        data: {
          packageId,
          scheduledAt: new Date(start),
          notes: notes?.slice(0, 500),
          calBookingUid: bookingUid ?? null,
        },
      });
      return NextResponse.json({ success: true, session });
    } catch (err) {
      // Bank claim failed after Cal.com already booked the slot — undo
      // the Cal.com booking so the therapist's calendar doesn't show a
      // phantom appointment nobody paid for.
      if (bookingUid)
        await cancelCalBooking(
          bookingUid,
          "Booking could not be recorded — please try again.",
        );
      if (err instanceof Error && err.message === "NO_CAPACITY") {
        return NextResponse.json(
          {
            success: false,
            error: "You've used all your sessions for this period.",
          },
          { status: 400 },
        );
      }
      throw err;
    }
  } catch (err) {
    console.error("[sessions/schedule]", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
