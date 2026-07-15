// import { redirect } from "next/navigation";
// import Link from "next/link";
// import { getSessionClientAccountId } from "@/lib/session";
// import { db } from "@/lib/db";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { CalendarPlus, RefreshCcw, LogOut, CheckCircle2, Clock } from "lucide-react";
// import LogoutButton from "@/components/logout-button";

// export default async function DashboardPage() {
//   const clientAccountId = await getSessionClientAccountId();
//   if (!clientAccountId) redirect("/login");

//   const account = await db.clientAccount.findUnique({
//     where: { id: clientAccountId },
//     include: { lead: true },
//   });
//   if (!account) redirect("/login");

//   const packages = await db.package.findMany({
//     where: { leadId: account.leadId },
//     orderBy: { createdAt: "desc" },
//     include: { scheduledSessions: { orderBy: { scheduledAt: "asc" } } },
//   });

//   const activePackage = packages.find((p) => p.status === "active" && p.periodEnd > new Date());
//   const remaining = activePackage ? activePackage.totalSessions - activePackage.usedSessions : 0;

//   return (
//     <div className="min-h-screen px-4 py-10">
//       <div className="max-w-2xl mx-auto">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-2xl font-semibold">Welcome back, {account.lead.name.split(" ")[0]}</h1>
//             <p className="text-sm text-muted-foreground">{account.email}</p>
//           </div>
//           <LogoutButton />
//         </div>

//         {activePackage ? (
//           <Card className="mb-6">
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle className="capitalize">{activePackage.planType} plan</CardTitle>
//                 <Badge>{remaining} of {activePackage.totalSessions} remaining</Badge>
//               </div>
//               <CardDescription>
//                 Valid until {new Date(activePackage.periodEnd).toLocaleDateString(undefined, { dateStyle: "long" })}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               {activePackage.scheduledSessions.length === 0 ? (
//                 <p className="text-sm text-muted-foreground">No sessions scheduled yet.</p>
//               ) : (
//                 <ul className="flex flex-col gap-2">
//                   {activePackage.scheduledSessions.map((s) => (
//                     <li key={s.id} className="flex items-center gap-2.5 text-sm p-3 rounded-xl bg-secondary">
//                       {s.status === "completed" ? (
//                         <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
//                       ) : (
//                         <Clock size={15} className="text-muted-foreground shrink-0" />
//                       )}
//                       <span className="flex-1">
//                         {new Date(s.scheduledAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
//                       </span>
//                       <Badge variant={s.status === "completed" ? "default" : "secondary"} className="capitalize">
//                         {s.status}
//                       </Badge>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </CardContent>
//             <CardFooter className="gap-2">
//               {remaining > 0 ? (
//                 <Button asChild>
//                   <Link href="/schedule">
//                     <CalendarPlus size={16} /> Schedule a session
//                   </Link>
//                 </Button>
//               ) : (
//                 <p className="text-sm text-muted-foreground">
//                   You've used all your sessions for this period.
//                 </p>
//               )}
//             </CardFooter>
//           </Card>
//         ) : (
//           <Card className="mb-6">
//             <CardHeader>
//               <CardTitle>No active plan</CardTitle>
//               <CardDescription>
//                 {packages.length > 0
//                   ? "Your last plan has ended. Renew to schedule more sessions."
//                   : "You don't have an active plan yet."}
//               </CardDescription>
//             </CardHeader>
//           </Card>
//         )}

//         <Card>
//           <CardHeader>
//             <CardTitle>Renew or upgrade</CardTitle>
//             <CardDescription>Pay for another month (4 sessions) or a single session.</CardDescription>
//           </CardHeader>
//           <CardFooter className="gap-2">
//             <Button asChild variant="outline">
//               <Link href="/renew?plan=single">
//                 <RefreshCcw size={16} /> Single session
//               </Link>
//             </Button>
//             <Button asChild>
//               <Link href="/renew?plan=monthly">
//                 <RefreshCcw size={16} /> Monthly (4 sessions)
//               </Link>
//             </Button>
//           </CardFooter>
//         </Card>

//         {packages.length > 1 && (
//           <div className="mt-8">
//             <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-widest">History</h2>
//             <ul className="flex flex-col gap-2">
//               {packages.filter((p) => p.id !== activePackage?.id).map((p) => (
//                 <li key={p.id} className="flex items-center justify-between text-sm p-3 rounded-xl border">
//                   <span className="capitalize">{p.planType} plan</span>
//                   <span className="text-muted-foreground">
//                     {p.usedSessions}/{p.totalSessions} used · ended {new Date(p.periodEnd).toLocaleDateString()}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { redirect } from "next/navigation";
// import Link from "next/link";
// import { getSessionClientAccountId } from "@/lib/session";
// import { db } from "@/lib/db";
// import { getSessionBank } from "@/lib/session-bank";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { CalendarPlus, RefreshCcw } from "lucide-react";
// import LogoutButton from "@/components/logout-button";
// import SessionsList from "@/components/sessions-list";
// import Image from "next/image";

// export default async function DashboardPage() {
//   const clientAccountId = await getSessionClientAccountId();
//   if (!clientAccountId) redirect("/login");

//   const account = await db.clientAccount.findUnique({
//     where: { id: clientAccountId },
//     include: { lead: true },
//   });
//   if (!account) redirect("/login");

//   // Aggregated across every active, unexpired package — fixes the bug
//   // where renewing/upgrading before using up existing sessions silently
//   // stranded whatever was left on the old package. See lib/session-bank.ts.
//   const bank = await getSessionBank(account.leadId);

//   const allPackages = await db.package.findMany({
//     where: { leadId: account.leadId },
//     orderBy: { createdAt: "desc" },
//   });

//   const activePackageIds = new Set(bank.packages.map((p) => p.id));
//   const pastPackages = allPackages.filter((p) => !activePackageIds.has(p.id));

//   const scheduledSessions = bank.packages.length
//     ? await db.scheduledSession.findMany({
//       where: { packageId: { in: bank.packages.map((p) => p.id) } },
//       orderBy: { scheduledAt: "asc" },
//     })
//     : [];

//   return (
//     <div className="min-h-screen px-4 pb-10">
//       <div className=" py-5 flex items-center justify-between">
//         <div className="flex items-center gap-2.5">
//           <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden"
//             style={{ background: "linear-gradient(135deg, #4e8c6a, #3d8b8b)" }}>
//             <Image
//               src="/hr-logo.png"
//               alt="Mentel logo"
//               width={28}
//               height={28}
//               style={{ objectFit: "cover", width: "100%", height: "100%" }}
//             />
//           </div>
//           <div>
//             <div className="text-white text-[14px] font-semibold">Mentel</div>
//             <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>Admin Console</div>
//           </div>
//         </div>
//         {/* <a href="/" className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
//           Not an admin?
//         </a> */}
//         <LogoutButton />
//       </div>
//       <div className="max-w-2xl mx-auto">
//         <div className=" mb-8">
//           {/* <div className="flex items-center justify-between mb-8"> */}
//           <div>
//             <h1 className="text-2xl font-semibold">Welcome back, {account.lead.name.split(" ")[0]}</h1>
//             <p className="text-sm text-muted-foreground">{account.email}</p>
//           </div>
//           {/* <LogoutButton /> */}
//         </div>

//         {bank.packages.length > 0 ? (
//           <Card className="mb-6">
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle>Your sessions</CardTitle>
//                 <Badge>{bank.remaining} of {bank.totalSessions} remaining</Badge>
//               </div>
//               <CardDescription>
//                 Valid until {bank.periodEnd?.toLocaleDateString(undefined, { dateStyle: "long" })}
//                 {bank.packages.length > 1 && ` · combined across ${bank.packages.length} active plans`}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <SessionsList
//                 sessions={scheduledSessions.map((s) => ({
//                   id: s.id,
//                   scheduledAt: s.scheduledAt.toISOString(),
//                   status: s.status,
//                 }))}
//               />
//             </CardContent>
//             <CardFooter className="gap-2">
//               {bank.remaining > 0 ? (
//                 <Button asChild>
//                   <Link href="/schedule">
//                     <CalendarPlus size={16} /> Schedule a session
//                   </Link>
//                 </Button>
//               ) : (
//                 <p className="text-sm text-muted-foreground">
//                   You've used all your sessions for this period.
//                 </p>
//               )}
//             </CardFooter>
//           </Card>
//         ) : (
//           <Card className="mb-6">
//             <CardHeader>
//               <CardTitle>No active plan</CardTitle>
//               <CardDescription>
//                 {allPackages.length > 0
//                   ? "Your last plan has ended. Renew to schedule more sessions."
//                   : "You don't have an active plan yet."}
//               </CardDescription>
//             </CardHeader>
//           </Card>
//         )}

//         <Card>
//           <CardHeader>
//             <CardTitle>Renew or upgrade</CardTitle>
//             <CardDescription>
//               Pay for another month (4 sessions) or a single session — any sessions left on your
//               current plan carry over and get used first, nothing is lost.
//             </CardDescription>
//           </CardHeader>
//           <CardFooter className="gap-2 lg:flex flex-col items-stretch" upgrade>
//             <Button asChild variant="outline">
//               <Link href="/renew?plan=once">
//                 <RefreshCcw size={16} /> Single session
//               </Link>
//             </Button>
//             <Button asChild>
//               <Link href="/renew?plan=monthly">
//                 <RefreshCcw size={16} /> Monthly (4 sessions)
//               </Link>
//             </Button>
//           </CardFooter>
//         </Card>

//         {pastPackages.length > 0 && (
//           <div className="mt-8">
//             <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-widest">History</h2>
//             <ul className="flex flex-col gap-2">
//               {pastPackages.map((p) => (
//                 <li key={p.id} className="flex items-center justify-between text-sm p-3 rounded-xl border">
//                   <span className="capitalize">{p.planType} plan</span>
//                   <span className="text-muted-foreground">
//                     {p.usedSessions}/{p.totalSessions} used · ended {new Date(p.periodEnd).toLocaleDateString()}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { redirect } from "next/navigation";
import Link from "next/link";
import { getSessionClientAccountId } from "@/lib/session";
import { db } from "@/lib/db";
import { getSessionBank } from "@/lib/session-bank";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarPlus, RefreshCcw } from "lucide-react";
import LogoutButton from "@/components/logout-button";

// Explicit, though cookies() inside getSessionClientAccountId() already
// forces this implicitly — making it explicit removes any ambiguity
// about whether this page could ever be served from a cached/static copy.
export const dynamic = "force-dynamic";
import SessionsList from "@/components/sessions-list";
import Image from "next/image";

export default async function DashboardPage() {
  const clientAccountId = await getSessionClientAccountId();
  if (!clientAccountId) redirect("/login");

  const account = await db.clientAccount.findUnique({
    where: { id: clientAccountId },
    include: { lead: true },
  });
  if (!account) redirect("/login");

  // Aggregated across every active, unexpired package — fixes the bug
  // where renewing/upgrading before using up existing sessions silently
  // stranded whatever was left on the old package. See lib/session-bank.ts.
  const bank = await getSessionBank(account.leadId);

  const allPackages = await db.package.findMany({
    where: { leadId: account.leadId },
    orderBy: { createdAt: "desc" },
  });

  const activePackageIds = new Set(bank.packages.map((p) => p.id));
  const pastPackages = allPackages.filter((p) => !activePackageIds.has(p.id));

  const scheduledSessions = bank.packages.length
    ? await db.scheduledSession.findMany({
      where: { packageId: { in: bank.packages.map((p) => p.id) } },
      orderBy: { scheduledAt: "asc" },
    })
    : [];

  return (
    <div className="min-h-screen px-4 pb-10">
      <div className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #4e8c6a, #3d8b8b)" }}>
            <Image
              src="/hr-logo.png"
              alt="Mentel logo"
              width={28}
              height={28}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <div className="text-white text-[14px] font-semibold">Mentel</div>
            <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>Admin Console</div>
          </div>
        </div>
        {/* <a href="/" className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
          Not an admin?
        </a> */}
        <LogoutButton />
      </div>


      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Welcome back, {account.lead.name.split(" ")[0]}</h1>
            <p className="text-sm text-muted-foreground">{account.email}</p>
          </div>
          {/* <LogoutButton /> */}
        </div>

        {bank.packages.length > 0 ? (
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Your sessions</CardTitle>
                <Badge>{bank.remaining} of {bank.totalSessions} remaining</Badge>
              </div>
              <CardDescription>
                Valid until {bank.periodEnd?.toLocaleDateString(undefined, { dateStyle: "long" })}
                {bank.packages.length > 1 && ` · combined across ${bank.packages.length} active plans`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SessionsList
                sessions={scheduledSessions.map((s) => ({
                  id: s.id,
                  scheduledAt: s.scheduledAt.toISOString(),
                  status: s.status,
                }))}
              />
            </CardContent>
            <CardFooter className="gap-2">
              {bank.remaining > 0 ? (
                <Button asChild>
                  <Link href="/schedule">
                    <CalendarPlus size={16} /> Schedule a session
                  </Link>
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  You've used all your sessions for this period.
                </p>
              )}
            </CardFooter>
          </Card>
        ) : (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>No active plan</CardTitle>
              <CardDescription>
                {allPackages.length > 0
                  ? "Your last plan has ended. Renew to schedule more sessions."
                  : "You don't have an active plan yet."}
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Renew or upgrade</CardTitle>
            <CardDescription>
              Pay for another month (4 sessions) or a single session — any sessions left on your
              current plan carry over and get used first, nothing is lost.
            </CardDescription>
          </CardHeader>
          <CardFooter className="gap-2" upgrade>
            <Button asChild variant="outline">
              <Link href="/renew?plan=once">
                <RefreshCcw size={16} /> Single session
              </Link>
            </Button>
            <Button asChild>
              <Link href="/renew?plan=monthly">
                <RefreshCcw size={16} /> Monthly (4 sessions)
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {pastPackages.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-widest">History</h2>
            <ul className="flex flex-col gap-2">
              {pastPackages.map((p) => (
                <li key={p.id} className="flex items-center justify-between text-sm p-3 rounded-xl border">
                  <span className="capitalize">{p.planType} plan</span>
                  <span className="text-muted-foreground">
                    {p.usedSessions}/{p.totalSessions} used · ended {new Date(p.periodEnd).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
