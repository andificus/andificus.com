import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar'
import ThemeProvider from './ThemeProvider'
import Footer from './components/Footer'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://andificus.com'),

  title: {
    default: 'Andificus',
    template: '%s | Andificus',
  },

  description:
    'Andrew Wentzloff — IT professional and developer. Building modern web applications with Next.js, TypeScript, and a focus on clean fundamentals.',

  openGraph: {
    title: 'Andificus',
    description:
      'Andrew Wentzloff — Technologist, creator, and lifelong learner.',
    url: 'https://andificus.com',
    siteName: 'Andificus',
    type: 'website',
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'Andificus preview image',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Andificus',
    description:
      'Andrew Wentzloff — Technologist, creator, and lifelong learner.',
    images: ['/images/preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}