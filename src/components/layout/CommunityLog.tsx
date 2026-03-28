"use client"

import { motion } from "framer-motion"

const entries = [
  {
    ts: "17:04:12",
    event: "Node [Quito-North] · heartbeat stable",
    status: "OK" as const,
  },
  {
    ts: "16:58:03",
    event: "New Member Joined · #intros",
    status: "SYNC" as const,
  },
  {
    ts: "16:41:27",
    event: "Weekly Sync Completed · La Carolina",
    status: "OK" as const,
  },
  {
    ts: "16:12:55",
    event: "Drafting: AI Native Architectures",
    status: "SYNC" as const,
  },
  {
    ts: "15:47:19",
    event: 'Meetup prep · venue "Cluster Norte"',
    status: "OK" as const,
  },
  {
    ts: "15:03:44",
    event: "Open PR · cursor-quito/landing",
    status: "OK" as const,
  },
]

const listParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
}

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const headerReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function CommunityLog() {
  return (
    <section
      aria-labelledby="activity-heading"
      aria-label="Actividad reciente y registro colectivo de la comunidad"
      className="group/log relative border-t border-white/5 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60 animate-scanline bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-40 sm:px-10 sm:py-44">
        <motion.div
          className="flex flex-wrap items-end justify-between gap-6 border-b border-white/5 pb-10"
          initial="hidden"
          variants={headerReveal}
          viewport={{ once: true, amount: 0.28 }}
          whileInView="visible"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-zinc-600">
              03 / ACTIVIDAD
            </p>
            <h2
              id="activity-heading"
              className="mt-4 text-balance font-medium text-xl tracking-[-0.05em] text-zinc-200 sm:text-2xl"
            >
              Collective log
            </h2>
            <p className="mt-3 font-mono text-[11px] tracking-wider text-zinc-600">
              <span className="animate-scan-flicker text-zinc-500">
                Syncing…
              </span>{" "}
              — stream simulado · Quito nodes
            </p>
          </div>
          <p className="max-w-xs text-right text-xs leading-relaxed text-zinc-600 transition-colors duration-500 group-hover/log:text-zinc-500">
            Join the Node. Execute onboarding después de leer el manifiesto.
          </p>
        </motion.div>

        <motion.ul
          className="divide-y divide-white/5"
          initial="hidden"
          role="list"
          variants={listParent}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          {entries.map((row) => (
            <motion.li
              key={`${row.ts}-${row.event}`}
              className="group/row grid grid-cols-1 gap-3 py-6 transition-[box-shadow,background-color,color] duration-500 sm:grid-cols-[5.5rem_1fr_auto] sm:items-center sm:gap-8 sm:py-7 group-hover/log:bg-[rgba(255,77,0,0.03)] group-hover/log:shadow-[inset_0_0_44px_-12px_rgba(255,77,0,0.1)] hover:bg-[rgba(255,255,255,0.02)] hover:shadow-[inset_0_0_44px_-14px_rgba(46,230,214,0.06)]"
              variants={listItem}
            >
              <span className="animate-scan-flicker font-mono text-[11px] tabular-nums tracking-tight text-zinc-500 transition-colors duration-500 group-hover/row:text-zinc-300 group-hover/log:text-zinc-300/90">
                {row.ts}
              </span>
              <p className="font-sans text-sm leading-snug tracking-tight text-zinc-300 transition-colors duration-500 group-hover/row:text-zinc-100 sm:text-[0.9375rem]">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600 transition-colors duration-500 group-hover/row:text-zinc-500">
                  EVENT
                </span>{" "}
                <span className="mt-1 block transition-colors duration-500 group-hover/row:text-zinc-50 sm:mt-0 sm:inline">
                  {row.event}
                </span>
              </p>
              <span className="justify-self-start font-mono text-[10px] tracking-[0.12em] text-zinc-500 transition-colors duration-500 group-hover/row:text-zinc-400 sm:justify-self-end">
                {row.status === "OK" ? (
                  <span className="rounded-sm border border-white/10 bg-white/3 px-2 py-0.5 text-zinc-500 transition-[color,border-color,box-shadow,background-color] duration-500 group-hover/log:border-[#ff4d00]/40 group-hover/row:border-white/18 group-hover/row:bg-white/6 group-hover/row:text-zinc-100 group-hover/log:text-zinc-200 group-hover/log:shadow-[0_0_18px_-4px_rgba(255,77,0,0.35)]">
                    [OK]
                  </span>
                ) : (
                  <span className="rounded-sm border border-white/10 bg-white/3 px-2 py-0.5 text-zinc-500 transition-[color,border-color,box-shadow,background-color] duration-500 group-hover/log:border-[#ff4d00]/35 group-hover/row:border-white/18 group-hover/row:bg-white/5 group-hover/row:text-zinc-100 group-hover/log:text-zinc-200 group-hover/log:shadow-[0_0_18px_-4px_rgba(255,77,0,0.28)]">
                    [SYNC]
                  </span>
                )}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
