import React from 'react';
import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="section bg-cinza-claro">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-cinza-medio mb-8">{subtitle}</p>
          <Link href={buttonLink} className="btn-primary text-center px-8 py-4 text-lg">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
