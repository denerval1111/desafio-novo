import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function GerenciamentoPeso() {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero da página */}
        <section className="bg-laranja-peso/10 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-laranja-peso">Gerenciamento do Peso</h1>
              <p className="text-xl text-cinza-medio">
                Emagreça sem sofrimento através de uma abordagem integrada e sustentável
              </p>
            </div>
          </div>
        </section>
        
        {/* Introdução */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Uma Nova Abordagem para o Gerenciamento do Peso</h2>
                <p className="mb-4">
                  O gerenciamento saudável do peso vai muito além de dietas restritivas ou exercícios extenuantes. No Desafio Vitalidade, abordamos o peso como um marcador de saúde metabólica e celular, não apenas como uma questão estética.
                </p>
                <p className="mb-4">
                  Nossa abordagem integra conhecimentos de nutrologia, medicina regenerativa e saúde mental para criar um programa que promove a composição corporal saudável sem os ciclos de restrição e compulsão comuns em dietas convencionais.
                </p>
                <p>
                  Focamos em otimizar sua saúde metabólica, equilibrar hormônios relacionados ao apetite e peso, reduzir inflamação sistêmica e desenvolver uma relação saudável com a alimentação e o corpo, permitindo que você alcance e mantenha seu peso ideal de forma natural e sustentável.
                </p>
              </div>
              <div className="bg-cinza-claro p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Benefícios Principais</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Perda de gordura sustentável sem perda significativa de massa muscular</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Melhora da sensibilidade à insulina e metabolismo da glicose</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Redução da inflamação sistêmica e marcadores de estresse oxidativo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Equilíbrio dos hormônios relacionados ao apetite e saciedade</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Desenvolvimento de uma relação saudável com a alimentação e o corpo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Manutenção dos resultados a longo prazo sem efeito rebote</span>
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
              {/* Otimização Metabólica */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-laranja-peso">Otimização Metabólica</h3>
                    <p className="mb-4">
                      A saúde metabólica é fundamental para o gerenciamento saudável do peso. Muitas pessoas enfrentam dificuldades para perder peso devido a desequilíbrios metabólicos, como resistência à insulina, inflamação crônica e disfunção mitocondrial.
                    </p>
                    <p className="mb-4">
                      No Desafio Vitalidade, implementamos estratégias cientificamente validadas para otimizar seu metabolismo, melhorar a sensibilidade à insulina e aumentar a eficiência energética celular, criando um ambiente interno favorável à perda de gordura e manutenção da massa muscular.
                    </p>
                    <p>
                      Nossa abordagem foca em corrigir as causas subjacentes dos desequilíbrios metabólicos, não apenas em criar um déficit calórico, resultando em uma perda de peso mais saudável, sustentável e sem o efeito rebote comum em dietas convencionais.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-laranja-peso/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Estratégias Implementadas</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Protocolos personalizados de alimentação com tempo restrito (jejum intermitente adaptado)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Otimização da composição macronutriente das refeições para controle glicêmico</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Inclusão estratégica de alimentos anti-inflamatórios e ricos em nutrientes</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Protocolos de exercício específicos para sensibilidade à insulina e saúde mitocondrial</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Otimização do sono e gerenciamento do estresse para equilíbrio hormonal</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-laranja-peso/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Benefícios Específicos</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Melhora da sensibilidade à insulina e redução da resistência insulínica</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Aumento da flexibilidade metabólica (capacidade de alternar entre diferentes fontes de energia)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Redução da inflamação metabólica e estresse oxidativo</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Otimização da função mitocondrial e produção de energia</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Nutrição Consciente */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-laranja-peso">Nutrição Consciente</h3>
                    <p className="mb-4">
                      A nutrição consciente vai além de contar calorias ou restringir grupos alimentares. Trata-se de desenvolver uma relação saudável com a alimentação, reconhecendo sinais de fome e saciedade, e escolhendo alimentos que nutrem seu corpo no nível celular.
                    </p>
                    <p className="mb-4">
                      No Desafio Vitalidade, integramos princípios da alimentação consciente (mindful eating) com conhecimentos nutricionais baseados em evidências, criando um plano alimentar que é tanto nutricionalmente adequado quanto psicologicamente sustentável.
                    </p>
                    <p>
                      Nossa abordagem foca em adicionar alimentos nutritivos e saborosos, não em eliminar alimentos, permitindo que você desenvolva padrões alimentares flexíveis e adaptáveis que apoiam tanto a perda de peso quanto a saúde geral.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-laranja-peso/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Práticas Implementadas</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Técnicas de alimentação consciente para reconhecer sinais de fome e saciedade</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Estratégias para otimizar a densidade nutricional das refeições</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Abordagens para lidar com desejos alimentares e gatilhos emocionais</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-laranja-peso mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                 
(Content truncated due to size limit. Use line ranges to read in chunks)