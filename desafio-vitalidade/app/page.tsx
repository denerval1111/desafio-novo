import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Inscricao() {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero da página */}
        <section className="bg-verde-vitalidade/10 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-verde-vitalidade">Inscreva-se no Desafio Vitalidade</h1>
              <p className="text-xl text-cinza-medio">
                Dê o primeiro passo em direção a uma vida mais longa, saudável e plena
              </p>
            </div>
          </div>
        </section>
        
        {/* Informações do Programa */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Sobre o Programa</h2>
                <p className="mb-4">
                  O Desafio Vitalidade é um programa de 30 dias desenvolvido por especialistas em medicina regenerativa não intervencionista, nutrologia e psiquiatria, focado em promover longevidade saudável e prevenir doenças crônicas relacionadas à idade.
                </p>
                <p className="mb-4">
                  Durante o programa, você terá acesso a um conjunto abrangente de estratégias cientificamente validadas para otimizar sua saúde em múltiplos níveis, desde a função celular até o bem-estar mental e emocional.
                </p>
                <p className="mb-6">
                  Nosso objetivo é não apenas proporcionar resultados durante os 30 dias, mas criar uma mudança de paradigma que você possa incorporar como rotina diária para benefícios duradouros.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">O Programa Inclui:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Avaliação inicial personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Plano individualizado abrangendo os quatro pilares do programa</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Sessões semanais em grupo com especialistas (online)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Material educativo completo e recursos práticos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Acesso à comunidade virtual de participantes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Suporte contínuo durante todo o programa</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Avaliação final e plano de manutenção pós-programa</span>
                  </li>
                </ul>
                
                <div className="bg-cinza-claro p-4 rounded-lg">
                  <p className="italic">
                    "O Desafio Vitalidade não é apenas mais um programa de saúde. É uma jornada transformadora baseada em ciência de ponta, que aborda as causas fundamentais do envelhecimento e das doenças crônicas."
                  </p>
                  <p className="mt-2 font-semibold">
                    - Dr. Ricardo Mendes, Fundador do Desafio Vitalidade
                  </p>
                </div>
              </div>
              
              <div className="bg-cinza-claro p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Próximas Turmas</h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Turma Maio 2025</h3>
                      <span className="bg-verde-vitalidade text-white text-sm px-3 py-1 rounded-full">Vagas Disponíveis</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span><strong>Início:</strong> 12 de Maio de 2025</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span><strong>Horário das sessões:</strong> Terças e Quintas, 19h-20h30</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span><strong>Vagas:</strong> 12/20 disponíveis</span>
                      </li>
                    </ul>
                    <div className="text-center">
                      <a href="#formulario-inscricao" className="btn-primary inline-block px-6 py-3">
                        Inscrever-se nesta turma
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Turma Junho 2025</h3>
                      <span className="bg-verde-vitalidade text-white text-sm px-3 py-1 rounded-full">Vagas Disponíveis</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span><strong>Início:</strong> 9 de Junho de 2025</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span><strong>Horário das sessões:</strong> Segundas e Quartas, 19h-20h30</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span><strong>Vagas:</strong> 16/20 disponíveis</span>
                      </li>
                    </ul>
                    <div className="text-center">
                      <a href="#formulario-inscricao" className="btn-primary inline-block px-6 py-3">
                        Inscrever-se nesta turma
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Turma Julho 2025</h3>
                      <span className="bg-verde-vitalidade text-white text-sm px-3 py-1 rounded-full">Vagas Disponíveis</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span><strong>Início:</strong> 7 de Julho de 2025</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span><strong>Horário das sessões:</strong> Terças e Quintas, 10h-11h30</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span><strong>Vagas:</strong> 20/20 disponíveis</span>
                      </li>
                    </ul>
                    <div className="text-center">
                      <a href="#formulario-inscricao" className="btn-primary inline-block px-6 py-3">
                        Inscrever-se nesta turma
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-cinza-medio">
                    Não encontrou um horário adequado? Entre em contato para verificar a disponibilidade de consultoria individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Investimento */}
        <section className="section bg-cinza-claro">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Investimento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Plano Básico</h3>
                  <div className="text-3xl font-bold text-verde-vitalidade mb-1">R$ 1.997</div>
                  <p className="text-cinza-medio">Pagamento único</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Programa completo de 30 dias</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"
(Content truncated due to size limit. Use line ranges to read in chunks)