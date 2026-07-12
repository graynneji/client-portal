"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2, CalendarPlus } from "lucide-react";
import Link from "next/link";

export default function ScheduleForm() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!date || !time) {
      setError("Please choose both a date and time.");
      return;
    }
    setLoading(true);
    try {
      const scheduledAt = new Date(`${date}T${time}`).toISOString();
      const res = await fetch("/api/sessions/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scheduledAt, notes }),
      });
      const data = await res.json();
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (!res.ok || !data.success) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      router.push("/dashboard");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Link href="/dashboard" className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-3 hover:text-foreground">
            <ArrowLeft size={13} /> Back to dashboard
          </Link>
          <CardTitle>Schedule a session</CardTitle>
          <CardDescription>Pick a date and time — this uses one session from your active plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="notes">Anything you'd like your therapist to know? (optional)</Label>
              <Input id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Optional notes" />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? <Loader2 className="animate-spin" size={16} /> : <CalendarPlus size={16} />}
              {loading ? "Scheduling…" : "Confirm session"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
