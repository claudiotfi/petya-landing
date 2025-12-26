import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petya',
  description: 'Organize o histórico de saúde do seu pet',
  manifest: '/manifest.json',
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-100 text-slate-900">
        {/* Background decorativo global */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-300 to-slate-100">
          <div className="absolute top-28 w-full h-full bg-[url('/images/graph.png')] bg-top bg-repeat-x"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
