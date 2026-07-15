"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, X, Loader2 } from "lucide-react";

export interface SessionItem {
  id: string;
  scheduledAt: string;
  status: string;
}

export default function SessionsList({ sessions }: { sessions: SessionItem[] }) {
  const router = useRouter();
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function handleCancel(id: string) {
    if (!confirm("Cancel this session? It will be returned to your remaining balance.")) return;
    setCancellingId(id);
    setError("");
    try {
      const res = await fetch(`/api/sessions/${id}/cancel`, { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error ?? "Couldn't cancel this session.");
        return;
      }
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setCancellingId(null);
    }
  }

  if (sessions.length === 0) {
    return <p className="text-sm text-muted-foreground">No sessions scheduled yet.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {error && <p className="text-xs text-destructive">{error}</p>}
      <ul className="flex flex-col gap-2">
        {sessions.map((s) => {
          const canCancel = s.status === "scheduled" && new Date(s.scheduledAt).getTime() > Date.now() + 60 * 60 * 1000;
          return (
            <li key={s.id} className="flex items-center gap-2.5 text-sm p-3 rounded-xl bg-secondary">
              {s.status === "completed" ? (
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              ) : (
                <Clock size={15} className="text-muted-foreground shrink-0" />
              )}
              <span className="flex-1">
                {new Date(s.scheduledAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
              </span>
              <Badge variant={s.status === "completed" ? "default" : "secondary"} className="capitalize">
                {s.status}
              </Badge>
              {canCancel && (
                <button
                  onClick={() => handleCancel(s.id)}
                  disabled={cancellingId === s.id}
                  className="text-muted-foreground hover:text-destructive disabled:opacity-50"
                  title="Cancel session"
                >
                  {cancellingId === s.id ? <Loader2 size={14} className="animate-spin" /> : <X size={14} />}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
