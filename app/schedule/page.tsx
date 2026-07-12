import { redirect } from "next/navigation";
import { getSessionClientAccountId } from "@/lib/session";
import ScheduleForm from "@/components/schedule-form";

export default async function SchedulePage() {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId) redirect("/login");

  return <ScheduleForm />;
}
