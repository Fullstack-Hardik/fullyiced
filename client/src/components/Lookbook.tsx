'use client';

import React, { useEffect, useRef } from 'react';

export default function Lookbook() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrubs = containerRef.current.querySelectorAll('[data-scrub]');
      
      for (const el of Array.from(scrubs)) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        
        const p = Math.max(0, Math.min(1, 1 - (r.top - window.innerHeight * 0.25) / (window.innerHeight * 0.6)));
        (el as HTMLElement).style.setProperty('--p', p.toFixed(3));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="look" className="py-[clamp(44px,7vh,90px)] pb-[clamp(30px,5vh,60px)]" ref={containerRef}>
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,60px)] items-end mb-[clamp(24px,4vh,46px)]">
          <div>
            <div className="lbl mb-[14px] text-[#8A8781]">Lookbook</div>
            <h2 className="font-extrabold text-[clamp(34px,5.4vw,76px)] leading-[0.9] tracking-[-0.03em] uppercase">Autumn<br />2026</h2>
          </div>
          <p className="text-[#8A8781] max-w-[36ch] text-[14px]">
            Photographed over two mornings. Nothing was heavily edited and
            nothing was retouched, which is why the jewels shine authentically.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(12px,1.8vw,26px)] items-start">
          <figure className="md:col-start-1 md:col-span-5 group" data-scrub>
            <div className="overflow-hidden bg-[#E4E1DC] aspect-[3/4]">
              <img 
                src="/ring.png" 
                alt="Jewelry Look 01" 
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-[1.04] transition-all duration-[1.1s] ease-[cubic-bezier(0.2,0.8,0.3,1)] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 mobile-color"
                style={{
                  opacity: 'calc(0.3 + (var(--p,1) * 0.7))',
                  transform: 'translateY(calc((1 - var(--p,1)) * 40px)) scale(calc(1 + (1 - var(--p,1)) * 0.05))'
                }}
              />
            </div>
            <figcaption className="mt-[12px] font-medium text-[10.5px] leading-none tracking-[0.18em] uppercase text-[#8A8781] flex gap-[10px]">
              <span className="text-[#101010]">01</span> Diamond Necklace, Gold Ring
            </figcaption>
          </figure>
          
          <figure className="md:col-start-6 md:col-span-7 md:mt-[clamp(28px,7vw,96px)] group" data-scrub>
            <div className="overflow-hidden bg-[#E4E1DC] aspect-[4/3]">
              <img 
                src="/bracelet.png" 
                alt="Jewelry Look 02" 
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-[1.04] transition-all duration-[1.1s] ease-[cubic-bezier(0.2,0.8,0.3,1)] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 mobile-color"
                style={{
                  opacity: 'calc(0.3 + (var(--p,1) * 0.7))',
                  transform: 'translateY(calc((1 - var(--p,1)) * 40px)) scale(calc(1 + (1 - var(--p,1)) * 0.05))'
                }}
              />
            </div>
            <figcaption className="mt-[12px] font-medium text-[10.5px] leading-none tracking-[0.18em] uppercase text-[#8A8781] flex gap-[10px]">
              <span className="text-[#101010]">02</span> Pearl Bracelet, Silver Chain
            </figcaption>
          </figure>
          
          <figure className="md:col-start-3 md:col-span-5 md:mt-[clamp(16px,3vw,44px)] group" data-scrub>
            <div className="overflow-hidden bg-[#E4E1DC] aspect-square">
              <img 
                src="/necklace.png" 
                alt="Jewelry Look 03" 
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-[1.04] transition-all duration-[1.1s] ease-[cubic-bezier(0.2,0.8,0.3,1)] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 mobile-color"
                style={{
                  opacity: 'calc(0.3 + (var(--p,1) * 0.7))',
                  transform: 'translateY(calc((1 - var(--p,1)) * 40px)) scale(calc(1 + (1 - var(--p,1)) * 0.05))'
                }}
              />
            </div>
            <figcaption className="mt-[12px] font-medium text-[10.5px] leading-none tracking-[0.18em] uppercase text-[#8A8781] flex gap-[10px]">
              <span className="text-[#101010]">03</span> Stacked Rings, Elegant Watch
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
