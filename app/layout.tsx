import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arthea Studio | Arquitectura que cura',
  description:
    'Estudio de arquitectura premium en Madrid. Proyectos residenciales, arquitectura interior y direccion creativa con una mirada serena y muy cuidada.',
  metadataBase: new URL('https://reformas-premium-demo.vercel.app'),
  icons: {
    icon: [
      { url: '/arthea-favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/arthea-favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/arthea-favicon-32x32.png?v=2',
    apple: [{ url: '/arthea-apple-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://reformas-premium-demo.vercel.app',
    title: 'Arthea Studio | Arquitectura que cura',
    description:
      'Estudio de arquitectura premium en Madrid con proyectos residenciales, arquitectura interior y acompanamiento integral.',
    images: [
      {
        url: '/images/hero-architecture.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
