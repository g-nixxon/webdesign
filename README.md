# Filter Tech Inc. Website

Marketing website for **Filter Tech Inc.**, a family-owned water filtration
company based in Hogansville, Georgia, serving GA, NC, SC, AL, and North
Florida.

**Tagline:** *Know what you're drinking before you drink it.*

**Primary job of the site:** convert warm referral traffic and paid ad
clicks into Free Water Test bookings.

---

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with `@tailwindcss/typography`
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Fonts:** Inter (body) + Fraunces (display) via `next/font`
- **Deploy target:** Vercel

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in values when ready
cp .env.example .env.local

# 3. Run the dev server
npm run dev
# → http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start       # serve production build
npm run lint        # next lint
npm run typecheck   # tsc --noEmit
```

---

## Environment variables

See `.env.example`. The only required values for production are:

- `NEXT_PUBLIC_SITE_URL` — your live origin (e.g. `https://filtertechinc.com`)
- `GHL_BOOKING_WEBHOOK_URL` — GoHighLevel inbound webhook for the booking form
- `GHL_CONTACT_WEBHOOK_URL` — GoHighLevel inbound webhook for the contact form
- `GHL_WEBHOOK_SECRET` (optional) — shared secret sent as `X-Webhook-Secret`

Without the webhook URLs, form submissions are still validated and logged to
the server console — the success state on the front-end behaves the same way,
so you can preview without GoHighLevel.

---

## Project structure

```
app/
├── (pages)
│   ├── page.tsx                # Homepage
│   ├── about/
│   ├── services/                # Index + dynamic [slug]
│   ├── water-101/               # Hub + dynamic [slug]
│   ├── service-area/
│   ├── book/                    # Conversion page
│   └── contact/
├── api/
│   ├── book/route.ts            # Booking submission handler
│   └── contact/route.ts         # Contact submission handler
├── sitemap.ts
├── robots.ts
├── not-found.tsx
├── layout.tsx                   # Root layout + LocalBusiness JSON-LD
└── globals.css

components/
├── layout/                      # Header, Footer, MobileStickyCTA, Container, Logo
├── ui/                          # Button, EyebrowLabel, SectionHeading, Card, PullQuote, Accordion
├── sections/                    # Hero, TrustBar, ProblemSplit, ProcessSteps, …
└── forms/                       # BookingForm, ContactForm, Field

lib/
├── site.ts                      # Phone, address, hours, nav, services list
├── services-data.ts             # Service detail page content
├── articles-data.ts             # Water 101 article content
├── schemas.ts                   # Zod schemas for forms
└── cn.ts                        # className utility
```

---

## Brand guidelines

### Palette

| Token        | Hex       | Use |
|--------------|-----------|-----|
| `charcoal`   | `#243137` | Headings, body text, dark sections, primary buttons |
| `red`        | `#DE3E40` | Accent ONLY — eyebrows, bullets, rails, underlines |
| `cream`      | `#FAF7F2` | Primary background |
| `white`      | `#FFFFFF` | Cards, form inputs |
| `stone-100`  | `#F5F2ED` | Subtle alternate section background |
| `stone-300`  | `#D6D1C8` | Borders and dividers |
| `stone-600`  | `#6B6660` | Muted text, captions |

**No navy. No cyan. No blue anywhere.**

### Red usage rules — critical

Red is reserved for:

- Section eyebrow labels (small uppercase, `EyebrowLabel` component)
- Bullet markers and small accent dots
- 3px left vertical rails on pull quotes (`PullQuote` component)
- Thin top/bottom horizontal rules on key sections (the dark `FinalCTA`)
- Underlines on key text links (`link-red` class or `Button variant="text"`)
- Hover state on links and card titles

**Do NOT use red for:**

- Large headings
- Button backgrounds (the primary "Book Free Water Test" CTA uses charcoal)
- Big icon fills
- Full-width section backgrounds

### Typography

- **Display:** Fraunces (serif) — `font-serif` — tight tracking, charcoal
- **Body:** Inter (sans) — `font-sans` — 16px+, line-height 1.7, charcoal at 90% opacity
- **Eyebrow:** `EyebrowLabel` component — uppercase, tracking-widest, 11–12px, red
- **Reading level:** 6th–8th grade. Short sentences. Plain words.

### Tone

- Trustworthy expert who explains things simply — not salesy.
- Always lead with the customer's water problem, not the product.
- Every page has a clear next step (book a test, call, or read more).

---

## Mobile-first conventions

- Minimum **16px** body text on mobile
- Minimum **48×48px** touch targets
- Phone numbers use `tel:` links
- Sticky bottom CTA appears on scroll (`MobileStickyCTA`) on every page except `/book`
- Hamburger menu with large tap targets and locked body scroll when open
- Forms use `inputMode` and `autoComplete` attributes
- Test breakpoints: 375, 768, 1024, 1440

---

## Adding content

### Add a new service page

1. Open `lib/services-data.ts`
2. Add a new entry to `serviceContent` with the same shape as the existing ones
3. Add a matching entry to the `services` array in `lib/site.ts` (slug + title + blurb)
4. The route, sitemap, and footer links are generated automatically

### Add a new Water 101 article

1. Open `lib/articles-data.ts`
2. Add a new entry to the `articles` array. The `body` field is an array of blocks:

   ```ts
   { heading: 'Section title' }          // h2
   { paragraph: 'A paragraph of text.' } // p
   { list: ['item one', 'item two'] }    // bulleted list with red dots
   ```

3. The article will appear on the Water 101 hub and have its own SEO-friendly route automatically.

> **Why this format?** Keeping content in TypeScript files keeps the build
> simple and lets the marketing team change copy through code review. If
> richer formatting becomes necessary later, swap `articles-data.ts` for
> `.mdx` files under `app/water-101/` and install `@next/mdx` +
> `@mdx-js/loader`.

### Update business info (phone, address, hours, nav)

Everything in `lib/site.ts` — change once, propagates to header, footer,
JSON-LD schema, contact page, mobile sticky CTA, and `tel:` links.

---

## SEO

- Per-page `metadata` exports (title, description, OG, Twitter)
- `app/sitemap.ts` and `app/robots.ts` are dynamic — new services/articles are
  picked up automatically
- `LocalBusiness` JSON-LD in the root layout (`app/layout.tsx`)
- `Article` JSON-LD on each Water 101 article
- Canonical URLs via `metadata.alternates.canonical`

Before launch, add a real `/public/og-image.jpg` (1200×630) and a
`/public/favicon.ico` set.

---

## Forms

Both forms validate on the client (Zod via `@hookform/resolvers/zod`) and on
the server (`app/api/*/route.ts`). The API routes forward submissions to
GoHighLevel webhooks when the env vars are present. The server returns
`{ ok: true }` on success and structured error responses with HTTP status
codes on failure.

To wire up GoHighLevel:

1. In GHL, create a **Workflow → Trigger → Inbound Webhook**
2. Copy the webhook URL into `GHL_BOOKING_WEBHOOK_URL` / `GHL_CONTACT_WEBHOOK_URL`
3. The booking payload shape is:

   ```json
   {
     "name": "string",
     "phone": "string",
     "email": "string",
     "street": "string",
     "city": "string",
     "state": "GA|NC|SC|AL|FL",
     "zip": "string",
     "waterSource": "city|well|unsure",
     "concerns": ["taste", "smell", ...],
     "contactMethod": "phone|text|email",
     "notes": "string",
     "source": "web-booking",
     "submittedAt": "ISO timestamp"
   }
   ```

4. Map fields to GHL contact properties inside the workflow.

---

## Deployment (Vercel)

```bash
# Connect the repo, then:
# Vercel → Project → Settings → Environment Variables
NEXT_PUBLIC_SITE_URL=https://filtertechinc.com
GHL_BOOKING_WEBHOOK_URL=…
GHL_CONTACT_WEBHOOK_URL=…
GHL_WEBHOOK_SECRET=…
```

The site is fully statically generated except the two API routes — it should
score 95+ on Lighthouse across the board out of the box.

---

## Accessibility checklist

- [x] Semantic HTML throughout (`header`, `main`, `nav`, `article`, `section`)
- [x] Skip link on the header for keyboard users
- [x] ARIA labels on icon buttons (`MobileStickyCTA`, header hamburger, accordion buttons)
- [x] Visible focus states (charcoal ring via `globals.css`)
- [x] Color contrast WCAG AA across the palette
- [x] All form inputs labeled, error messages associated via `aria-invalid` + `role="alert"`
- [x] Reduced-motion respected via `@media (prefers-reduced-motion)`
