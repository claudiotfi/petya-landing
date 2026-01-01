import type { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage', // ✅ chave corrigida
    name: metadata.title,
    description: metadata.description,
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
      <Head>
        {/* Meta tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="pet, saúde, vacinas, exames, histórico, veterinário"
        />
        <link rel="canonical" href="https://petya.com.br" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta
          name="twitter:description"
          content={metadata.openGraph.description}
        />
        <meta
          name="twitter:image"
          content={metadata.openGraph.images[0].url}
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

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
          <div className="absolute top-28 w-full h-full bg-[url('/images/graph.png')] bg-top bg-repeat-x"></div>
        </div>

        {children}
      </body>
    </html>
  )
}
