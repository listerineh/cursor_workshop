---
name: tailwind-utility-skill
description: Strict enforcement of Tailwind CSS for all styling tasks. Prevents the use of external CSS files, inline styles, or heavy component libraries (like MUI/Chakra). Focuses on custom, low-level utility patterns to achieve a bespoke "vibe-coded" look.
---

# Tailwind Utility Skill

Goal: Build every UI element using only Tailwind CSS utility classes. Prioritize custom design over generic defaults.

## Styling Principles
- **Utility-First:** Never create a `.css` file for a component. If a class is too long, use standard Tailwind nesting or simply keep it inline for better "vibe coding" visibility.
- **Arbitrary Values:** Don't be afraid of `-[value]`. For a premium look, use specific spacing like `tracking-[-0.04em]` or custom colors like `bg-[#050505]`.
- **Semantic Structure:** Use Tailwind to define hierarchy:
  - Text: `text-balance`, `tracking-tighter`, `leading-[0.9]`.
  - Layout: `grid-cols-12`, `gap-x-6`, `flex-shrink-0`.
- **State Management:** Always include interaction states (`hover:`, `active:`, `group-hover:`) and transitions (`transition-all`, `duration-500`, `ease-out`).

## The "Premium" Tailwind Recipe
- **Glassmorphism:** `bg-white/5 backdrop-blur-xl border border-white/10`.
- **Soft Shadows:** Avoid default shadows. Use `shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]`.
- **Masking:** Use `mask-image` utilities for fading edges in 3D or image sections.
- **Typography:** Force `antialiased` on dark backgrounds for cleaner text rendering.

## Responsive Strategy
- Design for Mobile first, then scale up using `md:`, `lg:`, and `xl:`.
- Use `clamp()` for font sizes via arbitrary values to ensure titles look good on all screens: `text-[clamp(2.5rem,8vw,6rem)]`.

## Hard Rules
- **No Component Libraries:** Do not install Radix, HeadlessUI, or Shadcn unless explicitly asked. Build the "vibe" manually with Tailwind.
- **No Default Colors:** Avoid `bg-blue-500`. Use specific hex codes or the defined theme colors to maintain the brand's elegance.
- **Clean Config:** Keep `tailwind.config.ts` lean. Extend the theme only for core brand colors and fonts.

## Litmus Checks
- Is there zero custom CSS in the project (outside of globals.css)?
- Are all spacing and colors consistent with the Visual Thesis?
- Does the UI look "custom-made" rather than "template-made"?

## Reject These Failures
- Using `style={{ ... }}` props for anything other than dynamic calculations.
- Generic `gap-4` or `p-4` when the design requires more breathing room.
- Creating global CSS classes for single-use components.