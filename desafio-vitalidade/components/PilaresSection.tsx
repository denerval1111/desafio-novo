import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PilarCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

const PilarCard: React.FC<PilarCardProps> = ({ icon, title, description, link, color }) => {
  const borderColorClass = 
    color === 'verde' ? 'border-verde-vitalidade' : 
    color === 'azul' ? 'border-azul-longevidade' : 
    color === 'terracota' ? 'border-terracota-nutricao' : 
    color === 'amarelo' ? 'border-amarelo-energia' : 'border-verde-vitalidade';

  const textColorClass = 
    color === 'verde' ? 'text-verde-vitalidade' : 
    color === 'azul' ? 'text-azul-longevidade' : 
    color === 'terracota' ? 'text-terracota-nutricao' : 
    color === 'amarelo' ? 'text-amarelo-energia' : 'text-verde-vitalidade';

  return (
    <div className={`card-highlight border-t-4 ${borderColorClass}`}>
      <div className={`w-16 h-16 mb-4 ${textColorClass}`}>
        <Image src={icon} alt={title} width={64} height={64} />
      </div>
      <h3 className="text-xl font-montserrat font-semibold mb-2">{title}</h3>
      <p className="text-cinza-medio mb-4">{description}</p>
      <Link href={link} className={`btn-tertiary ${textColorClass}`}>
        Saiba mais
      </Link>
    </div>
  );
};

interface PilaresSectionProps {
  title: string;
  subtitle: string;
  pilares: PilarCardProps[];
}

const PilaresSection: React.FC<PilaresSectionProps> = ({ title, subtitle, pilares }) => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pilares.map((pilar, index) => (
            <PilarCard 
              key={index}
              icon={pilar.icon}
              title={pilar.title}
              description={pilar.description}
              link={pilar.link}
              color={pilar.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilaresSection;
