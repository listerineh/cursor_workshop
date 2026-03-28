"use client"

import { motion } from "framer-motion"
import { ActiveNodes } from "@/components/ui/ActiveNodes"

const blocks = [
  {
    id: "tooling",
    label: "THE TOOLING",
    title: "AI as an Extension",
    body: "No solo usamos Cursor; hackeamos el flujo. El editor es extensión cognitiva: prompts, diffs y criterio humano en el mismo bucle.",
  },
  {
    id: "local",
    label: "THE LOCAL NODE",
    title: "Quito as a Hub",
    body: "Quito no es periferia. Es nodo de alta disponibilidad para producto global: timezone, talento y estándar de shipping en la misma capa.",
  },
  {
    id: "philosophy",
    label: "THE PHILOSOPHY",
    title: "Vibe Coding",
    body: "No es programar menos. Es iterar más rápido con disciplina: menos ruido, más señal. Calidad sobre volumen de commits.",
  },
  {
    id: "collective",
    label: "THE COLLECTIVE",
    title: "Code as Art",
    body: "No somos empresa: somos redes de ingenieros. Builder-to-builder, canales abiertos, cero pitch. El talento local como infraestructura.",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stickyFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Manifesto() {
  return (
    <section
      aria-labelledby="manifesto-heading"
      aria-label="Manifiesto: filosofía, tooling y nodo local de Cursor Quito"
      className="relative border-t border-white/5 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-40 sm:px-10 lg:py-44">
        <div className="grid gap-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-x-20 xl:gap-x-28">
          <motion.header
            className="lg:sticky lg:top-32 lg:self-start"
            initial="hidden"
            variants={stickyFade}
            viewport={{ once: true, amount: 0.45 }}
            whileInView="visible"
          >
            <p className="font-mono text-[11px] tracking-[0.3em] text-zinc-600">
              02 / MANIFIESTO
            </p>
            <h2
              id="manifesto-heading"
              className="mt-5 max-w-xs text-balance font-medium text-2xl leading-[1.12] tracking-[-0.05em] text-zinc-200 sm:text-[1.65rem]"
            >
              Product Engineers en el mismo plano de ejecución.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-500">
              Manifiesto operativo: cómo pensamos la herramienta, el lugar y el
              ritmo de trabajo.
            </p>
          </motion.header>

          <motion.div
            className="flex flex-col"
            initial="hidden"
            variants={container}
            viewport={{ once: true, margin: "-12% 0px" }}
            whileInView="visible"
          >
            {blocks.map((b, i) => (
              <motion.article
                key={b.id}
                className={
                  i === 0
                    ? "pb-14 lg:pb-16"
                    : "border-t border-white/5 py-14 lg:py-16"
                }
                variants={item}
              >
                <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-600">
                  {b.label}
                </p>
                <h3 className="mt-3 font-medium text-lg tracking-[-0.03em] text-zinc-100 sm:text-xl">
                  {b.title}
                </h3>
                <p className="mt-4 max-w-prose text-pretty text-sm leading-[1.75] text-zinc-500 sm:text-[0.95rem]">
                  {b.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <ActiveNodes />
      </div>
    </section>
  )
}
