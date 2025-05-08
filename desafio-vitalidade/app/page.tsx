import React from 'react';
import Header from '@/components/Header'; // Corrigido o caminho da importação
import Footer from '@/components/Footer'; // Corrigido o caminho da importação

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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Sessões semanais em grupo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Material educativo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Comunidade virtual</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#formulario-inscricao" className="btn-primary inline-block px-6 py-3 w-full">
                    Inscrever-se no Plano Básico
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-verde-vitalidade relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-verde-vitalidade text-white text-sm px-3 py-1 rounded-full">
                  Mais Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Plano Premium</h3>
                  <div className="text-3xl font-bold text-verde-vitalidade mb-1">R$ 2.997</div>
                  <p className="text-cinza-medio">Pagamento único</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Todos os benefícios do Plano Básico</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>2 sessões de consultoria individual</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Acesso prioritário a novas turmas e workshops</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Kit de boas-vindas com materiais exclusivos</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#formulario-inscricao" className="btn-primary inline-block px-6 py-3 w-full">
                    Inscrever-se no Plano Premium
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Plano Personalizado</h3>
                  <div className="text-3xl font-bold text-verde-vitalidade mb-1">Consulte</div>
                  <p className="text-cinza-medio">Sob medida para você</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Programa totalmente adaptado às suas necessidades</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Consultoria individual ilimitada</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Acompanhamento exclusivo com especialistas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-verde-vitalidade mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Flexibilidade total de horários</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#contato" className="btn-secondary inline-block px-6 py-3 w-full">
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Formulário de Inscrição */}
        <section id="formulario-inscricao" className="section">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Formulário de Inscrição</h2>
            
            <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-cinza-escuro mb-1">Nome Completo</label>
                  <input type="text" name="nome" id="nome" required className="input-form w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cinza-escuro mb-1">Email</label>
                  <input type="email" name="email" id="email" required className="input-form w-full" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-cinza-escuro mb-1">Telefone</label>
                  <input type="tel" name="telefone" id="telefone" required className="input-form w-full" />
                </div>
                <div>
                  <label htmlFor="data_nascimento" className="block text-sm font-medium text-cinza-escuro mb-1">Data de Nascimento</label>
                  <input type="date" name="data_nascimento" id="data_nascimento" required className="input-form w-full" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="turma" className="block text-sm font-medium text-cinza-escuro mb-1">Turma Desejada</label>
                <select name="turma" id="turma" required className="input-form w-full">
                  <option value="">Selecione uma turma</option>
                  <option value="maio2025">Turma Maio 2025</option>
                  <option value="junho2025">Turma Junho 2025</option>
                  <option value="julho2025">Turma Julho 2025</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="plano" className="block text-sm font-medium text-cinza-escuro mb-1">Plano Escolhido</label>
                <select name="plano" id="plano" required className="input-form w-full">
                  <option value="">Selecione um plano</option>
                  <option value="basico">Plano Básico</option>
                  <option value="premium">Plano Premium</option>
                  <option value="personalizado">Plano Personalizado (Entraremos em contato)</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-sm font-medium text-cinza-escuro mb-1">Mensagem (Opcional)</label>
                <textarea name="mensagem" id="mensagem" rows={4} className="input-form w-full"></textarea>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" name="termos" required className="h-4 w-4 text-verde-vitalidade border-cinza-claro rounded focus:ring-verde-vitalidade" />
                  <span className="ml-2 text-sm text-cinza-escuro">
                    Eu li e concordo com os <a href="/termos-e-condicoes" className="text-verde-vitalidade hover:underline">Termos e Condições</a> do programa.
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary inline-block px-8 py-3">
                  Enviar Inscrição
                </button>
              </div>
            </form>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="section">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Qual o público-alvo do Desafio Vitalidade?</h3>
                <p className="text-cinza-medio">
                  O programa é ideal para homens e mulheres acima de 40 anos, tanto pessoas saudáveis que buscam otimizar sua longevidade, quanto portadoras de condições crônicas que desejam melhorar sua qualidade de vida.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Preciso ter algum conhecimento prévio sobre saúde ou nutrição?</h3>
                <p className="text-cinza-medio">
                  Não. O Desafio Vitalidade é desenhado para ser acessível a todos, independentemente do seu nível de conhecimento. Forneceremos todas as informações e suporte necessários.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">As sessões em grupo são obrigatórias?</h3>
                <p className="text-cinza-medio">
                  Embora altamente recomendadas para o máximo aproveitamento do programa e interação com especialistas e outros participantes, a participação não é estritamente obrigatória. Todo o material será disponibilizado.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">O que acontece após os 30 dias do programa?</h3>
                <p className="text-cinza-medio">
                  Ao final do desafio, você receberá uma avaliação final e um plano de manutenção para continuar aplicando os aprendizados em sua rotina. Além disso, terá a opção de continuar em nossa comunidade e acessar conteúdos exclusivos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Existe alguma garantia de resultados?</h3>
                <p className="text-cinza-medio">
                  Os resultados podem variar de pessoa para pessoa, mas o programa é baseado em evidências científicas sólidas e, com seu comprometimento, esperamos que você alcance melhorias significativas em sua saúde e bem-estar.
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      
      <Footer />
    </>
  );
}
