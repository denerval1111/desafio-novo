// Utilitários para SEO

/**
 * Gera um sitemap.xml para o site
 * Esta função deve ser executada durante o build do site
 */
export async function generateSitemap() {
  const baseUrl = 'https://desafiovitalidade.com.br';
  
  // Lista de todas as URLs do site
  const urls = [
    '/',
    '/sobre/programa',
    '/sobre/equipe',
    '/pilares/medicina-regenerativa',
    '/pilares/nutrologia',
    '/pilares/saude-mental',
    '/pilares/gerenciamento-peso',
    '/depoimentos',
    '/inscricao',
    '/contato',
    '/blog',
    '/termos',
    '/privacidade',
    '/cookies'
  ];
  
  // Gera o conteúdo do sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '/' || url.includes('/blog') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '/' ? '1.0' : url.includes('/pilares') || url.includes('/inscricao') ? '0.8' : '0.6'}</priority>
  </url>`).join('')}
</urlset>`;
  
  return sitemap;
}

/**
 * Gera um arquivo robots.txt para o site
 * Esta função deve ser executada durante o build do site
 */
export function generateRobotsTxt() {
  const baseUrl = 'https://desafiovitalidade.com.br';
  
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml`;
  
  return robotsTxt;
}

/**
 * Gera dados estruturados JSON-LD para diferentes tipos de páginas
 */
export const structuredData = {
  // Dados para a página inicial
  homepage: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Desafio Vitalidade",
    "url": "https://desafiovitalidade.com.br",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://desafiovitalidade.com.br/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  
  // Dados para a página do programa
  program: {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Desafio Vitalidade",
    "description": "Programa de 30 dias para envelhecimento com vitalidade, focado em longevidade saudável e prevenção de doenças crônicas.",
    "provider": {
      "@type": "Organization",
      "name": "Desafio Vitalidade",
      "sameAs": "https://desafiovitalidade.com.br"
    },
    "timeRequired": "PT30D",
    "educationalLevel": "Beginner",
    "offers": {
      "@type": "Offer",
      "price": "1997.00",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "url": "https://desafiovitalidade.com.br/inscricao"
    }
  },
  
  // Dados para a página de depoimentos
  testimonials: (testimonials: any[]) => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": testimonials.map((testimonial, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": testimonial.rating,
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": testimonial.author
          },
          "reviewBody": testimonial.content
        }
      }))
    };
  },
  
  // Dados para artigos do blog
  blogPost: (post: any) => {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.image,
      "datePublished": post.publishDate,
      "dateModified": post.modifiedDate,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Desafio Vitalidade",
        "logo": {
          "@type": "ImageObject",
          "url": "https://desafiovitalidade.com.br/images/logo.png"
        }
      },
      "description": post.excerpt,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://desafiovitalidade.com.br/blog/${post.slug}`
      }
    };
  },
  
  // Dados para FAQs
  faq: (questions: any[]) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    };
  }
};

/**
 * Gera meta tags canônicas e alternativas para diferentes idiomas
 */
export function generateCanonicalAndAlternates(path: string, languages: string[] = ['pt-BR']) {
  const baseUrl = 'https://desafiovitalidade.com.br';
  const canonical = `${baseUrl}${path}`;
  
  const alternates = languages.reduce((acc, lang) => {
    acc[lang] = `${baseUrl}${lang === 'pt-BR' ? '' : `/${lang.toLowerCase()}`}${path}`;
    return acc;
  }, {} as Record<string, string>);
  
  return {
    canonical,
    languages: alternates
  };
}

/**
 * Gera breadcrumbs estruturados para SEO
 */
export function generateBreadcrumbs(items: {name: string, url: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://desafiovitalidade.com.br${item.url}`
    }))
  };
}
