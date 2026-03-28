import type { MetadataRoute } from "next"
import { getSiteOrigin } from "@/lib/env"

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin()

  return [
    {
      url: `${origin}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${origin}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ]
}
