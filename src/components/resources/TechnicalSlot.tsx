"use client"

import { useCallback, useState } from "react"
import type { ResourceItem } from "@/lib/resources-data"
import { CodeBody } from "@/components/resources/CodeBody"

export interface TechnicalSlotProps {
  item: ResourceItem
}

export function TechnicalSlot({ item }: TechnicalSlotProps) {
  const [status, setStatus] = useState<"idle" | "done" | "err">("idle")

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(item.code)
      setStatus("done")
      window.setTimeout(() => setStatus("idle"), 1800)
    } catch {
      setStatus("err")
      window.setTimeout(() => setStatus("idle"), 2400)
    }
  }, [item.code])

  return (
    <article
      className="group/slot relative border border-white/5 bg-white/[0.02] px-5 py-6 transition-[border-color,box-shadow,background-color] duration-300 ease-out hover:border-emerald-400/20 hover:bg-white/[0.035] hover:shadow-[0_0_48px_-16px_rgba(46,230,214,0.08)]"
      data-resource-id={item.id}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-sans text-sm font-medium tracking-tight text-zinc-100 sm:text-base">
            {item.title}
          </h3>
          <p className="mt-2 max-w-prose text-pretty text-xs leading-relaxed text-zinc-500 sm:text-sm">
            {item.description}
          </p>
          {item.href ? (
            <a
              className="mt-3 inline-flex font-mono text-[10px] tracking-wider text-emerald-400/70 underline decoration-white/10 underline-offset-4 transition-colors hover:text-emerald-300/90"
              data-cursor-hover
              href={item.href}
              rel="noreferrer noopener"
              target="_blank"
            >
              {item.hrefLabel ?? "OPEN"} ↗
            </a>
          ) : null}
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <button
            className="font-mono text-[9px] tracking-[0.18em] text-zinc-500 opacity-100 transition-[opacity,color,transform] duration-300 hover:text-emerald-300/90 focus-visible:outline-2 focus-visible:outline-emerald-400/40 focus-visible:outline-offset-2 sm:opacity-0 sm:group-focus-within/slot:opacity-100 sm:group-hover/slot:opacity-100"
            data-cursor-hover
            onClick={copy}
            type="button"
          >
            [COPY_TO_CLIPBOARD]
          </button>
          <span
            aria-live="polite"
            className={`min-h-[1rem] font-mono text-[9px] tracking-widest transition-opacity duration-300 ${
              status === "done"
                ? "text-emerald-400/90 opacity-100"
                : status === "err"
                  ? "text-red-400/80 opacity-100"
                  : "opacity-0"
            }`}
          >
            {status === "done" ? "DONE" : status === "err" ? "BLOCKED" : ""}
          </span>
        </div>
      </div>

      <div className="mt-5 border-t border-white/5 pt-4">
        <CodeBody item={item} />
      </div>
    </article>
  )
}
