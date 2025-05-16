import type { Metadata } from 'next';
// import metadata from './lib/metadata'; // Removida importação problemática
import Header from '@/components/Header';
import './globals.css';
import '../responsive.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Definindo um objeto metadata básico diretamente
export const metadata: Metadata = {
  title: 'Desafio Vitalidade',
  description: 'Transforme sua saúde e bem-estar.',
  // Você pode adicionar mais propriedades de metadados aqui conforme necessário
  // Exemplo: openGraph, twitter, icons, etc.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload critical assets */}
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
              "url": "https://desafiovitalidade.com.br", // Substitua pela URL real do seu site
              "logo": "https://desafiovitalidade.com.br/images/logo.png", // Substitua pelo caminho real do seu logo
              "sameAs": [
                "https://instagram.com/desafiovitalidade", // Substitua pelos seus links reais
                "https://facebook.com/desafiovitalidade",
                "https://youtube.com/desafiovitalidade",
                "https://linkedin.com/company/desafiovitalidade"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+551134567890", // Substitua pelo seu telefone real
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              }
            } )
          }}
        />
      </head>
      <body className={inter.className}>
        <Header /> {/* Chamada do Header aqui */}
        {children}
      </body>
    </html>
  );
}
