import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { JsonLd } from "@/components/layout/JsonLd"
import { Navbar } from "@/components/layout/Navbar"
import { getSiteOrigin } from "@/lib/env"
import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const siteOrigin = getSiteOrigin()
const metadataBase = new URL(`${siteOrigin}/`)

const pageTitle = "Cursor Quito | The AI-Native Community"
const pageDescription =
  "Un nodo de Product Engineers en el centro de los Andes. Redefiniendo el flujo de trabajo con Cursor e IA."

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: pageTitle,
    template: "%s · Cursor Quito",
  },
  description: pageDescription,
  applicationName: "Cursor Quito",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "/",
    siteName: "Cursor Quito",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cursor Quito — comunidad AI-native en Quito, Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CursorQuito",
    creator: "@CursorQuito",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
      lang="es"
    >
      <body className="min-h-dvh">
        <JsonLd />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
