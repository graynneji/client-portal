// app/api/sessions/availability/route.ts
import { NextResponse } from "next/server";
import { getSessionClientAccountId } from "@/lib/session";

const CAL_API_KEY = process.env.CAL_API_KEY!;
const CAL_API_VERSION_SLOTS = "2024-09-04";
const eventTypeId = 6108062;

export async function GET(req: Request) {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // "YYYY-MM-DD"
  if (!date) {
    return NextResponse.json({ error: "Missing date" }, { status: 400 });
  }

  // end = date + 1 day, so we get the full day's slots
  const end = new Date(`${date}T00:00:00Z`);
  end.setUTCDate(end.getUTCDate() + 1);
  const endStr = end.toISOString().slice(0, 10);

  const url = `https://api.cal.com/v2/slots?eventTypeId=${eventTypeId}&start=${date}&end=${endStr}&timeZone=Africa/Lagos`;

  const calRes = await fetch(url, {
    headers: {
      Authorization: `Bearer ${CAL_API_KEY}`,
      "cal-api-version": CAL_API_VERSION_SLOTS,
    },
  });
  const calData = await calRes.json();

  if (!calRes.ok) {
    return NextResponse.json(
      { success: false, error: "Could not load available times." },
      { status: 502 },
    );
  }

  const slots = calData?.data?.[date] ?? [];
  return NextResponse.json({ success: true, slots });
}
