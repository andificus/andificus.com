import type { Metadata } from 'next'
import { Geist, Cinzel } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import ThemeProvider from './ThemeProvider'
import Footer from './components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://andificus.com'),

  title: {
    default: 'Andificus',
    template: '%s | Andificus',
  },

  description:
    'Andrew Wentzloff — Technologist, creator, and lifelong learner. Building software, exploring cloud infrastructure, and creating at the intersection of technology and craft.',

  openGraph: {
    title: 'Andificus',
    description: 'Andrew Wentzloff — Technologist, creator, and lifelong learner.',
    url: 'https://andificus.com',
    siteName: 'Andificus',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Andificus',
    description: 'Andrew Wentzloff — Technologist, creator, and lifelong learner.',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${cinzel.variable} antialiased`}>
        <ThemeProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
