"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/request-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      setSent(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="w-11 h-11 rounded-full bg-emerald-700 mx-auto mb-3 flex items-center justify-center">
            <Mail className="text-white" size={18} />
          </div>
          <CardTitle>Sign in to Mentel</CardTitle>
          <CardDescription>
            {sent
              ? "Check your inbox for a sign-in link."
              : "Enter the email you used when you paid — we'll send you a sign-in link."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="flex flex-col items-center gap-2 py-4 text-center">
              <CheckCircle2 className="text-emerald-600" size={28} />
              <p className="text-sm text-muted-foreground">
                Link sent to <strong>{email}</strong>. It expires in 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? <Loader2 className="animate-spin" size={16} /> : null}
                {loading ? "Sending…" : "Send sign-in link"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
