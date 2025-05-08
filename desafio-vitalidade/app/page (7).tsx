import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Nutrologia() {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero da página */}
        <section className="bg-terracota-nutricao/10 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-terracota-nutricao">Nutrologia</h1>
              <p className="text-xl text-cinza-medio">
                Otimize sua nutrição combinando o melhor das dietas mediterrânea e asiática adaptadas à culinária brasileira
              </p>
            </div>
          </div>
        </section>
        
        {/* Introdução */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nutrição para Longevidade</h2>
                <p className="mb-4">
                  A nutrição é um dos pilares fundamentais para a longevidade saudável. O que comemos influencia diretamente nossos processos celulares, expressão genética, inflamação sistêmica e praticamente todos os aspectos da nossa saúde.
                </p>
                <p className="mb-4">
                  No Desafio Vitalidade, nossa abordagem nutricional é baseada nas dietas mais estudadas e associadas à longevidade: a dieta mediterrânea e a dieta asiática (especialmente a japonesa de Okinawa), adaptadas à realidade e aos ingredientes da culinária brasileira.
                </p>
                <p>
                  Não se trata de uma "dieta" no sentido restritivo, mas de um padrão alimentar sustentável e prazeroso que nutre seu corpo no nível celular, otimiza seu metabolismo e apoia os mecanismos naturais de regeneração e reparo.
                </p>
              </div>
              <div className="bg-cinza-claro p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Benefícios Principais</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Redução da inflamação sistêmica</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Otimização do metabolismo e sensibilidade à insulina</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Suporte à saúde cardiovascular e cerebral</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Melhora da composição da microbiota intestinal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Fornecimento de nutrientes que apoiam a autofagia e a preservação dos telômeros</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Gerenciamento natural do peso e composição corporal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Componentes Principais */}
        <section className="section bg-cinza-claro">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Componentes Principais</h2>
            
            <div className="grid grid-cols-1 gap-16">
              {/* Dieta Mediterrânea */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-terracota-nutricao">Dieta Mediterrânea</h3>
                    <p className="mb-4">
                      A dieta mediterrânea é reconhecida mundialmente como um dos padrões alimentares mais saudáveis e associados à longevidade. Originária de regiões como Grécia, Itália e Espanha, esta dieta é rica em azeite de oliva, vegetais, frutas, legumes, nozes, sementes, grãos integrais, peixes e consumo moderado de vinho tinto.
                    </p>
                    <p className="mb-4">
                      Estudos extensos, como o PREDIMED, demonstraram que a adesão à dieta mediterrânea está associada a menor risco de doenças cardiovasculares, diabetes tipo 2, certos tipos de câncer e declínio cognitivo relacionado à idade.
                    </p>
                    <p>
                      No Desafio Vitalidade, adaptamos os princípios da dieta mediterrânea à realidade brasileira, utilizando ingredientes locais que oferecem perfis nutricionais semelhantes, tornando esta abordagem acessível e sustentável.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-terracota-nutricao/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Princípios Fundamentais</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Abundância de alimentos vegetais (frutas, vegetais, legumes, grãos integrais)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Azeite de oliva extra virgem como principal fonte de gordura</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Consumo regular de peixes e frutos do mar ricos em ômega-3</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Inclusão diária de nozes, sementes e azeitonas</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Consumo moderado de laticínios, principalmente iogurte e queijos fermentados</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Consumo limitado de carnes vermelhas e açúcares processados</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-terracota-nutricao/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Adaptação Brasileira</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Utilização de azeite de dendê (rico em vitamina E) em algumas preparações</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Incorporação de frutas tropicais brasileiras ricas em antioxidantes</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Substituição de alguns grãos por opções locais como quinoa brasileira e amaranto</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Uso de peixes da costa brasileira ricos em ômega-3</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dieta Asiática */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-terracota-nutricao">Dieta Asiática (Okinawa)</h3>
                    <p className="mb-4">
                      A dieta tradicional de Okinawa, no Japão, é reconhecida por estar associada a uma das maiores concentrações de centenários saudáveis do mundo. Esta abordagem alimentar é caracterizada por alta ingestão de vegetais, especialmente vegetais de folhas verdes e raízes, consumo moderado de peixes, baixa ingestão de carne vermelha e açúcar, e inclusão regular de alimentos fermentados.
                    </p>
                    <p className="mb-4">
                      Um princípio fundamental da dieta de Okinawa é o "hara hachi bu" - comer até estar 80% satisfeito, uma prática que naturalmente limita a ingestão calórica sem restrição severa e que está alinhada com os benefícios da restrição calórica moderada para a longevidade.
                    </p>
                    <p>
                      No Desafio Vitalidade, incorporamos elementos-chave da dieta de Okinawa, adaptados aos ingredientes e preferências brasileiras, para criar um padrão alimentar que apoia a longevidade e a vitalidade.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-terracota-nutricao/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Princípios Fundamentais</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Alta ingestão de vegetais coloridos (7+ porções diárias)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Consumo regular de algas marinhas ricas em minerais</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-terracota-nutricao mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
 
(Content truncated due to size limit. Use line ranges to read in chunks)