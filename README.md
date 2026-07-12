# Mentel Client Portal

A separate Next.js app (recommended over folding this into the main
trymentel.com project) where clients log in after paying to schedule
their sessions and renew their plan. Shares the exact same Postgres
database as the main app — no data syncing needed.

## Why separate

- Completely different auth model (client magic-link login vs. your
  admin's shared password vs. the main site's no-login marketing pages)
- An always-logged-in app experience, not a marketing site — different
  navigation, different design intent
- Building this inside the main project risks destabilizing it; here, it
  can break and redeploy on its own
- Uses shadcn/ui (hand-written component files matching shadcn's standard
  output, since this sandbox couldn't run the `shadcn` CLI to fetch them
  live — functionally identical, just copy-pasted instead of CLI-generated)

## How it connects to the main app

- **Same database.** Point `DATABASE_URL` at the identical connection
  string the main app uses. This project's `prisma/schema.prisma` only
  describes the tables it actually touches (`Lead`, `Payment`,
  `Package`, `ScheduledSession`, `ClientAccount`, `ClientLoginToken`) —
  the main app's schema remains the single source of truth for the full
  database. **This project only ever runs `npx prisma generate`, never
  `prisma migrate`** — all schema changes happen in the main app.
- **Same Paystack account.** Renewals here call Paystack's initialize API
  directly with the same plans/prices as the main site
  (`once` = ₦8,500 / 1 session, `monthly` = ₦35,000 / 4 sessions over 30
  days). The existing Paystack webhook — already pointed at the main
  app's `/api/paystack/webhook` — picks up the payment and records it,
  regardless of which app initiated the charge. Nothing extra to
  configure in Paystack for this to work.
- **Same Resend account**, for magic-link emails.

## Setup

```bash
npm install
cp .env.example .env   # fill in DATABASE_URL, RESEND_API_KEY, PAYSTACK_SECRET_KEY, CLIENT_SESSION_SECRET
npx prisma generate
npm run dev
```

Deploy as its own Vercel project, domain `app.trymentel.com` (or
whatever subdomain you prefer), with the same env vars set there.

## How a client ends up with an account

Nothing extra needed — the main app's Paystack webhook (in
`lib/payments/record-payment.ts`, on the main project) already creates a
`ClientAccount` automatically the first time someone pays. There's no
separate signup step; paying IS the signup.

## What's built (v1 scope — be aware of the gaps)

- **Auth**: email magic-link only, no passwords. 15-minute single-use
  tokens.
- **Dashboard**: shows the active package (sessions used/remaining,
  period end), scheduled sessions list, renew/schedule buttons, plan
  history.
- **Schedule**: date + time picker, creates a `ScheduledSession` and
  decrements the package's remaining count inside a database transaction
  (so two rapid clicks can't double-book past the limit).
- **Renew**: picks a plan, initializes a real Paystack transaction, same
  pricing as the main site.

**Not built yet** (intentionally out of v1 scope, flagging so nothing
looks accidentally missing):
- No real therapist/slot availability checking — scheduling is just "pick
  any date and time," not tied to an actual calendar of who's free. Given
  the main site already uses Cal.com for the free-call flow, wiring that
  same integration into this scheduler would be the natural next step.
- No way for the client to cancel/reschedule a session from the portal
  yet — only the admin side (via the main app's Appointments page, once
  extended to see these) would do that today.
- No SMS reminders wired in yet, though the main app's new `/admin/sms`
  (BestBulkSMS) could reasonably send those — same database, so a
  scheduled job reading `ScheduledSession` rows nearing their time and
  firing an SMS is a small follow-up, not a redesign.
