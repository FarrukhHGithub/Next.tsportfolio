import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amir Khan — MERN Stack Developer',
  description: 'Portfolio of Amir Khan, a full-stack developer working with MongoDB, Express, React and Node.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
