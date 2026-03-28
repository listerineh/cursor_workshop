export type ResourceBucket = "prompt" | "dot" | "stack"

export interface ResourceItem {
  id: string
  bucket: ResourceBucket
  title: string
  description: string
  code: string
  codeKind?: "rules" | "prompt" | "plain"
  href?: string
  hrefLabel?: string
}

export interface ResourceSectionMeta {
  bucket: ResourceBucket
  label: string
  kicker: string
  anchor: string
}

export const RESOURCE_SECTIONS: ResourceSectionMeta[] = [
  {
    bucket: "prompt",
    kicker: "01",
    label: "PROMPT_LIBRARY",
    anchor: "prompt-library",
  },
  {
    bucket: "dot",
    kicker: "02",
    label: "DOT_FILES",
    anchor: "dot-files",
  },
  {
    bucket: "stack",
    kicker: "03",
    label: "STACK_QUITO",
    anchor: "stack-quito",
  },
]

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: "vibe-system-prompt",
    bucket: "prompt",
    title: "Vibe Coding System Prompt",
    description:
      "Reglas de rol compactas: shipping, Tailwind-only, cero refactors colaterales. Pegar en Rules for AI / Custom Instructions.",
    codeKind: "prompt",
    code: `You are a senior product engineer contributing to a Next.js + TypeScript codebase.

Operating mode:
- Ship the smallest correct diff. No scope creep, no “while we’re here” refactors.
- Styling is Tailwind utility–only unless an existing file already defines shared tokens.
- Prefer explicit types at boundaries (API payloads, env, props). Avoid any.
- When editing React: keep components colocated, client boundaries minimal, no duplicate state.
- Copy tone: technical, concise, builder-to-builder. No marketing filler.

When uncertain: ask one precise question, default to the safer production choice.`,
  },
  {
    id: "cursorrules-next",
    bucket: "dot",
    title: ".cursorrules — Next.js (App Router)",
    description:
      "Baseline del nodo para proyectos Next 14+. Ajusta paths y convenciones del repo antes de commitear.",
    codeKind: "rules",
    code: `# Cursor Quito — Next.js App Router

stack=typescript,nextjs-app-router,tailwindcss-v4

# Edits
- Match existing patterns (imports, naming, file layout).
- Prefer Server Components; add "use client" only for state, refs, or browser APIs.
- No new global CSS files; Tailwind + existing globals only.

# Quality bar
- After edits: run typecheck mentally; fix obvious null/undefined at boundaries.
- Keep diffs reviewable; split large changes when asked.`,
  },
  {
    id: "tailwind-fold",
    bucket: "stack",
    title: "Tailwind Fold (VS Code)",
    description:
      "Reduce ruido visual: pliega bloques de className. Complementa Tailwind IntelliSense del nodo.",
    codeKind: "plain",
    code: `Marketplace: search "Tailwind Fold" (className folding)
Pair with: bradlc.vscode-tailwindcss (IntelliSense + sorting)

settings.json hint:
"editor.foldingStrategy": "indentation"
+ fold long JSX string literals manually via region comments if needed.`,
    href: "https://marketplace.visualstudio.com/search?term=tailwind%20fold",
    hrefLabel: "SEARCH",
  },
  {
    id: "stack-next",
    bucket: "stack",
    title: "Next.js (App Router)",
    description:
      "Runtime por defecto para landings y productos ligeros. RSC first, cliente bajo demanda.",
    codeKind: "plain",
    code: `version: 16.x (pin to your repo)
deployment: Vercel or Node adapter
routing: app/ directory, layouts for shared chrome`,
  },
  {
    id: "stack-tailwind",
    bucket: "stack",
    title: "Tailwind CSS v4",
    description:
      "Utility-first exclusivo para UI. @theme en CSS; sin component libraries pesadas.",
    codeKind: "plain",
    code: `entry: app/globals.css
pattern: utility composition, arbitrary values when needed
forbidden: MUI/Chakra/Radix unless explicitly approved`,
  },
  {
    id: "stack-supabase",
    bucket: "stack",
    title: "Supabase",
    description:
      "Postgres + Auth + RLS cuando el nodo necesita backend sin operar VM propia.",
    codeKind: "plain",
    code: `use_cases: auth, row-level security, edge functions
client: @supabase/ssr for Next
rule: never leak service_role to the browser`,
  },
]
