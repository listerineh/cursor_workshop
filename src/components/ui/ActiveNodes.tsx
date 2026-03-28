import { publicEnv } from "@/lib/env"

export function ActiveNodes() {
  const members = publicEnv.totalMembers
  const nextSync = publicEnv.nextSync
  const status = publicEnv.quitoNodeStatus

  return (
    <div
      aria-label="Estado de la red"
      className="mt-28 border-t border-white/5 pt-12 shadow-[0_0_60px_-36px_rgba(125,211,252,0.06)]"
    >
      <p className="font-mono text-[10px] tracking-[0.28em] text-zinc-600">
        ACTIVE NODES
      </p>
      <dl className="mt-6 grid gap-4 font-mono text-[11px] leading-relaxed text-zinc-500 sm:grid-cols-3 sm:gap-8">
        <div>
          <dt className="text-zinc-600">STATUS</dt>
          <dd className="mt-1 text-zinc-300">{status}</dd>
        </div>
        <div>
          <dt className="text-zinc-600">TOTAL_MEMBERS</dt>
          <dd className="mt-1 text-zinc-300">{members}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-zinc-600">NEXT_SYNC</dt>
          <dd className="mt-1 text-balance text-zinc-300">{nextSync}</dd>
        </div>
      </dl>
    </div>
  )
}
