# Andificus — Redesign Checklist

Tracks all pending improvements identified in the design review against the brand philosophy.
Check items off as they are completed and merged to `main`.

**Brand north star:** Digital observatory · Creative archive · Workshop of a modern artificer
**Design keywords:** Neo-Elven Futurism · Celestial Technology · Sacred Geometry · Ancient Future

---

## Tier 1 — Immediate Improvements

High-impact, low-risk changes that can be done now. Each is a self-contained commit on `dev`.

### Homepage (`HomePageContent.tsx`)

- [ ] **Replace "Skills and Tools" with "Current Explorations"**
  Replace the 8-card framework list (Next.js, React, TypeScript etc.) with a section framed around curiosity and active inquiry. No technology names as headers. No category labels. Focus on what is being learned and explored, not what tools are in use. This is the single highest-impact brand change.

- [ ] **Replace emoji icons on focus cards**
  Remove ☁️, 💻, 📷 from the Current Focus cards. Replace with small geometric SVG markers derived from the mark's visual language — a diamond, a minimal circle, a short rule. Gold, small, architectural.

- [ ] **Add `Divider` component between sections**
  Insert the existing `Divider` component (already built, currently unused) between each homepage section. Three dividers total. Adds ceremony and breath to the page with no content changes.

- [ ] **Reduce hero to a single primary CTA**
  Remove the ghost "Connect" button. Keep one primary action only. Consider changing "About Me" to "Enter" or "Explore" — language that communicates place rather than profession. The scroll indicator is the implicit secondary invitation.

- [ ] **Audit gold card top borders**
  Not every card needs `borderTop: '2px solid var(--gold)'`. Reserve the gold top border for one featured or elevated card per section. Use `--border` for standard cards. Gold should feel like an intentional signal, not a default decoration.

### About Page (`AboutPageContent.tsx`)

- [ ] **Fix h1 styling for Andrew Wentzloff**
  Remove `fontWeight: 800` and `letterSpacing: '-0.03em'`. Apply `.titleHeading` CSS class. The current values fight Cinzel's natural character (Cinzel is inscriptional, positive-tracking — forcing 800 weight and negative tracking compresses it into a different font entirely).

- [ ] **Remove or update the stats row**
  "AZ-104 In Progress" is cert-adjacent and specifically against content rules. Remove it. Either keep the remaining stats ("15+" and "100") or remove the row entirely and let the narrative carry the weight.

- [ ] **Fix icon wrapper border-radius on focus cards**
  The focus card icon containers have `borderRadius: 12` — a rounded container inside a sharp-cornered card is a visual inconsistency. Change to `borderRadius: 0` or remove the background wrapper entirely.

---

## Tier 2 — Next Phase Improvements

Do after Tier 1 is merged. These are more involved rewrites.

### Homepage

- [ ] **Redesign the Connect section**
  Currently a plain card with two buttons. Should feel like a threshold — a point of arrival at the end of the page journey. More vertical space, the Andificus mark at very low opacity as a centered background element, a more considered invitation rather than "Find me on LinkedIn and GitHub."

- [ ] **Refine Current Focus card descriptions**
  Current descriptions read as professional summaries ("enterprise-scale cloud operations," "From architecture decisions to production deployments"). Rewrite them as brief dispatches from active explorations — personal, process-oriented, curious. "Capturing moments and studying light" is closer to the right voice.

### Footer (`Footer.tsx`)

- [ ] **Add Andificus mark to footer**
  The mark at 8–10% opacity as a centered background element. Add "Create · Explore · Understand" in small Cinzel tracking below the copyright. Closes the page with the brand rather than just a legal line.

### About Page

- [ ] **Full About page visual redesign**
  - Move all inline styles to CSS classes
  - Apply consistent card treatment (no mixed border-radius values)
  - Update the hero photo treatment to match the new design language (square crop or architectural frame rather than circle)
  - Update section descriptions to match the brand voice refinements from Tier 1

---

## Tier 3 — Long-Term Evolution

Build when content or infrastructure is ready. Do not scaffold ahead of content.

### Homepage

- [ ] **Add "Selected Work" section**
  A curated 2–3 item showcase of actual projects. Becomes the homepage centerpiece when Portfolio content exists. Do not add placeholder cards — only real work earns this section.

- [ ] **Add a brand manifesto section**
  A short block between the hero and first content section. Not a bio, not a tagline — a brief philosophical statement about what Andificus is and why it exists. Something a visitor reads once and understands they've entered something intentional.

- [ ] **Build ambient constellation layer**
  A very faint `Constellation` component behind the hero — slow drift, occasional star, reduced-motion aware. Completes the digital observatory atmosphere without competing with content.

### Navigation (expand only as content arrives)

- [ ] **Portfolio** — add nav link when first real project page exists
- [ ] **Gallery** — add nav link when first curated photography collection exists
- [ ] **Journal** — add nav link when first journal entry is written
- [ ] **Resources** — add nav link when first resource is published

---

## Technical / Infrastructure

Standalone technical tasks not tied to visual changes.

- [ ] **Vercel Web Analytics**
  Install `@vercel/analytics`, add `<Analytics />` to `app/layout.tsx`. Free on Hobby plan, collection pauses if limit is reached — no charges possible. One package, one component, done.

- [ ] **Apple touch icon**
  Add a 180×180px square crop of the Andificus mark to `public/apple-touch-icon.png`. Shows when someone adds the site to their iPhone home screen. No code change needed — Next.js picks it up automatically.

- [ ] **`opengraph-image.tsx` — verify mark renders in production**
  The OG image fetches the mark from `https://andificus.com`. Confirm it renders correctly after the first production deploy with the mark file present.

- [ ] **Finalize Andificus SVG logo**
  The SVG rebuild is in progress in Inkscape. Once complete:
  - Replace `public/images/andificus-mark.png` placeholder with production SVG
  - Update `AndificusLogo.tsx` to use `<svg>` directly or optimized `next/image` with SVG
  - Export favicon from SVG
  - Export OG image base from SVG
  - Add Framer Motion orb pulse to the SVG component

- [ ] **Content architecture setup (Stage 2)**
  When the first Portfolio or Journal content is ready, introduce a lightweight typed content layer (Velite or Content Collections) to load MDX files and project data files at build time.

- [ ] **Lighthouse audit**
  Run after Tier 1 and Tier 2 changes are merged. Confirm 100/100/100/100 is maintained. The known unscored items (`unsafe-inline` in script-src and Trusted Types) are Next.js framework limitations — do not attempt to fix them.

- [ ] **`metadata.alternates.canonical`** — add to layout.tsx
  ```ts
  alternates: { canonical: 'https://andificus.com' }
  ```

---

## Completed

Track merged and deployed items here.

- [x] Remove Supabase, auth, dashboard, middleware
- [x] Static site — no backend dependencies
- [x] Dark-only theme — light mode and toggle removed
- [x] New design tokens — Replit-aligned palette (`#0a0a0a`, `#D4A843`, `#d9d9d9`)
- [x] Cinzel loaded via `next/font/google`
- [x] NavBar rebuilt — mobile hamburger menu, full-screen overlay
- [x] Motion.tsx cleaned — IllustrationFrame/IllustrationCard removed
- [x] ThemeProvider simplified — hard-sets dark
- [x] `globals.css` rewritten — glass removed, architectural surfaces, sharp corners, gold corner brackets
- [x] `robots.txt` cleaned — dashboard/profile/settings Disallow entries removed
- [x] `opengraph-image.tsx` created — auto-generated OG image
- [x] `AndificusLogo.tsx` updated — `var(--font-cinzel)`, `height * 0.5` wordmark ratio
- [x] Divider component created — celestial diamond separator
- [x] Hero redesigned — full viewport, centered mark, ANDIFICUS at `clamp(28px, 6.5vw, 76px)`, `whiteSpace: nowrap`
- [x] Hero glow — `drop-shadow` on mark, radial-gradient ambient (fixes mobile clipping)
- [x] About page photo — `andy.jpg` at 160×160
- [x] Dev branch workflow — Vercel ignores non-main branches
