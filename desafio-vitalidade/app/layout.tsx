import type { Metadata } from 'next';
import metadata from './lib/metadata';
import './globals.css';
import './responsive.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Desafio Vitalidade",
              "url": "https://desafiovitalidade.com.br",
              "logo": "https://desafiovitalidade.com.br/images/logo.png",
              "sameAs": [
                "https://instagram.com/desafiovitalidade",
                "https://facebook.com/desafiovitalidade",
                "https://youtube.com/desafiovitalidade",
                "https://linkedin.com/company/desafiovitalidade"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+551134567890",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
