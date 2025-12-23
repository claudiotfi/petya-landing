import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petya — Saúde do seu pet organizada',
  description: 'Histórico veterinário do seu pet em um só lugar',
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
        <div className="absolute inset-0 -z-10  bg-gradient-to-b from-slate-300 to-slate-100">
          <div className="absolute top-28 w-full h-full bg-[url('/images/graph.png')] bg-top bg-repeat-x"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
