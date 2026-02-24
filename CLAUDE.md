# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Aftergame marketing website, built with Next.js 14 (App Router), Tailwind CSS, and Tailwind UI. The site promotes Aftergame, a social tabletop gaming app, and includes marketing pages for different audiences (communities, events, publishers), a blog, and feature descriptions.

## Development Commands

```bash
# Install dependencies
yarn

# Start development server (runs on http://localhost:3000)
yarn start:dev

# Build for production (outputs to /out directory)
yarn build

# Run linting
yarn lint
```

## Architecture

### Next.js App Router Structure

The site uses Next.js 14's App Router pattern:
- **src/app/** - Route definitions and page components
  - Each folder represents a route (e.g., `/about`, `/blog`, `/communities`)
  - `page.jsx` files define the page content
  - Root `layout.jsx` provides shared layout with Header/Footer
  - Uses custom output directory: `out/` (configured in next.config.js)

### Component Organization

- **src/sections/** - Large page sections/features (Hero sections, Footer, Header, feature blocks)
  - Named semantically by purpose (e.g., `CommunitiesHero`, `EventsPrimary`, `PrimaryFeatures`)
  - Page components import and compose these sections

- **src/components/** - Reusable UI components (Button, Logo, NavLinks, PhoneFrame, etc.)
  - Shared across multiple pages/sections

- **src/utils/** - Utility functions
  - `posts.js` - Blog post parsing using gray-matter and remark

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
- `remark` ecosystem for converting Markdown to HTML with custom styling
- Dynamic routes via `src/app/blog/[id]/page.jsx`

### Styling

- Tailwind CSS with custom configuration in `tailwind.config.js`
- Custom brand colors: `gg-blue`, `gg-red`, `gg-blue-faint`
- Social media brand colors (twitter-blue, facebook-blue, etc.)
- Custom animations: marquee, spin-slow, fade-in
- Global styles in `src/styles/`

### Header/Navigation

- Fixed header with scroll-based styling changes (shadow appears on scroll)
- Responsive mobile menu using Headless UI's Popover
- Desktop navigation includes dropdown "Solutions" menu
- Navigation links defined in `src/components/NavLinks.jsx`

## Key Patterns

- Most components use the `Container` component for consistent max-width layout
- Framer Motion used for animations and transitions
- Client components marked with `'use client'` directive (Header, NavLinks)
- Server components by default (most page components)
- Metadata defined in page components or root layout

## External Services

- Google Analytics (gtag.js) configured in root layout
- Facebook app integration via meta tag
- Links to main Aftergame app at https://aftergame.app

## CloudCannon CMS

The site is configured for CloudCannon CMS:
- Source: `src/`
- Output: `out/`
- Upload path: `uploads/`
- Config: `cloudcannon.config.yml`

## Important Notes

- The site uses `distDir: 'out'` in next.config.js (custom output directory)
- Package manager is locked to Yarn 1.22.22
- Static export configuration enabled
- The "Get Started" button throughout the site links to the main app
