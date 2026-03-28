import { publicEnv } from "@/lib/env"

const DISCORD_HREF = publicEnv.discordInviteUrl
const X_HREF = publicEnv.xUrl
const BUILD_VERSION = "1.0.42-alpha"

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-transparent px-6 pb-20 pt-40 sm:px-10 sm:pb-24 sm:pt-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-transparent to-[#070707]/80" />

      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-[10px] tracking-[0.35em] text-zinc-600">
          Execute Onboarding
        </p>

        <h2 className="mt-6 font-bold leading-[0.92] tracking-[-0.05em] text-zinc-100 text-[clamp(2.25rem,7.5vw,4.75rem)]">
          CONNECT TO THE NODE
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500">
          Invitación al sistema: mismo canal, misma latencia humana. Sin funnel
          de ventas, solo sincronización.
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-8 py-3.5 text-sm font-semibold tracking-tight text-zinc-950 transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_40px_-8px_rgba(255,77,0,0.35)] focus-visible:outline-2 focus-visible:outline-zinc-400 focus-visible:outline-offset-2 active:scale-[0.99]"
            data-cursor-hover
            href={DISCORD_HREF}
            rel="noreferrer noopener"
            target="_blank"
          >
            JOIN DISCORD
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-8 py-3.5 text-sm font-medium tracking-tight text-zinc-200 transition-[border-color,background-color,box-shadow] duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:shadow-[0_0_36px_-12px_rgba(6,182,212,0.12)] focus-visible:outline-2 focus-visible:outline-zinc-500 focus-visible:outline-offset-2 active:scale-[0.99]"
            data-cursor-hover
            href={X_HREF}
            rel="noreferrer noopener"
            target="_blank"
          >
            FOLLOW ON X
          </a>
        </div>

        <pre
          aria-hidden
          className="mt-16 select-none overflow-x-auto border-t border-white/5 pt-12 font-mono text-[10px] leading-relaxed text-zinc-600 sm:text-[11px]"
        >{`
      ╭──────────────────╮
  · ──┤      QUITO      ├── ·
      ╰────────┬─────────╯
        0°13′S   78°31′W
     NODE [EC] · ANDEAN_UPLINK
`}</pre>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/5 pt-10 font-mono text-[10px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Cursor Quito · builders, not a company.
          </p>
          <dl className="flex flex-col gap-1 sm:flex-row sm:gap-10">
            <div className="flex gap-2">
              <dt className="text-zinc-600">BUILD_VERSION</dt>
              <dd className="text-zinc-400">{BUILD_VERSION}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-zinc-600">LOCATION</dt>
              <dd className="text-zinc-400">QUITO_EC_NODES</dd>
            </div>
          </dl>
        </div>
      </div>
    </footer>
  )
}
