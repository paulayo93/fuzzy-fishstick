# Editing content

Most marketing copy lives in `src/data/`. Change those files and the UI updates automatically.

## Company details

File: [`src/data/company.ts`](../src/data/company.ts)

| Field | Used for |
|-------|----------|
| `name` | Full legal name (hero, footer, titles) |
| `shortName` | Navbar wordmark |
| `tagline` | Hero and footer |
| `email`, `phone` | Contact page, footer |
| `address.line1` / `line2` | Contact and footer |
| `hours` | Contact side panel |
| `navLinks` | Navbar and footer navigation |
| `services` | Home capabilities section |
| `values` | About page values |

Example — update contact email:

```ts
export const company = {
  // ...
  email: 'hello@ovwspelo.com',
  // ...
} as const
```

### Services icons

Each service has an `icon` string keyed to lucide icons in `Home.tsx` (`Layers`, `Drill`, `ShieldCheck`, `Gauge`). If you add a new icon name, import and map it in `src/pages/Home.tsx`.

## Blog posts

File: [`src/data/blogPosts.ts`](../src/data/blogPosts.ts)

Each post includes:

| Field | Notes |
|-------|-------|
| `id` | Unique slug-style id |
| `title` | Card heading |
| `excerpt` | Short summary |
| `date` | ISO date (`YYYY-MM-DD`) |
| `category` | Label on the card image |
| `coverImage` | Image URL (currently Unsplash) |
| `readTime` | Display string, e.g. `6 min read` |

Add a new object to the `blogPosts` array to show another card on `/blog`. There is no individual post detail route yet — the blog page is a listing only.

## Page-specific copy

Some headlines and body text are written directly in page components:

- `src/pages/Home.tsx` — hero CTAs, section blurbs, image URLs
- `src/pages/About.tsx` — story, mission/vision, domains list
- `src/pages/Contact.tsx` — page intro and “What to include” tips
- `src/pages/Blog.tsx` — page intro

Edit those files for one-off section text that is not shared across pages.

## Images

Hero and blog covers use remote Unsplash URLs. Replace with your own hosted assets or files under `public/` (reference as `/your-image.jpg`).

## Contact form behavior

The form validates name, email, subject, and message, then shows a success message. Submissions are **not** emailed anywhere. To collect real leads, integrate a form backend and update `ContactForm.tsx`.

## Meta title / description

Site-wide SEO basics live in [`index.html`](../index.html) (`<title>` and `<meta name="description">`).
