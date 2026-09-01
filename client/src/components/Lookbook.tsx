'use client';

import React, { useEffect, useRef } from 'react';
import DepthCarousel from './DepthCarousel';
import CurvedLoop from './CurvedLoop';
import ScrollExpand from './ScrollExpand';

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
    <>
      <section id="look" className="py-stack-lg bg-matte-black text-on-surface" ref={containerRef}>
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
            
            {/* Left side: Text & Image */}
            <div className="flex flex-col gap-stack-md relative z-20">
              <div>
                <div className="font-label-caps text-label-caps text-electric-gold uppercase mb-4 tracking-wider">Lookbook</div>
                <h2 className="font-display-lg-mobile md:font-display-lg text-pure-white uppercase leading-[0.9] tracking-tighter">Autumn<br />2026</h2>
              </div>
              <p className="text-on-surface-variant max-w-[36ch] font-body-lg text-body-lg">
                Photographed over two mornings. Nothing was heavily edited and
                nothing was retouched, which is why the jewels shine authentically.
              </p>
{/* Removed Pearl Bracelet Figure */}
            </div>
            
            {/* Right side: Carousel */}
            <div className="relative h-[500px] md:h-[700px] w-full mt-12 md:mt-0 ml-0 md:ml-8 z-10 overflow-hidden rounded-xl">
              <DepthCarousel
                items={[
                  { image: '/model.png', alt: 'Diamond Jewelry Model' },
                  { image: '/ring.png', alt: 'Gold Ring' },
                  { image: '/necklace.png', alt: 'Diamond Necklace' },
                  { image: '/hero.png', alt: 'Chains' }
                ]}
                autoplay={true}
                autoplayDelay={1200}
                duration={1200}
                depth={150}
                spread={80}
                tilt={15}
                visibleCards={3}
                showControls={false}
                cardWidth={450}
                cardHeight={550}
              />
            </div>

          </div>
        </div>
      </section>
      
      {/* Curved Loop Marquee */}
      <CurvedLoop 
        marqueeText="FULLY ✦ ICED ✦ EXCLUSIVE ✦ JEWELRY ✦ "
        speed={3}
        curveAmount={400}
        direction="left"
        interactive={true}
      />
    </>
  );
}
