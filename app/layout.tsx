import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RedKernel | Offensive Security Journey',
  description: 'Built with Next.js & Tailwind CSS',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-green-400 font-mono">{children}</body>
    </html>
  )
}
