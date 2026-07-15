
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { ArrowLeft, Loader2, CalendarPlus, Clock } from "lucide-react";
// import Link from "next/link";

// type Slot = { start: string };

// function buildDayOptions(count = 14) {
//   const days = [];
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   for (let i = 0; i < count; i++) {
//     const d = new Date(today);
//     d.setDate(d.getDate() + i);
//     days.push({
//       value: d.toISOString().slice(0, 10),
//       weekday: d.toLocaleDateString(undefined, { weekday: "short" }),
//       day: d.getDate(),
//       month: d.toLocaleDateString(undefined, { month: "short" }),
//     });
//   }
//   return days;
// }

// export default function ScheduleForm() {
//   const router = useRouter();
//   const dayOptions = useMemo(() => buildDayOptions(), []);
//   const [date, setDate] = useState("");
//   const [selectedStart, setSelectedStart] = useState<string | null>(null);
//   const [slots, setSlots] = useState<Slot[]>([]);
//   const [slotsLoading, setSlotsLoading] = useState(false);
//   const [notes, setNotes] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!date) {
//       setSlots([]);
//       return;
//     }
//     setSelectedStart(null);
//     setSlotsLoading(true);
//     setError("");
//     fetch(`/api/sessions/slot?date=${date}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (!data.success) {
//           setError(data.error ?? "Could not load available times.");
//           setSlots([]);
//           return;
//         }
//         setSlots(data.slots);
//       })
//       .catch(() => setError("Network error loading available times."))
//       .finally(() => setSlotsLoading(false));
//   }, [date]);

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setError("");
//     if (!selectedStart) {
//       setError("Please choose an available time.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await fetch("/api/sessions/schedule", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start: selectedStart, notes }),
//       });
//       const data = await res.json();
//       if (res.status === 401) {
//         router.push("/login");
//         return;
//       }
//       if (!res.ok || !data.success) {
//         setError(data.error ?? "Something went wrong.");
//         if (res.status === 409 && date) {
//           fetch(`/api/sessions/availability?date=${date}`)
//             .then((r) => r.json())
//             .then((d) => d.success && setSlots(d.slots));
//         }
//         return;
//       }
//       router.push("/dashboard");
//     } catch {
//       setError("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-12">
//       <Card className="w-full max-w-lg">
//         <CardHeader>
//           <Link href="/dashboard" className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-3 hover:text-foreground">
//             <ArrowLeft size={13} /> Back to dashboard
//           </Link>
//           <CardTitle>Schedule a session</CardTitle>
//           <CardDescription>Pick a date and an available time — this uses one session from your active plan.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-5">

//             {/* Day selector */}
//             <div className="flex flex-col gap-2">
//               <Label>Date</Label>
//               <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
//                 {dayOptions.map((d) => {
//                   const isSelected = date === d.value;
//                   return (
//                     <button
//                       key={d.value}
//                       type="button"
//                       onClick={() => setDate(d.value)}
//                       className={`flex flex-col items-center justify-center shrink-0 w-14 h-16 rounded-lg border text-sm transition-colors ${isSelected
//                         ? "bg-primary text-primary-foreground border-primary"
//                         : "bg-background border-input hover:bg-muted"
//                         }`}
//                     >
//                       <span className="text-[10px] uppercase tracking-wide opacity-70">{d.weekday}</span>
//                       <span className="text-lg font-semibold leading-tight">{d.day}</span>
//                       <span className="text-[10px] opacity-70">{d.month}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Time slots */}
//             {date && (
//               <div className="flex flex-col gap-2">
//                 <Label className="flex items-center gap-1.5">
//                   <Clock size={13} /> Available times
//                 </Label>
//                 {slotsLoading ? (
//                   <p className="text-sm text-muted-foreground flex items-center gap-2 py-4 justify-center">
//                     <Loader2 className="animate-spin" size={14} /> Loading times…
//                   </p>
//                 ) : slots.length === 0 ? (
//                   <p className="text-sm text-muted-foreground py-4 text-center border rounded-lg bg-muted/30">
//                     No available times on this day.
//                   </p>
//                 ) : (
//                   <div className="grid grid-cols-3 gap-2">
//                     {slots.map((slot) => {
//                       const label = new Date(slot.start).toLocaleTimeString([], {
//                         hour: "numeric",
//                         minute: "2-digit",
//                       });
//                       const isSelected = selectedStart === slot.start;
//                       return (
//                         <button
//                           key={slot.start}
//                           type="button"
//                           onClick={() => setSelectedStart(slot.start)}
//                           className={`rounded-lg border py-2 text-sm font-medium transition-colors ${isSelected
//                             ? "bg-primary text-primary-foreground border-primary"
//                             : "bg-background border-input hover:bg-muted"
//                             }`}
//                         >
//                           {label}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             )}

//             <div className="flex flex-col gap-1.5">
//               <Label htmlFor="notes">Anything you'd like your therapist to know? (optional)</Label>
//               <Input id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Optional notes" />
//             </div>

//             {error && <p className="text-sm text-destructive">{error}</p>}

//             <Button type="submit" disabled={loading || !selectedStart} className="w-full">
//               {loading ? <Loader2 className="animate-spin" size={16} /> : <CalendarPlus size={16} />}
//               {loading ? "Scheduling…" : "Confirm session"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { ArrowLeft, Loader2, CalendarPlus, Clock } from "lucide-react";
// import Link from "next/link";

// interface SlotsByDate {
//   [date: string]: { time: string }[];
// }

// export default function ScheduleForm() {
//   const router = useRouter();
//   const [slotsByDate, setSlotsByDate] = useState<SlotsByDate>({});
//   const [loadingSlots, setLoadingSlots] = useState(true);
//   const [slotsError, setSlotsError] = useState("");
//   const [selectedDate, setSelectedDate] = useState<string | null>(null);
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
//   const [notes, setNotes] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");

//   const dates = useMemo(() => Object.keys(slotsByDate).sort(), [slotsByDate]);

//   useEffect(() => {
//     (async () => {
//       setLoadingSlots(true);
//       setSlotsError("");
//       try {
//         const start = new Date();
//         const end = new Date();
//         end.setDate(end.getDate() + 14); // next two weeks of availability

//         const res = await fetch(
//           `/api/cal/slots?start=${start.toISOString()}&end=${end.toISOString()}&timeZone=Africa/Lagos`
//         );
//         const data = await res.json();
//         if (!res.ok) {
//           setSlotsError(data.error ?? "Couldn't load availability.");
//           return;
//         }
//         // Cal.com v2 returns { data: { "2026-07-12": [{ time: "..." }, ...] } } —
//         // but depending on API version/config, `time` can arrive as either a
//         // full ISO datetime or a bare "HH:mm" string. Browsers parse the bare
//         // form loosely enough to still render *something* on the button, but
//         // Node's Date.parse() on the server correctly rejects it — which is
//         // exactly the "please choose a valid time" error. Normalize every
//         // slot to a full ISO datetime here, once, so nothing downstream has
//         // to guess about the shape.
//         const rawSlots: Record<string, { time?: string; start?: string; startTime?: string }[]> = data.data ?? {};
//         const slots: SlotsByDate = {};
//         for (const [dateKey, daySlots] of Object.entries(rawSlots)) {
//           slots[dateKey] = (daySlots ?? []).map((s) => {
//             const raw = s.time ?? s.start ?? s.startTime ?? "";
//             const isFullDateTime = raw.includes("T") || raw.includes("-");
//             return { time: isFullDateTime ? raw : `${dateKey}T${raw}:00` };
//           });
//         }
//         setSlotsByDate(slots);
//         const firstDate = Object.keys(slots).sort()[0];
//         if (firstDate) setSelectedDate(firstDate);
//       } catch {
//         setSlotsError("Network error loading availability.");
//       } finally {
//         setLoadingSlots(false);
//       }
//     })();
//   }, []);

//   async function handleConfirm() {
//     if (!selectedSlot) return;
//     setError("");
//     setSubmitting(true);
//     try {
//       const res = await fetch("/api/sessions/schedule", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ start: selectedSlot, notes }),
//       });
//       const data = await res.json();
//       if (res.status === 401) {
//         router.push("/login");
//         return;
//       }
//       if (!res.ok || !data.success) {
//         setError(data.error ?? "Something went wrong.");
//         return;
//       }
//       router.push("/dashboard");
//     } catch {
//       setError("Network error. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-12">
//       <Card className="w-full max-w-lg">
//         <CardHeader>
//           <Link href="/dashboard" className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-3 hover:text-foreground">
//             <ArrowLeft size={13} /> Back to dashboard
//           </Link>
//           <CardTitle>Schedule a session</CardTitle>
//           <CardDescription>Pick a real available time — this uses one session from your active plan.</CardDescription>
//         </CardHeader>
//         <CardContent className="flex flex-col gap-4">
//           {loadingSlots ? (
//             <div className="flex items-center justify-center py-10 text-muted-foreground">
//               <Loader2 className="animate-spin" size={20} />
//             </div>
//           ) : slotsError ? (
//             <p className="text-sm text-destructive text-center py-6">{slotsError}</p>
//           ) : dates.length === 0 ? (
//             <p className="text-sm text-muted-foreground text-center py-6">
//               No availability in the next two weeks. Please check back soon or contact support.
//             </p>
//           ) : (
//             <>
//               <div>
//                 <Label className="mb-2 block">Date</Label>
//                 <div className="flex gap-2 overflow-x-auto pb-1">
//                   {dates.map((date) => {
//                     const active = date === selectedDate;
//                     return (
//                       <button
//                         key={date}
//                         onClick={() => { setSelectedDate(date); setSelectedSlot(null); }}
//                         className={`shrink-0 px-3.5 py-2 rounded-xl border text-sm ${active ? "border-emerald-600 bg-emerald-50 font-semibold" : "border-input"}`}
//                       >
//                         {new Date(date).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {selectedDate && (
//                 <div>
//                   <Label className="mb-2 block">Time</Label>
//                   <div className="grid grid-cols-3 gap-2">
//                     {(slotsByDate[selectedDate] ?? []).map((slot) => {
//                       const active = slot.time === selectedSlot;
//                       return (
//                         <button
//                           key={slot.time}
//                           onClick={() => setSelectedSlot(slot.time)}
//                           className={`flex items-center justify-center gap-1 px-2 py-2 rounded-xl border text-sm ${active ? "border-emerald-600 bg-emerald-50 font-semibold" : "border-input"}`}
//                         >
//                           <Clock size={12} />
//                           {new Date(slot.time).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               <div className="flex flex-col gap-1.5">
//                 <Label htmlFor="notes">Anything you'd like your therapist to know? (optional)</Label>
//                 <Input id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Optional notes" />
//               </div>

//               {error && <p className="text-sm text-destructive">{error}</p>}

//               <Button onClick={handleConfirm} disabled={!selectedSlot || submitting} className="w-full">
//                 {submitting ? <Loader2 className="animate-spin" size={16} /> : <CalendarPlus size={16} />}
//                 {submitting ? "Booking…" : "Confirm session"}
//               </Button>
//             </>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2, CalendarPlus, Clock } from "lucide-react";
import Link from "next/link";

interface SlotsByDate {
  [date: string]: { time: string }[];
}

export default function ScheduleForm() {
  const router = useRouter();
  const [slotsByDate, setSlotsByDate] = useState<SlotsByDate>({});
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [slotsError, setSlotsError] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const dates = useMemo(() => Object.keys(slotsByDate).sort(), [slotsByDate]);

  useEffect(() => {
    (async () => {
      setLoadingSlots(true);
      setSlotsError("");
      try {
        const start = new Date();
        const end = new Date();
        end.setDate(end.getDate() + 14); // next two weeks of availability

        const res = await fetch(
          `/api/cal/slots?start=${start.toISOString()}&end=${end.toISOString()}&timeZone=Africa/Lagos`
        );
        const data = await res.json();
        if (!res.ok) {
          setSlotsError(data.error ?? "Couldn't load availability.");
          return;
        }
        // Cal.com v2 returns { data: { "2026-07-12": [{ time: "..." }, ...] } } —
        // but depending on API version/config, `time` can arrive as either a
        // full ISO datetime or a bare "HH:mm" string. Browsers parse the bare
        // form loosely enough to still render *something* on the button, but
        // Node's Date.parse() on the server correctly rejects it — which is
        // exactly the "please choose a valid time" error. Normalize every
        // slot to a full ISO datetime here, once, so nothing downstream has
        // to guess about the shape.
        const rawSlots: Record<string, { time?: string; start?: string; startTime?: string }[]> = data.data ?? {};
        const slots: SlotsByDate = {};
        for (const [dateKey, daySlots] of Object.entries(rawSlots)) {
          slots[dateKey] = (daySlots ?? []).map((s) => {
            const raw = s.time ?? s.start ?? s.startTime ?? "";
            const isFullDateTime = raw.includes("T") || raw.includes("-");
            return { time: isFullDateTime ? raw : `${dateKey}T${raw}:00` };
          });
        }
        setSlotsByDate(slots);
        const firstDate = Object.keys(slots).sort()[0];
        if (firstDate) setSelectedDate(firstDate);
      } catch {
        setSlotsError("Network error loading availability.");
      } finally {
        setLoadingSlots(false);
      }
    })();
  }, []);

  async function handleConfirm() {
    if (!selectedSlot) return;
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/sessions/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ start: selectedSlot, notes }),
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
      router.refresh();
      router.push("/dashboard");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <Link href="/dashboard" className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-3 hover:text-foreground">
            <ArrowLeft size={13} /> Back to dashboard
          </Link>
          <CardTitle>Schedule a session</CardTitle>
          <CardDescription>Pick a real available time — this uses one session from your active plan.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {loadingSlots ? (
            <div className="flex items-center justify-center py-10 text-muted-foreground">
              <Loader2 className="animate-spin" size={20} />
            </div>
          ) : slotsError ? (
            <p className="text-sm text-destructive text-center py-6">{slotsError}</p>
          ) : dates.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">
              No availability in the next two weeks. Please check back soon or contact support.
            </p>
          ) : (
            <>
              <div>
                <Label className="mb-2 block">Date</Label>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {dates.map((date) => {
                    const active = date === selectedDate;
                    return (
                      <button
                        key={date}
                        onClick={() => { setSelectedDate(date); setSelectedSlot(null); }}
                        className={`shrink-0 px-3.5 py-2 rounded-xl border text-sm ${active ? "border-emerald-600 bg-emerald-50 font-semibold" : "border-input"}`}
                      >
                        {new Date(date).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <Label className="mb-2 block">Time</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {(slotsByDate[selectedDate] ?? []).map((slot) => {
                      const active = slot.time === selectedSlot;
                      return (
                        <button
                          key={slot.time}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`flex items-center justify-center gap-1 px-2 py-2 rounded-xl border text-sm ${active ? "border-emerald-600 bg-emerald-50 font-semibold" : "border-input"}`}
                        >
                          <Clock size={12} />
                          {new Date(slot.time).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="notes">Anything you'd like your therapist to know? (optional)</Label>
                <Input id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Optional notes" />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button onClick={handleConfirm} disabled={!selectedSlot || submitting} className="w-full">
                {submitting ? <Loader2 className="animate-spin" size={16} /> : <CalendarPlus size={16} />}
                {submitting ? "Booking…" : "Confirm session"}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
