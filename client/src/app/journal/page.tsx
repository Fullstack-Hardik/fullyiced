import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function JournalPage() {
  const posts = [
    {
      title: "The Anatomy of a Cuban Link",
      category: "Education",
      date: "Sep 2026",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
      excerpt: "Understanding the craftsmanship and geometry behind the most iconic chain in hip-hop history."
    },
    {
      title: "London Fashion Week: Fully Iced",
      category: "Events",
      date: "Aug 2026",
      image: "https://images.unsplash.com/photo-1574621008687-34726207a9b0?q=80&w=800&auto=format&fit=crop",
      excerpt: "Behind the scenes of our latest runway collaborations and the exclusive pieces debuted on the catwalk."
    },
    {
      title: "Bespoke Grillz: A Modern Process",
      category: "Behind the Scenes",
      date: "Jul 2026",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop",
      excerpt: "From 3D scanning to microscopic diamond setting, how we create the perfect custom fit."
    },
    {
      title: "Care Guide: Maintaining the Shine",
      category: "Guide",
      date: "Jun 2026",
      image: "https://images.unsplash.com/photo-1599643478524-fb66fa40026e?q=80&w=800&auto=format&fit=crop",
      excerpt: "The definitive guide to cleaning and preserving your high-end iced out jewelry."
    },
  ];

  return (
    <main className="min-h-screen bg-matte-black text-pure-white selection:bg-electric-gold selection:text-matte-black">
      <Navbar />
      
      <section className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto border-b border-dark-grey">
        <h1 className="font-display-lg text-[clamp(4rem,10vw,8rem)] leading-[0.8] tracking-tighter uppercase mb-6">
          The Journal
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          Dive into the culture, craftsmanship, and exclusive stories from inside the Fully Iced studio.
        </p>
      </section>

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] overflow-hidden bg-surface-variant mb-6 relative">
                <div className="absolute inset-0 bg-electric-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>
              <div className="flex justify-between items-center mb-4 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                <span className="text-electric-gold border border-electric-gold/30 px-2 py-1">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="font-headline-lg text-3xl uppercase tracking-widest mb-4 group-hover:text-electric-gold transition-colors">
                {post.title}
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
