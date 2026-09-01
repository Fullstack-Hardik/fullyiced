'use client';

import React from 'react';
import MorphSlider from './MorphSlider';
import WarpText from './WarpText';

export default function Hero() {
  const items = [
    { image: '/hero.png' },
    { image: '/necklace.png' },
    { image: '/ring.png' },
    { image: '/bracelet.png' }
  ];

  return (
    <header id="hero" className="relative min-h-[calc(100svh-72px)] flex flex-col justify-center bg-matte-black overflow-hidden z-[40]">
      {/* Morph Slider Background */}
      <div className="absolute inset-0 z-0">
        <MorphSlider
          items={items}
          transition="melt"
          intensity={0.55}
          aberration={0.35}
          drift={0.4}
          autoplay={true}
          autoplayDelay={1}
          duration={1.2}
          showCaptions={false}
          showControls={false}
          showIndicators={false}
          radius={0}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-variant/30 to-matte-black/90 pointer-events-none"></div>
      </div>
      
      <div className="wrap relative w-full h-full flex flex-col justify-center z-10 pointer-events-none">
        <div className="relative w-full flex-grow grid place-items-center min-h-[min(58vh,560px)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none mt-20">
            <WarpText
              text="FULLY ICED"
              color="#ffffff"
              warpStrength={0}
              warpScale={1.7}
              speed={0.55}
              pointerInfluence={0.6}
              pointerStrength={0.6}
              refraction={0.03}
              ripple={true}
              fontSize="clamp(6rem, 16vw, 15rem)"
              fontWeight={900}
              fontFamily="'Barlow Condensed', sans-serif"
              letterSpacing="0.05em"
              style={{ width: '100%', height: '350px', pointerEvents: 'auto', textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
              className="flex justify-center items-center"
            />
            
            {/* New Subtext with Effect */}
            <div className="mt-4 md:mt-2 text-center relative z-20 overflow-hidden">
              <span className="inline-block font-headline-sm text-sm md:text-base text-electric-gold border border-electric-gold/30 px-6 py-3 uppercase tracking-[0.3em] bg-matte-black/40 backdrop-blur-sm shadow-[0_0_15px_rgba(220,185,94,0.15)] hover:bg-electric-gold hover:text-matte-black transition-colors duration-300 cursor-pointer pointer-events-auto">
                Discover The Premium Collection
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
