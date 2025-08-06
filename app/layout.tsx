import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
  description: 'Supercharge your marketing campaigns with our AI-powered suite. Generate compelling content, optimize ad performance, and scale your brand like never before.',
  keywords: 'AI marketing, automated campaigns, content generation, marketing optimization, brand management',
  authors: [{ name: 'ADmyBRAND AI Team' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Supercharge your marketing campaigns with our AI-powered suite.',
    type: 'website',
    url: 'https://admybrand.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Supercharge your marketing campaigns with our AI-powered suite.',
    images: ['/og-image.jpg'],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
