'use client';

import React, { useEffect, useRef } from 'react';

export default function Atelier() {
  const numsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bs = entry.target.querySelectorAll('b');
          bs.forEach(b => {
            const to = parseInt(b.dataset.to || '0', 10);
            const t0 = performance.now();
            const D = 1100;
            
            const step = (now: number) => {
              const p = Math.min(1, (now - t0) / D);
              const e = 1 - Math.pow(1 - p, 3);
              b.textContent = String(Math.round(to * e));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const o = new IntersectionObserver(handleIntersect, { threshold: 0.6 });
    if (numsRef.current) o.observe(numsRef.current);
    
    return () => o.disconnect();
  }, []);

  return (
    <section id="atelier" className="bg-[#101010] text-[#EFEDE8]">
      <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-stretch">
        <figure className="overflow-hidden">
          <img 
            src="/ring.png" 
            alt="Jewelry Crafting Atelier" 
            loading="lazy" 
            className="w-full h-full object-cover min-h-[min(66vh,540px)] grayscale contrast-[1.08] transition-all duration-[1s] hover:grayscale-0 hover:contrast-100 mobile-color"
          />
        </figure>
        <div className="p-[clamp(34px,6vh,80px)_clamp(20px,4vw,64px)] self-center">
          <div className="lbl mb-[16px] text-[#EFEDE8]/50">The studio</div>
          <h2 className="font-extrabold text-[clamp(30px,4.4vw,60px)] leading-[0.94] tracking-[-0.03em] uppercase mb-[16px]">
            Eleven people,<br />one floor.
          </h2>
          <p className="text-[#EFEDE8]/60 max-w-[34ch] text-[14px]">
            Everything is cut and made in the same building on Redchurch Street. Small runs,
            so if something does not sell we simply do not make it again.
          </p>
          <div ref={numsRef} className="mt-[32px] flex gap-[clamp(20px,4vw,52px)] flex-wrap border-t border-[#EFEDE8]/15 pt-[22px]">
            <div>
              <b data-to="11" className="block font-extrabold text-[clamp(28px,3.4vw,44px)] tabular-nums leading-none mb-[6px]">0</b>
              <span className="text-[9.5px] tracking-[0.18em] uppercase text-[#EFEDE8]/50">People</span>
            </div>
            <div>
              <b data-to="42" className="block font-extrabold text-[clamp(28px,3.4vw,44px)] tabular-nums leading-none mb-[6px]">0</b>
              <span className="text-[9.5px] tracking-[0.18em] uppercase text-[#EFEDE8]/50">Styles a year</span>
            </div>
            <div>
              <b data-to="120" className="block font-extrabold text-[clamp(28px,3.4vw,44px)] tabular-nums leading-none mb-[6px]">0</b>
              <span className="text-[9.5px] tracking-[0.18em] uppercase text-[#EFEDE8]/50">Units per run</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
