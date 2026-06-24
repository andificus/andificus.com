# Andificus

Personal brand website, portfolio, and creative archive of Andrew Wentzloff.

**Live:** [andificus.com](https://andificus.com)

---

## What This Is

Andificus is a content-focused destination — not a SaaS product, not a dashboard, not a developer portfolio template. It is the digital home of a modern artificer: a place where technology, photography, design, writing, and creative work coexist.

**Create · Explore · Understand**

The visual identity is built around the Andificus mark: a stylized A monument with sacred geometry, a central orb of knowledge, and celestial framing. The design language — obsidian surfaces, silver structure, gold light — derives directly from that symbol.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + custom CSS token system |
| Animation | Framer Motion |
| Fonts | Cinzel (display), Geist (body) via `next/font` |
| Hosting | Vercel (Hobby plan) |
| Analytics | Vercel Web Analytics |
| Source control | GitHub |

**No backend.** Fully static. No database, no auth, no cold-start dependencies. Theme is hard-set to dark.

---

## Project Structure

```
andificus/
├── app/
│   ├── components/
│   │   ├── AboutPageContent.tsx    About page content
│   │   ├── AndificusLogo.tsx       Mark + wordmark lockup component
│   │   ├── Divider.tsx             Celestial section separator
│   │   ├── Footer.tsx              Site footer
│   │   ├── HomePageContent.tsx     Homepage content
│   │   ├── Motion.tsx              Shared animation primitives
│   │   └── NavBar.tsx              Navigation + mobile overlay
│   ├── about/
│   │   └── page.tsx                About route
│   ├── globals.css                 Design tokens + component classes
│   ├── layout.tsx                  Root layout, fonts, metadata
│   ├── opengraph-image.tsx         Auto-generated OG image
│   ├── page.tsx                    Home route
│   ├── sitemap.ts                  Auto-generated sitemap
│   └── ThemeProvider.tsx           Hard-sets dark theme
├── public/
│   ├── images/
│   │   └── andificus-mark.png      Brand mark (placeholder PNG — SVG rebuild in progress)
│   ├── apple-touch-icon.png        Home screen icon
│   ├── favicon.ico
│   └── robots.txt
├── next.config.ts                  Security headers, CSP
└── ANDIFICUS_CHECKLIST.md          Design review and improvement tracking
```

---

## Design System

### Color Tokens

```css
--bg:             #0a0a0a;   /* obsidian base */
--surface:        #0f0f0f;   /* card surface */
--surface-raised: #141414;   /* elevated panel */
--border:         #2a2518;   /* warm gold-tinted border */
--border-strong:  #3a3120;

--text:           #d9d9d9;   /* platinum — primary text */
--text-muted:     #999999;   /* silver — secondary text */

--gold:           #D4A843;   /* the only accent colour */
--gold-bright:    #e6c585;   /* gold hover state */
```

Gold is the single primary accent. Use it sparingly — it should feel rare and intentional, not decorative.

### Typography

- **Display / headings:** Cinzel — inscriptional, monumental, positive letter-spacing
- **Body:** Geist — modern, highly readable, high contrast

### Key CSS Classes

| Class | Purpose |
|---|---|
| `.card` | Surface panel — obsidian, hairline border, gold corner brackets |
| `.btn .btnPrimary` | Gold outline button |
| `.btn .btnGhost` | Silver outline button |
| `.h2` | Section heading in Cinzel uppercase |
| `.titleHeading` | Page-level h1 in Cinzel |
| `.eyebrow` | Small uppercase label in gold |
| `.p` | Body copy |
| `.divider` | Celestial section separator |

---

## Development

### Prerequisites

- Node.js 18+
- npm

### Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Always run a build before merging to `main`. TypeScript errors that pass in dev will fail on Vercel.

---

## Branch Workflow

```
dev     ← all active development happens here
main    ← production; every push triggers a Vercel deploy
```

**Day-to-day:**
```bash
git checkout dev
# make changes, test locally
git add .
git commit -m "description"
git push
```

**Deploy to production:**
```bash
git checkout main
git merge dev
git push
git checkout dev   # switch back immediately
```

Vercel is configured to ignore builds on non-`main` branches via the Ignored Build Step script. Only deliberate merges to `main` trigger production deploys.

---

## Performance

Target: **100/100/100/100** across all Lighthouse categories. This baseline was established early and should be protected through every redesign change.

Two items that cannot be fixed without framework changes:
- `unsafe-inline` in `script-src` — required by Next.js
- Trusted Types — Next.js limitation

Do not attempt to resolve these. Everything else should remain green.

---

## Security

Security headers are set in `next.config.ts`:

- `Content-Security-Policy` — restricts resource origins
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security` — HSTS with preload
- `Cross-Origin-Opener-Policy: same-origin`

Do not remove or weaken these headers. If a new external resource needs to be added (new font, image CDN, analytics), update the CSP explicitly rather than broadening existing directives.

---

## Content Rules

Public-facing copy must follow these rules without exception:

- Display name is **Andrew Wentzloff** — never "Andy" on the site
- **No em dashes** anywhere in copy — rewrite sentences instead
- Use **"Microsoft Entra ID"** — never "Azure AD" in current-tense descriptions
- **No certifications** mentioned — not held, not in progress, not planned
- **No employer names** — tell the story through roles and environments
- **No personal email** on the public site — contact routes through LinkedIn
- **No resume file** — link to LinkedIn instead

---

## Future Architecture

Content will live as files in the repository — no hosted CMS, no external dependencies.

| Content type | Format |
|---|---|
| Journal / writing | MDX with frontmatter |
| Portfolio projects | Typed TypeScript or JSON + optional MDX body |
| Gallery metadata | Structured data files |

Planned navigation as content is added: **Home · About · Portfolio · Gallery · Journal · Resources · Connect**

New nav links are only added once real content exists behind them. No placeholder pages.

---

## Logo

The current mark (`andificus-mark.png`) is a placeholder based on an AI-generated concept image. An SVG rebuild is in progress in Inkscape.

The SVG system will support four variants from a single geometry source:

| Variant | Elements | Used for |
|---|---|---|
| Favicon | A + orb | Browser tab, bookmarks |
| Navbar | A + spine + orb + vessel | Navigation lockup |
| Hero | Full mark + ring + arcs | Homepage monument |
| Ceremonial | Full system | About, OG image, social banners |

The mark uses silver for the monument structure (creation, craftsmanship, architecture) and gold for the orb and spine tip (discovery, understanding, illumination).

---

## License

Personal project — all rights reserved. Not open source.
