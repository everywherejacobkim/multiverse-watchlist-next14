import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeaderNav from "@/components/nav/HeaderNav";
import InfoDrawer from "@/components/drawer/InfoDrawer";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multiverse Watchlist',
  description: 'Created by Next 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
           <HeaderNav />
           <InfoDrawer />
          {children}
        </body>
      </html>
  )
}
