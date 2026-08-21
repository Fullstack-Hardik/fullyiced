'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setMenuOpen(true)} aria-label="Open Menu" className="relative z-50 w-[32px] h-[32px] flex items-center justify-center -ml-2 text-[#101010] cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div className="font-extrabold text-[22px] tracking-[0.26em]">FULLY ICED</div>
          </div>
          
          <div className="flex gap-[22px] justify-end items-center font-medium text-[11px] leading-none tracking-[0.14em] uppercase">
            <span className="opacity-55 hidden md:inline">Account</span>
            <a href="#shop">Bag (<b id="bagn">0</b>)</a>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${menuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMenuOpen(false)}></div>
        <div className={`absolute left-0 top-0 bottom-0 w-[80%] max-w-[320px] bg-[#EFEDE8] p-6 flex flex-col transition-transform duration-500 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center mb-8">
            <div className="font-extrabold text-[20px] tracking-[0.26em]">FULLY ICED</div>
            <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" className="p-2 -mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <ul className="flex flex-col gap-6 list-none font-medium text-[12px] tracking-[0.16em] uppercase">
            <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#svc" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#shop" onClick={() => setMenuOpen(false)}>Products</a></li>
            <li><a href="#cloth" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#signup" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Blogs</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
