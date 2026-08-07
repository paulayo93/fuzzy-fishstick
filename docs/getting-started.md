# Getting started

Run the Ovwspelo landing page on your machine.

## Prerequisites

- **Node.js** 18 or newer (LTS recommended)
- **npm** (comes with Node)

Check versions:

```bash
node -v
npm -v
```

## Install

From the project root (`pelo/`):

```bash
cd /Users/paul/projects/pelo
npm install
```

## Run the dev server

```bash
npm run dev
```

Open **http://localhost:5173/** in your browser. Vite hot-reloads when you edit files under `src/`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Typecheck (`tsc -b`) and build production assets into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run Oxlint on the project |

## Production build locally

```bash
npm run build
npm run preview
```

Preview uses a different port than `dev` (Vite prints the URL in the terminal).

## Next

- Edit site copy → [Content](./content.md)
- Understand structure → [Architecture](./architecture.md)
- Put it online → [Deploy](./deploy.md)
