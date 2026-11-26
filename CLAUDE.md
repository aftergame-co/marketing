# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

This is the Aftergame marketing website, built with Next.js 16 (App Router, Turbopack), React 19, TypeScript 7 (strict), Tailwind CSS v4, and Tailwind UI. The site promotes Aftergame, a social tabletop gaming app, and includes marketing pages for different audiences (communities, events, publishers), a blog, and feature descriptions.

## Development Commands

Requires Node 24 (see `.nvmrc`; run `nvm use`).

```bash
# Install dependencies
yarn

# Start development server (runs on http://localhost:3000)
yarn start:dev

# Build the static site into out/ (next build + build-time image optimization)
yarn build

# Preview the built static site
npx serve out

# Type-check (TypeScript 7 `tsc`; `next build` also type-checks and fails on errors)
yarn typecheck

# Lint with Oxlint (.oxlintrc.json; `next build` does not lint)
yarn lint

# Format with Oxfmt (.oxfmtrc.json, sorts Tailwind classes); `format:check` only reports
yarn format
yarn format:check

# Regenerate data/releases.json from ../app's release notes (see Releases below)
yarn releases:sync
yarn releases:check   # exit 1 if out of date
```

## Architecture

### Next.js App Router Structure

The site uses Next.js 16's App Router pattern:

- **src/app/** - Route definitions and page components
  - Each folder represents a route (e.g., `/about`, `/blog`, `/retailers`)
  - `page.tsx` files define the page content
  - Root `layout.tsx` provides shared layout with Header/Footer
  - Static export (`output: 'export'` in next.config.ts): `yarn build` writes plain HTML/CSS/JS to `out/`

### Component Organization

- **src/sections/** - Large page sections/features (Hero sections, Footer, Header, feature blocks)
  - Named semantically by purpose (e.g., `CommunitiesHero`, `EventsPrimary`, `PrimaryFeatures`)
  - Page components import and compose these sections

- **src/components/** - Reusable UI components (Button, Logo, NavLinks, PhoneFrame, etc.)
  - Shared across multiple pages/sections

- **src/utils/** - Utility functions
  - `posts.ts` - Blog post parsing using gray-matter and remark

### TypeScript

- All source is `.ts`/`.tsx`, checked by TypeScript 7 (`typescript@^7`, the native `tsc`) in strict mode. Next 16 type-checks `next build` through that CLI.
- `next-env.d.ts` and `.next/types` are generated (`yarn typecheck` runs `next typegen` first) and gitignored.
- Shared data types live with their loaders: `PostMeta`/`Post` in `src/utils/posts.ts`; `Release`, `ChangeLabels`, `ChangeType` in `src/utils/releases.ts`. Import them rather than redefining shapes.
- Props: type them inline or with a local type, reusing `ComponentProps<'div'>` etc. for pass-through props. No `any`, no `@ts-ignore`.
- Untyped packages get a declaration in `src/types/` (e.g. `rehype-add-classes.d.ts`).
- `erasableSyntaxOnly` is on (no enums or namespaces), so Node can run `scripts/*.mts` directly.

### Linting and formatting

- Oxlint replaces ESLint. `.oxlintrc.json` carries over every `eslint-config-next` (core-web-vitals) rule, including the React Compiler rules (`react/purity`, `react/refs`, ...), and adds Oxlint's `correctness` category.
- Oxfmt replaces Prettier, with the old Prettier options and Tailwind class sorting (`sortTailwindcss`).
- Disable comments use `oxlint-disable` (`eslint-disable` also works) and the Oxlint rule names, e.g. `nextjs/no-img-element`.

### Static Export Constraints

The site is a static export hosted without a Next.js server, so:

- Dynamic routes need `generateStaticParams` (see `src/app/blog/[id]/page.tsx`, which also sets `dynamicParams = false`)
- Metadata routes (`robots.ts`, `sitemap.ts`) and feed route handlers (`feed.xml/route.ts`, `GET()` only) need `export const dynamic = 'force-static'`
- No server-only features: `next.config` redirects/rewrites/headers, proxy (middleware), route handlers that read the request, cookies, Server Actions, ISR
- Redirects live in host config, keep both in sync: `.cloudcannon/routing.json` (CloudCannon, also the 404 route) and `vercel.json` (Vercel)

### Images

- Always import `Image` from `@/components/Image`, never `next/image` (the global custom loader makes plain `next/image` fail)
- It wraps `next-image-export-optimizer`, which resizes/converts images in `public/images` to WebP during `yarn build`
- Its cache (`public/images/**/nextImageExportOptimizer/`) is gitignored
- AVIF sources aren't supported by the optimizer: pass `unoptimized`
- Give `width`/`height` the image's real aspect ratio and give `fill` images a `sizes` prop

### Blog System

Blog posts are stored as Markdown files in `/posts` with frontmatter metadata:

```markdown
---
title: 'Post Title'
date: '2024-12-31'
image: '/images/posts/image.jpg'
intro: 'Brief introduction'
category: ['general']
author_name: 'Author Name'
author_image: '/images/about/team/author.jpg'
author_title: 'Title'
---
```

The blog uses:

- `gray-matter` for parsing frontmatter
- `src/utils/markdown.ts` (`markdownToHtml`, `markdownToText`), the shared `remark` pipeline with the article Tailwind class map
- Dynamic routes via `src/app/blog/[id]/page.tsx` (`params` is a Promise in Next 15+, so `await params`)
- An RSS feed at `/blog/feed.xml` (`src/app/blog/feed.xml/route.ts`, built with `src/utils/feed.ts`)

### Releases

Release notes are written once, in the app (`../app/src/hooks/useChangelog/changelog.tsx`). The process doc is `ops/how-to/release-notes.md`.

- `yarn releases:sync` (`scripts/sync-releases.mts`, run by Node's built-in type stripping) transpiles that file with TypeScript 7's `tsc` CLI (TS 7 has no in-process transpile API), validates it, and writes **`data/releases.json`**. It is generated, so never edit it by hand: change the app and re-sync. The sync fails on unknown fields, bad dates, unknown change types, and releases that disappear (pass `--allow-removed` after adding redirects).
- Optional editorial overlays live in **`releases/<slug>.md`**, never touched by the sync. Keys: `title`, `description`, `images: [{ src, alt, caption? }]` (under `public/images/releases/`, png/jpg/webp), `og_image`, `blog_post`. The markdown body is a longer story. Overlays are validated at build time and fail loudly.
- `src/utils/releases.ts` merges both: `getReleases()`, `getReleaseBySlug()`, `renderRelease()`, `releasesMetadata()`, and so on.
- Pages:
  - `/releases` shows the latest 10 in full and an archive by year.
  - `/releases/[slug]` is static per release, with `dynamicParams = false`.
  - `/releases/feed.xml` is RSS.
  - Shared UI is `src/components/ReleaseEntry.tsx`, with New/Improved/Fixed pills that use `changelog-*` colour tokens matching the app.
- Slugs are `v3-5-build-182`, or `v2-8-3` before build numbers. There are no dots, since static hosts would treat them as file extensions. A slug is a public URL, so never change one.
- The newest build of each version also gets `id="<version>"`, so old `/releases#3.4` links still work.

### Styling

- Tailwind CSS v4, configured CSS-first in `src/styles/tailwind.css` (`@theme`, `@plugin`); there is no `tailwind.config.js`
- Custom brand colors: `gg-blue`, `gg-red`, `gg-blue-faint`
- Social media brand colors (twitter-blue, facebook-blue, etc.)
- Custom animations: marquee, spin-slow, fade-in
- Global styles in `src/styles/`

### Header/Navigation

- Fixed header with scroll-based styling changes (shadow appears on scroll)
- Responsive mobile menu using Headless UI's Popover
- Desktop navigation includes dropdown "Solutions" menu
- Navigation links defined in `src/components/NavLinks.tsx`
- Uses Headless UI v2 named components (`PopoverButton`, `TabGroup`, ...), not the v1 dot API (`Popover.Button`)

## Key Patterns

- Most components use the `Container` component for consistent max-width layout
- Motion (`motion` package, import from `motion/react`) used for animations and transitions
- Client components marked with `'use client'` directive (Header, NavLinks)
- Server components by default (most page components)
- Metadata defined in page components or root layout. Next merges page metadata shallowly, so a page that sets `alternates` uses `pageAlternates(path, feeds)` from `src/utils/site.ts` to keep its RSS `<link>`. `SITE_URL` lives there too.
- The sitemap (`src/app/sitemap.ts`) lists static pages without `lastModified`, plus blog posts and releases with their real dates

## External Services

- Google Analytics (gtag.js) configured in root layout
- Facebook app integration via meta tag
- Links to main Aftergame app at https://aftergame.app

## CloudCannon CMS

The site is configured for CloudCannon CMS:

- Source: `src/`
- Output: `out/` (static export from `yarn build`)
- Routing (redirects, 404): `.cloudcannon/routing.json`
- Upload path: `uploads/`
- Config: `cloudcannon.config.yml`

## Important Notes

- Package manager is locked to Yarn 1.22.22
- Static export (`output: 'export'`); `next start` does not apply
- `next dev` allows this machine's LAN IPs via `allowedDevOrigins` so the Network URL works
- The "Get Started" button throughout the site links to the main app
