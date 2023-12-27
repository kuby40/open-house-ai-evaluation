import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenHouseAI Data',
  description: 'Coding Assessment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='mx-5 bg-slate-200 my-3'>{children}
      </body>
    </html>
  )
}
