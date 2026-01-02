import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petya – Histórico de Saúde Digital para Pets',
  description:
    'Guarde vacinas, exames e documentos do seu pet em um só lugar. O Petya é o histórico de saúde digital pensado para tutores e veterinários.',
  manifest: '/manifest.json',
  themeColor: '#10b981',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://petya.com.br',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Petya – Histórico de Saúde Digital para Pets',
    description:
      'Vacinas, exames e documentos do seu pet sempre organizados e acessíveis.',
    images: ['https://petya.com.br/android-chrome-512x512.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Petya – Histórico de Saúde Digital para Pets',
    description:
      'Guarde vacinas, exames e documentos do seu pet em um só lugar.',
    url: 'https://petya.com.br',
    publisher: {
      '@type': 'Organization',
      name: 'Petya',
      logo: {
        '@type': 'ImageObject',
        url: 'https://petya.com.br/android-chrome-512x512.png',
      },
    },
  }

  return (
    <html lang="pt-BR">
      {/* JSON-LD */}
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-52FRQ0LGRM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-52FRQ0LGRM');
        `}
      </Script>

      <body className="bg-slate-100 text-slate-900">
        {/* Background decorativo global */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-300 to-slate-100">
          <div className="absolute top-28 w-full h-full bg-[url('/images/graph.png')] bg-top bg-repeat-x" />
        </div>

        {children}
      </body>
    </html>
  )
}
