import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = "", // Adicionado valor padrão para backgroundImage
}) => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage: backgroundImage ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slideUp">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={ctaLink} className="btn-primary text-center">
              {ctaText}
            </a>
            {secondaryCtaText && secondaryCtaLink && (
              <a href={secondaryCtaLink} className="btn-secondary text-center">
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
