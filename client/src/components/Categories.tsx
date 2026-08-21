'use client';

import React from 'react';

export default function Categories() {
  return (
    <section id="cats" className="bg-[#101010] text-[#EFEDE8] py-[clamp(28px,5vh,54px)]">
      <div className="wrap">
        <div className="flex gap-[18px] items-center mb-[clamp(30px,6vh,60px)] justify-center md:justify-start flex-wrap">
          <a href="#shop" className="btn border border-[#EFEDE8]"><span>Shop the collection</span></a>
          <a href="#season" className="btn-line border-[#EFEDE8] text-[#EFEDE8]">Explore new in</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] md:gap-[clamp(16px,3vw,48px)]">
          
          <a href="#shop" className="grid grid-cols-[auto_1fr] gap-[clamp(14px,1.8vw,26px)] items-center py-[6px] group">
            <div className="w-[clamp(78px,7vw,104px)] aspect-[3/4] overflow-hidden bg-[#1B1B1B] flex-none">
            <img 
              src="/ring.png" 
              alt="Diamond Rings" 
              loading="lazy" 
              className="w-full h-full object-cover transition-all duration-800 ease-[cubic-bezier(0.2,0.8,0.3,1)] grayscale contrast-[1.06] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-110 mobile-color"
            />
          </div>
          <div>
            <h3 className="font-bold text-[clamp(16px,1.5vw,20px)] tracking-[0.04em] uppercase mb-[6px]">Outerwear</h3>
            <p className="text-[12.5px] text-[#EFEDE8]/60 mb-[10px] max-w-[22ch]">Coats and overshirts cut with room to move.</p>
            <span className="font-medium text-[10.5px] leading-none tracking-[0.18em] uppercase inline-flex items-center gap-[8px]">
              Shop outerwear <i className="not-italic inline-block transition-transform duration-400 ease-[cubic-bezier(0.6,0,0.2,1)] group-hover:translate-x-[6px]">→</i>
            </span>
          </div>
        </a>

        <a href="#shop" className="grid grid-cols-[auto_1fr] gap-[clamp(14px,1.8vw,26px)] items-center py-[6px] group">
          <div className="w-[clamp(78px,7vw,104px)] aspect-[3/4] overflow-hidden bg-[#1B1B1B] flex-none">
            <img 
              src="/necklace.png" 
              alt="Necklaces" 
              loading="lazy" 
              className="w-full h-full object-cover transition-all duration-800 ease-[cubic-bezier(0.2,0.8,0.3,1)] grayscale contrast-[1.06] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-110 mobile-color"
            />
          </div>
          <div>
            <h3 className="font-bold text-[clamp(16px,1.5vw,20px)] tracking-[0.04em] uppercase mb-[6px]">Knitwear</h3>
            <p className="text-[12.5px] text-[#EFEDE8]/60 mb-[10px] max-w-[22ch]">Heavy gauge lambswool, worn soft by the second season.</p>
            <span className="font-medium text-[10.5px] leading-none tracking-[0.18em] uppercase inline-flex items-center gap-[8px]">
              Shop knitwear <i className="not-italic inline-block transition-transform duration-400 ease-[cubic-bezier(0.6,0,0.2,1)] group-hover:translate-x-[6px]">→</i>
            </span>
          </div>
        </a>

        <a href="#shop" className="grid grid-cols-[auto_1fr] gap-[clamp(14px,1.8vw,26px)] items-center py-[6px] group">
          <div className="w-[clamp(78px,7vw,104px)] aspect-[3/4] overflow-hidden bg-[#1B1B1B] flex-none">
            <img 
              src="/bracelet.png" 
              alt="Bracelets" 
              loading="lazy" 
              className="w-full h-full object-cover transition-all duration-800 ease-[cubic-bezier(0.2,0.8,0.3,1)] grayscale contrast-[1.06] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-110 mobile-color"
            />
          </div>
          <div>
            <h3 className="font-bold text-[clamp(16px,1.5vw,20px)] tracking-[0.04em] uppercase mb-[6px]">Tailoring</h3>
            <p className="text-[12.5px] text-[#EFEDE8]/60 mb-[10px] max-w-[22ch]">Unstructured jackets you can actually sit down in.</p>
            <span className="font-medium text-[10.5px] leading-none tracking-[0.18em] uppercase inline-flex items-center gap-[8px]">
              Shop tailoring <i className="not-italic inline-block transition-transform duration-400 ease-[cubic-bezier(0.6,0,0.2,1)] group-hover:translate-x-[6px]">→</i>
            </span>
          </div>
        </a>
        </div>
      </div>
    </section>
  );
}
