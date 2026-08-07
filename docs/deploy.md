# Deploy

Publish the Ovwspelo site to a shareable URL. The app is a static Vite build (`dist/`) with client-side routing.

## Hosting cost

| Platform | Plan | Price | Notes |
|----------|------|-------|-------|
| **Vercel** | Hobby | **Free** | Good for demos. ~100 GB bandwidth/mo. Site may pause if limits are hit. Intended for personal / non-commercial use. |
| **Vercel** | Pro | **$20/user/mo** | Commercial / company sites, higher limits |
| **Netlify** | Free | **Free** | 300 credits/mo; sites pause when credits run out |
| **Netlify** | Personal | **$9/mo** | More credits for solo use |
| **Netlify** | Pro | **from $20/mo** | Teams and higher traffic |

For an experimental share link, **free is enough**. For the official company site, budget about **$9–20/month**.

Custom domains (e.g. `ovwspelo.com`) are purchased separately (~$10–15/year) and pointed at Vercel or Netlify at no extra hosting charge.

---

## Recommended: Vercel

### 1. SPA rewrite (required)

React Router paths like `/about` must serve `index.html` on refresh. Add `vercel.json` at the project root before deploying:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

> This file may not exist yet. Create it before your first Vercel deploy.

### 2. Push to GitHub

The project may not be a git repository yet. From the project root:

```bash
cd /Users/paul/projects/pelo
git init
git add .
git commit -m "Initial Ovwspelo Limited landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/pelo.git
git push -u origin main
```

Create an empty GitHub repo named `pelo` (or similar) before `git push`.

### 3. Import on Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub
2. **Add New Project** → import the repo
3. Framework: **Vite** (usually auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

You get a URL such as `https://pelo-xxxx.vercel.app`. Later pushes to `main` redeploy automatically.

---

## Alternative: Netlify

1. Push the same repo to GitHub
2. [app.netlify.com](https://app.netlify.com) → **Add new site** → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

### SPA fallback on Netlify

Add `public/_redirects`:

```
/*    /index.html   200
```

Vite copies `public/` into `dist/` on build.

---

## After deploy

- Share the `*.vercel.app` or `*.netlify.app` URL
- Optional: attach a custom domain in the host’s project settings
- Optional: protect preview deployments if the site is for internal review only

## Related

- Local build check: [Getting started](./getting-started.md)
- What ships in the bundle: [Architecture](./architecture.md)
