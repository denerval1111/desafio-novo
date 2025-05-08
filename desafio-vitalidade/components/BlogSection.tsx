import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  title, 
  excerpt, 
  image, 
  date, 
  category, 
  readTime, 
  slug 
}) => {
  return (
    <div className="card overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-cinza-medio mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-montserrat font-semibold mb-2">{title}</h3>
        <p className="text-cinza-medio mb-4 flex-grow">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="btn-tertiary mt-auto">
          Ler mais
        </Link>
      </div>
    </div>
  );
};

interface BlogSectionProps {
  title: string;
  subtitle: string;
  posts: BlogPostCardProps[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ title, subtitle, posts }) => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {posts.map((post, index) => (
            <BlogPostCard 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              category={post.category}
              readTime={post.readTime}
              slug={post.slug}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary">
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
