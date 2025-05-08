import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SaudeMental() {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero da página */}
        <section className="bg-azul-longevidade/10 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-azul-longevidade">Saúde Mental e Espiritual</h1>
              <p className="text-xl text-cinza-medio">
                Fortaleça sua mente e espírito para uma longevidade plena e significativa
              </p>
            </div>
          </div>
        </section>
        
        {/* Introdução */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">A Importância da Saúde Mental para a Longevidade</h2>
                <p className="mb-4">
                  A saúde mental é um componente fundamental da longevidade saudável, tão importante quanto a saúde física. O estado da nossa mente influencia diretamente nossos processos fisiológicos, sistema imunológico, expressão genética e praticamente todos os aspectos da nossa saúde.
                </p>
                <p className="mb-4">
                  No Desafio Vitalidade, abordamos a saúde mental de forma abrangente, integrando conhecimentos da psiquiatria moderna com práticas contemplativas tradicionais, técnicas de gerenciamento do estresse e estratégias para cultivar propósito e significado.
                </p>
                <p>
                  Nossa abordagem reconhece a profunda conexão mente-corpo e visa não apenas reduzir sintomas de ansiedade, depressão e estresse, mas também promover estados positivos de bem-estar, resiliência emocional e crescimento pessoal.
                </p>
              </div>
              <div className="bg-cinza-claro p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Benefícios Principais</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Redução do estresse crônico e seus efeitos prejudiciais</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Melhora da qualidade do sono e recuperação</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Aumento da resiliência emocional e capacidade de adaptação</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Otimização da função cognitiva e neuroplasticidade</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Desenvolvimento de propósito e significado na vida</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Fortalecimento das conexões sociais e apoio comunitário</span>
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
              {/* Gerenciamento do Estresse */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-azul-longevidade">Gerenciamento do Estresse</h3>
                    <p className="mb-4">
                      O estresse crônico é um dos principais aceleradores do envelhecimento, afetando negativamente quase todos os sistemas do corpo, desde o sistema cardiovascular até o sistema imunológico e a função cerebral.
                    </p>
                    <p className="mb-4">
                      Estudos mostram que o estresse crônico está associado ao encurtamento dos telômeros, aumento da inflamação sistêmica, disfunção mitocondrial e outros marcadores biológicos de envelhecimento acelerado.
                    </p>
                    <p>
                      No Desafio Vitalidade, implementamos estratégias cientificamente validadas para gerenciar o estresse, não apenas reduzindo seus efeitos negativos, mas também desenvolvendo maior resiliência e capacidade de adaptação aos desafios da vida.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-azul-longevidade/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Técnicas Implementadas</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Práticas de respiração consciente e coerência cardíaca</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Meditação mindfulness adaptada para iniciantes e praticantes experientes</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Técnicas de reestruturação cognitiva para padrões de pensamento negativos</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Práticas de exposição à natureza e banhos de floresta (shinrin-yoku)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Estratégias para estabelecer limites saudáveis e gerenciar demandas</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-azul-longevidade/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Benefícios Específicos</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Redução dos níveis de cortisol e outros hormônios do estresse</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Melhora da variabilidade da frequência cardíaca (VFC)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Diminuição da inflamação sistêmica relacionada ao estresse</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Aumento da capacidade de recuperação após eventos estressantes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Saúde do Sono */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-azul-longevidade">Saúde do Sono</h3>
                    <p className="mb-4">
                      O sono de qualidade é um dos pilares mais subestimados da saúde e longevidade. Durante o sono, ocorrem processos críticos de reparo celular, consolidação da memória, limpeza de toxinas cerebrais e regulação hormonal.
                    </p>
                    <p className="mb-4">
                      A privação crônica de sono está associada a um risco aumentado de praticamente todas as doenças relacionadas à idade, incluindo doenças cardiovasculares, diabetes, obesidade, declínio cognitivo e até mesmo câncer.
                    </p>
                    <p>
                      No Desafio Vitalidade, implementamos um protocolo abrangente de higiene do sono e estratégias para otimizar tanto a quantidade quanto a qualidade do sono, reconhecendo seu papel fundamental na regeneração celular e na saúde mental.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-azul-longevidade/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Estratégias Implementadas</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Otimização do ambiente de sono (temperatura, luz, som, conforto)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Alinhamento do ciclo sono-vigília com os ritmos circadianos naturais</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Técnicas de relaxamento pré-sono e rotinas de descompressão</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Gerenciamento da exposição à luz azul e tecnologia</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-azul-longevida
(Content truncated due to size limit. Use line ranges to read in chunks)