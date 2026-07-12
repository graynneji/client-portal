import { redirect } from "next/navigation";
import { getSessionClientAccountId } from "@/lib/session";
import RenewForm from "@/components/renew-form";

export default async function RenewPage() {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId) redirect("/login");

  return <RenewForm />;
}
