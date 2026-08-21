'use client';

import React from 'react';

export default function Service() {
  return (
    <section id="svc" className="border-t border-b border-[#101010]/10">
      <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[clamp(14px,2.6vw,36px)] py-[clamp(22px,3.4vh,34px)]">
        <div>
          <h4 className="font-bold text-[12px] tracking-[0.14em] uppercase mb-[5px]">Fast delivery</h4>
          <p className="text-[12.5px] text-[#8A8781]">Dispatched within 24 hours, tracked.</p>
        </div>
        <div>
          <h4 className="font-bold text-[12px] tracking-[0.14em] uppercase mb-[5px]">Easy returns</h4>
          <p className="text-[12.5px] text-[#8A8781]">30 days, prepaid label in the box.</p>
        </div>
        <div>
          <h4 className="font-bold text-[12px] tracking-[0.14em] uppercase mb-[5px]">Made to last</h4>
          <p className="text-[12.5px] text-[#8A8781]">Repairs free for the first two years.</p>
        </div>
        <div>
          <h4 className="font-bold text-[12px] tracking-[0.14em] uppercase mb-[5px]">Secure payment</h4>
          <p className="text-[12.5px] text-[#8A8781]">Every major method, nothing stored.</p>
        </div>
      </div>
    </section>
  );
}
