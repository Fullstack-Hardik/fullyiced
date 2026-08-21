'use client';

import React from 'react';

export default function Navbar() {
  return (
    <>
      <div className="bg-[#101010] text-[#EFEDE8] overflow-hidden" aria-hidden="true">
        <div className="flex w-max hover:[&>div]:[animation-play-state:paused]">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center flex-none gap-[52px] pr-[52px] animate-tick font-medium text-[10px] leading-none tracking-[0.2em] uppercase py-[9px]">
              <span>Complimentary shipping over $150</span><i className="not-italic opacity-50">/</i>
              <span>Made in limited runs</span><i className="not-italic opacity-50">/</i>
              <span>30 day returns</span><i className="not-italic opacity-50">/</i>
              <span>Archive restock Friday</span><i className="not-italic opacity-50">/</i>
            </div>
          ))}
        </div>
      </div>

      <nav className="sticky top-0 z-40 bg-[#EFEDE8]/90 backdrop-blur-[10px] border-b border-[#101010]/10">
        <div className="wrap flex justify-between items-center h-[72px] md:grid md:grid-cols-[1fr_auto_1fr] md:gap-5">
          <ul className="hidden md:flex gap-[20px] list-none">
            <li><a href="#" className="font-medium text-[10px] leading-none tracking-[0.16em] uppercase relative py-[6px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#101010] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">Home</a></li>
            <li><a href="#svc" className="font-medium text-[10px] leading-none tracking-[0.16em] uppercase relative py-[6px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#101010] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">Services</a></li>
            <li><a href="#shop" className="font-medium text-[10px] leading-none tracking-[0.16em] uppercase relative py-[6px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#101010] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">Products</a></li>
            <li><a href="#cloth" className="font-medium text-[10px] leading-none tracking-[0.16em] uppercase relative py-[6px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#101010] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">About</a></li>
            <li><a href="#signup" className="font-medium text-[10px] leading-none tracking-[0.16em] uppercase relative py-[6px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#101010] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">Contact</a></li>
            <li><a href="#" className="font-medium text-[10px] leading-none tracking-[0.16em] uppercase relative py-[6px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-[#101010] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">Blogs</a></li>
          </ul>
          
          <div className="hidden md:block font-extrabold text-[22px] tracking-[0.26em] text-center pl-[0.26em]">
            FULLY ICED
          </div>
          <div className="md:hidden flex items-center">
            <button aria-label="Open Menu" className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div className="font-extrabold text-[16px] tracking-[0.26em] ml-2">FULLY ICED</div>
          </div>
          
          <div className="flex gap-[22px] justify-end items-center font-medium text-[11px] leading-none tracking-[0.14em] uppercase">
            <span className="opacity-55 hidden md:inline">Account</span>
            <a href="#shop">Bag (<b id="bagn">0</b>)</a>
          </div>
        </div>
      </nav>
    </>
  );
}
