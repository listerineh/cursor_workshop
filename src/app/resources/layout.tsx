import type { Metadata } from "next"

const desc =
  "Toolbox técnica del nodo: prompts, .cursorrules, stack Next.js / Tailwind / Supabase. Copy-paste listo."

export const metadata: Metadata = {
  title: { absolute: "Recursos | Cursor Quito" },
  description: desc,
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Recursos | Cursor Quito",
    description: desc,
    url: "/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recursos | Cursor Quito",
    description: desc,
  },
}

export default function ResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
