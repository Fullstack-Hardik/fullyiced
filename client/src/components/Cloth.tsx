'use client';

import React from 'react';

export default function Cloth() {
  return (
    <section id="cloth" className="bg-surface-container-low text-on-surface border-t border-dark-grey">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        <div className="p-[clamp(34px,6vh,80px)_clamp(20px,4vw,64px)] self-center">
          <div className="font-label-caps text-label-caps text-electric-gold uppercase mb-4 tracking-wider">The materials</div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-pure-white uppercase leading-[0.94] tracking-tighter mb-6">
            Three metals,<br />all season.
          </h2>
          <p className="text-on-surface-variant max-w-[34ch] font-body-lg text-body-lg">
            We source pure gold, platinum, and sterling silver. It is the reason a piece from two seasons ago still pairs beautifully with this one.
          </p>
          <dl className="mt-8 border-t border-dark-grey">
            <div className="flex justify-between gap-4 py-4 border-b border-dark-grey text-body-md font-body-md">
              <dt className="text-pure-white uppercase font-headline-sm tracking-wide">Pure Gold</dt>
              <dd className="text-on-surface-variant">18K · Italy</dd>
            </div>
            <div className="flex justify-between gap-4 py-4 border-b border-dark-grey text-body-md font-body-md">
              <dt className="text-pure-white uppercase font-headline-sm tracking-wide">Platinum</dt>
              <dd className="text-on-surface-variant">950 · Switzerland</dd>
            </div>
            <div className="flex justify-between gap-4 py-4 border-b border-dark-grey text-body-md font-body-md">
              <dt className="text-pure-white uppercase font-headline-sm tracking-wide">Sterling Silver</dt>
              <dd className="text-on-surface-variant">925 · London</dd>
            </div>
          </dl>
        </div>
        <figure className="relative min-h-[min(62vh,520px)] overflow-hidden">
          <img 
            src="/necklace.png" 
            alt="Jewelry Texture" 
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
          />
        </figure>
      </div>
    </section>
  );
}
