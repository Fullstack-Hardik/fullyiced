'use client';

import React from 'react';

export default function Cloth() {
  return (
    <section id="cloth" className="bg-[#DCD9D3]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        <div className="p-[clamp(34px,6vh,80px)_clamp(20px,4vw,64px)] self-center">
          <div className="lbl mb-[16px] text-[#8A8781]">The materials</div>
          <h2 className="font-extrabold text-[clamp(30px,4.4vw,60px)] leading-[0.94] tracking-[-0.03em] uppercase mb-[16px]">
            Three metals,<br />all season.
          </h2>
          <p className="text-[#4A4741] max-w-[34ch] text-[14px]">
            We source pure gold, platinum, and sterling silver. It is the reason a piece from two seasons ago still pairs beautifully with this one.
          </p>
          <dl className="mt-[26px] border-t border-[rgba(16,16,16,0.18)]">
            <div className="flex justify-between gap-[14px] py-[11px] border-b border-[rgba(16,16,16,0.1)] text-[12.5px]">
              <dt className="font-semibold">Pure Gold</dt>
              <dd className="text-[#5A574F]">18K · Italy</dd>
            </div>
            <div className="flex justify-between gap-[14px] py-[11px] border-b border-[rgba(16,16,16,0.1)] text-[12.5px]">
              <dt className="font-semibold">Platinum</dt>
              <dd className="text-[#5A574F]">950 · Switzerland</dd>
            </div>
            <div className="flex justify-between gap-[14px] py-[11px] border-b border-[rgba(16,16,16,0.1)] text-[12.5px]">
              <dt className="font-semibold">Sterling Silver</dt>
              <dd className="text-[#5A574F]">925 · London</dd>
            </div>
          </dl>
        </div>
        <figure className="relative min-h-[min(62vh,520px)] overflow-hidden">
          {/* Fallback to simple image since we don't have video */}
          <img 
            src="/necklace.png" 
            alt="Jewelry Texture" 
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.06] transition-all duration-[1s] hover:grayscale-0 hover:contrast-100 mobile-color"
          />
        </figure>
      </div>
    </section>
  );
}
