import type { Metadata } from 'next'
import './globals.css'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ThemeMenu from '../components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Dmytro Hilei | Engineering student at TalTech'

const description =
  "First year student at Tallinn University of technologies that is fascinating to learn and grow"

const url =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-site.vercel.app"

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(url),
  alternates: {
    canonical: url || "https://portfolio-site.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
