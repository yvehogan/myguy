import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MyGuy - Digital Community for Boys and Men",
  description:
    "Africa's first digital community that connects boys to mentors, men to community, and everyone to healing.",
  icons: {
    icon: [
      {
        url: '/images/favicon.png',
        href: '/images/favicon.png',
      }
    ],
    apple: [
      {
        url: '/images/favicon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: ['/images/favicon.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
        {/* Add a random query parameter to force cache refresh */}
        <link rel="icon" href={`/images/favicon.png?v=${new Date().getTime()}`} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
