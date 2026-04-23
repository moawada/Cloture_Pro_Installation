# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page marketing website for **Clôture Pro Laval** — a residential/commercial fence installation company serving Montreal, Laval and Greater Montreal (Quebec, Canada). The site is bilingual-aware (English primary, French keywords embedded for local SEO).

## Development

No build step, package manager, or framework. Open `index.html` directly in a browser, or serve locally with any static file server:

```bash
# Python (built-in)
python -m http.server 8080

# Node (if npx available)
npx serve .
```

There are no linters, tests, or CI pipelines configured.

## Architecture

Three files do everything — no components, no modules, no bundler:

| File | Role |
|---|---|
| [index.html](index.html) | All markup and page sections. Also contains the `<script type="application/ld+json">` LocalBusiness schema and all SEO meta/OG tags. |
| [styles.css](styles.css) | All styles. CSS custom properties (design tokens) are defined in `:root` at the top of the file and must be used for all color/shadow/radius values. Sections are clearly delimited by banner comments matching the HTML section IDs. |
| [script.js](script.js) | Vanilla JS only. Handles: sticky header shadow, mobile nav toggle, smooth-scroll with fixed-header offset (80 px), quote form client-side validation + success state, and scroll-triggered counter animation for `.trust-num` elements. |

### Page section order (matches `id` anchors)

`#home` (hero) → `.trust-bar` → `#services` → `#why-us` → `#service-area` → `#gallery` → `.testimonials` → `#contact` → footer

### Design tokens (styles.css `:root`)

All colors come from the logo palette — do not introduce new color values outside these tokens:

```
--green-dark  #1D6B22   headers, trust bar bg, accent card bg
--green       #2A8C2F   primary CTA buttons, .highlight text, focus rings
--green-light #3AAF40   hover states
--orange      #E07B1A   .section-tag labels, badges, floating CTA, nav "Free Quote" button
--orange-light #F59332  hover states, stars, accent card stat numbers
--dark        #1A1A1A   fixed header bg, footer bg
--charcoal    #2E2E2E   body headings, form input text
--mid         #555555   body/paragraph text
--light-gray  #F4F4F0   alternating section backgrounds
```

### Responsive breakpoints

- `≤ 1024px` — 2-col services grid, 2-col area grid, 2-col footer
- `≤ 768px`  — mobile nav (hamburger), single-col everything, stacked contact form
- `≤ 480px`  — stacked hero CTAs, single-col gallery

### SEO conventions

- All location keywords (city names) must appear in both English and French equivalents where natural.
- The `<footer-seo-text>` paragraph in the footer exists solely as a keyword carrier — keep it visually subdued (`opacity ~25%`).
- The `LocalBusiness` JSON-LD schema in `<head>` must stay in sync with actual contact details whenever phone, email, or hours change.
- The `canonical` URL and all `og:` tags reference `https://www.cloturepro.ca/` — update these when the real domain is confirmed.

### Gallery placeholders

Gallery items use CSS gradient classes (`.wood`, `.pool`, `.vinyl`, `.aluminum`, `.chainlink`, `.wood2`) as stand-ins. Replace each `.gallery-placeholder` div with an `<img>` tag pointing to a real project photo when available; the wrapping `.gallery-item` and `data-label` attribute structure should be preserved.

### Quote form

The form (`#quoteForm`) has client-side-only validation and a success banner (`#formSuccess`). It does **not** submit to any backend. Wire up a form handler (e.g., Formspree, Netlify Forms, or a custom endpoint) by adding an `action` attribute and removing the `e.preventDefault()` in [script.js](script.js) when a backend is ready.

## Content that needs updating before going live

- Phone number: currently `(514) 000-0000` — appears in `index.html` (header call button, contact section, footer) and in the JSON-LD schema.
- Email: currently `info@cloturepro.ca` — confirm this mailbox exists.
- Canonical URL and `og:url`: currently `https://www.cloturepro.ca/` — confirm domain.
- Testimonials: placeholder names/stories — replace with real reviews.
- Gallery: CSS gradient placeholders — replace with real project photos.
- Stats (500+, 10+, 30+): verify these match actual business figures.
