import { HERO_BOTTOM_SENTINEL_ID } from "@/components/visuals/constants"

export interface HeroProps {
  joinHref: string
}

export function Hero({ joinHref }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="pointer-events-none flex min-h-svh flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:justify-center lg:pb-28"
    >
      <div className="pointer-events-auto max-w-[min(100%,42rem)]">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-emerald-300/65">
          Andes digitales · Builder-to-builder
        </p>
        <h1
          id="hero-title"
          className="max-w-[95vw] text-balance font-bold leading-[0.92] tracking-[-0.05em] text-zinc-50 text-[clamp(2.5rem,9.2vw,8rem)] sm:max-w-none"
        >
          CURSOR QUITO
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-base font-sans leading-relaxed tracking-tight text-zinc-400 sm:text-lg">
          La comunidad de Product Engineers que está redefiniendo el desarrollo
          con IA desde el corazón de los Andes.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={joinHref}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5.5 px-8 py-3.5 text-sm font-medium tracking-tight text-white shadow-[0_0_48px_-12px_rgba(46,230,214,0.32)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ease-out hover:border-emerald-300/28 hover:bg-white/10 hover:shadow-[0_0_56px_-10px_rgba(168,85,247,0.35)] focus-visible:outline-2 focus-visible:outline-emerald-400/50 focus-visible:outline-offset-2 active:scale-[0.99]"
          >
            Join the Collective
          </a>
          <span className="hidden text-xs text-zinc-600 sm:inline">
            Discord · WhatsApp en bio del servidor
          </span>
        </div>
      </div>
      <div
        id={HERO_BOTTOM_SENTINEL_ID}
        className="pointer-events-none h-px w-full shrink-0 opacity-0"
        aria-hidden
      />
    </section>
  )
}
