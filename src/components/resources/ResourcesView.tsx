"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  RESOURCE_ITEMS,
  RESOURCE_SECTIONS,
  type ResourceBucket,
} from "@/lib/resources-data"
import { TechnicalSlot } from "@/components/resources/TechnicalSlot"

function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, " ").trim()
}

export function ResourcesView() {
  const [q, setQ] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const onKey = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault()
      inputRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onKey])

  const filtered = useMemo(() => {
    const nq = normalize(q)
    if (!nq) return RESOURCE_ITEMS
    return RESOURCE_ITEMS.filter((item) => {
      const hay = normalize(
        `${item.title} ${item.description} ${item.code} ${item.bucket}`,
      )
      return hay.includes(nq)
    })
  }, [q])

  const byBucket = useMemo(() => {
    const m = new Map<ResourceBucket, typeof RESOURCE_ITEMS>()
    for (const b of ["prompt", "dot", "stack"] as ResourceBucket[]) {
      m.set(b, [])
    }
    for (const item of filtered) {
      m.get(item.bucket)?.push(item)
    }
    return m
  }, [filtered])

  return (
    <div className="pb-32 pt-24 sm:pb-40 sm:pt-28">
      <header className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="font-mono text-[10px] tracking-[0.35em] text-zinc-600">
          NODE_TOOLBOX · QUITO
        </p>
        <h1 className="mt-4 max-w-4xl font-mono text-5xl font-medium leading-[1.05] tracking-[-0.05em] text-zinc-100 sm:text-[2.75rem]">
          RECURSOS / TOOLBOX
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
          Biblioteca técnica: prompts listos para pegar, dotfiles de referencia
          y stack acordado del nodo. Sin marketing: solo artefactos ejecutables.
        </p>

        <div className="relative mt-10 max-w-xl">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-widest text-zinc-600">
            ⌘K
          </span>
          <input
            ref={inputRef}
            aria-label="Buscar en recursos"
            className="w-full rounded-full border border-white/10 bg-white/4 py-3.5 pl-14 pr-5 font-mono text-xs tracking-wide text-zinc-200 outline-none placeholder:text-zinc-600 transition-[border-color,box-shadow,background-color] duration-300 focus:border-emerald-400/25 focus:bg-white/6 focus:shadow-[0_0_40px_-12px_rgba(46,230,214,0.12)]"
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filtrar slots…"
            type="search"
            value={q}
          />
        </div>

        <nav
          aria-label="Saltar a categoría"
          className="mt-8 flex flex-wrap gap-3 font-mono text-[9px] tracking-[0.2em] text-zinc-600"
        >
          {RESOURCE_SECTIONS.map((s) => (
            <a
              key={s.anchor}
              className="rounded-full border border-white/10 px-3 py-1.5 transition-colors duration-300 hover:border-emerald-400/25 hover:text-zinc-400"
              data-cursor-hover
              href={`#${s.anchor}`}
            >
              {s.kicker} · {s.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-auto mt-20 max-w-7xl space-y-24 px-6 sm:mt-28 sm:space-y-28 sm:px-10">
        {RESOURCE_SECTIONS.map((section) => {
          const items = byBucket.get(section.bucket) ?? []
          return (
            <section
              key={section.bucket}
              aria-labelledby={`${section.anchor}-title`}
              className="scroll-mt-28 border-t border-white/5 pt-16 sm:scroll-mt-32 sm:pt-20"
              id={section.anchor}
            >
              <div className="mb-10 flex flex-wrap items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">
                  {section.kicker}
                </span>
                <h2
                  className="font-mono text-lg tracking-tight text-zinc-200 sm:text-xl"
                  id={`${section.anchor}-title`}
                >
                  {section.label}
                </h2>
              </div>
              {items.length === 0 ? (
                <p className="font-mono text-xs text-zinc-600">
                  NO_SIGNAL · ajusta el filtro
                </p>
              ) : (
                <div className="grid gap-6 lg:gap-8">
                  {items.map((item) => (
                    <TechnicalSlot key={item.id} item={item} />
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
