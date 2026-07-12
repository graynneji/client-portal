"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Loader2, CreditCard } from "lucide-react";
import Link from "next/link";

const PLAN_DETAILS: Record<"once" | "monthly", { label: string; price: string; sessions: string }> = {
  once: { label: "Single Session", price: "₦8,500", sessions: "1 session" },
  monthly: { label: "Monthly Plan", price: "₦35,000", sessions: "4 sessions over 30 days" },
};

export default function RenewForm() {
  const params = useSearchParams();
  const initialPlan = params.get("plan") === "once" ? "once" : "monthly";
  const [plan, setPlan] = useState<"once" | "monthly">(initialPlan);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePay() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      window.location.href = data.authorizationUrl;
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Link href="/dashboard" className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-3 hover:text-foreground">
            <ArrowLeft size={13} /> Back to dashboard
          </Link>
          <CardTitle>Renew your plan</CardTitle>
          <CardDescription>Pick a plan to continue your sessions.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {(Object.keys(PLAN_DETAILS) as Array<keyof typeof PLAN_DETAILS>).map((key) => {
            const d = PLAN_DETAILS[key];
            const active = plan === key;
            return (
              <button
                key={key}
                onClick={() => setPlan(key)}
                className={`text-left p-4 rounded-xl border transition-colors ${active ? "border-emerald-600 bg-emerald-50" : "border-input"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{d.label}</span>
                  <span className="font-semibold">{d.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{d.sessions}</p>
              </button>
            );
          })}
          {error && <p className="text-sm text-destructive">{error}</p>}
        </CardContent>
        <CardFooter>
          <Button onClick={handlePay} disabled={loading} className="w-full">
            {loading ? <Loader2 className="animate-spin" size={16} /> : <CreditCard size={16} />}
            {loading ? "Redirecting to Paystack…" : `Pay ${PLAN_DETAILS[plan].price}`}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
