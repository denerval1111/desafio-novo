import type { Metadata } from 'next';

// Metadados padrão para o site
export const defaultMetadata: Metadata = {
  title: {
    default: 'Desafio Vitalidade | Envelhecimento com Vitalidade e Longevidade Saudável',
    template: '%s | Desafio Vitalidade'
  },
  description: 'Programa de 30 dias para envelhecimento com vitalidade, focado em longevidade saudável e prevenção de doenças crônicas através de medicina regenerativa não intervencionista, nutrologia e saúde mental.',
  keywords: ['longevidade', 'envelhecimento saudável', 'vitalidade', 'medicina regenerativa', 'nutrologia', 'saúde mental', 'autofagia', 'telômeros', 'células-tronco', 'prevenção de doenças'],
  authors: [{ name: 'Dr. Ricardo Mendes', url: 'https://desafiovitalidade.com.br' }],
  creator: 'Desafio Vitalidade',
  publisher: 'Desafio Vitalidade',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://desafiovitalidade.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  openGraph: {
    title: 'Desafio Vitalidade | Envelhecimento com Vitalidade e Longevidade Saudável',
    description: 'Programa de 30 dias para envelhecimento com vitalidade, focado em longevidade saudável e prevenção de doenças crônicas.',
    url: 'https://desafiovitalidade.com.br',
    siteName: 'Desafio Vitalidade',
    images: [
      {
        url: 'https://desafiovitalidade.com.br/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Desafio Vitalidade - Envelhecimento com Vitalidade',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desafio Vitalidade | Envelhecimento com Vitalidade',
    description: 'Programa de 30 dias para envelhecimento com vitalidade, focado em longevidade saudável e prevenção de doenças crônicas.',
    images: ['https://desafiovitalidade.com.br/images/twitter-image.jpg'],
    creator: '@desafiovitalidade',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'saúde',
};

// Função para gerar metadados para páginas específicas
export function generateMetadata(
  title: string,
  description: string,
  path: string = '/',
  imageUrl: string = '/images/og-image.jpg',
): Metadata {
  const url = `https://desafiovitalidade.com.br${path}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `https://desafiovitalidade.com.br${imageUrl}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [`https://desafiovitalidade.com.br${imageUrl}`],
    },
  };
}
