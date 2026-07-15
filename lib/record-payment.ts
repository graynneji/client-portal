// // lib/record-payment.ts
// //
// // This is a deliberate duplicate of the main project's
// // lib/payments/record-payment.ts, adapted to this project's schema
// // subset. Both apps write to the exact same tables, so this is safe —
// // it's idempotent on the Paystack `reference`, same as the original.
// //
// // Why it exists here too: /renew/complete previously only ever called
// // Paystack's verify API to show a success/failure message — it never
// // wrote anything to the database itself. Recording the payment was
// // entirely dependent on the main app's Paystack webhook firing
// // correctly. If that webhook isn't reachable, misconfigured, or the
// // Paystack account has a test/live key mismatch between the two apps,
// // nothing gets recorded — matching exactly the bug where renewing here
// // doesn't update the schedule count at all. This gives the portal its
// // own redundant path to record the same payment, so it doesn't depend
// // on the other app's webhook to function correctly.

// import { db } from "@/lib/db";

// export interface RecordPaymentInput {
//   reference: string;
//   email: string;
//   name: string;
//   phone?: string;
//   amountKobo: number;
//   currency: string;
//   method: string;
//   plan: string;
//   reason?: string;
//   paidAt: Date;
// }

// function isMonthlyPlan(plan: string): boolean {
//   return plan.toLowerCase().includes("month");
// }

// export async function recordPayment(input: RecordPaymentInput): Promise<{ created: boolean; packageId: string | null }> {
//   const existing = await db.payment.findUnique({
//     where: { reference: input.reference },
//     include: { package: true },
//   });
//   if (existing) {
//     return { created: false, packageId: existing.package?.id ?? null };
//   }

//   const lead = await db.lead.findFirst({ where: { email: input.email } });
//   if (!lead) {
//     // Should be unreachable: reaching /renew requires being logged into
//     // the portal, which requires a ClientAccount tied to an existing
//     // Lead. Not attempting to create one here — the real Lead table (in
//     // the main app's schema) has several required fields this project
//     // doesn't know about, so a partial insert would just fail anyway.
//     throw new Error(`No Lead found for ${input.email} — cannot record payment.`);
//   }

//   const payment = await db.payment.create({
//     data: {
//       leadId: lead.id,
//       amountKobo: input.amountKobo,
//       currency: input.currency,
//       status: "paid",
//       method: input.method || "card",
//       reference: input.reference,
//       paidAt: input.paidAt,
//       notes: input.reason ? `Plan: ${input.plan} — ${input.reason}` : `Plan: ${input.plan}`,
//     },
//   });

//   const totalSessions = isMonthlyPlan(input.plan) ? 4 : 1;
//   const periodStart = input.paidAt;
//   const periodEnd = new Date(periodStart);
//   periodEnd.setDate(periodEnd.getDate() + 30);

//   const pkg = await db.package.create({
//     data: {
//       leadId: lead.id,
//       paymentId: payment.id,
//       planType: isMonthlyPlan(input.plan) ? "monthly" : "single",
//       totalSessions,
//       usedSessions: 0,
//       periodStart,
//       periodEnd,
//       status: "active",
//     },
//   });

//   return { created: true, packageId: pkg.id };
// }

// lib/record-payment.ts
//
// Records a payment made through this portal's /renew flow directly —
// deliberately NOT dependent on the main app's Paystack webhook to
// function, and NOT dependent on matching Paystack's returned customer
// email back to a Lead (that lookup can silently fail if the payer edits
// the email field at Paystack's checkout page, which is exactly what was
// causing renewals to succeed on Paystack's side but never show up here).
//
// Identity comes from `leadId`, passed straight through as a Paystack
// metadata custom_field at initialize time (see
// app/api/payments/initialize/route.ts) — since the person is already
// authenticated in the portal when they start a renewal, there's no need
// to re-derive who they are from anything Paystack echoes back.
//
// Idempotent on `reference`, same as the main project's version — safe
// even if the main app's webhook also fires for the same payment.

import { db } from "@/lib/db";

export interface RecordPaymentInput {
  reference: string;
  leadId: string;
  amountKobo: number;
  currency: string;
  method: string;
  plan: string;
  reason?: string;
  paidAt: Date;
}

function isMonthlyPlan(plan: string): boolean {
  return plan.toLowerCase().includes("month");
}

export async function recordPayment(
  input: RecordPaymentInput,
): Promise<{ created: boolean; packageId: string | null }> {
  const existing = await db.payment.findUnique({
    where: { reference: input.reference },
    include: { package: true },
  });
  if (existing) {
    return { created: false, packageId: existing.package?.id ?? null };
  }

  const lead = await db.lead.findUnique({ where: { id: input.leadId } });
  if (!lead) {
    throw new Error(
      `No Lead found with id ${input.leadId} — cannot record payment.`,
    );
  }

  const payment = await db.payment.create({
    data: {
      leadId: lead.id,
      amountKobo: input.amountKobo,
      currency: input.currency,
      status: "paid",
      method: input.method || "card",
      reference: input.reference,
      paidAt: input.paidAt,
      notes: input.reason
        ? `Plan: ${input.plan} — ${input.reason}`
        : `Plan: ${input.plan}`,
    },
  });

  const totalSessions = isMonthlyPlan(input.plan) ? 4 : 1;
  const periodStart = input.paidAt;
  const periodEnd = new Date(periodStart);
  periodEnd.setDate(periodEnd.getDate() + 30);

  const pkg = await db.package.create({
    data: {
      leadId: lead.id,
      paymentId: payment.id,
      planType: isMonthlyPlan(input.plan) ? "monthly" : "single",
      totalSessions,
      usedSessions: 0,
      periodStart,
      periodEnd,
      status: "active",
    },
  });

  return { created: true, packageId: pkg.id };
}
