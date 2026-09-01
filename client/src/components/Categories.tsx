'use client';

import React from 'react';

export default function Categories() {
  return (
    <section id="cats" className="bg-matte-black text-on-surface py-stack-lg border-t border-dark-grey">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex gap-4 items-center mb-10 justify-between flex-wrap">
          <h2 className="font-headline-xl text-headline-xl text-pure-white uppercase tracking-tighter">Collections</h2>
          <div className="flex gap-4">
            <a href="#shop" className="inline-flex items-center justify-center px-8 py-4 bg-electric-gold text-matte-black font-label-caps text-label-caps uppercase hover:bg-primary-fixed transition-colors">
              Shop All
            </a>
            <a href="#season" className="hidden md:inline-flex items-center justify-center px-8 py-4 border-2 border-pure-white text-pure-white font-label-caps text-label-caps uppercase hover:bg-pure-white hover:text-matte-black transition-colors">
              Explore New In
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
          {/* Featured Category (Span 8 cols) */}
          <a href="#shop" className="md:col-span-8 row-span-1 md:row-span-2 relative group overflow-hidden border border-dark-grey hover:border-electric-gold transition-colors duration-300 cursor-pointer flex flex-col justify-end bg-surface-container">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('/necklace.png')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/50 to-transparent"></div>
            <div className="relative z-10 p-stack-md">
              <span className="inline-block bg-pure-white text-matte-black font-label-caps px-2 py-1 mb-stack-sm uppercase">Exclusive</span>
              <h2 className="font-headline-xl text-pure-white mb-unit group-hover:text-electric-gold transition-colors line-clamp-2">Necklaces</h2>
              <p className="font-body-md text-on-surface-variant line-clamp-2 mb-stack-sm hidden md:block">Stunning necklaces for every occasion.</p>
              <span className="font-label-caps text-electric-gold flex items-center gap-2 group-hover:translate-x-2 transition-transform">SHOP NOW <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </div>
          </a>

          {/* Secondary Category 1 (Span 4 cols) */}
          <a href="#shop" className="md:col-span-4 row-span-1 relative group overflow-hidden border border-dark-grey hover:border-electric-gold transition-colors duration-300 cursor-pointer flex flex-col justify-end bg-surface-container">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('/ring.png')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent"></div>
            <div className="relative z-10 p-stack-md">
              <h3 className="font-headline-lg text-pure-white leading-tight group-hover:text-electric-gold transition-colors">Rings</h3>
              <p className="font-body-md text-on-surface-variant mt-2 text-sm">Elegant rings that make a statement.</p>
            </div>
          </a>

          {/* Secondary Category 2 (Span 4 cols) */}
          <a href="#shop" className="md:col-span-4 row-span-1 relative group overflow-hidden border border-dark-grey hover:border-electric-gold transition-colors duration-300 cursor-pointer flex flex-col justify-end bg-surface-container">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('/bracelet.png')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent"></div>
            <div className="relative z-10 p-stack-md">
              <h3 className="font-headline-lg text-pure-white leading-tight group-hover:text-electric-gold transition-colors">Bracelets</h3>
              <p className="font-body-md text-on-surface-variant mt-2 text-sm">Beautiful bracelets to complete your look.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
