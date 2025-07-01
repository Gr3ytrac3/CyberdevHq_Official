import type { Metadata } from 'next'
import './globals.css'
import './../public/favicon.ico'



export const metadata: Metadata = {
  
  title: 'RedKernel | Offensive Security Journey',
  description: 'Built with Next.js & Tailwind CSS',
  generator: 'Next.js',
  icons: {
  icon: '/favicon.ico',
}

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
