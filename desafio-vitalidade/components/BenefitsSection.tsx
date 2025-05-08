import React from 'react';
import Image from 'next/image';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card-pilar p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 text-verde-vitalidade">
        <Image src={icon} alt={title} width={64} height={64} />
      </div>
      <h3 className="text-xl font-montserrat font-semibold mb-2">{title}</h3>
      <p className="text-cinza-medio">{description}</p>
    </div>
  );
};

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: BenefitCardProps[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, subtitle, benefits }) => {
  return (
    <section className="section bg-cinza-claro">
      <div className="container-custom">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
