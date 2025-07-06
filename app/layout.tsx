import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import "./globals.css"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

export const metadata: Metadata = {
  title: "Pixel Soundboard",
  description: "A retro pixel-styled web soundboard with neon aesthetics and arcade sounds",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload audio files for better performance */}
        <link rel="preload" as="audio" href="/sounds/pow.mp3" />
        <link rel="preload" as="audio" href="/sounds/zap.mp3" />
        <link rel="preload" as="audio" href="/sounds/boom.mp3" />
        <link rel="preload" as="audio" href="/sounds/laser.mp3" />
        <link rel="preload" as="audio" href="/sounds/beep.mp3" />
        <link rel="preload" as="audio" href="/sounds/whoosh.mp3" />
        <link rel="preload" as="audio" href="/sounds/ding.mp3" />
        <link rel="preload" as="audio" href="/sounds/buzz.mp3" />
        <link rel="preload" as="audio" href="/sounds/click.mp3" />
        <link rel="preload" as="audio" href="/sounds/pop.mp3" />
      </head>
      <body className={`${pressStart2P.variable} font-pixel antialiased`}>{children}</body>
    </html>
  )
}
