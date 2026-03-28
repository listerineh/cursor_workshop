"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { HERO_BOTTOM_SENTINEL_ID } from "@/components/visuals/constants"

const NeuralField = dynamic(
  () =>
    import("@/components/visuals/NeuralField").then((m) => ({
      default: m.NeuralField,
    })),
  { ssr: false, loading: () => null },
)

export function HeroBackground() {
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const el = document.getElementById(HERO_BOTTOM_SENTINEL_ID)
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting)
      },
      { threshold: 0, rootMargin: "32px 0px 0px 0px" },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-dvh w-full"
      aria-hidden
    >
      <NeuralField className="h-full w-full" active={heroVisible} />
    </div>
  )
}
