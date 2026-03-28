declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /** Invitación pública a Discord (CTAs). */
      NEXT_PUBLIC_DISCORD_INVITE_URL?: string
      /** ID de medición GA4 (opcional). */
      NEXT_PUBLIC_GA_ID?: string
      /** Estado operativo del nodo (copia de UI). */
      NEXT_PUBLIC_QUITO_NODE_STATUS?: string
      /** URL canónica del sitio (metadata). */
      NEXT_PUBLIC_SITE_URL?: string
      /** Enlace al perfil X/Twitter. */
      NEXT_PUBLIC_X_URL?: string
      /** Contador o estimación de miembros (solo display). */
      NEXT_PUBLIC_TOTAL_MEMBERS?: string
      /** Texto de próximo sync / meetup. */
      NEXT_PUBLIC_NEXT_SYNC?: string
      /** URL de despliegue en Vercel (inyectada en build/runtime). */
      VERCEL_URL?: string
      NODE_ENV: "development" | "production" | "test"
    }
  }
}

export {}
