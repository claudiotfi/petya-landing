// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicons clássicos */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        {/* Manifest PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#00b8a1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
