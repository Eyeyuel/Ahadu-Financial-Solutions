---
name: Ahadu Financial Solutions
description: Premium Ethiopian Financial Advisory & Management Web Experience
colors:
  primary: "#0B1B3A"
  emerald: "#1FA971"
  gold: "#F2B84B"
  neutral-bg: "#F8FAFC"
  neutral-text: "#111827"
  navy-dark: "#071228"
  emerald-light: "#E8F6F0"
  gold-light: "#FEF7E8"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.emerald}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.gold}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
---

# Design System: Ahadu Financial Solutions

## Overview

**Creative North Star: "The Ethiopian Financial Sanctuary"**

Ahadu Financial Solutions bridges modern corporate financial authority with subtle Ethiopian cultural heritage. The visual language conveys high integrity, precision, and forward-looking partnership. It avoids generic SaaS gradients and hyper-stimulated crypto visuals in favor of strong Swiss grid structures, deep navy backgrounds, crisp gold accents, and lush emerald highlights.

**Key Characteristics:**
- Deep Navy canvas (`#0B1B3A`) paired with clean light-neutral contrast (`#F8FAFC`).
- Metallic Warm Gold (`#F2B84B`) used sparingly for high-value precision accents.
- Emerald Green (`#1FA971`) representing sustainable growth and prosperity.
- Amharic typography badges (**አሐዱ**) for cultural unity and identity grounding.

## Colors

The color palette is derived directly from the official brand identity sheet, balancing corporate depth with vital growth accents.

### Primary
- **Deep Ahadu Navy** (`#0B1B3A`): Dominates headers, hero backgrounds, and dark executive panels.
- **Midnight Navy** (`#071228`): Used for elevated dark cards and footer backdrops.

### Secondary
- **Emerald Green** (`#1FA971`): Represents growth, vitality, and primary action CTAs.
- **Warm Gold** (`#F2B84B`): Represents precision, excellence, and luxury border highlights.

### Neutral
- **Light Off-White Canvas** (`#F8FAFC`): Clean background for high readability sections.
- **Charcoal Text** (`#111827`): Deep neutral text color for maximum legibility.
- **Slate Text Muted** (`#4B5563`): Subtitle and body text neutral.

### Named Rules
**The Gold Accent Rule.** Warm Gold (`#F2B84B`) is an accent of precision. It is used on ≤10% of any given screen for highlights, badges, and active indicators.

## Typography

**Display Font:** Inter / System Sans  
**Body Font:** Inter / System Sans  

### Hierarchy
- **Display** (Bold, 3rem–4rem, 1.15 line-height): Hero headlines.
- **Headline** (Bold, 2rem–2.5rem, 1.2 line-height): Section titles.
- **Title** (Bold, 1.25rem–1.5rem, 1.3 line-height): Card headers.
- **Body** (Regular, 1rem, 1.6 line-height): Reading paragraphs.
- **Label** (SemiBold, 0.75rem, 0.2em letter-spacing, Uppercase): Badges & indicators.

## Layout

Designed on a strict 12-column grid with generous horizontal margins (`max-w-7xl`). Sections alternate between Deep Navy (`#0B1B3A`) and Light Off-White (`#F8FAFC`) to create visual rhythm. Responsive layout scales fluidly across mobile, tablet, and widescreen displays.

## Elevation & Depth

Surfaces use subtle 1px border highlights (`border-white/10` or `border-[#F2B84B]/30`) combined with backdrop blur (`backdrop-blur-md`) rather than heavy drop shadows.

**The Flat-With-Glow Rule.** Cards rest flat with subtle border definitions; soft gold or emerald glows appear on hover or state change.

## Shapes

- **Corners:** 12px (`rounded-xl`) for cards and buttons; 24px (`rounded-3xl`) for hero panels.
- **Borders:** Thin 1px stroke borders for precision framing.
- **Chevron Geometry:** Inspired by the official Ahadu chevron logo mark.

## Components

### Buttons
- **Primary:** Background Emerald (`#1FA971`), Text White, Rounded 12px, Gold Icon accent.
- **Secondary:** Background Navy (`#0B1B3A`), Border 1px Gold (`#F2B84B`/30), Text White.

### Cards
- **Dark Executive Card:** Background `#071228`, Border 1px `#F2B84B`/30, Padding 32px.
- **Light Feature Card:** Background `#FFFFFF`, Border 1px `#E2E8F0`, Padding 24px.

### Badges
- **Amharic Philosophy Pill:** Glass background, `#1FA971` green indicator, `#F2B84B` gold typography.

## Do's and Don't's

### Do:
- **Do** maintain strict color contrast between text and background layers.
- **Do** incorporate the Amharic cultural badge (**አሐዱ | Unity**) on key navigation touchpoints.
- **Do** keep data tables clean with explicit 1px grid dividers.

### Don't:
- **Don't** use generic purple/blue SaaS gradients or glowing floating AI blobs.
- **Don't** invent fake statistics, fake award logos, or false client counters.
- **Don't** use saturated bright colors outside the official brand palette.
