---
name: technical-seo-skill
description: Strict enforcement of Next.js Metadata API and OpenGraph standards. Focuses on high-performance indexing, social preview optimization (OG Tags), and semantic HTML for search engine clarity without sacrificing the "vibe" or minimalist design.
---

# Technical SEO Skill

Goal: Ensure the site is discoverable and looks premium on all social platforms and search engines.

## Core Principles
- **Metadata API First:** Use Next.js 14+ `layout.tsx` metadata objects. No manual `<head>` tags in components.
- **Social Presence (OG/X):** Every page must define `openGraph` and `twitter` card properties. 
- **Semantic Hierarchy:** Use `h1`, `h2`, `section`, and `article` correctly. SEO is built on the bones of the HTML, not just tags.
- **Local SEO (Quito Focus):** Include Schema.org JSON-LD for "LocalBusiness" or "Community" referencing Quito, Ecuador.

## The SEO Checklist
- **Dynamic Titles:** Format: `Cursor Quito | [Context]`.
- **Descriptive Slugs:** Keep descriptions under 160 characters, builder-to-builder tone.
- **Favicon Strategy:** Include standard favicon, Apple touch icon, and manifest.json.
- **Canonical URLs:** Always define the canonical URL to avoid duplicate content.

## Hard Rules
- **No Hidden Text:** Do not use "invisible" text for keywords. SEO must be honest and based on real content.
- **Image Alts:** Every `Image` or `img` tag must have a descriptive `alt` attribute.
- **Robot Control:** Proper `robots.txt` and `sitemap.xml` generation via Next.js metadata routes.

## Litmus Checks
- Does the social preview (OpenGraph) look elite?
- Is the HTML structure logical and accessible?
- Are the keywords (Cursor, Quito, AI, Product Engineer) integrated naturally?