const PLACEHOLDER_DISCORD = "https://discord.gg/your-invite-here"

function warnDev(message: string) {
  if (process.env.NODE_ENV === "development") {
    console.warn(`[cursor-quito/env] ${message}`)
  }
}

function validatePublicEnv() {
  const raw = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL?.trim()

  if (!raw) {
    warnDev(
      "NEXT_PUBLIC_DISCORD_INVITE_URL is not set. Falling back to a generic Discord URL. Define it in .env.local (see .env.example).",
    )
    return
  }

  if (raw === PLACEHOLDER_DISCORD) {
    warnDev(
      "NEXT_PUBLIC_DISCORD_INVITE_URL still uses the placeholder value. Replace it with your real Discord invite before launch.",
    )
  }
}

validatePublicEnv()

/** Variables `NEXT_PUBLIC_*` leídas una vez; seguras para cliente y servidor. */
export const publicEnv = {
  discordInviteUrl:
    process.env.NEXT_PUBLIC_DISCORD_INVITE_URL?.trim() ||
    "https://discord.com/invite",
  gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() || undefined,
  quitoNodeStatus:
    process.env.NEXT_PUBLIC_QUITO_NODE_STATUS?.trim() || "OPERATIONAL",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined,
  xUrl: process.env.NEXT_PUBLIC_X_URL?.trim() || "https://x.com",
  totalMembers: process.env.NEXT_PUBLIC_TOTAL_MEMBERS?.trim() || "—",
  nextSync:
    process.env.NEXT_PUBLIC_NEXT_SYNC?.trim() || "19 abr 2026 · 19:00 ECT",
} as const

export type PublicEnv = typeof publicEnv

/** Origen absoluto para canonical, sitemap, robots y JSON-LD (sin trailing slash). */
export function getSiteOrigin(): string {
  const configured = publicEnv.siteUrl?.replace(/\/$/, "")
  if (configured) return configured
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`
  return "http://localhost:3000"
}
