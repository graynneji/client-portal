import { redirect } from "next/navigation";
import { getSessionClientAccountId } from "@/lib/session";

export default async function RootPage() {
  const clientAccountId = await getSessionClientAccountId();
  redirect(clientAccountId ? "/dashboard" : "/login");
}
