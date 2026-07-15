// import Link from "next/link";
// import { CheckCircle2, XCircle } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;

// async function verify(reference: string) {
//   try {
//     const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
//       headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
//       cache: "no-store",
//     });
//     const data = await res.json();
//     return data?.data?.status === "success";
//   } catch {
//     return false;
//   }
// }

// export default async function RenewCompletePage({
//   searchParams,
// }: {
//   searchParams: Promise<{ reference?: string; trxref?: string }>;
// }) {
//   const params = await searchParams;
//   const reference = params.reference ?? params.trxref;
//   const success = reference ? await verify(reference) : false;

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-12">
//       <Card className="w-full max-w-md text-center">
//         <CardHeader>
//           <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${success ? "bg-emerald-100" : "bg-red-100"}`}>
//             {success ? <CheckCircle2 className="text-emerald-600" size={22} /> : <XCircle className="text-red-600" size={22} />}
//           </div>
//           <CardTitle>{success ? "Payment confirmed" : "Payment not confirmed"}</CardTitle>
//           <CardDescription>
//             {success
//               ? "Your plan is active. It may take a few seconds to appear below — refresh if you don't see it yet."
//               : "We couldn't confirm this payment. If you were charged, contact us and we'll sort it out."}
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {reference && <p className="text-xs text-muted-foreground">Reference: {reference}</p>}
//         </CardContent>
//         <CardFooter>
//           <Button asChild className="w-full">
//             <Link href="/dashboard">Go to dashboard</Link>
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }


// import { redirect } from "next/navigation";
// import Link from "next/link";
// import { CheckCircle2, XCircle } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { getSessionClientAccountId } from "@/lib/session";
// import { recordPayment } from "@/lib/record-payment";

// const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;

// interface PaystackVerifyResult {
//   ok: boolean;
//   data?: {
//     status: string;
//     amount: number;
//     currency: string;
//     channel: string;
//     paid_at: string;
//     customer?: { email?: string };
//     metadata?: { custom_fields?: { variable_name: string; value: string }[] };
//   };
// }

// async function verifyWithPaystack(reference: string): Promise<PaystackVerifyResult> {
//   try {
//     const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
//       headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
//       cache: "no-store",
//     });
//     const json = await res.json();
//     if (!res.ok || json?.data?.status !== "success") return { ok: false };
//     return { ok: true, data: json.data };
//   } catch (err) {
//     console.error("[renew/complete] Paystack verify failed:", err);
//     return { ok: false };
//   }
// }

// function getCustomField(fields: { variable_name: string; value: string }[] | undefined, name: string): string {
//   return fields?.find((f) => f.variable_name === name)?.value ?? "";
// }

// export default async function RenewCompletePage({
//   searchParams,
// }: {
//   searchParams: Promise<{ reference?: string; trxref?: string }>;
// }) {
//   const clientAccountId = await getSessionClientAccountId();
//   if (!clientAccountId) redirect("/login");

//   const params = await searchParams;
//   const reference = params.reference ?? params.trxref;
//   const result = reference ? await verifyWithPaystack(reference) : { ok: false as const };

//   // This is the actual fix: previously this page only ever displayed
//   // Paystack's own status and relied entirely on the main app's webhook
//   // to record the payment. If that webhook wasn't reachable, misconfigured,
//   // or the wrong Paystack keys (test vs live) were in play between the two
//   // apps, nothing ever got recorded — the schedule count wouldn't update
//   // at all, not just slowly. This records it directly, right here, so the
//   // portal doesn't depend on the other app's webhook to function.
//   let recordError = "";
//   if (result.ok && result.data && reference) {
//     try {
//       await recordPayment({
//         reference,
//         email: result.data.customer?.email ?? "",
//         name: getCustomField(result.data.metadata?.custom_fields, "name"),
//         phone: getCustomField(result.data.metadata?.custom_fields, "phone") || undefined,
//         amountKobo: result.data.amount,
//         currency: result.data.currency ?? "NGN",
//         method: result.data.channel ?? "card",
//         plan: getCustomField(result.data.metadata?.custom_fields, "plan") || "Session",
//         reason: getCustomField(result.data.metadata?.custom_fields, "reason") || undefined,
//         paidAt: new Date(result.data.paid_at ?? Date.now()),
//       });
//     } catch (err) {
//       console.error("[renew/complete] recordPayment failed:", err);
//       recordError = "Payment succeeded but we had trouble updating your session count — contact support and we'll fix it right away.";
//     }
//   }

//   const success = result.ok;

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-12">
//       <Card className="w-full max-w-md text-center">
//         <CardHeader>
//           <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${success ? "bg-emerald-100" : "bg-red-100"}`}>
//             {success ? <CheckCircle2 className="text-emerald-600" size={22} /> : <XCircle className="text-red-600" size={22} />}
//           </div>
//           <CardTitle>{success ? "Payment confirmed" : "Payment not confirmed"}</CardTitle>
//           <CardDescription>
//             {success
//               ? recordError || "Your plan is active and ready to schedule."
//               : "We couldn't confirm this payment. If you were charged, contact us and we'll sort it out."}
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {reference && <p className="text-xs text-muted-foreground">Reference: {reference}</p>}
//         </CardContent>
//         <CardFooter>
//           <Button asChild className="w-full">
//             <Link href="/dashboard">Go to dashboard</Link>
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }


import { redirect } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { getSessionClientAccountId } from "@/lib/session";
import { recordPayment } from "@/lib/record-payment";

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;

interface PaystackVerifyResult {
  ok: boolean;
  data?: {
    status: string;
    amount: number;
    currency: string;
    channel: string;
    paid_at: string;
    metadata?: { custom_fields?: { variable_name: string; value: string }[] };
  };
}

async function verifyWithPaystack(reference: string): Promise<PaystackVerifyResult> {
  try {
    const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
      cache: "no-store",
    });
    const json = await res.json();
    if (!res.ok || json?.data?.status !== "success") return { ok: false };
    return { ok: true, data: json.data };
  } catch (err) {
    console.error("[renew/complete] Paystack verify failed:", err);
    return { ok: false };
  }
}

function getCustomField(fields: { variable_name: string; value: string }[] | undefined, name: string): string {
  return fields?.find((f) => f.variable_name === name)?.value ?? "";
}

export default async function RenewCompletePage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string; trxref?: string }>;
}) {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId) redirect("/login");

  const params = await searchParams;
  const reference = params.reference ?? params.trxref;
  const result = reference ? await verifyWithPaystack(reference) : { ok: false as const };

  let recordError = "";
  let recorded = false;

  if (result.ok && result.data && reference) {
    // Identity comes from the metadata we set at initialize time — NOT
    // from Paystack's returned customer email, which can differ from
    // what's on file if the payer edited it at checkout. That mismatch
    // was the actual cause of renewals succeeding on Paystack but never
    // showing up here.
    const leadId = getCustomField(result.data.metadata?.custom_fields, "lead_id");

    if (!leadId) {
      console.error("[renew/complete] No lead_id in Paystack metadata for reference:", reference);
      recordError = "We couldn't identify your account from this payment. Contact support with your reference number below.";
    } else {
      try {
        await recordPayment({
          reference,
          leadId,
          amountKobo: result.data.amount,
          currency: result.data.currency ?? "NGN",
          method: result.data.channel ?? "card",
          plan: getCustomField(result.data.metadata?.custom_fields, "plan") || "Session",
          reason: getCustomField(result.data.metadata?.custom_fields, "reason") || undefined,
          paidAt: new Date(result.data.paid_at ?? Date.now()),
        });
        recorded = true;
      } catch (err) {
        console.error("[renew/complete] recordPayment failed for reference", reference, ":", err);
        recordError = "Payment succeeded but we had trouble updating your session count. Contact support with your reference number below and we'll fix it right away.";
      }
    }
  }

  const success = result.ok;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${success && recorded ? "bg-emerald-100" : success ? "bg-amber-100" : "bg-red-100"}`}>
            {success && recorded ? (
              <CheckCircle2 className="text-emerald-600" size={22} />
            ) : (
              <XCircle className={success ? "text-amber-600" : "text-red-600"} size={22} />
            )}
          </div>
          <CardTitle>
            {success && recorded ? "Payment confirmed" : success ? "Payment received — action needed" : "Payment not confirmed"}
          </CardTitle>
          <CardDescription>
            {success && recorded
              ? "Your plan is active and ready to schedule."
              : success
                ? recordError
                : "We couldn't confirm this payment. If you were charged, contact us and we'll sort it out."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {reference && <p className="text-xs text-muted-foreground">Reference: {reference}</p>}
        </CardContent>
        <CardFooter>
          {/* A plain <a> tag here, not next/link — Next's client-side router
              cache can otherwise serve a stale, pre-renewal copy of the
              dashboard if you'd visited it recently. A full navigation
              guarantees the fresh session count actually shows up. */}
          <a
            href="/dashboard"
            className="w-full inline-flex items-center justify-center rounded-xl bg-emerald-700 text-white text-sm font-medium h-10 px-4 hover:bg-emerald-800 transition-colors"
          >
            Go to dashboard
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
