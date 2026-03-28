import { CommunityLog } from "@/components/layout/CommunityLog"
import { Footer } from "@/components/layout/Footer"
import { Manifesto } from "@/components/layout/Manifesto"
import { Hero } from "@/components/visuals/Hero"
import { HeroBackground } from "@/components/visuals/HeroBackground"
import { publicEnv } from "@/lib/env"

const joinHref = publicEnv.discordInviteUrl

export default function HomePage() {
  return (
    <div className="relative min-h-dvh bg-background">
      <HeroBackground />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1 bg-linear-to-b from-background/25 via-background/55 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-1 bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,rgba(46,230,214,0.07),transparent_55%)]"
      />

      <p
        aria-label="Coordenadas aproximadas de Quito"
        className="pointer-events-none fixed bottom-6 left-6 z-20 font-mono text-[10px] leading-none tracking-[0.2em] text-zinc-500/35"
      >
        0° 13&apos; 0&quot; S / 78° 31&apos; 0&quot; W
      </p>

      <main className="relative z-10">
        <Hero joinHref={joinHref} />

        <Manifesto />

        <div className="relative bg-linear-to-b from-background via-[#050505] to-[#070707]">
          <CommunityLog />
          <Footer />
        </div>
      </main>
    </div>
  )
}
