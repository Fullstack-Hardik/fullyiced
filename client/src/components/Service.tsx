'use client';

import React from 'react';

export default function Service() {
  return (
    <section id="svc" className="border-t border-dark-grey bg-matte-black py-stack-lg px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter divide-y md:divide-y-0 md:divide-x divide-dark-grey">
        <div className="flex items-start gap-4 p-4">
          <span className="material-symbols-outlined text-electric-gold text-3xl">local_shipping</span>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-pure-white uppercase mb-2">Fast delivery</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Dispatched within 24 hours, tracked securely to your door.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4">
          <span className="material-symbols-outlined text-electric-gold text-3xl">verified</span>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-pure-white uppercase mb-2">Easy returns</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Hassle-free 30 days returns, prepaid label in the box.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4">
          <span className="material-symbols-outlined text-electric-gold text-3xl">handyman</span>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-pure-white uppercase mb-2">Made to last</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Repairs completely free for the first two years.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4">
          <span className="material-symbols-outlined text-electric-gold text-3xl">credit_card</span>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-pure-white uppercase mb-2">Secure payment</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Every major method accepted, nothing stored.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
