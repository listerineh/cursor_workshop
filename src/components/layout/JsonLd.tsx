import { getSiteOrigin, publicEnv } from "@/lib/env"

export function JsonLd() {
  const origin = getSiteOrigin()
  const sameAs = [
    ...new Set(
      [publicEnv.xUrl, publicEnv.discordInviteUrl].filter(
        (href): href is string => typeof href === "string" && href.length > 0,
      ),
    ),
  ]

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: "Cursor Quito",
        alternateName: "Cursor Quito Community",
        description:
          "Comunidad de Product Engineers en Quito, Ecuador. Desarrollo de software, flujo de trabajo con Cursor e IA, y prácticas de product engineering.",
        url: origin,
        areaServed: {
          "@type": "City",
          name: "Quito",
          containedInPlace: {
            "@type": "Country",
            name: "Ecuador",
          },
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Quito",
          addressRegion: "Pichincha",
          addressCountry: "EC",
        },
        knowsAbout: [
          "Software development",
          "Product engineering",
          "Cursor",
          "Artificial intelligence",
        ],
        audience: {
          "@type": "Audience",
          audienceType: "Software developers and product engineers",
        },
        sameAs,
      },
    ],
  }

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      type="application/ld+json"
    />
  )
}
