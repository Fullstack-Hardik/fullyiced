'use client';

import React, { useState } from 'react';

const PRODUCTS = [
  { nm: 'Rift Overshirt', ct: 'Outerwear', pr: 185 },
  { nm: 'Heavy Tee', ct: 'Essentials', pr: 58 },
  { nm: 'Gauge Cardigan', ct: 'Knitwear', pr: 210 },
  { nm: 'Cable Crew', ct: 'Knitwear', pr: 240 }
];

export default function Shop() {
  const [bag, setBag] = useState(0);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const [added, setAdded] = useState<Record<number, boolean>>({});

  const toggleFav = (i: number) => {
    setFavorites(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const addToBag = (i: number) => {
    setBag(b => b + 1);
    const bagn = document.getElementById('bagn');
    if (bagn) bagn.textContent = String(bag + 1);
    
    setAdded(prev => ({ ...prev, [i]: true }));
    setTimeout(() => {
      setAdded(prev => ({ ...prev, [i]: false }));
    }, 1300);
  };

  const heart = (
    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-transparent stroke-[#101010] stroke-[1.6]">
      <path d="M12 20.5 3.8 12.6a5 5 0 0 1 7.1-7l1.1 1.1 1.1-1.1a5 5 0 0 1 7.1 7Z"/>
    </svg>
  );

  return (
    <section id="shop" className="py-[clamp(40px,7vh,86px)] pb-[clamp(48px,8vh,96px)]">
      <div className="wrap">
        <div className="flex justify-between items-end gap-[20px] mb-[clamp(20px,3.4vh,34px)] flex-wrap">
          <h2 className="font-extrabold text-[clamp(26px,3.4vw,44px)] tracking-[-0.015em] uppercase">Best of Fully ICED</h2>
          <a href="#" className="btn-line">View all 42</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(12px,1.8vw,26px)]">
          {PRODUCTS.map((p, i) => (
            <article key={i} className="relative group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E4E1DC]">
                <img 
                  src={i % 2 === 0 ? '/ring.png' : '/bracelet.png'} 
                  alt={p.nm} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-[1s,0.6s] ease-[cubic-bezier(0.2,0.8,0.3,1)] grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 mobile-color"
                />
                <button 
                  className={`absolute top-[10px] right-[10px] w-[30px] h-[30px] rounded-full flex items-center justify-center border-0 cursor-pointer z-10 transition-transform duration-250 hover:scale-110 ${favorites[i] ? '[&>svg]:fill-[#101010]' : ''}`}
                  onClick={() => toggleFav(i)}
                  aria-pressed={favorites[i]}
                  aria-label={`Save ${p.nm}`}
                  style={{ background: 'rgba(239,237,232,0.9)' }}
                >
                  {heart}
                </button>
                <button 
                  className="absolute left-[10px] right-[10px] bottom-[10px] z-10 bg-[#101010] text-[#EFEDE8] border-0 cursor-pointer p-[12px] font-medium text-[10px] leading-none tracking-[0.2em] uppercase opacity-0 translate-y-[12px] transition-all duration-450 ease-[cubic-bezier(0.2,0.8,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 focus-within:opacity-100 focus-within:translate-y-0"
                  onClick={() => addToBag(i)}
                >
                  {added[i] ? 'Added' : 'Add to bag'}
                </button>
              </div>
              <div className="pt-[12px] flex justify-between gap-[12px] items-baseline">
                <div>
                  <div className="font-semibold text-[13.5px]">{p.nm}</div>
                  <div className="text-[11px] text-[#8A8781] tracking-[0.08em] uppercase mt-[3px]">{p.ct}</div>
                </div>
                <div className="font-semibold text-[13.5px] tabular-nums">${p.pr}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
