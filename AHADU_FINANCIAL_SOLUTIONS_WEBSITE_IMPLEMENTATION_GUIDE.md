# Ahadu Financial Solutions Website — Complete Implementation Guide

> **Purpose:** This document is the implementation brief, design specification, technical plan, content architecture, animation plan, quality checklist, and phase-by-phase execution guide for building the Ahadu Financial Solutions website from scratch.
>
> **Audience:** A developer or AI coding agent implementing the project end-to-end.
>
> **Primary objective:** Build a visually exceptional, modern, premium, trustworthy financial-services website for Ahadu Financial Solutions that feels custom-designed for the brand rather than like a generic SaaS/AI template.

---

## 0. Read This First — Project Intent and Non-Negotiables

Ahadu Financial Solutions is an Ethiopia-based accounting, financial-management, and business-advisory firm. The supplied company profile positions the company around reliable financial systems, informed decision-making, sustainable growth, professionalism, integrity, confidentiality, accountability, collaboration, and client success. The supplied strategic blueprint reinforces a broader positioning: Ahadu should feel like a long-term financial partner rather than a transactional bookkeeping provider.

The site must therefore communicate, in this order:

1. **Trust** — visitors should immediately feel that Ahadu is serious, ethical, and dependable.
2. **Clarity** — the information architecture, typography, and content must be easy to understand.
3. **Expertise** — services and process should feel structured and deliberate.
4. **Partnership** — Ahadu is not merely recording history; it wants to help clients make better decisions and grow.
5. **Modernity** — the company explicitly values innovation and modern technologies, so the website must feel current without looking trendy or gimmicky.
6. **Action** — the primary conversion is booking a consultation; the secondary conversion is contacting Ahadu or reading an Insight.

### 0.1 Do not build a generic AI-looking finance website

Avoid all of the following unless a specific design reason is approved:

- giant purple/blue SaaS gradients;
- random glowing blobs;
- glassmorphism everywhere;
- 20 identical rounded cards;
- excessive pill-shaped UI;
- floating 3D coins;
- fake stock tickers;
- crypto-style graphics;
- unnecessary charts with invented data;
- fake client logos;
- fake awards;
- fake testimonials;
- fake counters such as `500+ clients`, `15+ years`, or `98% satisfaction`;
- large decorative animations that compete with the content;
- scroll-jacking;
- animations that make content difficult to read;
- copying a presentation slide directly into a responsive webpage.

### 0.2 The website should feel like this

**Premium Financial Advisory × Modern Ethiopia × Editorial Minimalism × Precision**

Think:

- strong Swiss/editorial grid;
- deep Ahadu navy;
- large elegant typography;
- precise thin lines;
- subtle gold detailing;
- controlled green accents;
- Addis Ababa / Ethiopian business imagery;
- generous whitespace;
- calm motion;
- highly polished interactions;
- excellent mobile behavior.

The desired visitor reaction is:

> “This is a serious, modern, high-end financial firm.”

---

# 1. Source-of-Truth Content

The implementation must be grounded in the supplied Ahadu materials:

- `company profile 4 ahadu(1).docx`
- `Ahadu_Strategic_Growth_Blueprint_(3)(1).pdf`
- Ahadu brand identity board / logo image supplied with the project

### 1.1 Core company positioning from the source material

Ahadu serves:

- entrepreneurs;
- startups;
- small and medium-sized enterprises (SMEs);
- growing organizations;
- businesses across multiple sectors in Ethiopia.

The brand story emphasizes that **“Ahadu” means “One” or “Unity” in Amharic**, representing partnership, trust, collaboration, shared goals, and shared success.

### 1.2 Confirmed service areas

The company profile explicitly supports the following primary services:

1. Bookkeeping
2. Financial Reporting
3. Payroll Administration
4. Tax Support Services
5. Cash Flow Management

The broader material also refers to:

- accounting;
- financial management;
- financial analysis;
- budgeting;
- business advisory;
- planning;
- strategic financial support.

Do not silently expand the service offering beyond what the source material supports.

### 1.3 Confirmed values

The company profile identifies:

- Integrity
- Professional Excellence
- Client Success
- Accountability
- Confidentiality
- Innovation
- Collaboration
- Continuous Improvement / Excellence Through Continuous Improvement

### 1.4 Engagement journey from the strategic blueprint

Use the supplied six-stage methodology:

1. Discovery
2. Financial Assessment
3. Planning
4. Implementation
5. Reporting
6. Continuous Support

This journey should become one of the website's signature interactive sections.

### 1.5 Sector expertise shown in the strategic blueprint

The supplied blueprint lists:

- Startups & Tech
- SMEs & Enterprises
- Retail & Commerce
- Construction & Real Estate
- Manufacturing & Logistics
- Hospitality & Tourism
- Healthcare Services
- Professional Services
- NGOs & Non-Profits
- Import & Export

### 1.6 Outcomes used in the strategic blueprint

Use outcome-oriented messaging around:

- Financial Visibility
- Capital Efficiency
- Risk Mitigation
- Operational Agility
- Strategic Growth

Do not convert these into numerical claims unless the client provides verifiable figures.

### 1.7 Important content/claim warnings

The source materials contain some terminology that should be handled carefully:

- One company-profile paragraph uses **“Ahadu Accounting and Business Agency”** while the dominant brand name is **“Ahadu Financial Solutions.”** Use `Ahadu Financial Solutions` throughout the website unless the client explicitly confirms a different legal/trading name.
- The profile sometimes says “Ahadu Financial Solution” singular. Keep the public brand consistently `Ahadu Financial Solutions`.
- “To become Ethiopia’s most trusted...” is a **vision**, not a current factual claim. Present it as a vision, never as “we are Ethiopia’s most trusted firm.”
- Avoid publishing literal claims such as **“bank-grade security”** unless Ahadu can substantiate the technical/security standard. Prefer `strict confidentiality`, `careful handling of financial information`, or source-supported wording.
- The company profile describes **tax support**, tax documentation, planning support, compliance support, and filing-preparation assistance. Do not imply that Ahadu performs regulated tax representation or filing services unless confirmed.
- Verify all phone numbers, emails, social profiles, office address, legal footer text, and service availability before production launch.

---

# 2. Technical Architecture

## 2.1 Architecture decision

Build the first production version as a **Next.js application deployed to Vercel**.

A separate NestJS, Express, Django, Laravel, or other backend is **not required for the initial scope**.

Server-side needs can be handled through Next.js Route Handlers / server functions where appropriate.

### Initial architecture

```text
Visitor
   ↓
Next.js website
   ├── Marketing pages
   ├── Service pages
   ├── MDX Insights/blog
   ├── FAQ
   ├── Contact form
   │      ↓
   │    Resend
   │
   └── Booking page
          ↓
        Cal.com embed

Deployment → Vercel
```

No database is required for the first release unless the project scope changes.

Do not add authentication, user accounts, Prisma, PostgreSQL, a CMS, or an admin dashboard simply because they are common in web projects.

---

# 3. Recommended Technology Stack

Use current stable versions that are mutually compatible when implementation begins. Do not hard-code old package versions from this document if newer stable versions exist; use the package manager lockfile to guarantee reproducible builds after installation.

## 3.1 Core

| Tool | Purpose |
|---|---|
| Next.js App Router | Application framework, routing, metadata, server rendering |
| React | Component layer |
| TypeScript | Strong typing |
| Tailwind CSS | Design system and responsive styling |
| shadcn/ui | Accessible primitive UI components that can be fully branded |
| Vercel | Hosting, preview deployments, production deployment |

## 3.2 Animation

| Tool | Purpose |
|---|---|
| Motion for React (`motion`) | Main animation system: reveals, hover, mask motion, layout animation, scroll-linked accents |
| GSAP + ScrollTrigger | Only for the signature pinned/scrollytelling “Engagement Journey” section if Motion alone is not sufficient |

**Do not add Lenis or another smooth-scroll library by default.** Native browser scrolling is more predictable and accessible. Only add a smooth-scroll layer after the complete site works and only if it meaningfully improves the experience without introducing mobile or accessibility problems.

## 3.3 Content

| Tool | Purpose |
|---|---|
| `@next/mdx` | Local MDX support for Insights articles |
| `@mdx-js/loader` | MDX compilation |
| `@mdx-js/react` | MDX component mapping |
| `remark-gfm` | Tables, task lists, and common Markdown conveniences if needed |
| `rehype-slug` | Heading IDs in articles |
| `rehype-autolink-headings` | Optional anchor links for article headings |

Keep content local in Git for v1. Do not introduce a CMS unless the client later needs non-developers to publish content frequently.

## 3.4 Forms and email

| Tool | Purpose |
|---|---|
| React Hook Form | Contact-form state |
| Zod | Runtime validation |
| `@hookform/resolvers` | Hook Form + Zod integration |
| Resend | Send contact submissions to Ahadu |

## 3.5 Booking

Use Cal.com for booking.

Preferred approach:

- dedicated `/book` page;
- use Cal.com’s supported web/React embed;
- visually integrate it with the Ahadu design;
- preserve a direct booking URL as a fallback if the embed fails.

## 3.6 UI utilities

| Package | Purpose |
|---|---|
| `lucide-react` | Consistent line icons |
| `clsx` | Conditional class composition |
| `tailwind-merge` | Resolve Tailwind class conflicts |

shadcn’s `cn()` utility may already combine `clsx` and `tailwind-merge`; avoid duplicate helpers.

## 3.7 Observability

| Tool | Purpose |
|---|---|
| Vercel Web Analytics | Basic website usage analytics, if approved |
| Vercel Speed Insights | Real-user performance visibility |

Confirm the client’s privacy/legal requirements before enabling analytics in production.

## 3.8 Testing

| Tool | Purpose |
|---|---|
| Playwright | End-to-end route and interaction testing |
| ESLint | Static analysis |
| TypeScript | Type checking |
| Prettier | Formatting if the project wants formatting separate from ESLint |
| Lighthouse / Chrome DevTools | Performance and accessibility auditing |

---

# 4. Initial Project Setup

Recommended package manager: **pnpm**.

If the development environment requires npm, npm is acceptable. Do not mix package managers within the same repository.

Example bootstrap:

```bash
pnpm create next-app@latest ahadu-financial \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd ahadu-financial
```

Initialize shadcn/ui using the current official CLI:

```bash
pnpm dlx shadcn@latest init
```

Install core dependencies:

```bash
pnpm add motion gsap lucide-react zod react-hook-form @hookform/resolvers resend @calcom/embed-react
```

Install MDX dependencies:

```bash
pnpm add @next/mdx @mdx-js/loader @mdx-js/react remark-gfm rehype-slug rehype-autolink-headings
```

Install Vercel observability if approved:

```bash
pnpm add @vercel/analytics @vercel/speed-insights
```

Install E2E tooling:

```bash
pnpm add -D @playwright/test prettier prettier-plugin-tailwindcss
pnpm exec playwright install
```

Add only the shadcn components actually required. Likely candidates:

```bash
pnpm dlx shadcn@latest add button accordion sheet dialog input textarea label select separator
```

Do not bulk-install the entire component library.

---

# 5. Environment Variables

Create `.env.example` with placeholders only:

```env
NEXT_PUBLIC_SITE_URL=https://www.ahadufinancial.com
NEXT_PUBLIC_CALCOM_LINK=your-calcom-user/consultation

RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=ahadufinancial@gmail.com
```

Rules:

- never commit `.env.local`;
- never expose `RESEND_API_KEY` to the browser;
- only variables prefixed with `NEXT_PUBLIC_` may be used client-side;
- configure real production environment variables in Vercel;
- use separate preview and production settings where appropriate.

---

# 6. Brand Design System

## 6.1 Official palette

The supplied brand board defines the following core palette:

```css
--ahadu-navy: #0B1B3A;
--ahadu-green: #1FA971;
--ahadu-gold: #F2B84B;
--ahadu-off-white: #F8FAFC;
--ahadu-charcoal: #111827;
--white: #FFFFFF;
```

### Recommended supporting tokens

Supporting tones may be derived from the official palette for interaction states, borders, and muted surfaces. Keep these secondary and visually subordinate to the official colors.

```css
--background: #F8FAFC;
--foreground: #111827;

--primary: #0B1B3A;
--primary-foreground: #FFFFFF;

--secondary: #1FA971;
--secondary-foreground: #FFFFFF;

--accent: #F2B84B;
--accent-foreground: #0B1B3A;

--surface: #FFFFFF;
--surface-dark: #0B1B3A;
--surface-darker: #07142E;

--muted: #EEF2F5;
--muted-foreground: #667085;
--border: #DCE3E8;
```

### 6.2 Color usage ratio

Approximate visual balance:

```text
55–65%  White / off-white
20–30%  Ahadu navy
 7–12%  Ahadu green
 2–5%   Ahadu gold
```

This is not a strict mathematical requirement. It is a visual discipline.

### 6.3 Color rules

**Navy**

Use for:

- major dark sections;
- hero overlay / background;
- headings on light surfaces;
- footer;
- premium card states;
- navigation after scroll;
- thin diagram lines.

**Green**

Use for:

- growth-oriented accents;
- selected service states;
- success cues;
- small tags;
- secondary CTA states;
- icon accents.

**Gold**

Use sparingly for:

- thin horizontal lines;
- section numbers;
- active-step indicator;
- small icon details;
- select CTA accents;
- hover underline;
- decorative arc / geometry.

Do not use gold for paragraphs on white. Do not make entire page sections bright gold.

**White/off-white**

Use for:

- editorial breathing room;
- readable content areas;
- cards;
- article pages;
- services explanations.

---

# 7. Brand Motifs

Build a custom visual language from the supplied Ahadu identity rather than adding unrelated visual trends.

## 7.1 The “Unity Line”

A recurring 1px or 2px line inspired by:

- the angular Ahadu `A` mark;
- upward movement;
- structure;
- connection;
- “One / Unity.”

It can appear as:

- a diagonal separator;
- a line drawing into a section heading;
- a gold progress line in the engagement journey;
- corner geometry on images;
- a subtle `A`-like construction in the hero.

## 7.2 The “Precision Grid”

The strategic blueprint repeatedly uses grid-like visual structure. Convert this into a subtle web motif:

```css
background-image:
  linear-gradient(to right, rgba(11,27,58,.05) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(11,27,58,.05) 1px, transparent 1px);
background-size: 64px 64px;
```

Rules:

- low opacity only;
- never behind dense body copy unless readability remains excellent;
- use mostly in journey/outcomes/CTA sections;
- do not turn every section into graph paper.

## 7.3 The “Unity Arc”

The strategic material uses arcs and growth curves. Introduce a restrained arc motif:

- large SVG stroke;
- no fill;
- gold at low opacity;
- slow reveal on scroll;
- especially effective behind the hero image or final CTA.

This is decorative branding, not a chart; it must never imply real financial performance data.

---

# 8. Logo Usage

The supplied identity board shows:

- primary horizontal logo;
- vertical logo;
- standalone icon;
- white version;
- navy version;
- monochrome version;
- favicon/app-icon variants.

### Production rule

Use a clean SVG or transparent high-resolution export whenever possible.

If only the combined JPEG brand board is available during development:

1. use it only as reference;
2. do not ship a blurry screenshot crop as the final production logo;
3. request/export the logo as SVG or transparent PNG before launch;
4. use the horizontal logo for navbar/footer;
5. use the standalone icon for favicon, small decorative marks, and mobile situations where the full wordmark cannot fit.

Logo clear space must be respected. Do not stretch, recolor arbitrarily, add drop shadows, rotate, or place over noisy imagery without sufficient contrast.

---

# 9. Typography

## 9.1 Direction

Use a two-font editorial system:

- **Display / major headlines:** Instrument Serif or another approved refined editorial serif.
- **UI / body:** Geist or Manrope.

Preferred implementation:

```text
Display → Instrument Serif
Body/UI → Geist
```

Use `next/font` so fonts are optimized and do not introduce avoidable external font-network requests/layout shift.

If the chosen Google font is unavailable through the active Next.js release, use a compatible font through `next/font/local` only when the project has a properly licensed font file. Do not download/store unauthorized font files.

## 9.2 Type scale

Use fluid typography with `clamp()`.

Suggested scale:

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;

--heading-sm: clamp(2rem, 4vw, 3rem);
--heading-md: clamp(2.75rem, 5vw, 4.75rem);
--heading-lg: clamp(3.25rem, 7vw, 7rem);
```

### Hero H1

Desktop target: roughly `64–104px` depending on viewport.

Mobile target: roughly `44–58px`.

Line-height should be tight, around `0.95–1.05` for display headings.

### Body

- 16–18px base on desktop;
- 16px minimum for normal mobile body copy;
- line-height ~1.6;
- text blocks generally no wider than `60–72ch`.

### Tracking

- small uppercase eyebrow: `0.12em–0.18em`;
- large display heading: slightly negative tracking where appropriate;
- body: normal tracking.

---

# 10. Layout System

Use a strong responsive grid.

## 10.1 Content width

```text
Maximum content width: 1280–1360px
Hero visual may extend beyond content grid where intentional.
```

Recommended wrapper:

```css
width: min(100% - 40px, 1320px);
margin-inline: auto;
```

Responsive gutters:

```text
Mobile: 20px
Small tablet: 24px
Tablet: 32px
Desktop: 40–48px
Large desktop: 48–64px when composition allows
```

## 10.2 Section spacing

Target approximately:

```text
Mobile: 72–96px vertical
Tablet: 96–120px
Desktop: 120–160px
Signature sections: up to 180px if composition benefits
```

Do not blindly apply the same `py-32` to every section. Create rhythm.

## 10.3 Radius

Premium, restrained radius system:

```text
Buttons: 10–12px
Inputs: 10–12px
Normal cards: 16–20px
Large image frames: 20–28px
Pills: only for tags/eyebrows when appropriate
```

Avoid making every container `rounded-3xl`.

## 10.4 Shadows

Prefer borders and depth through contrast over heavy shadows.

Card shadow example:

```text
0 20px 60px rgba(11, 27, 58, 0.08)
```

Use on a small number of elevated elements only.

---

# 11. Iconography

The brand board connects iconography to concepts such as trust, growth, precision, stability, excellence, and innovation.

Use thin-line icons, preferably Lucide, with consistent weight.

Rules:

- default stroke width visually consistent around 1.5–2;
- navy icons on light surfaces;
- white icons on navy surfaces;
- green/gold used as accents, not random multicolor icon sets;
- do not mix 3D icons, filled icons, emoji, and line icons;
- never use generic dollar/coin graphics merely to “look financial.”

---

# 12. Photography and Imagery

The strategic blueprint establishes a suitable visual direction:

- Addis Ababa skyline / modern city architecture;
- professional business meetings;
- architectural geometry;
- business growth and planning imagery.

### Image rules

Use imagery that feels:

- Ethiopian / regionally relevant where possible;
- contemporary;
- professional;
- confident;
- natural, not staged stock-photo clichés.

Avoid:

- hands pointing at random charts;
- excessive calculator photos;
- anonymous piles of money;
- crypto/forex imagery;
- generic Wall Street skyscrapers when the brand is Ethiopia-focused;
- AI-generated hands or fake financial dashboards.

### Supplied PDF imagery

The strategic PDF pages visibly include NotebookLM watermarks and are presentation compositions. Do **not** ship full slide screenshots as production website assets.

If clean original photographs are embedded/extractable and rights allow their use, use those originals. Otherwise request the original images from the client or use properly licensed replacements with the same visual direction.

For prototyping only, temporary crops may be used, but they must be replaced before launch.

### Image implementation

Use `next/image` for production images.

Requirements:

- explicit responsive `sizes`;
- correct intrinsic dimensions or `fill` with a positioned parent;
- meaningful alt text for content images;
- empty alt for purely decorative images;
- avoid preloading more than the true LCP/hero image;
- compress large source imagery;
- test mobile cropping manually.

---

# 13. Animation System

Animations must feel precise, quiet, and intentional.

## 13.1 Main library: Motion for React

Use Motion for:

- hero reveal;
- line-by-line heading entrance;
- image mask reveal;
- navbar state transition;
- section reveal;
- service hover transitions;
- subtle image parallax;
- accordion transitions;
- selected-state transitions;
- mobile menu;
- small button/arrow interactions;
- scroll progress accents.

## 13.2 GSAP ScrollTrigger

Use GSAP only if needed for the desktop **Engagement Journey** signature experience:

- pin the stage heading/visual;
- scrub a gold progress line;
- transition stage labels at specific scroll points;
- change visual content as the user moves through Discovery → Continuous Support.

Do not use GSAP for normal hover effects or simple fades.

Lazy-load / isolate GSAP to the section that needs it so the entire page is not forced into a large client-side bundle.

## 13.3 Animation timing

Recommended entrance timing:

```text
Normal reveal: 450–700ms
Hero sequence: 900–1400ms total
Hover: 180–300ms
Micro-interaction: 120–220ms
Image mask: 700–1000ms
```

Suggested easing style:

- smooth cubic ease;
- spring only for tiny UI interactions;
- no rubber-band bounce.

## 13.4 Scroll reveal defaults

Common animation:

```text
opacity: 0 → 1
y: 24px → 0
```

Do not repeatedly animate every paragraph from 100px away.

## 13.5 Reduced motion

Respect `prefers-reduced-motion`.

When reduced motion is enabled:

- disable parallax;
- disable scrubbed scroll timelines;
- avoid large transforms;
- reveal content immediately or with minimal fade;
- keep all content usable.

## 13.6 Mobile animation

Do not simply shrink desktop animation behavior.

On mobile:

- avoid pinned 400vh sequences;
- show engagement journey as a vertical stepper;
- reduce parallax amplitude;
- reduce simultaneous animation count;
- prioritize scrolling performance;
- never require hover to reveal information.

---

# 14. Site Routes

Implement at minimum:

```text
/
/about
/services
/services/bookkeeping
/services/financial-reporting
/services/payroll-administration
/services/tax-support
/services/cash-flow-management
/insights
/insights/[slug]
/book
/faq
/contact
/privacy
/terms
```

Also implement:

```text
/not-found behavior
sitemap.ts
robots.ts
opengraph-image / metadata
favicon / icons
```

If a standalone business-advisory service is later confirmed as part of the public service catalogue, add:

```text
/services/business-advisory
```

Do not publish an unsupported service simply because it appears useful.

---

# 15. Recommended Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── icon.svg
│   ├── opengraph-image.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── services/
│   │   ├── page.tsx
│   │   ├── bookkeeping/page.tsx
│   │   ├── financial-reporting/page.tsx
│   │   ├── payroll-administration/page.tsx
│   │   ├── tax-support/page.tsx
│   │   └── cash-flow-management/page.tsx
│   │
│   ├── insights/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   │
│   ├── book/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   │
│   └── api/
│       └── contact/route.ts
│
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── site-footer.tsx
│   │   └── page-shell.tsx
│   │
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── meaning-of-ahadu.tsx
│   │   ├── growth-paradox.tsx
│   │   ├── services-showcase.tsx
│   │   ├── ahadu-advantage.tsx
│   │   ├── engagement-journey.tsx
│   │   ├── sector-expertise.tsx
│   │   ├── measurable-outcomes.tsx
│   │   ├── about-preview.tsx
│   │   ├── insights-preview.tsx
│   │   ├── faq-preview.tsx
│   │   └── closing-cta.tsx
│   │
│   ├── services/
│   ├── insights/
│   ├── forms/
│   ├── motion/
│   ├── brand/
│   └── ui/
│
├── content/
│   └── insights/
│       ├── first-article.mdx
│       └── ...
│
├── data/
│   ├── services.ts
│   ├── sectors.ts
│   ├── values.ts
│   ├── journey.ts
│   └── faq.ts
│
├── lib/
│   ├── cn.ts
│   ├── metadata.ts
│   ├── validation.ts
│   ├── mdx.ts
│   └── constants.ts
│
└── types/
    └── index.ts

public/
├── brand/
│   ├── ahadu-horizontal.svg
│   ├── ahadu-mark.svg
│   ├── ahadu-white.svg
│   └── ...
├── images/
│   ├── hero/
│   ├── about/
│   ├── services/
│   └── insights/
└── og/
```

Keep content data separate from rendering wherever it improves maintainability.

---

# 16. Component Philosophy

## Server Components by default

Use Server Components for static/content sections.

Only add `"use client"` when needed for:

- Motion animations;
- GSAP;
- mobile menu state;
- accordion if the selected shadcn primitive requires client state;
- form interaction;
- booking embed.

Do not turn the entire homepage into one giant Client Component just because some sections animate.

## Component granularity

Create components by meaningful design/behavior boundaries, not every tiny `<div>`.

Good:

```text
Hero
ServicesShowcase
EngagementJourney
ContactForm
```

Avoid overengineering with dozens of trivial wrapper components.

---

# 17. Navigation Design

## Desktop navbar

Initial hero state:

- placed above/within hero;
- transparent or near-transparent;
- white wordmark if hero is dark;
- navigation links in off-white;
- CTA clearly visible.

After user scrolls approximately 40–80px:

- navbar becomes sticky/fixed;
- subtle navy surface or white surface depending on chosen final visual direction;
- optional light blur, but do not turn it into a heavy glass bar;
- height approximately 72–80px;
- transition smoothly.

Suggested items:

```text
About
Services
Insights
FAQ
Book a Consultation
```

`Book a Consultation` is the primary CTA.

Services may use a simple accessible dropdown on desktop only if there are enough service links to justify it. Avoid mega-menu complexity.

## Mobile navigation

Use shadcn `Sheet`.

Requirements:

- 44px+ tap targets;
- visible close control;
- body scroll locked while open;
- focus trapped correctly;
- Esc closes on keyboard devices;
- all primary routes shown;
- CTA at bottom;
- no complicated hover interactions.

---

# 18. Landing Page — Detailed Experience

The landing page is the main showpiece of the entire project. It must be built as a connected narrative rather than a collection of unrelated blocks.

---

## Section 01 — Hero: “Financial Clarity”

### Goal

Create the immediate “wow” moment while communicating exactly what Ahadu is.

### Visual direction

Use a near-full-screen hero:

```text
min-height: 88svh–100svh
```

Recommended composition:

- deep navy base;
- Addis Ababa / modern Ethiopian business architecture image on right or full-bleed behind composition;
- controlled navy overlay for text contrast;
- large editorial serif heading on left;
- subtle `Unity Arc` line behind/right;
- tiny green detail and gold line;
- horizontal Ahadu logo in navigation;
- no giant card floating in the center.

### Recommended copy direction

Eyebrow:

```text
AHADU FINANCIAL SOLUTIONS · ADDIS ABABA
```

Primary H1:

```text
Financial clarity for
businesses built to grow.
```

Supporting brand line:

```text
Empowering businesses through financial excellence.
```

Supporting paragraph:

```text
Professional accounting and financial-management support for entrepreneurs,
startups, SMEs, and growing organisations — built around accuracy, insight,
and long-term partnership.
```

Primary CTA:

```text
Book a Consultation →
```

Secondary CTA:

```text
Explore Our Services
```

Optional small reassurance line below CTAs:

```text
Bookkeeping · Reporting · Payroll · Tax Support · Cash Flow
```

### Hero animation sequence

1. Navbar fades in.
2. Eyebrow appears with short upward movement.
3. H1 reveals by line using clipping/mask.
4. Supporting copy fades in.
5. CTAs appear.
6. Hero image mask opens from an angular edge inspired by the `A` logo.
7. Gold Unity Line draws 20–40% of its path.

Total sequence approximately 1.2 seconds.

Do not wait for animations before content becomes semantically available.

### Hero responsive behavior

Desktop:

- split editorial composition, ~55/45;
- heading maximum width ~760px;
- photo can bleed to viewport edge.

Mobile:

- text first;
- image becomes lower background/image panel;
- no text over a visually busy area without a strong overlay;
- CTA buttons stack when necessary;
- hero should not be 1200px tall simply to preserve desktop composition.

---

## Section 02 — Trust / Meaning of Ahadu

### Goal

Use the brand name itself as a story and differentiation point.

### Content

Eyebrow:

```text
ONE · UNITY · PARTNERSHIP
```

Large heading:

```text
Ahadu means One.
```

Body direction:

Explain that true financial success is built through partnership, trust, and shared goals, and that Ahadu aims to become part of the client’s business journey rather than remain a distant service provider.

Use the source idea:

```text
We become part of your business, not just your accounting firm.
```

Treat this as a prominent editorial pull quote only if approved by the client.

### Layout

Desktop:

```text
LEFT: giant faint “01” or word “ONE”
RIGHT: heading + short copy + quote
```

A subtle animated construction of the Ahadu mark may appear between columns.

### Motion

- large background `ONE` moves 10–20px slower than scroll;
- logo geometry draws in once;
- copy reveals normally.

---

## Section 03 — The Growth Paradox

### Goal

Show that Ahadu understands the operational problems that appear as businesses grow.

### Source-based problem themes

- Financial blindness / poor visibility
- Cash-flow pressure
- Compliance risk
- Inefficient manual operations
- Strategic paralysis caused by fragmented or unreliable information

### Design

Do not reproduce the PDF’s overlapping black presentation cards directly.

Instead use an editorial problem wall:

```text
GROWTH BRINGS OPPORTUNITY.
IT ALSO BRINGS COMPLEXITY.

01 Financial visibility
02 Cash-flow pressure
03 Compliance
04 Operational inefficiency
05 Decision-making blind spots
```

On desktop, pair the list with a slowly moving abstract stack of paper/ledger panels or architectural blocks.

On mobile, use a clean vertical list.

### Transition to next section

Close with:

```text
Strong growth needs a stronger financial foundation.
```

Then visually transition from off-white into the deep-navy Services section.

---

## Section 04 — Services Showcase

### Goal

Make the primary services feel substantial, sophisticated, and customized.

### Design pattern

Use a dark premium section with an interactive indexed list, not five generic small cards.

Desktop concept:

```text
OUR EXPERTISE

01  Bookkeeping                       [visual area]
02  Financial Reporting               [image / diagram]
03  Payroll Administration            changes with active row
04  Tax Support
05  Cash Flow Management
```

Each row includes:

- two-digit index;
- service title;
- one-line benefit;
- arrow;
- thin divider.

Active/hover state:

- title shifts 6–10px;
- arrow moves slightly;
- index becomes gold;
- green detail appears;
- right visual crossfades/masks.

### Service benefit lines

**Bookkeeping**

```text
Build accurate, organised financial records that support better control and better decisions.
```

**Financial Reporting**

```text
Turn financial activity into clear statements and decision-ready business insight.
```

**Payroll Administration**

```text
Simplify payroll processing while improving accuracy, consistency, and record management.
```

**Tax Support**

```text
Stay organised and better prepared for tax obligations, documentation, and compliance requirements.
```

**Cash Flow Management**

```text
Anticipate future needs, strengthen financial discipline, and plan resources with greater confidence.
```

### Mobile behavior

Do not use hover-controlled content.

Use accordion-like service rows or stacked large panels with the related visual inside each expanded row.

Each service links to its own detail page.

---

## Section 05 — The Ahadu Framework

### Goal

Communicate that Ahadu offers an integrated financial partnership rather than isolated tasks.

### Design

Use a custom orbital or connected diagram inspired by the strategic blueprint, but simplify it for web.

Center:

```text
AHADU
Financial clarity from one trusted partner
```

Connected capabilities:

- Accounting / Bookkeeping
- Financial Reporting
- Payroll Administration
- Tax Support
- Cash Flow Management
- Business/financial advisory where approved

Use thin navy lines, green nodes, and one gold active connection.

### Animation

When the section enters:

1. center mark appears;
2. connecting lines draw;
3. capability labels fade in sequentially.

On mobile, replace the orbital layout with a linear 2-column/1-column system. Never squeeze an unreadable radial diagram into a phone screen.

---

## Section 06 — The Ahadu Advantage

### Goal

Show differentiation clearly and honestly.

### Design

Split comparison, but avoid claiming competitors are universally poor.

Heading:

```text
More than historical reporting.
A partner for what comes next.
```

Left, muted:

```text
Traditional transactional model
- Task-focused engagement
- Reporting what already happened
- Standardised processes
- Fragmented touchpoints
```

Right, branded navy:

```text
The Ahadu approach
✓ Long-term partnership
✓ Forward-looking financial insight
✓ Tailored solutions
✓ Ongoing support
✓ Growth and value focus
```

Use language as positioning, not unprovable universal claims about all other accounting firms.

### Interaction

On scroll:

- left panel slightly desaturates;
- right panel becomes fully saturated navy;
- gold line draws around/along one edge of right panel.

---

## Section 07 — Engagement Journey — Signature Scroll Experience

### Goal

This is the most distinctive animated section after the hero.

### Desktop concept

Use a tall section (~300–450vh only if needed) containing a sticky viewport.

Left:

```text
THE ENGAGEMENT JOURNEY
A structured path from understanding to ongoing support.
```

Center/right:

A six-stage step composition.

```text
01 Discovery
02 Financial Assessment
03 Planning
04 Implementation
05 Reporting
06 Continuous Support
```

### Stage content

**01 Discovery**

Understand the client’s business model, objectives, current challenges, and priorities.

**02 Financial Assessment**

Review current financial systems, information quality, workflows, and compliance readiness.

**03 Planning**

Develop a tailored financial approach, priorities, and implementation plan.

**04 Implementation**

Establish or improve the relevant bookkeeping, reporting, payroll, and financial-management processes.

**05 Reporting**

Deliver timely financial information designed to support stronger management decisions.

**06 Continuous Support**

Continue advisory, review, support, and refinement as the business evolves.

### Animation behavior

- section enters on stage 01;
- a thin progress line moves from navy into gold as user scrolls;
- each stage title becomes large/active;
- previous stage remains faintly visible;
- supporting visual transitions smoothly;
- no spinning icons;
- no sudden snap transitions.

### Mobile behavior

Do **not pin** the section.

Use a beautiful vertical timeline:

```text
● 01 Discovery
│
● 02 Financial Assessment
│
● 03 Planning
...
```

Progress line may fill as items enter the viewport.

---

## Section 08 — Sector Expertise

### Goal

Show breadth without overwhelming the user.

### Design

Use a clean 5×2 editorial grid on large desktops, 2×5 tablet, 1-column or 2-column phone depending on width.

Use thin dividers rather than cards around every item.

Items:

1. Startups & Tech
2. SMEs & Enterprises
3. Retail & Commerce
4. Construction & Real Estate
5. Manufacturing & Logistics
6. Hospitality & Tourism
7. Healthcare Services
8. Professional Services
9. NGOs & Non-Profits
10. Import & Export

Each item:

- simple line icon;
- uppercase/small label;
- hover underline or green/gold accent;
- no unsupported claims about sector-specific certifications.

---

## Section 09 — Measurable Outcomes

### Goal

Talk about the value Ahadu aims to create without inventing numerical proof.

Use a dark navy section.

Suggested layout:

```text
WHAT BETTER FINANCIAL SYSTEMS ENABLE

01 Financial Visibility
Clearer information for stronger decisions.

02 Capital Efficiency
Better visibility into cash flow and resource allocation.

03 Risk Mitigation
More organised processes and stronger compliance readiness.

04 Operational Agility
Cleaner workflows and more timely reporting.

05 Strategic Growth
More time and clarity to focus on the future of the business.
```

### Visual

Build abstract CSS/SVG diagrams based on line, blocks, and arrows rather than fake charts.

A subtle gold upward path can connect outcomes, but label it decoratively and never use axes or numerical data.

---

## Section 10 — Founder / About Preview

### Goal

Humanize the firm and build trust.

The source material names **Arsema Habtamu** as Founder & Managing Director and explains the purpose behind Ahadu.

### Layout

If a high-quality founder portrait is available:

```text
IMAGE                         COPY
                              Founded on a simple idea:
                              stronger businesses start with
                              stronger financial foundations.
```

If no portrait is available, do not use a fake AI-generated founder portrait. Use architecture / workplace imagery or a typography-led layout until an authentic image is provided.

### Content direction

Summarise:

- why Ahadu was established;
- commitment to sound financial management;
- ethical practices;
- tailored client support;
- ambition to build a respected Ethiopian financial-services firm.

CTA:

```text
Learn About Ahadu →
```

---

## Section 11 — Insights

### Goal

Establish the foundation for Ahadu’s thought-leadership ambition.

Navigation label: **Insights**, not `Blog`.

Heading direction:

```text
Ideas for stronger businesses.
```

Layout:

- one large featured article;
- two or three secondary cards;
- editorial magazine feel;
- category, date, title, excerpt, read action.

Article categories may include only client-approved themes such as:

- Bookkeeping
- Reporting
- Cash Flow
- Tax Readiness
- Payroll
- Business Finance
- Financial Management

Do not fabricate expert legal/tax advice; content should be reviewed by an appropriate professional before publication when it enters regulated or high-stakes territory.

---

## Section 12 — FAQ

### Goal

Remove friction before booking.

Use a clean shadcn Accordion.

Potential questions to draft for client review:

- What types of businesses does Ahadu work with?
- Which accounting and financial services do you provide?
- Can Ahadu support a startup or growing SME?
- How does the engagement process begin?
- Do you provide ongoing monthly support?
- What information should I prepare for an initial consultation?
- How does Ahadu handle confidentiality?
- How can I book a consultation?

Do not answer regulatory questions with unsupported claims.

---

## Section 13 — Final Conversion CTA

### Goal

End the homepage with a memorable statement and a clear action.

Use deep navy, generous spacing, and a large gold Unity Arc in the background.

Suggested copy:

```text
READY FOR A STRONGER FINANCIAL FOUNDATION?

Build your business
with greater clarity.

[ Book a Consultation → ]
```

Secondary link:

```text
Contact Ahadu
```

Keep this section visually calm. The size of the typography creates the impact.

---

## Section 14 — Footer

Dark navy footer.

Columns:

```text
Ahadu logo + short brand statement

Company
- About
- Insights
- FAQ
- Contact

Services
- Bookkeeping
- Financial Reporting
- Payroll Administration
- Tax Support
- Cash Flow Management

Contact
- Addis Ababa, Ethiopia
- ahadufinancial@gmail.com
- +251 901 049 961 (verify formatting before launch)

Legal
- Privacy
- Terms
```

Include copyright year dynamically.

Only include social channels that the client actually owns and has supplied.

---

# 19. Secondary Page Requirements

## 19.1 `/about`

Structure:

1. strong editorial hero;
2. company story;
3. meaning of Ahadu;
4. founder statement;
5. vision;
6. mission;
7. core values;
8. company direction / innovation;
9. CTA to book consultation.

Do not paste long source paragraphs verbatim. Rewrite for web readability while preserving meaning and obtain client approval.

## 19.2 `/services`

Structure:

1. hero;
2. service index;
3. detailed service teasers;
4. Ahadu Framework;
5. process;
6. CTA.

## 19.3 Service detail template

Each service page should contain:

```text
Eyebrow
Service H1
Short value proposition
What the service helps solve
What is included
Benefits to clients
How Ahadu approaches the service
Related services
FAQ snippet
Book consultation CTA
```

Use the actual inclusions from the company profile.

### Bookkeeping inclusions

- daily financial transaction recording;
- general ledger maintenance;
- bank/cash reconciliation;
- accounts receivable management;
- accounts payable management;
- expense recording/classification;
- financial record organisation.

### Financial Reporting inclusions

- income statements;
- statement of financial position / balance sheet;
- cash flow statements;
- statement of changes in equity;
- management reports;
- monthly/annual reports;
- financial performance analysis.

### Payroll Administration inclusions

- payroll preparation;
- salary calculations;
- employee deductions;
- payroll records;
- payroll reporting;
- leave/overtime calculations.

### Tax Support inclusions

- tax record preparation;
- tax compliance support;
- financial documentation for tax purposes;
- tax planning support;
- filing-preparation assistance;
- tax advisory guidance, subject to the client’s actual professional scope.

### Cash Flow Management inclusions

The company profile explicitly mentions cash-flow forecasting and outcomes around improved cash management, stronger financial discipline, and business stability.

Do not invent additional deliverables without client confirmation.

## 19.4 `/insights`

Editorial index with:

- featured article;
- category filters if enough articles exist;
- article cards;
- no filter UI when there are only 1–3 articles;
- strong empty/launch state when content is not yet ready.

## 19.5 `/insights/[slug]`

Article page:

- breadcrumb;
- category;
- H1;
- excerpt/deck;
- author if approved;
- published date;
- optional reading time;
- hero image;
- MDX article body;
- table of contents only for long posts;
- related articles;
- CTA.

Article reading width ~`70ch`.

Use excellent heading spacing, blockquotes, lists, tables, and callouts.

## 19.6 `/book`

Structure:

```text
Short hero
What to expect
Cal.com embed
Alternative booking link
Contact fallback
```

Do not visually bury the calendar below several screens of marketing copy.

## 19.7 `/contact`

Two-column desktop:

```text
Contact details + reassurance
Contact form
```

Fields:

- Full name — required
- Work email — required
- Phone — optional
- Company — optional
- Service interested in — optional select
- Message — required
- Consent / acknowledgement if required by legal review

Add a small warning:

```text
Please do not include passwords, account credentials, or highly sensitive financial information in this form.
```

---

# 20. Contact Form Technical Specification

Use React Hook Form + Zod.

Client validation is for UX only. Validate again on the server.

Example validation rules:

```text
name: 2–100 characters
email: valid email
phone: optional; reasonable max length
company: optional; max 120
service: enum/optional
message: 10–3000 characters
```

Implement:

```text
POST /api/contact
```

Server flow:

1. parse request;
2. validate with Zod;
3. reject invalid data;
4. sanitize/escape content when constructing HTML;
5. send through Resend;
6. return safe success/error response;
7. never expose API keys/errors/stack traces to the user.

Spam protection for v1:

- hidden honeypot field;
- submission timing sanity check if appropriate;
- server validation;
- add CAPTCHA/Turnstile later only if spam becomes a real issue.

Do not store submitted form data in a database unless retention requirements are defined.

---

# 21. Booking Specification

Use a Cal.com embed with branding configured as closely as the service allows.

Requirements:

- `/book` page must load even if embed script is delayed;
- include accessible loading state;
- include direct booking fallback link;
- avoid loading Cal.com JavaScript on every page if only `/book` needs it;
- navbar CTA routes to `/book` rather than opening a huge third-party modal by default;
- optionally provide a lightweight booking modal later, but the dedicated page is canonical.

No custom scheduling backend is necessary for v1.

---

# 22. Insights / MDX Implementation

Use local MDX for v1.

Suggested frontmatter shape:

```yaml
---
title: "Cash Flow Visibility: What Growing Businesses Should Track"
description: "..."
date: "2026-08-11"
category: "Cash Flow"
image: "/images/insights/cash-flow-visibility.jpg"
author: "Ahadu Financial Solutions"
featured: true
---
```

If the chosen MDX configuration does not natively parse frontmatter, either:

- use supported remark/frontmatter tooling; or
- maintain a typed article metadata file alongside MDX.

Do not add a fragile content framework simply to obtain frontmatter.

Build reusable MDX components for:

- headings;
- links;
- images;
- quote/callout;
- table;
- divider;
- CTA;
- figure/caption.

Use static generation for article routes when possible.

---

# 23. SEO Implementation

Use Next.js Metadata APIs rather than a third-party SEO component library.

## 23.1 Site metadata

Suggested homepage title:

```text
Ahadu Financial Solutions | Accounting & Financial Management in Ethiopia
```

Suggested description:

```text
Professional bookkeeping, financial reporting, payroll administration,
tax support, and cash-flow management for entrepreneurs, startups,
SMEs, and growing businesses in Ethiopia.
```

Client should approve final wording.

## 23.2 Required SEO work

- unique title/description per page;
- canonical URLs;
- Open Graph metadata;
- Twitter/social metadata where relevant;
- favicon and app icons;
- `sitemap.ts`;
- `robots.ts`;
- semantic HTML;
- one clear H1 per page;
- descriptive internal links;
- article structured metadata where appropriate;
- Organization structured data using only verified company details;
- BreadcrumbList for nested pages if implemented;
- Article schema for Insight posts.

Do not add fake ratings/review schema.

## 23.3 Open Graph design

Create a reusable branded OG image layout:

- navy background;
- Ahadu mark;
- white editorial title;
- thin gold line;
- subtle green accent;
- no tiny unreadable details.

---

# 24. Accessibility Standard

Target **WCAG 2.2 AA** quality.

Required:

- keyboard-accessible navigation;
- visible focus states;
- semantic landmarks (`header`, `nav`, `main`, `footer`);
- correct heading order;
- alt text rules;
- form labels always visible/associated;
- errors announced appropriately;
- accordion semantics from accessible primitives;
- no content available only on hover;
- 44px minimum touch target where practical;
- sufficient contrast;
- motion reduction support;
- no autoplay audio;
- avoid text embedded inside images;
- skip-to-content link;
- logical tab order;
- accessible mobile menu;
- booking fallback if embed accessibility has issues.

Gold on white is usually better treated as decoration than small text. Test actual color combinations with a contrast checker.

---

# 25. Responsive Specification

Design mobile intentionally.

## 25.1 Breakpoint behavior

Do not code solely around specific devices. Use content-driven responsive behavior.

Typical Tailwind breakpoints are sufficient unless the design requires custom breakpoints.

### Mobile

- one primary column;
- 20px side gutters;
- 44px+ touch targets;
- heading sizes reduced using `clamp`, not arbitrary separate copies;
- no desktop pinning;
- service list becomes expandable stacked layout;
- sector grid 1–2 columns;
- CTA buttons stack when width is limited;
- footer collapses cleanly;
- images preserve meaningful focal points.

### Tablet

- 2-column layouts where they remain readable;
- avoid cramped 3–4 column cards;
- test portrait orientation.

### Desktop

- 12-column composition;
- large type;
- editorial asymmetry;
- intentional whitespace;
- signature interactions enabled.

### Wide desktop

Do not let text stretch infinitely. Keep content in max-width containers and use overflow space for decorative lines/images only.

---

# 26. Performance Requirements

The site should feel premium because it is fast, not despite being animated.

## 26.1 Performance goals

Aim for strong Core Web Vitals and Lighthouse results; use Vercel Speed Insights after deployment to validate real-world behavior.

Practical targets:

- LCP under ~2.5s on realistic mobile conditions;
- CLS under 0.1;
- responsive interactions / low INP;
- Lighthouse Performance 90+ when realistically attainable;
- Lighthouse Accessibility 95+ target;
- no multi-megabyte hero video.

## 26.2 Performance rules

- Server Components by default;
- isolate client components;
- lazy-load noncritical client libraries;
- only load GSAP where used;
- do not initialize animation observers for offscreen content unnecessarily;
- `next/image` for imagery;
- `next/font` for typography;
- responsive image `sizes`;
- do not preload every image;
- avoid giant PNG/JPEG assets;
- compress SVGs;
- avoid autoplay background video unless later approved and proven necessary;
- no unnecessary icon library imports from barrels if tree-shaking suffers;
- keep third-party scripts limited;
- load Cal.com only on booking context;
- audit bundle after major phases.

---

# 27. Security and Privacy

This is a public marketing site, but it represents a financial-services company; sloppy security signals are unacceptable.

Implement:

- HTTPS via Vercel;
- environment secrets only server-side;
- server-side form validation;
- safe error handling;
- no sensitive details in console logs;
- no public API keys that should be private;
- appropriate security headers;
- Content Security Policy tested with Cal.com and analytics integrations;
- `frame-src` limited to required booking provider domains;
- no dangerous `dangerouslySetInnerHTML` from untrusted content;
- MDX content must come from trusted repository content;
- dependency auditing before release;
- privacy/terms placeholders clearly marked until client/legal approval.

The contact form should explicitly discourage submission of sensitive credentials or confidential financial records.

---

# 28. Design Details That Make the Site Feel Expensive

These are small but important:

1. Use **thin rules** between editorial rows rather than enclosing everything in cards.
2. Large headings should align to a consistent grid.
3. Section eyebrows should use consistent uppercase tracking.
4. Reuse the gold line motif instead of adding random decorative elements.
5. Keep image crops architectural and directional.
6. Use whitespace as part of the design.
7. Make hover animation subtle; 4–8px movement is enough.
8. Use only one strong accent per composition.
9. Avoid centered layouts for every section; alternate left/right editorial balance.
10. Make transitions between light and dark sections intentional.
11. Use `01`, `02`, etc. as editorial indexing throughout the website.
12. Keep border colors very soft on light surfaces.
13. Use a single icon language.
14. Use strong typographic hierarchy rather than decorative UI clutter.
15. Use the Ahadu mark as a geometry source, not a watermark everywhere.

---

# 29. Phase-by-Phase Implementation Plan

The developer/AI should execute the project in these phases. Do not jump directly to animation before the content, layout, and responsive behavior are stable.

---

## PHASE 0 — Requirements, Source Audit, and Asset Preparation

### Objective

Establish the source of truth before writing production UI.

### Tasks

- Read both supplied Ahadu documents completely.
- Review the brand board.
- Create a source-content inventory:
  - company name;
  - founder name/title;
  - contact information;
  - tagline;
  - services;
  - service inclusions;
  - vision;
  - mission;
  - values;
  - sectors;
  - engagement journey;
  - approved claims.
- Identify conflicts such as `Ahadu Financial Solution` vs `Ahadu Financial Solutions` vs `Ahadu Accounting and Business Agency`.
- Default website brand to `Ahadu Financial Solutions`, but flag inconsistency for client review.
- Inventory supplied logo/image files.
- Determine whether clean SVG/PNG brand assets exist.
- If only the brand board JPEG exists, create temporary development assets and mark them `TODO: replace with official export`.
- Identify watermarked presentation imagery and exclude it from final production use unless clean source assets are provided.
- Confirm final contact details before production release.

### Deliverable

A short `docs/content-audit.md` or equivalent internal checklist.

### Acceptance criteria

- no invented service;
- no invented statistics;
- no invented awards/testimonials;
- all source conflicts documented;
- required brand assets identified.

### Suggested commit

```text
chore: audit Ahadu content and brand assets
```

---

## PHASE 1 — Project Scaffold and Engineering Foundation

### Objective

Create a clean, stable Next.js project.

### Tasks

- create Next.js App Router project with TypeScript, Tailwind, ESLint, `src/`;
- initialize Git;
- initialize shadcn/ui;
- install required dependencies;
- configure MDX;
- configure `@/*` alias;
- add `.env.example`;
- add Prettier if used;
- add Playwright;
- configure scripts:

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint .",
  "typecheck": "tsc --noEmit",
  "test:e2e": "playwright test"
}
```

- create base folder structure;
- verify `pnpm build` works before UI implementation.

### Acceptance criteria

```bash
pnpm lint
pnpm typecheck
pnpm build
```

all pass.

### Suggested commit

```text
chore: scaffold Ahadu Next.js website
```

---

## PHASE 2 — Brand Tokens and Global Design System

### Objective

Build the visual foundation before sections.

### Tasks

- configure official Ahadu color variables;
- map variables to shadcn theme tokens;
- configure typography with `next/font`;
- create global container utility;
- define section spacing utilities;
- define focus style;
- define reusable heading/eyebrow patterns;
- define buttons:
  - primary navy/white or gold/navy depending surface;
  - secondary outline;
  - text-arrow link;
- create line/divider primitives;
- create `SectionHeading` if useful;
- create brand `UnityLine`, `PrecisionGrid`, `UnityArc` components/patterns;
- create reduced-motion helpers;
- ensure dark and light surfaces have correct contrast.

### Acceptance criteria

Create an internal `/style-guide` route temporarily or Storybook-like development page containing:

- headings;
- paragraphs;
- buttons;
- inputs;
- icons;
- colors;
- cards;
- lines;
- dark/light surfaces.

Delete or protect the route before production if it is not intended to be public.

### Suggested commit

```text
feat: establish Ahadu brand design system
```

---

## PHASE 3 — Global Layout, Header, Mobile Navigation, Footer

### Objective

Complete global shell.

### Tasks

- implement root layout metadata;
- skip-to-content link;
- desktop header;
- sticky state after scroll;
- mobile Sheet navigation;
- reusable CTA button;
- site footer;
- active-link behavior;
- responsive logo switching if required;
- `main` landmark and IDs;
- test keyboard navigation.

### Acceptance criteria

- works on 320px width through large desktop;
- mobile nav does not overflow;
- Esc/focus behavior works;
- CTA always accessible;
- logo remains sharp;
- footer does not become excessively tall.

### Suggested commit

```text
feat: build responsive site navigation and footer
```

---

## PHASE 4 — Homepage Foundation: Hero + Ahadu Story + Growth Problem

### Objective

Build the first emotional arc of the homepage.

### Tasks

- implement Hero visual composition;
- add hero image/placeholder with correct `next/image` behavior;
- build responsive text hierarchy;
- implement CTA routes;
- implement Meaning of Ahadu section;
- implement Growth Paradox section;
- add only basic static/transitional animation in this phase;
- test typography on phone and laptop;
- verify hero does not cause horizontal overflow.

### Acceptance criteria

- page looks premium even with animations disabled;
- H1 visible without waiting on JS;
- hero CTA above fold on common mobile sizes where practical;
- image crop remains intentional;
- no layout shift when font/image loads.

### Suggested commit

```text
feat: build Ahadu homepage hero and brand story
```

---

## PHASE 5 — Services + Ahadu Framework + Advantage

### Objective

Build the commercial core of the site.

### Tasks

- create typed service data;
- implement interactive desktop service index;
- implement mobile service layout;
- build related service links;
- build Ahadu Framework diagram;
- build Ahadu Advantage comparison;
- ensure content remains source-supported;
- add service preview CTA.

### Acceptance criteria

- all five core services represented;
- no service content requires hover to be read;
- each service can link to detail page;
- mobile framework diagram remains legible;
- advantage wording does not make unfair/unprovable competitor claims.

### Suggested commit

```text
feat: add services showcase and Ahadu framework
```

---

## PHASE 6 — Signature Engagement Journey Animation

### Objective

Build the primary scrollytelling experience.

### Tasks

- implement semantic content first;
- desktop sticky/pinned composition;
- integrate GSAP ScrollTrigger only if needed;
- animate progress line;
- synchronize active stage;
- clean up GSAP contexts on unmount;
- implement reduced-motion fallback;
- implement separate non-pinned mobile timeline;
- test resize/orientation changes;
- test trackpad, mouse wheel, keyboard scrolling, touch.

### Acceptance criteria

- no scroll lock;
- user can scroll through normally;
- no blank “dead” scroll distances;
- mobile has normal document flow;
- reduced motion removes scrollytelling dependency;
- section works after client-side navigation.

### Suggested commit

```text
feat: implement Ahadu engagement journey
```

---

## PHASE 7 — Sectors + Outcomes + Founder/About Preview

### Objective

Complete expertise and trust narrative.

### Tasks

- build sector grid;
- build outcome section;
- create abstract non-data diagrams;
- build founder/about preview;
- use authentic founder image only if provided;
- add About CTA.

### Acceptance criteria

- all listed sectors represented accurately;
- no fake KPI figures;
- visual chart elements cannot be mistaken for real performance data;
- founder identity/title matches client-approved source.

### Suggested commit

```text
feat: add sector expertise outcomes and founder story
```

---

## PHASE 8 — Insights Preview + FAQ + Final CTA

### Objective

Complete homepage conversion path.

### Tasks

- build featured Insight preview from typed article data;
- build FAQ data/component;
- build final CTA;
- finalize footer transition;
- audit section rhythm;
- reduce unnecessary repeated cards.

### Acceptance criteria

- homepage has a coherent beginning/middle/end;
- booking CTA appears naturally at key moments but not every screen;
- FAQ keyboard accessible;
- no empty blog placeholders that look broken.

### Suggested commit

```text
feat: complete homepage content and conversion sections
```

---

## PHASE 9 — Secondary Marketing Pages

### Objective

Build complete route structure.

### Tasks

- About page;
- Services index;
- five service pages;
- FAQ page;
- Contact page shell;
- Book page shell;
- Privacy placeholder;
- Terms placeholder;
- Not Found page.

Use reusable layouts; do not copy/paste large repeated markup.

### Acceptance criteria

- every navigation link works;
- no placeholder lorem ipsum;
- no route has missing metadata;
- service pages reflect source inclusions.

### Suggested commit

```text
feat: add Ahadu marketing and service pages
```

---

## PHASE 10 — MDX Insights System

### Objective

Implement lightweight content publishing without a CMS.

### Tasks

- configure Next.js MDX;
- create article metadata model;
- create content collection helper;
- sort posts by date;
- build Insight index;
- build `[slug]` routes;
- create MDX typography components;
- build related posts;
- add article metadata/OG;
- create 1–3 clearly marked sample/draft posts only if real article content is not supplied.

Do not publish fabricated professional financial advice as if written by Ahadu.

### Acceptance criteria

- adding a new article does not require modifying several unrelated files;
- bad/missing slugs return 404;
- build succeeds with article content;
- article layout excellent on mobile.

### Suggested commit

```text
feat: implement MDX insights publishing
```

---

## PHASE 11 — Booking and Contact Functionality

### Objective

Make the site operational without a separate backend.

### Booking tasks

- create Cal.com event type externally;
- configure link via environment variable;
- embed on `/book`;
- style wrapper;
- loading state;
- fallback direct link;
- test mobile iframe sizing.

### Contact tasks

- build React Hook Form;
- Zod client/server schema;
- Next.js route handler;
- Resend integration;
- success/error states;
- honeypot;
- no sensitive logging;
- environment configuration.

### Acceptance criteria

- valid contact form sends successfully in preview/production test environment;
- invalid fields show accessible errors;
- duplicate submission is discouraged while request is in flight;
- API key is never visible client-side;
- booking page works without a custom database.

### Suggested commit

```text
feat: add consultation booking and contact workflow
```

---

## PHASE 12 — Motion Polish

### Objective

Add premium movement only after every layout is stable.

### Tasks

- hero reveal sequencing;
- navbar transition;
- section entrance variants;
- image masks;
- small parallax accents;
- service-row hover motion;
- line draw animations;
- outcomes line movement;
- final CTA arc animation;
- reduced-motion audit;
- mobile motion reduction.

### Animation rule

If an animation does not improve hierarchy, storytelling, feedback, or brand personality, remove it.

### Acceptance criteria

- animations are smooth on mid-range mobile hardware;
- no content flashes invisible if JS fails;
- no animation delays interaction;
- no motion sickness patterns;
- reduced motion works globally.

### Suggested commit

```text
feat: polish Ahadu motion system
```

---

## PHASE 13 — SEO, Accessibility, Performance, and Production QA

### Objective

Prepare for real users.

### SEO tasks

- titles/descriptions;
- OG images;
- structured data;
- sitemap;
- robots;
- canonicals;
- favicons;
- internal linking.

### Accessibility tasks

- keyboard pass;
- screen-reader landmark pass;
- form errors;
- heading hierarchy;
- contrast;
- focus states;
- reduced motion;
- touch target check.

### Performance tasks

- Lighthouse runs;
- bundle analysis if needed;
- image compression;
- remove unused client components;
- verify lazy loading;
- Speed Insights.

### Browser/device tasks

Test:

- Chrome desktop;
- Firefox desktop;
- Safari desktop if available;
- Edge;
- iPhone Safari;
- Android Chrome;
- small 320/360px viewport;
- 390/430px modern phone widths;
- tablets;
- 13–15 inch laptop widths;
- large desktop.

### Suggested commit

```text
chore: complete production QA and optimization
```

---

## PHASE 14 — Vercel Deployment and Launch

### Objective

Deploy safely and verify production behavior.

### Tasks

- connect Git repository to Vercel;
- configure preview deployments;
- add environment variables;
- connect production domain;
- configure DNS;
- verify HTTPS;
- test www/non-www canonical behavior;
- send live contact form test;
- complete live booking test;
- verify metadata social preview;
- verify sitemap/robots;
- enable Analytics/Speed Insights if client-approved;
- run final Lighthouse from production URL;
- inspect 404;
- remove temporary assets/dev routes;
- confirm no watermarked source images are live.

### Launch gate

Do not launch until:

- client-approved brand/logo assets are used;
- contact details verified;
- legal pages approved or clearly finalized;
- all claims reviewed;
- booking works;
- contact works;
- no console errors;
- no broken links;
- no layout overflow;
- mobile experience approved.

### Suggested commit

```text
chore: prepare Ahadu website for production launch
```

---

# 30. Landing Page Final Visual Rhythm

When complete, scrolling should feel approximately like this:

```text
NAVY / CINEMATIC
Hero
↓

OFF-WHITE / EDITORIAL
Meaning of Ahadu
↓

WHITE / PROBLEM STORY
Growth Paradox
↓

DEEP NAVY / IMMERSIVE
Services
↓

OFF-WHITE / STRUCTURED
Ahadu Framework
↓

WHITE + NAVY CONTRAST
Ahadu Advantage
↓

LIGHT / PRECISION GRID
Engagement Journey
↓

WHITE / CLEAN GRID
Sector Expertise
↓

DEEP NAVY / OUTCOME FOCUS
Measurable Outcomes
↓

OFF-WHITE / HUMAN
Founder / About
↓

WHITE / EDITORIAL
Insights
↓

OFF-WHITE
FAQ
↓

DEEP NAVY / LARGE TYPE
Final CTA
↓

NAVY
Footer
```

This alternation prevents the page from becoming one giant dark site or a monotonous white document.

---

# 31. Interaction Details

## Buttons

Primary button behavior:

- 44–48px minimum height;
- slight arrow shift on hover;
- background transition ~200ms;
- no dramatic scale;
- pressed state slightly darker;
- visible focus ring.

## Text links

Use an underline or gold line that grows from left to right.

## Cards

If a card is used:

- subtle border;
- small elevation or none;
- hover translate `-2px` to `-4px` maximum;
- avoid large shadow explosions.

## Images

Hover zoom only when an image is clearly interactive:

```text
scale 1 → 1.03 or 1.04
```

No more.

## Cursor

Do not build a custom cursor. It usually reduces usability and is unnecessary here.

---

# 32. Content Writing Rules for the AI/Developer

1. Preserve the meaning of the supplied documents.
2. Rewrite long corporate paragraphs into concise web copy rather than dumping entire pages.
3. Do not add achievements the company has not provided.
4. Do not turn the vision into an existing achievement.
5. Avoid generic buzzword overload (`revolutionary`, `world-class`, `game-changing`) unless explicitly approved.
6. Prefer specific service language.
7. Keep finance/tax language conservative and accurate.
8. Use `Ahadu Financial Solutions` consistently.
9. Use `Insights` for the blog experience.
10. Use `Book a Consultation` as the primary CTA.
11. Avoid overly casual language.
12. Use Ethiopia/Addis Ababa positioning where relevant and verified.

---

# 33. Error, Loading, and Empty States

Premium sites still need failure states.

## Contact form

Loading:

```text
Sending…
```

Success:

```text
Thank you. Your message has been sent to Ahadu Financial Solutions.
```

Error:

```text
We couldn’t send your message right now. Please try again or contact Ahadu directly by email.
```

Do not expose technical API errors.

## Booking

If embed fails:

```text
The booking calendar could not load. Open the booking page directly instead.
```

## Insights empty state

If no approved posts exist:

```text
Insights from Ahadu are coming soon.
```

Do not publish fake placeholder articles merely to fill the grid.

---

# 34. Analytics Events Worth Tracking

Only after analytics is approved.

Potential events:

```text
book_consultation_click
contact_form_start
contact_form_submit_success
service_page_view
insight_open
booking_fallback_click
phone_click
email_click
```

Do not track sensitive form content or financial information.

---

# 35. Playwright E2E Coverage

At minimum test:

1. homepage loads and H1 is visible;
2. desktop navigation reaches all primary routes;
3. mobile menu opens/closes;
4. primary CTA reaches `/book`;
5. services links resolve;
6. FAQ expands using keyboard;
7. contact form blocks invalid submission;
8. contact form can show success using a mocked/test flow;
9. Insight listing opens article;
10. missing Insight slug returns not-found behavior;
11. no horizontal overflow at representative mobile widths;
12. reduced-motion mode does not hide content.

---

# 36. Manual QA Checklist

Before marking the project done, verify all of these manually.

## Content

- [ ] Company name consistent
- [ ] Founder name/title correct
- [ ] Services match supplied materials
- [ ] Contact details verified
- [ ] No invented numbers
- [ ] No invented testimonials
- [ ] No unsupported security claims
- [ ] Vision not presented as current achievement
- [ ] Tax wording approved
- [ ] Legal text approved

## Brand

- [ ] Correct navy/green/gold palette
- [ ] Production logo is sharp/vector where possible
- [ ] White logo used correctly on dark backgrounds
- [ ] Gold remains restrained
- [ ] Icon style consistent
- [ ] No generic SaaS gradients

## Layout

- [ ] No horizontal overflow
- [ ] All sections align to consistent grid
- [ ] Mobile gutters consistent
- [ ] Text line lengths readable
- [ ] Footer responsive
- [ ] Hero works at short laptop heights

## Motion

- [ ] Hero animation smooth
- [ ] No content blocked by animation
- [ ] Engagement journey usable with touch
- [ ] Reduced motion works
- [ ] No janky scroll
- [ ] No excessive transforms

## Accessibility

- [ ] Skip link
- [ ] Focus visible
- [ ] Keyboard navigation
- [ ] Semantic headings
- [ ] Labels for every form field
- [ ] Contrast passes
- [ ] 44px touch targets where appropriate
- [ ] Decorative images have empty alt
- [ ] meaningful images have descriptive alt

## Performance

- [ ] Hero image optimized
- [ ] No unnecessary preload
- [ ] Cal.com not loaded globally
- [ ] GSAP isolated
- [ ] no giant video assets
- [ ] build output reviewed
- [ ] Lighthouse checked
- [ ] Speed Insights enabled if approved

## SEO

- [ ] Homepage metadata
- [ ] Route metadata
- [ ] OG image
- [ ] favicon
- [ ] sitemap
- [ ] robots
- [ ] canonical URLs
- [ ] structured data uses verified facts

## Functionality

- [ ] Booking works
- [ ] Booking fallback works
- [ ] Contact form works
- [ ] Invalid form errors work
- [ ] All internal links work
- [ ] 404 works
- [ ] social/contact links correct

---

# 37. AI Coding Agent Execution Rules

If this document is handed to an AI coding agent, the agent should follow these instructions:

1. **Read this entire guide before coding.**
2. **Inspect existing repository state before creating files.**
3. Implement one phase at a time.
4. Do not skip responsive behavior until the end.
5. Do not add dependencies unless they solve a specific requirement.
6. Do not replace source-backed Ahadu content with generic finance copy.
7. Do not invent company facts.
8. Keep Server Components as the default.
9. Keep client-side JavaScript as small as practical.
10. Build semantic content before animation.
11. Test each phase before moving on.
12. Run lint/typecheck/build regularly.
13. Prefer reusable typed data structures for services, sectors, FAQ, journey, and Insights metadata.
14. Do not modify brand colors unless explicitly instructed.
15. Do not introduce another UI library alongside shadcn unless necessary.
16. Do not install Lenis by default.
17. Do not create a separate backend/database for v1.
18. Do not include watermarked presentation screenshots in production.
19. Do not use AI-generated founder/team portraits.
20. Never expose Resend secrets in client code.
21. Document any source ambiguity instead of silently guessing.
22. If a required asset is missing, use a clearly marked temporary placeholder and continue other work rather than inventing a final asset.
23. Before completing each phase, state what was implemented and what remains.
24. Keep the Git working tree clean after phase commits when working in a repository where commits are expected.

---

# 38. Definition of Done

The project is done only when it is not merely “implemented,” but ready to represent a financial-services company publicly.

A complete result means:

- visually distinctive Ahadu-specific design;
- official brand palette correctly applied;
- polished responsive experience;
- excellent landing-page storytelling;
- all core routes complete;
- source-supported service content;
- Insights system functioning;
- booking functioning;
- contact form functioning;
- high-quality accessibility;
- motion respects user preferences;
- production performance checked;
- SEO metadata complete;
- no fake claims/data;
- no placeholder/watermarked final assets;
- Vercel production deployment verified.

---

# 39. Final Creative Direction Summary

The final site should not feel like an accounting template.

It should feel like **Ahadu**.

The website’s signature identity comes from combining:

```text
Deep Ahadu Navy
+ disciplined use of Green
+ small Gold details
+ editorial serif typography
+ precise modern sans-serif UI
+ Addis/business architecture imagery
+ subtle geometric A-inspired lines
+ generous whitespace
+ light/dark visual rhythm
+ restrained Motion animations
+ one memorable Engagement Journey scroll sequence
```

The visual message should be:

```text
ONE PARTNER.
CLEARER FINANCIAL SYSTEMS.
STRONGER DECISIONS.
SUSTAINABLE GROWTH.
```

The emotional message should be:

```text
Trust us with the financial structure behind your ambition.
```

And the practical path for the visitor should always remain obvious:

```text
Understand Ahadu
→ Explore services
→ Build trust
→ See how the process works
→ Book a consultation
```

If a design decision makes the site look more fashionable but less trustworthy, choose trust.

If an animation makes the site more impressive but less readable, choose readability.

If a new package adds complexity without clear value, do not add it.

If marketing copy makes a stronger claim than the supplied company materials support, do not publish it.

That discipline is what will make the website look genuinely premium rather than simply decorated.

---

# 40. Technical Reference Notes — Checked for the 2026 Implementation Context

The implementation approach in this guide aligns with the current official documentation available when this plan was prepared:

- Next.js App Router and Metadata APIs: https://nextjs.org/docs/app
- Next.js MDX guide: https://nextjs.org/docs/app/guides/mdx
- Next.js image optimization: https://nextjs.org/docs/app/getting-started/images
- Next.js font optimization: https://nextjs.org/docs/app/getting-started/fonts
- shadcn/ui Next.js installation: https://ui.shadcn.com/docs/installation/next
- Motion for React: https://motion.dev/docs/react
- Motion scroll animations: https://motion.dev/docs/react-scroll-animations
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Resend with Next.js: https://resend.com/docs/send-with-nextjs
- Cal.com documentation: https://cal.com/docs
- Vercel Web Analytics: https://vercel.com/docs/analytics
- Vercel Speed Insights: https://vercel.com/docs/speed-insights
- Next.js testing guide: https://nextjs.org/docs/app/guides/testing
- Next.js production checklist: https://nextjs.org/docs/app/guides/production-checklist

Always re-check official documentation if implementation happens substantially later than the date this guide was created.

---

## End of Implementation Guide
