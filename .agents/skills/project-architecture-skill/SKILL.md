---
name: project-architecture-skill
description: Defines and enforces the structural integrity of the Next.js project. It ensures a modular, scalable, and type-safe directory pattern, preventing "folder sprawl" and ensuring consistent import patterns.
---

# Project Architecture Skill

Goal: Maintain a clean, professional, and predictable codebase that aligns with modern Next.js (App Router) best practices.

## Directory Manifest
- `src/app/`: Routing layer and Server Components only. Keep logic minimal here.
- `src/components/`:
    - `ui/`: Low-level, stateless atomic components (buttons, inputs, etc.).
    - `layout/`: Persistent structures (Navbar, Footer, Section containers).
    - `visuals/`: Three.js/R3F specific canvases and creative shaders.
- `src/lib/`: Shared utility functions, third-party clients (e.g., Supabase, Discord API).
- `src/hooks/`: Custom React hooks (e.g., `useScroll`, `useMousePosition`).
- `src/types/`: Centralized TypeScript definitions and interfaces.
- `src/styles/`: Global CSS and Tailwind configurations.

## Architecture Rules
- **Modular Imports:** Use absolute imports with `@/` alias (e.g., `@/components/ui/Button`).
- **Component Pattern:** One component per file. Use Named Exports.
- **Client Boundary:** Use `'use client'` strictly where Interactivity (Hooks/Three.js) is required. Keep the tree as "server-first" as possible.
- **Data Flow:** Centralize environment variable access in `src/lib/env.ts` as defined in previous steps.
- **Naming Convention:** PascalCase for Components, kebab-case for folders and utility files.

## Formatting Standards
- **Prettier-esque:** 2 spaces, no semicolons (optional but consistent), trailing commas.
- **Tailwind Sorting:** Classes must be sorted logically (Layout -> Box Model -> Typography -> Visuals -> States).
- **TypeScript:** Strict mode. No `any`. Use `interface` for component props.

## Litmus Checks
- Does the file live in its correct architectural domain?
- Are imports clean and using aliases?
- Is the `'use client'` directive used only when necessary?
- Is there a clear separation between "Creative" (3D) and "UI" (HTML)?