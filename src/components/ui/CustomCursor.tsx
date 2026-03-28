"use client"

import { useEffect, useRef, useState } from "react"

const SELECTOR =
  'a[href], button, input, textarea, select, [role="button"], label[for], summary'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const rafBoot = useRef(0)
  const rafTick = useRef(0)

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches
    const noHover = window.matchMedia("(hover: none)").matches
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (coarse || noHover || reduceMotion) return

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setHover(
        !!el?.closest(SELECTOR) ||
          !!(el as HTMLElement | null)?.closest("[data-cursor-hover]"),
      )
    }

    const tick = () => {
      const lerp = 0.22
      pos.current.x += (target.current.x - pos.current.x) * lerp
      pos.current.y += (target.current.y - pos.current.y) * lerp
      const el = dotRef.current
      if (el) {
        el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      }
      rafTick.current = requestAnimationFrame(tick)
    }

    rafBoot.current = requestAnimationFrame(() => {
      setEnabled(true)
      document.documentElement.classList.add("custom-cursor-active")
      rafTick.current = requestAnimationFrame(tick)
    })

    window.addEventListener("mousemove", onMove, { passive: true })

    return () => {
      cancelAnimationFrame(rafBoot.current)
      cancelAnimationFrame(rafTick.current)
      document.documentElement.classList.remove("custom-cursor-active")
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-9998 rounded-full border border-white/35 mix-blend-screen will-change-transform motion-reduce:hidden transition-[width,height,box-shadow,opacity] duration-300 ease-out ${
        hover
          ? "h-[18px] w-[18px] bg-white/35 shadow-[0_0_28px_0_rgba(46,230,214,0.45)]"
          : "h-2.5 w-2.5 bg-white/15 shadow-[0_0_16px_-2px_rgba(46,230,214,0.35)]"
      }`}
      data-cursor-dot
      style={{ transform: "translate3d(-100px,-100px,0)" }}
    />
  )
}
