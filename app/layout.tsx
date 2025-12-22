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
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-green-500/30 rounded-full blur-3xl"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
