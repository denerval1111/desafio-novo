import React from 'react';
import Footer from '@/components/Footer'; // Corrigido o caminho da importação

export default function Inscricao() {
  return (
    <>
     
      
      <main className="pt-24 pb-16">
        <section className="bg-verde-vitalidade/10 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-verde-vitalidade">Inscreva-se no Desafio Vitalidade</h1>
              <p className="text-xl text-cinza-medio">
                Dê o primeiro passo em direção a uma vida mais longa, saudável e plena.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
