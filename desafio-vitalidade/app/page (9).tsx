import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MedicinaRegenerativa() {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero da página */}
        <section className="bg-verde-vitalidade/10 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-verde-vitalidade">Medicina Regenerativa Não Intervencionista</h1>
              <p className="text-xl text-cinza-medio">
                Estimule os mecanismos naturais de regeneração do seu corpo para promover longevidade saudável
              </p>
            </div>
          </div>
        </section>
        
        {/* Introdução */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">O que é Medicina Regenerativa Não Intervencionista?</h2>
                <p className="mb-4">
                  A Medicina Regenerativa Não Intervencionista é uma abordagem que visa estimular os mecanismos naturais de regeneração e reparo do corpo humano, sem a necessidade de procedimentos invasivos ou cirúrgicos.
                </p>
                <p className="mb-4">
                  Diferente das abordagens convencionais que frequentemente tratam apenas os sintomas, esta vertente da medicina foca em otimizar os processos celulares fundamentais relacionados à longevidade e à saúde, como a autofagia, a preservação dos telômeros e a ativação de células-tronco.
                </p>
                <p>
                  No Desafio Vitalidade, integramos as descobertas mais recentes neste campo com práticas acessíveis que podem ser incorporadas ao dia a dia, permitindo que você ative seu potencial regenerativo natural.
                </p>
              </div>
              <div className="bg-cinza-claro p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Benefícios Principais</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Renovação celular e tecidual acelerada</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Redução da inflamação crônica de baixo grau</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Melhora da função mitocondrial e produção de energia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Preservação da integridade do DNA</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Aumento da capacidade de reparo e regeneração</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Desaceleração dos marcadores biológicos de envelhecimento</span>
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
              {/* Autofagia */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-verde-vitalidade">Autofagia</h3>
                    <p className="mb-4">
                      A autofagia é um processo natural de "limpeza celular" em que as células reciclam componentes danificados ou disfuncionais. Este mecanismo é fundamental para a saúde celular e está diretamente relacionado à longevidade.
                    </p>
                    <p className="mb-4">
                      Quando a autofagia é estimulada adequadamente, o corpo remove proteínas mal dobradas, organelas danificadas e outros detritos celulares que, se acumulados, podem contribuir para o envelhecimento acelerado e doenças relacionadas à idade.
                    </p>
                    <p>
                      No Desafio Vitalidade, você aprenderá técnicas cientificamente comprovadas para ativar a autofagia de forma natural, incluindo protocolos de jejum intermitente adaptados ao seu perfil metabólico e práticas nutricionais específicas.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-verde-vitalidade/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Como Estimulamos a Autofagia</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Protocolos personalizados de jejum intermitente</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Incorporação de alimentos ricos em compostos que estimulam a autofagia</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Práticas de exercício físico específicas para ativação da autofagia</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Otimização do ciclo sono-vigília para potencializar os processos regenerativos</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Suplementação estratégica com compostos naturais que potencializam a autofagia</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-verde-vitalidade/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Benefícios Específicos</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Redução de proteínas danificadas associadas a doenças neurodegenerativas</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Melhora da sensibilidade à insulina e metabolismo da glicose</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Aumento da eficiência energética celular</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Redução da inflamação sistêmica</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Telômeros */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-verde-vitalidade">Telômeros</h3>
                    <p className="mb-4">
                      Os telômeros são estruturas protetoras nas extremidades dos cromossomos, semelhantes às pontas plásticas dos cadarços. A cada divisão celular, os telômeros naturalmente encurtam, e quando ficam criticamente curtos, a célula para de se dividir ou morre.
                    </p>
                    <p className="mb-4">
                      O comprimento dos telômeros é considerado um dos biomarcadores mais importantes do envelhecimento biológico. Pessoas com telômeros mais longos tendem a apresentar menor risco de doenças relacionadas à idade e maior longevidade.
                    </p>
                    <p>
                      No Desafio Vitalidade, focamos em práticas que ajudam a preservar o comprimento dos telômeros e, em alguns casos, até mesmo a aumentá-los através da modulação da atividade da telomerase, a enzima responsável pela manutenção dos telômeros.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-verde-vitalidade/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Como Preservamos os Telômeros</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Práticas de gerenciamento de estresse e técnicas de meditação específicas</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Protocolos de exercício físico que favorecem a preservação telomérica</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Nutrição rica em compostos que protegem os telômeros do dano oxidativo</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Otimização da qualidade do sono para reduzir o desgaste telomérico</span>
                        </li>
                        <li className="flex items-start">
                          <svg className
(Content truncated due to size limit. Use line ranges to read in chunks)