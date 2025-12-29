import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petya – Histórico de Saúde Digital para Pets',
  description: 'Guarde vacinas, exames e documentos do seu pet em um só lugar. O Petya é o histórico de saúde digital pensado para tutores e veterinários.',
  manifest: '/manifest.json',
  themeColor: '#10b981',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Petya – Histórico de Saúde Digital para Pets',
    description:
      'Vacinas, exames e documentos do seu pet sempre organizados e acessíveis.',
    url: 'https://petya.com.br',
    siteName: 'Petya',
    images: [
      {
        url: 'https://petya.com.br/android-chrome-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Petya – Histórico de Saúde Digital para Pets',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
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
