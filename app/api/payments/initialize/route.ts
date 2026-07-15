// // app/api/payments/initialize/route.ts
// import { NextResponse } from "next/server";
// import { db } from "@/lib/db";
// import { getSessionClientAccountId } from "@/lib/session";

// const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;
// const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.trymentel.com";

// // Kept identical to the main site's app/api/paystack/initialize/route.ts —
// // same Paystack account, same plans, same prices. Update both places if
// // pricing changes (or better: move this into a shared package later).
// const PLANS: Record<string, { label: string; amountKobo: number }> = {
//   once: { label: "Single Session", amountKobo: 8_500 * 100 },
//   monthly: { label: "Monthly Plan", amountKobo: 35_000 * 100 },
// };

// export async function POST(req: Request) {
//   const clientAccountId = await getSessionClientAccountId();
//   if (!clientAccountId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   try {
//     const { plan: planId } = (await req.json()) as { plan?: string };
//     const plan = planId && PLANS[planId];
//     if (!plan) return NextResponse.json({ success: false, error: "Invalid plan." }, { status: 400 });

//     const account = await db.clientAccount.findUnique({ where: { id: clientAccountId }, include: { lead: true } });
//     if (!account) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//     const reference = `MENTEL-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

//     const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
//       method: "POST",
//       headers: { Authorization: `Bearer ${PAYSTACK_SECRET}`, "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: account.email,
//         amount: plan.amountKobo,
//         currency: "NGN",
//         reference,
//         callback_url: `${APP_URL}/renew/complete`,
//         metadata: {
//           custom_fields: [
//             { display_name: "Patient Name", variable_name: "name", value: account.lead.name },
//             { display_name: "Phone", variable_name: "phone", value: account.lead.phone ?? "" },
//             { display_name: "Consultation", variable_name: "reason", value: "Renewal" },
//             { display_name: "Plan", variable_name: "plan", value: plan.label },
//           ],
//         },
//       }),
//     });

//     const data = await paystackRes.json();
//     if (!paystackRes.ok || !data.status) {
//       return NextResponse.json({ success: false, error: "Could not start payment. Please try again." }, { status: 502 });
//     }

//     return NextResponse.json({ success: true, authorizationUrl: data.data.authorization_url, reference });
//   } catch (err) {
//     console.error("[payments/initialize]", err);
//     return NextResponse.json({ success: false, error: "Something went wrong." }, { status: 500 });
//   }
// }

// app/api/payments/initialize/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionClientAccountId } from "@/lib/session";

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.trymentel.com";

// Kept identical to the main site's app/api/paystack/initialize/route.ts —
// same Paystack account, same plans, same prices. Update both places if
// pricing changes (or better: move this into a shared package later).
const PLANS: Record<string, { label: string; amountKobo: number }> = {
  once: { label: "Single Session", amountKobo: 8_500 * 100 },
  monthly: { label: "Monthly Plan", amountKobo: 35_000 * 100 },
};

export async function POST(req: Request) {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { plan: planId } = (await req.json()) as { plan?: string };
    const plan = planId && PLANS[planId];
    if (!plan)
      return NextResponse.json(
        { success: false, error: "Invalid plan." },
        { status: 400 },
      );

    const account = await db.clientAccount.findUnique({
      where: { id: clientAccountId },
      include: { lead: true },
    });
    if (!account)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const reference = `MENTEL-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

    const paystackRes = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: account.email,
          amount: plan.amountKobo,
          currency: "NGN",
          reference,
          callback_url: `${APP_URL}/renew/complete`,
          metadata: {
            custom_fields: [
              {
                display_name: "Patient Name",
                variable_name: "name",
                value: account.lead.name,
              },
              {
                display_name: "Phone",
                variable_name: "phone",
                value: account.lead.phone ?? "",
              },
              {
                display_name: "Consultation",
                variable_name: "reason",
                value: "Renewal",
              },
              {
                display_name: "Plan",
                variable_name: "plan",
                value: plan.label,
              },
              // Critical: pass the leadId directly rather than relying on
              // matching Paystack's returned customer email back to a Lead
              // later. Paystack's checkout page lets the payer edit the
              // email field at checkout — if it doesn't exactly match what's
              // on file, that lookup fails and the payment silently never
              // gets recorded, even though it succeeded. We already know
              // exactly who's paying (they're logged in) — no lookup needed.
              {
                display_name: "Lead ID",
                variable_name: "lead_id",
                value: account.leadId,
              },
            ],
          },
        }),
      },
    );

    const data = await paystackRes.json();
    if (!paystackRes.ok || !data.status) {
      return NextResponse.json(
        { success: false, error: "Could not start payment. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      authorizationUrl: data.data.authorization_url,
      reference,
    });
  } catch (err) {
    console.error("[payments/initialize]", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}
