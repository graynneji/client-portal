// app/api/cal/slots/route.ts
// Proxies to Cal.com v2 slots API — same pattern as the main site's
// app/api/cal/slots/route.ts, but against a separate event type
// (CAL_SESSION_EVENT_TYPE_ID) dedicated to paid package sessions, distinct
// from the free-consultation event type used on trymentel.com.

import { NextResponse } from "next/server";
import { getSessionClientAccountId } from "@/lib/session";

const CAL_API_KEY = process.env.CAL_API_KEY!;
const CAL_API_VERSION_SLOTS = "2024-09-04";

export async function GET(req: Request) {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  const timeZone = searchParams.get("timeZone") ?? "Africa/Lagos";
  // const eventTypeId = process.env.CAL_SESSION_EVENT_TYPE_ID;
  const eventTypeId: number = 6108062;

  if (!eventTypeId) {
    return NextResponse.json(
      {
        error:
          "CAL_SESSION_EVENT_TYPE_ID isn't set. Create a dedicated Cal.com event type for package sessions and add its numeric ID to .env.",
      },
      { status: 500 },
    );
  }
  if (!start || !end) {
    return NextResponse.json(
      { error: "Missing required params: start, end" },
      { status: 400 },
    );
  }

  const url = new URL("https://api.cal.com/v2/slots");
  url.searchParams.set("eventTypeId", String(eventTypeId));
  url.searchParams.set("start", start);
  url.searchParams.set("end", end);
  url.searchParams.set("timeZone", timeZone);

  try {
    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${CAL_API_KEY}`,
        "cal-api-version": CAL_API_VERSION_SLOTS,
      },
      next: { revalidate: 60 },
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("[cal/slots] Cal.com error:", data);
      return NextResponse.json(
        { error: "Cal.com error", detail: data },
        { status: res.status },
      );
    }
    return NextResponse.json(data);
  } catch (err) {
    console.error("[cal/slots] Fetch error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
