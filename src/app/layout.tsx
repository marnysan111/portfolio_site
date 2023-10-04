import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.css';
import Header from '@/components/header';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'marny portfolio site',
  description: 'portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
