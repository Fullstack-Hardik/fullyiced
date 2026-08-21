import React, { useEffect, useRef } from 'react';
import DepthCarousel from './DepthCarousel';
import CurvedLoop from './CurvedLoop';

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
      <section id="look" className="py-[clamp(44px,7vh,90px)] pb-[clamp(30px,5vh,60px)]" ref={containerRef}>
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,60px)] items-center">
            
            {/* Left side: Text & Image */}
            <div className="flex flex-col gap-[clamp(24px,4vh,46px)]">
              <div>
                <div className="lbl mb-[14px] text-[#8A8781]">Lookbook</div>
                <h2 className="font-extrabold text-[clamp(34px,5.4vw,76px)] leading-[0.9] tracking-[-0.03em] uppercase">Autumn<br />2026</h2>
              </div>
              <p className="text-[#8A8781] max-w-[36ch] text-[14px]">
                Photographed over two mornings. Nothing was heavily edited and
                nothing was retouched, which is why the jewels shine authentically.
              </p>
              
              <figure className="group max-w-[400px]" data-scrub>
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
            </div>
            
            {/* Right side: Carousel */}
            <div className="relative h-[400px] md:h-[600px] w-full mt-8 md:mt-0">
              <DepthCarousel
                items={[
                  { image: '/hero.png', alt: 'Diamond Jewelry' },
                  { image: '/ring.png', alt: 'Gold Ring' },
                  { image: '/necklace.png', alt: 'Diamond Necklace' },
                  { image: '/model.png', alt: 'Jewelry Model' }
                ]}
                autoplay={true}
                autoplayDelay={700}
                duration={700}
                depth={150}
                spread={70}
                tilt={15}
                visibleCards={3}
                showControls={false}
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
