import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  age: number;
  location?: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, age, location, image }) => {
  return (
    <div className="card p-6 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover"
        />
      </div>
      <p className="italic text-cinza-escuro mb-4">"{quote}"</p>
      <div className="mt-auto">
        <h4 className="font-montserrat font-semibold">{name}, {age}</h4>
        {location && <p className="text-sm text-cinza-medio">{location}</p>}
      </div>
    </div>
  );
};

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: TestimonialProps[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, subtitle, testimonials }) => {
  return (
    <section className="section gradient-vitalidade text-white">
      <div className="container-custom">
        <div className="section-title">
          <h2>{title}</h2>
          <p className="text-white/80">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              age={testimonial.age}
              location={testimonial.location}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
