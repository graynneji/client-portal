import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;

async function verify(reference: string) {
  try {
    const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
      cache: "no-store",
    });
    const data = await res.json();
    return data?.data?.status === "success";
  } catch {
    return false;
  }
}

export default async function RenewCompletePage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string; trxref?: string }>;
}) {
  const params = await searchParams;
  const reference = params.reference ?? params.trxref;
  const success = reference ? await verify(reference) : false;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${success ? "bg-emerald-100" : "bg-red-100"}`}>
            {success ? <CheckCircle2 className="text-emerald-600" size={22} /> : <XCircle className="text-red-600" size={22} />}
          </div>
          <CardTitle>{success ? "Payment confirmed" : "Payment not confirmed"}</CardTitle>
          <CardDescription>
            {success
              ? "Your plan is active. It may take a few seconds to appear below — refresh if you don't see it yet."
              : "We couldn't confirm this payment. If you were charged, contact us and we'll sort it out."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {reference && <p className="text-xs text-muted-foreground">Reference: {reference}</p>}
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
