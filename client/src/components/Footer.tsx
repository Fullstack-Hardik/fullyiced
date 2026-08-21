'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-[clamp(40px,6vh,72px)] pb-[32px]">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-[clamp(20px,3vw,44px)] mb-[44px]">
          <div className="col-span-2 md:col-span-1">
            <div className="font-extrabold text-[30px] tracking-[0.24em] mb-[12px]">FULLY ICED</div>
            <address className="not-italic text-[13px] leading-[1.9] text-[#8A8781]">
              18 Redchurch Street<br />London E2 7DP<br /><br />
              hello@fullyiced.studio
            </address>
          </div>
          <div>
            <h4 className="font-bold text-[11px] tracking-[0.2em] uppercase mb-[16px]">Shop</h4>
            <a href="#shop" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Rings</a>
            <a href="#shop" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Necklaces</a>
            <a href="#shop" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Bracelets</a>
            <a href="#shop" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Archive sale</a>
          </div>
          <div>
            <h4 className="font-bold text-[11px] tracking-[0.2em] uppercase mb-[16px]">Help</h4>
            <a href="#" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Sizing</a>
            <a href="#" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Shipping</a>
            <a href="#" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Returns</a>
            <a href="#" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Repairs</a>
          </div>
          <div>
            <h4 className="font-bold text-[11px] tracking-[0.2em] uppercase mb-[16px]">Studio</h4>
            <a href="#" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Our cloth</a>
            <a href="#" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Stockists</a>
            <a href="#" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Journal</a>
            <a href="#" className="block py-[5px] text-[13.5px] text-[#4A4741] hover:text-[#101010]">Careers</a>
          </div>
        </div>
        <div className="border-t border-[#101010]/10 pt-[22px] flex justify-between gap-[18px] flex-wrap text-[11.5px] text-[#8A8781]">
          <span>© 2026 Fully ICED Studio Ltd · Company 11482207</span>
          <span>Prices include VAT</span>
        </div>
      </div>
    </footer>
  );
}
