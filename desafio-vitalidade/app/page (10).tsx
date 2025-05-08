import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import BenefitsSection from '@/components/ui/BenefitsSection';
import PilaresSection from '@/components/ui/PilaresSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import CtaSection from '@/components/ui/CtaSection';
import BlogSection from '@/components/ui/BlogSection';

export default function Home() {
  // Dados para a seção Hero
  const heroData = {
    title: "Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias",
    subtitle: "Um programa multidisciplinar baseado em ciência para longevidade saudável e prevenção de doenças relacionadas à idade",
    ctaText: "Inscreva-se Agora",
    ctaLink: "/inscricao",
    secondaryCtaText: "Saiba Mais",
    secondaryCtaLink: "/sobre/programa",
    backgroundImage: "/images/hero-background.jpg"
  };

  // Dados para a seção de Benefícios
  const benefitsData = {
    title: "Benefícios do Desafio Vitalidade",
    subtitle: "Transforme sua saúde e qualidade de vida com nosso programa de 30 dias",
    benefits: [
      {
        icon: "/images/icons/autofagia.svg",
        title: "Estimule a Autofagia",
        description: "Ative os mecanismos naturais de limpeza celular e renovação do seu corpo"
      },
      {
        icon: "/images/icons/telomeros.svg",
        title: "Preserve seus Telômeros",
        description: "Proteja o DNA e retarde o envelhecimento celular com práticas cientificamente comprovadas"
      },
      {
        icon: "/images/icons/metabolismo.svg",
        title: "Otimize seu Metabolismo",
        description: "Melhore sua energia e vitalidade com nutrição personalizada e suplementação estratégica"
      },
      {
        icon: "/images/icons/mente.svg",
        title: "Fortaleça sua Mente",
        description: "Desenvolva resiliência mental e emocional para enfrentar os desafios da vida moderna"
      }
    ]
  };

  // Dados para a seção de Pilares
  const pilaresData = {
    title: "Os Quatro Pilares do Programa",
    subtitle: "Uma abordagem integrada para longevidade saudável baseada em evidências científicas",
    pilares: [
      {
        icon: "/images/icons/medicina-regenerativa.svg",
        title: "Medicina Regenerativa",
        description: "Estimule a autofagia, preserve telômeros e ative células-tronco com métodos não intervencionistas",
        link: "/pilares/medicina-regenerativa",
        color: "verde"
      },
      {
        icon: "/images/icons/nutrologia.svg",
        title: "Nutrologia",
        description: "Combine o melhor das dietas mediterrânea e asiática adaptadas à culinária brasileira",
        link: "/pilares/nutrologia",
        color: "terracota"
      },
      {
        icon: "/images/icons/saude-mental.svg",
        title: "Saúde Mental",
        description: "Técnicas de motivação e enfrentamento da ansiedade, procrastinação e sintomas depressivos",
        link: "/pilares/saude-mental",
        color: "azul"
      },
      {
        icon: "/images/icons/gerenciamento-peso.svg",
        title: "Gerenciamento de Peso",
        description: "Emagreça sem sofrimento com estratégias sustentáveis e personalizadas",
        link: "/pilares/gerenciamento-peso",
        color: "amarelo"
      }
    ]
  };

  // Dados para a seção de Depoimentos
  const testimonialsData = {
    title: "Histórias de Transformação",
    subtitle: "Conheça pessoas que transformaram suas vidas com o Desafio Vitalidade",
    testimonials: [
      {
        quote: "Após 30 dias, minha energia aumentou significativamente e meus exames de sangue melhoraram. Nunca imaginei que mudanças tão simples pudessem ter um impacto tão grande.",
        name: "Carlos",
        age: 58,
        location: "São Paulo, SP",
        image: "/images/testimonials/person1.jpg"
      },
      {
        quote: "O programa me ajudou a perder 5kg sem sofrimento e, mais importante, me ensinou como manter os resultados. A abordagem integrada faz toda a diferença.",
        name: "Márcia",
        age: 52,
        location: "Rio de Janeiro, RJ",
        image: "/images/testimonials/person2.jpg"
      },
      {
        quote: "Minha ansiedade diminuiu drasticamente e meu sono melhorou desde a primeira semana. As técnicas de saúde mental são simples mas extremamente eficazes.",
        name: "Roberto",
        age: 45,
        location: "Belo Horizonte, MG",
        image: "/images/testimonials/person3.jpg"
      }
    ]
  };

  // Dados para a seção de Blog
  const blogData = {
    title: "Conteúdos Educativos",
    subtitle: "Artigos e recursos para aprofundar seu conhecimento sobre longevidade saudável",
    posts: [
      {
        title: "Autofagia: Como ativar a limpeza celular naturalmente",
        excerpt: "Descubra como o jejum intermitente e outros hábitos podem estimular o processo de autofagia e promover a renovação celular.",
        image: "/images/blog/autofagia.jpg",
        date: "20 Abr 2025",
        category: "Medicina Regenerativa",
        readTime: "5 min",
        slug: "autofagia-limpeza-celular"
      },
      {
        title: "Dieta Mediterrânea com Ingredientes Brasileiros",
        excerpt: "Aprenda a adaptar os princípios da dieta mediterrânea usando ingredientes típicos da culinária brasileira.",
        image: "/images/blog/dieta-mediterranea.jpg",
        date: "15 Abr 2025",
        category: "Nutrição",
        readTime: "7 min",
        slug: "dieta-mediterranea-brasileira"
      },
      {
        title: "Técnicas de Mindfulness para Reduzir o Estresse",
        excerpt: "Práticas simples de mindfulness que podem ser incorporadas ao dia a dia para reduzir o estresse e melhorar a saúde mental.",
        image: "/images/blog/mindfulness.jpg",
        date: "10 Abr 2025",
        category: "Saúde Mental",
        readTime: "6 min",
        slug: "tecnicas-mindfulness-estresse"
      }
    ]
  };

  // Dados para a seção de CTA
  const ctaData = {
    title: "Pronto para Transformar sua Saúde?",
    subtitle: "Junte-se a mais de 500 pessoas que já transformaram suas vidas com o Desafio Vitalidade",
    buttonText: "Inscreva-se no Programa",
    buttonLink: "/inscricao"
  };

  return (
    <>
      <Header transparent={true} />
      
      <main>
        <HeroSection {...heroData} />
        <BenefitsSection {...benefitsData} />
        <PilaresSection {...pilaresData} />
        <TestimonialsSection {...testimonialsData} />
        <BlogSection {...blogData} />
        <CtaSection {...ctaData} />
      </main>
      
      <Footer />
    </>
  );
}
