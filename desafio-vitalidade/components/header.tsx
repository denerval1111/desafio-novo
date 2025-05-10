"use client";

import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image'; // Image não está sendo usado neste componente, pode ser removido se não for planejado para logo.

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Função para fechar o menu mobile ao clicar em um link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8"> {/* Adicionado mx-auto e paddings responsivos aqui também */} 
        <div className="flex items-center justify-between h-16 md:h-20"> {/* Altura fixa para o header */} 
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-verde-vitalidade">Desafio Vitalidade</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8"> {/* Usando gap-x em vez de space-x para consistência */} 
            <Link href="/" className="text-cinza-escuro hover:text-verde-vitalidade font-medium transition-colors">
              Início
            </Link>
            <div className="relative group">
              <button className="flex items-center text-cinza-escuro hover:text-verde-vitalidade font-medium transition-colors">
                Sobre
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/sobre/programa" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  O Programa
                </Link>
                <Link href="/sobre/equipe" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  Nossa Equipe
                </Link>
                <Link href="/depoimentos" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  Depoimentos
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-cinza-escuro hover:text-verde-vitalidade font-medium transition-colors">
                Pilares
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/pilares/medicina-regenerativa" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  Medicina Regenerativa
                </Link>
                <Link href="/pilares/nutrologia" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  Nutrologia
                </Link>
                <Link href="/pilares/saude-mental" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  Saúde Mental
                </Link>
                <Link href="/pilares/gerenciamento-peso" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  Gerenciamento de Peso
                </Link>
              </div>
            </div>
            <Link href="/blog" className="text-cinza-escuro hover:text-verde-vitalidade font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contato" className="text-cinza-escuro hover:text-verde-vitalidade font-medium transition-colors">
              Contato
            </Link>
          </nav>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/inscricao" className="btn-primary px-6 py-2">
              Inscreva-se
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden"> {/* Garante que o botão só apareça em telas menores que md */} 
            <button 
              className="text-cinza-escuro p-2" /* Adicionado padding para facilitar o clique */
              onClick={toggleMobileMenu}
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay - md:hidden garante que só apareça em mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40" onClick={closeMobileMenu}></div>
      )}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <span className="text-xl font-bold text-verde-vitalidade">Desafio Vitalidade</span>
            </Link>
            <button 
              className="text-cinza-escuro p-2" /* Adicionado padding */
              onClick={closeMobileMenu} 
              aria-label="Fechar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-y-2"> {/* Usando gap-y */} 
            <Link href="/" className="text-lg font-medium py-3 px-2 hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
              Início
            </Link>
            
            <div className="py-2">
              <div className="text-lg font-medium mb-1 px-2">Sobre</div>
              <div className="pl-4 flex flex-col gap-y-1"> {/* Usando gap-y */} 
                <Link href="/sobre/programa" className="block py-2 px-2 text-cinza-escuro hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
                  O Programa
                </Link>
                <Link href="/sobre/equipe" className="block py-2 px-2 text-cinza-escuro hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
                  Nossa Equipe
                </Link>
                <Link href="/depoimentos" className="block py-2 px-2 text-cinza-escuro hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
                  Depoimentos
                </Link>
              </div>
            </div>
            
            <div className="py-2">
              <div className="text-lg font-medium mb-1 px-2">Pilares</div>
              <div className="pl-4 flex flex-col gap-y-1"> {/* Usando gap-y */} 
                <Link href="/pilares/medicina-regenerativa" className="block py-2 px-2 text-cinza-escuro hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
                  Medicina Regenerativa
                </Link>
                <Link href="/pilares/nutrologia" className="block py-2 px-2 text-cinza-escuro hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
                  Nutrologia
                </Link>
                <Link href="/pilares/saude-mental" className="block py-2 px-2 text-cinza-escuro hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
                  Saúde Mental
                </Link>
                <Link href="/pilares/gerenciamento-peso" className="block py-2 px-2 text-cinza-escuro hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
                  Gerenciamento de Peso
                </Link>
              </div>
            </div>
            
            <Link href="/blog" className="text-lg font-medium py-3 px-2 hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
              Blog
            </Link>
            
            <Link href="/contato" className="text-lg font-medium py-3 px-2 hover:bg-cinza-claro rounded-md" onClick={closeMobileMenu}>
              Contato
            </Link>
          </nav>
          
          <div className="p-4 mt-auto border-t"> {/* mt-auto para empurrar para baixo */} 
            <Link 
              href="/inscricao" 
              className="btn-primary w-full py-3 text-center"
              onClick={closeMobileMenu}
            >
              Inscreva-se
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
