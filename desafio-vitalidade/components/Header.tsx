"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-verde-vitalidade">Desafio Vitalidade</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
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
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
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
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/inscricao" className="btn-primary px-6 py-2">
              Inscreva-se
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cinza-escuro"
            onClick={toggleMobileMenu}
            aria-label="Menu"
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
      
      {/* Mobile Menu */}
      <div className={`mobile-menu-container ${mobileMenuOpen ? 'visible' : 'hidden'} md:hidden`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold text-verde-vitalidade">Desafio Vitalidade</span>
              </Link>
              <button 
                className="text-cinza-escuro"
                onClick={toggleMobileMenu}
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-lg font-medium py-2 border-b border-cinza-claro" onClick={() => setMobileMenuOpen(false)}>
                Início
              </Link>
              
              <div className="py-2 border-b border-cinza-claro">
                <div className="text-lg font-medium mb-2">Sobre</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/sobre/programa" className="text-cinza-escuro" onClick={() => setMobileMenuOpen(false)}>
                    O Programa
                  </Link>
                  <Link href="/sobre/equipe" className="text-cinza-escuro" onClick={() => setMobileMenuOpen(false)}>
                    Nossa Equipe
                  </Link>
                  <Link href="/depoimentos" className="text-cinza-escuro" onClick={() => setMobileMenuOpen(false)}>
                    Depoimentos
                  </Link>
                </div>
              </div>
              
              <div className="py-2 border-b border-cinza-claro">
                <div className="text-lg font-medium mb-2">Pilares</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/pilares/medicina-regenerativa" className="text-cinza-escuro" onClick={() => setMobileMenuOpen(false)}>
                    Medicina Regenerativa
                  </Link>
                  <Link href="/pilares/nutrologia" className="text-cinza-escuro" onClick={() => setMobileMenuOpen(false)}>
                    Nutrologia
                  </Link>
                  <Link href="/pilares/saude-mental" className="text-cinza-escuro" onClick={() => setMobileMenuOpen(false)}>
                    Saúde Mental
                  </Link>
                  <Link href="/pilares/gerenciamento-peso" className="text-cinza-escuro" onClick={() => setMobileMenuOpen(false)}>
                    Gerenciamento de Peso
                  </Link>
                </div>
              </div>
              
              <Link href="/blog" className="text-lg font-medium py-2 border-b border-cinza-claro" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              
              <Link href="/contato" className="text-lg font-medium py-2 border-b border-cinza-claro" onClick={() => setMobileMenuOpen(false)}>
                Contato
              </Link>
            </nav>
          </div>
          
          <div className="p-4 border-t">
            <Link 
              href="/inscricao" 
              className="btn-primary w-full py-3 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inscreva-se
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
