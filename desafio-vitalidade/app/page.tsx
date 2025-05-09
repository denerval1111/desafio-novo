import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Image from 'next/image'; // Descomente se preferir usar o componente Image do Next.js

// Dados da Home Page (baseado em estrutura_site.txt)
const homePageData = {
  hero: {
    title: "Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias",
    subtitle: "Um programa multidisciplinar baseado em ciência para longevidade saudável",
    ctaPrimary: { text: "Inscreva-se Agora", link: "/inscricao" },
    ctaSecondary: { text: "Saiba Mais", link: "/sobre/programa" },
    backgroundImage: "/images/hero-background.jpg" // Certifique-se que esta imagem está em public/images/
  },
  benefits: {
    title: "Benefícios do Desafio Vitalidade",
    description: "Transforme sua saúde e qualidade de vida com nosso programa de 30 dias.",
    items: [
      {
        icon: "/images/placeholder_zen_stones.jpeg", // Certifique-se que esta imagem está em public/images/
        title: "Estimule a Autofagia",
        description: "Ative os mecanismos naturais de limpeza celular e renovação do seu corpo."
      },
      {
        icon: "/images/placeholder_nature_minimalist.jpeg", // Certifique-se que esta imagem está em public/images/
        title: "Preserve seus Telômeros",
        description: "Proteja o DNA e retarde o envelhecimento celular com práticas cientificamente comprovadas."
      },
      {
        icon: "/images/placeholder_healthy_food_minimalist.jpeg", // Certifique-se que esta imagem está em public/images/
        title: "Otimize seu Metabolismo",
        description: "Melhore sua energia e vitalidade com nutrição personalizada e suplementação estratégica."
      },
      {
        icon: "/images/placeholder_meditation_minimalist.jpeg", // Certifique-se que esta imagem está em public/images/
        title: "Fortaleça sua Mente",
        description: "Desenvolva resiliência mental e emocional para enfrentar os desafios da vida moderna."
      }
    ]
  },
  aboutProgram: {
    title: "Sobre o Programa Desafio Vitalidade",
    introduction: "Uma breve introdução ao Desafio Vitalidade, destacando a duração de 30 dias e o formato online.",
    link: "/sobre/programa",
    image: "/images/placeholder_about_program.jpg" // Substitua por uma imagem representativa em public/images/
  },
  pilares: {
    title: "Os Quatro Pilares do Programa",
    subtitle: "Uma abordagem integrada para longevidade saudável baseada em evidências científicas.",
    items: [
      {
        icon: "/images/placeholder_nature_minimalist.jpeg", // Reutilizando, mas pode ser específico
        title: "Medicina Regenerativa",
        description: "Estimule a autofagia, preserve telômeros e ative células-tronco.",
        link: "/pilares/medicina-regenerativa"
      },
      {
        icon: "/images/placeholder_healthy_food_minimalist.jpeg", // Reutilizando
        title: "Nutrologia",
        description: "Combine o melhor das dietas mediterrânea e asiática adaptadas.",
        link: "/pilares/nutrologia"
      },
      {
        icon: "/images/placeholder_meditation_minimalist.jpeg", // Reutilizando
        title: "Saúde Mental",
        description: "Técnicas de motivação e enfrentamento da ansiedade.",
        link: "/pilares/saude-mental"
      },
      {
        icon: "/images/placeholder_yoga_flatlay.jpeg", // Certifique-se que esta imagem está em public/images/
        title: "Gerenciamento de Peso",
        description: "Emagreça sem sofrimento com estratégias sustentáveis.",
        link: "/pilares/gerenciamento-peso"
      }
    ]
  },
  testimonials: {
    title: "O que Nossos Alunos Dizem",
    items: [
      { photo: "/images/testimonial_1.jpg", name: "Maria S.", age: 52, quote: "Transformador! Recuperei minha energia e disposição.", result: "Perdeu 5kg e melhorou o sono" }, // Substitua por imagens reais
      { photo: "/images/testimonial_2.jpg", name: "João P.", age: 48, quote: "Aprendi a cuidar de mim de verdade.", result: "Reduziu o estresse e ganhou mais foco" },
      { photo: "/images/testimonial_3.jpg", name: "Ana L.", age: 60, quote: "Recomendo a todos que buscam uma vida mais saudável.", result: "Melhorou indicadores de saúde" }
    ]
  },
  // Adicionar outras seções conforme estrutura_site.txt: Números e Credibilidade, Prévia do Conteúdo, CTA Final, FAQ Rápido
};

export default function HomePage() {
  const { hero, benefits, aboutProgram, pilares, testimonials } = homePageData;

  return (
    <>
      <Header />
      <main className="pt-20 pb-16 text-gray-800">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center py-32 text-white min-h-[70vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container-custom mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{hero.title}</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">{hero.subtitle}</p>
            <div>
              <a href={hero.ctaPrimary.link} className="bg-verde-vitalidade hover:bg-verde-vitalidade-dark text-white font-bold py-3 px-8 rounded-lg text-lg mr-0 mb-4 md:mr-4 md:mb-0 inline-block transition-colors duration-300">{hero.ctaPrimary.text}</a>
              <a href={hero.ctaSecondary.link} className="bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-lg border-2 border-white text-lg inline-block transition-colors duration-300">{hero.ctaSecondary.text}</a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">{benefits.title}</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">{benefits.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.items.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                  <img src={benefit.icon} alt={benefit.title} className="w-20 h-20 mx-auto mb-6 rounded-full object-cover" />
                  {/* <Image src={benefit.icon} alt={benefit.title} width={80} height={80} className="mx-auto mb-6 rounded-full object-cover" /> */}
                  <h3 className="text-xl font-semibold mb-3 text-verde-vitalidade">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Program Section */}
        <section className="py-16">
          <div className="container-custom mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">{aboutProgram.title}</h2>
              <p className="text-gray-600 mb-6 text-lg">{aboutProgram.introduction}</p>
              <a href={aboutProgram.link} className="text-verde-vitalidade hover:text-verde-vitalidade-dark font-semibold text-lg">Saiba mais sobre o programa &rarr;</a>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src={aboutProgram.image} alt="Sobre o Programa Desafio Vitalidade" className="rounded-lg shadow-xl w-full h-auto object-cover max-h-96" />
              {/* <Image src={aboutProgram.image} alt="Sobre o Programa Desafio Vitalidade" width={600} height={400} className="rounded-lg shadow-xl w-full h-auto object-cover" /> */}
            </div>
          </div>
        </section>

        {/* Pilares Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">{pilares.title}</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">{pilares.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pilares.items.map((pilar, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                  <img src={pilar.icon} alt={pilar.title} className="w-16 h-16 mx-auto mb-5 rounded-full object-cover" />
                  {/* <Image src={pilar.icon} alt={pilar.title} width={64} height={64} className="mx-auto mb-5 rounded-full object-cover" /> */}
                  <h3 className="text-xl font-semibold mb-3 text-verde-vitalidade">{pilar.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pilar.description}</p>
                  <a href={pilar.link} className="text-verde-vitalidade hover:text-verde-vitalidade-dark font-semibold text-sm mt-auto">Conheça o Pilar &rarr;</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container-custom mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-700">{testimonials.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.items.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-xl flex flex-col text-center hover:shadow-2xl transition-shadow duration-300">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-verde-vitalidade" />
                  {/* <Image src={testimonial.photo} alt={testimonial.name} width={96} height={96} className="mx-auto mb-4 rounded-full object-cover border-4 border-verde-vitalidade" /> */}
                  <p className="text-gray-600 italic mb-4 text-md">"{testimonial.quote}"</p>
                  <h4 className="font-bold text-lg text-gray-700">{testimonial.name}, {testimonial.age}</h4>
                  <p className="text-sm text-verde-vitalidade font-semibold mt-1">{testimonial.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TODO: Adicionar as seções restantes da Home Page: */}
        {/* - Números e Credibilidade */}
        {/* - Prévia do Conteúdo (Blog) */}
        {/* - CTA Final (Formulário de Inscrição/Lead) */}
        {/* - FAQ Rápido */}

      </main>
      <Footer />
    </>
  );
}
