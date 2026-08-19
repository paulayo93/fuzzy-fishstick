# Architecture

Overview of how the Ovwspelo landing page is structured.

## Stack

| Layer | Choice |
|-------|--------|
| Build tool | Vite 8 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router DOM 7 |
| Motion | Framer Motion |
| Icons | lucide-react |
| Fonts | Plus Jakarta Sans (display), Source Sans 3 (body) via Google Fonts |

There is no backend or CMS. Content lives in TypeScript data files under `src/data/`.

## Routes

Defined in [`src/App.tsx`](../src/App.tsx). All pages share [`Layout`](../src/components/Layout.tsx) (navbar + footer).

| Path | Page | File |
|------|------|------|
| `/` | Home | `src/pages/Home.tsx` |
| `/about` | About | `src/pages/About.tsx` |
| `/contact` | Contact | `src/pages/Contact.tsx` |
| `/blog` | Blog | `src/pages/Blog.tsx` |
| `*` | Redirect to `/` | — |

## Folder map

```
pelo/
├── index.html
├── vite.config.ts
├── public/                 # static assets (favicon)
├── docs/                   # this documentation
└── src/
    ├── main.tsx            # React entry
    ├── App.tsx             # router
    ├── index.css           # Tailwind + design tokens
    ├── components/
    │   ├── Layout.tsx
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── SectionHeading.tsx
    │   ├── BlogCard.tsx
    │   └── ContactForm.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   └── Blog.tsx
    └── data/
        ├── company.ts      # name, tagline, contact, services, values
        └── blogPosts.ts    # blog listing
```

## Design tokens

Brand colors and fonts are defined in [`src/index.css`](../src/index.css) via Tailwind `@theme`:

| Token | Value | Role |
|-------|-------|------|
| `navy` | `#0A1628` | Primary dark / headers |
| `navy-deep` | `#061018` | Footer / deep backgrounds |
| `steel` | `#1E3A5F` | Secondary panels |
| `copper` | `#C45C26` | Accent / CTAs |
| `surface` | `#F4F7FA` | Page background |
| `ink` / `ink-muted` | slate tones | Body text |
| `font-display` | Plus Jakarta Sans | Brand and headlines |
| `font-body` | Source Sans 3 | Body copy |

Use Tailwind classes such as `bg-navy`, `text-copper`, `font-display`.

## Page composition (Home)

1. Full-bleed hero (brand + tagline + CTAs)
2. Capabilities / services list
3. Approach band (image + copy)
4. Closing contact CTA

Shared chrome: sticky `Navbar`, site `Footer`.

## Contact form

[`ContactForm`](../src/components/ContactForm.tsx) validates on the client and shows a success state. It does **not** send email or call an API. Wiring a provider (Formspree, Resend, etc.) would be a future change.
