'use client';

import React, { useState } from 'react';

const PRODUCTS = [
  { nm: 'Diamond Ring', ct: 'Rings', pr: 1850 },
  { nm: 'Gold Chain', ct: 'Necklaces', pr: 580 },
  { nm: 'Pearl Bracelet', ct: 'Bracelets', pr: 2100 },
  { nm: 'Silver Band', ct: 'Rings', pr: 240 }
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

  return (
    <section id="shop" className="py-stack-lg bg-matte-black">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end gap-[20px] mb-[clamp(20px,3.4vh,34px)] flex-wrap">
          <h2 className="font-headline-xl text-headline-xl text-pure-white uppercase tracking-tighter">Best of Fully ICED</h2>
          <a href="#" className="border-b border-pure-white text-pure-white font-label-caps uppercase pb-1 hover:text-electric-gold hover:border-electric-gold transition-colors">
            View all 42
          </a>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
          {PRODUCTS.map((p, i) => (
            <article key={i} className="relative group border border-dark-grey bg-surface-container hover:border-electric-gold transition-colors duration-300">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low">
                <img 
                  src={i % 2 === 0 ? '/ring.png' : '/bracelet.png'} 
                  alt={p.nm} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                <button 
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-pure-white/90 text-matte-black hover:bg-electric-gold transition-colors z-10`}
                  onClick={() => toggleFav(i)}
                  aria-pressed={favorites[i]}
                  aria-label={`Save ${p.nm}`}
                >
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: favorites[i] ? "'FILL' 1" : "'FILL' 0" }}>
                    favorite
                  </span>
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button 
                    className="w-full bg-electric-gold text-matte-black font-label-caps py-3 uppercase tracking-wider hover:bg-pure-white transition-colors"
                    onClick={() => addToBag(i)}
                  >
                    {added[i] ? 'ADDED' : 'ADD TO BAG'}
                  </button>
                </div>
              </div>

              <div className="p-4 flex justify-between gap-2 items-start bg-surface-container border-t border-dark-grey">
                <div>
                  <div className="font-headline-sm text-pure-white leading-tight">{p.nm}</div>
                  <div className="text-sm font-label-caps text-on-surface-variant tracking-wider mt-1">{p.ct}</div>
                </div>
                <div className="font-price-tag text-pure-white tabular-nums">${p.pr}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
