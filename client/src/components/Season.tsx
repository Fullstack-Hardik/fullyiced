'use client';

import React from 'react';

export default function Season() {
  return (
    <section id="season" className="relative bg-matte-black overflow-hidden border-t border-dark-grey">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[min(78vh,660px)]">
        
        <div className="p-[clamp(34px,6vh,72px)_clamp(20px,4vw,60px)] relative z-10 md:order-last">
          <div className="font-label-caps text-label-caps mb-4 text-electric-gold uppercase tracking-wider">New season</div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-pure-white uppercase leading-[0.9] tracking-tighter">
            New<br />vibes
          </h2>
          <p className="mt-6 max-w-[32ch] text-on-surface-variant font-body-md text-body-md">
            Sixteen pieces, one palette, crafted from the same three metals. Everything in the
            drop works with everything else in it, which is the entire point.
          </p>
          <div className="mt-10">
            <a href="#shop" className="inline-flex items-center justify-center px-8 py-4 border-2 border-pure-white text-pure-white font-label-caps text-label-caps uppercase hover:bg-pure-white hover:text-matte-black transition-colors">
              Explore the collection
            </a>
          </div>
        </div>

        <div className="relative self-stretch overflow-hidden h-[52vw] min-h-[280px] md:h-auto md:order-first order-first border-r border-dark-grey">
          <img 
            id="seasonImg" 
            src="/model.png" 
            alt="New Season Diamonds" 
            loading="lazy"
            className="w-full h-full object-cover object-[center_28%] grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
