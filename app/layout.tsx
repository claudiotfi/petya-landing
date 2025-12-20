import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Petya — Histórico de saúde do seu pet',
  description:
    'Organize vacinas, exames e documentos do seu pet em um só lugar. Compartilhe facilmente com veterinários quando precisar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-gray-50 overflow-x-hidden`}
      >
        <div className="min-h-screen bg-gray-50">
          <div className={`mx-auto bg-white shadow-2xl max-w-7xl transition-all duration-300`}>
            <div className="relative overflow-hidden">
              {/* Elementos decorativos de fundo */}
              <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full blur-3xl opacity-20" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-600 to-purple-800 rounded-full blur-3xl opacity-20 animate-pulse" />
              {/* Conteúdo da aplicação */}
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html >
  )
}
