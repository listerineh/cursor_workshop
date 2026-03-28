---
name: creative-coding-skill
description: Use when the task requires high-end visual anchors, 3D elements, particle systems, or generative backgrounds using Three.js or React-Three-Fiber. This skill prioritizes atmospheric impact, performance (60fps), and "AI-native" aesthetics over complex geometric precision.
---

# Creative Coding Skill (Three.js / R3F)

Use this skill to transform a static landing page into an immersive digital experience. The goal is to create "vibe-heavy" visuals that feel sophisticated, fluid, and reactive.

## Design Philosophy
- **Atmospheric over Literal:** Prefer abstract particles, flowing lines, or glowing clouds over realistic 3D models of objects.
- **The "Cursor" Aesthetic:** Dark backgrounds, subtle neon glows (cyan/violet/white), monospace accents, and mathematical randomness.
- **Interactive Feedback:** Visuals should react to mouse movement, scroll position, or click events to create a "living" interface.

## Working Model

Before generating code, define the "Visual Soul":
- **Core Geometry:** (e.g., Points, Torus Knot, Plane Buffer, or custom GLSL Shader).
- **Material Aura:** (e.g., Wireframe, Transparent, Glowing/Bloom, or Glassmorphism).
- **Behavior:** (e.g., Floating, Pulsing, Following Mouse, or Exploding on Scroll).

## Technical Standards (The Vibe Coding Way)

- **Library Preference:** Default to `@react-three/fiber` and `@react-three/drei` for React projects to keep the code declarative and clean.
- **Performance First:** - Use `requestAnimationFrame` via `useFrame`.
  - Limit particle counts (start with 1,000-5,000).
  - Use `BufferGeometry` for efficiency.
  - Implement a `Suspense` fallback for 3D assets.
- **Responsive Canvas:** The canvas must resize perfectly and handle high-DPI (Retina) displays without dropping frames.
- **Scene Cleanup:** Ensure `dispose` is handled for geometries and materials to prevent memory leaks.

## Visual Archetypes for Cursor Quito

1. **The Neural Field:** A constellation of dots connected by faint lines that move like a liquid.
2. **The Flow State:** Horizontal lines or "code ribbons" that wave and ripple as the user scrolls.
3. **The Monolith:** A single, highly detailed geometric shape (like a refined Cube or Dodecahedron) with a glass material and internal glow.
4. **The Andean Pulse:** A topographical wireframe map that reacts to mouse-over with "elevation" changes.

## Hard Rules

- **No Distraction:** If the 3D element makes the text unreadable, reduce its opacity or move it to a background layer.
- **No Heavy Assets:** Do not load large `.gltf` or `.obj` files unless specifically requested. Prefer generative geometry.
- **Mobile Friendly:** Disable or simplify the 3D scene on mobile devices if the frame rate drops below 30fps.
- **No Jitter:** All movements must be lerped (Linear Interpolation) or smoothed using `damp` functions.

## Litmus Checks
- Does it feel "premium"?
- Is it running at a smooth 60fps?
- Does it react to the user?
- Is the code declarative and easy to modify?

## Reject These Failures
- Visuals that look like 90s screensavers.
- Heavy scenes that cause the browser fans to spin up instantly.
- 3D elements that look "stuck" on top of the UI rather than integrated.
- Using standard `Three.js` imperative code inside a React component when `R3F` is available.