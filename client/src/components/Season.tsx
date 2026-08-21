'use client';

import React from 'react';

export default function Season() {
  return (
    <section id="season" className="relative bg-[#DCD9D3] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[min(78vh,660px)]">
        
        <div className="p-[clamp(34px,6vh,72px)_clamp(20px,4vw,60px)] relative z-10">
          <div className="lbl mb-[16px] text-[#54514C]">New season</div>
          <h2 className="font-extrabold text-[clamp(40px,6.4vw,92px)] leading-[0.9] tracking-[-0.03em] uppercase">
            New<br />vibes
          </h2>
          <p className="mt-[18px] max-w-[32ch] text-[#4A4741] text-[14.5px]">
            Sixteen pieces, one palette, crafted from the same three metals. Everything in the
            drop works with everything else in it, which is the entire point.
          </p>
          <div className="mt-[clamp(20px,3.4vh,34px)]">
            <a href="#shop" className="btn"><span>Explore the collection</span></a>
          </div>
        </div>

        <div className="relative self-stretch overflow-hidden h-[52vw] min-h-[280px] md:h-auto md:order-last -order-1">
          <img 
            id="seasonImg" 
            src="/model.png" 
            alt="New Season Diamonds" 
            loading="lazy"
            className="w-full h-full object-cover object-[center_28%] grayscale contrast-[1.05] transition-all duration-[1s] hover:grayscale-0 hover:contrast-100 mobile-color"
          />
        </div>

      </div>
    </section>
  );
}
