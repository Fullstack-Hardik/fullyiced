'use client';

import React, { useEffect, useRef } from 'react';
import DepthCarousel from './DepthCarousel';

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
        
        <div className="mt-8 relative h-[500px] md:h-[600px] w-full max-w-[1000px] mx-auto">
          <DepthCarousel
            items={[
              { image: '/hero.png', alt: 'Diamond Jewelry' },
              { image: '/ring.png', alt: 'Gold Ring' },
              { image: '/necklace.png', alt: 'Diamond Necklace' },
              { image: '/bracelet.png', alt: 'Pearl Bracelet' },
              { image: '/model.png', alt: 'Jewelry Model' }
            ]}
            autoplay={true}
            autoplayDelay={700}
            duration={700}
            depth={150}
            spread={70}
            tilt={15}
            visibleCards={3}
          />
        </div>
      </div>
    </section>
  );
}
