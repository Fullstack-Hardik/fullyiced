'use client';

import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (textRef.current) {
          textRef.current.style.transform = `translateY(${window.scrollY * 0.14}px)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header id="hero" className="relative min-h-[calc(100svh-72px)] flex flex-col justify-center pt-[clamp(20px,4vh,48px)] z-[50]">
      <div className="wrap relative w-full h-full flex flex-col justify-center">
        <div className="hidden md:block absolute left-[clamp(18px,3.4vw,44px)] top-[clamp(6px,2vh,22px)] z-10 md:static md:mb-[14px]">
          <p className="font-medium text-[12px] leading-[1.9] tracking-[0.24em] uppercase">
            Fashion<br />that moves<br />with you.
          </p>
          <div className="w-[52px] h-[1px] bg-[#101010] mt-[12px]"></div>
        </div>

        <div className="relative w-full flex-grow grid place-items-center min-h-[min(58vh,560px)]">
          <div 
            ref={textRef}
            className="absolute inset-0 grid place-items-center pointer-events-none z-[1]"
            aria-hidden="true"
          >
            <b className="font-extrabold text-[clamp(40px,12vw,220px)] tracking-[-0.02em] leading-[0.8] whitespace-nowrap block text-[#101010]">
              FULLY ICED
            </b>
          </div>
          
          {/* Hero image exactly touching the next section */}
          <div
            className="absolute bottom-[-50px] z-[5] w-full max-w-[850px] flex justify-center pointer-events-none"
          >
             <img 
               src="/hero.png" 
               alt="Hero Diamond Jewelry"
               className="w-full h-auto object-contain object-bottom max-h-[90vh] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
             />
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center justify-center mt-12 pb-[40px] z-10 relative">
          <p className="font-medium text-[12px] leading-[1.9] tracking-[0.24em] uppercase text-center">
            Fashion<br />that moves<br />with you.
          </p>
          <div className="w-[52px] h-[1px] bg-[#101010] mt-[12px]"></div>
        </div>
      </div>
    </header>
  );
}
