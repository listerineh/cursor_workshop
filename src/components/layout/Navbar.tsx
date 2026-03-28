"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
] as const

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/55 backdrop-blur-xl transition-[background-color,border-color] duration-500 ease-out supports-backdrop-filter:bg-background/35">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link
          className="font-mono text-[11px] tracking-[0.22em] text-zinc-500 transition-colors duration-300 hover:text-zinc-300"
          href="/"
        >
          CURSOR<span className="text-zinc-300">_</span>QUITO
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/" || pathname === ""
                : pathname === href || pathname.startsWith(`${href}/`)
            return (
              <Link
                key={href}
                className={`rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-[color,background-color,box-shadow] duration-300 ease-out ${
                  active
                    ? "bg-white/8 text-zinc-100 shadow-[inset_0_0_24px_-8px_rgba(46,230,214,0.12)]"
                    : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                }`}
                data-cursor-hover
                href={href}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
