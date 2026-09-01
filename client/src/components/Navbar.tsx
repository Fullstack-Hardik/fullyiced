'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PRODUCTS', href: '/#shop' },
    { name: 'ABOUT', href: '/about' },
    { name: 'BLOGS', href: '/journal' },
    { name: 'CONTACT', href: '/#signup' }
  ];

  return (
    <>
      <header className="bg-matte-black/95 border-b border-surface-variant font-headline-sm text-headline-sm uppercase tracking-wider w-full top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-[1440px] mx-auto hidden md:flex relative">
          
          <Link href="/" className="font-display-lg text-headline-lg font-bold text-electric-gold shrink-0 relative z-20">
            FULLY ICED
          </Link>
          
          <nav className="flex space-x-8 relative z-20" onMouseLeave={() => setHoveredLink(null)}>
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative py-4"
                onMouseEnter={() => setHoveredLink(link.name)}
              >
                <Link 
                  href={link.href} 
                  className={`transition-all duration-300 ${hoveredLink === link.name ? 'text-electric-gold' : 'text-pure-white'}`}
                >
                  {link.name}
                </Link>
                
                {/* Hover Dropdown Card */}
                <AnimatePresence>
                  {hoveredLink === link.name && (link.name === 'ABOUT' || link.name === 'SERVICES' || link.name === 'PRODUCTS' || link.name === 'BLOGS') && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-surface-dim border border-dark-grey p-6 shadow-2xl z-30"
                    >
                      <div className="flex flex-col space-y-4">
                        {link.name === 'ABOUT' && (
                          <>
                            <Link href="/about" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Studio Information</Link>
                            <Link href="/about" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Craftsmanship</Link>
                            <Link href="/about" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Heritage</Link>
                          </>
                        )}
                        {link.name === 'SERVICES' && (
                          <>
                            <Link href="/services" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Bespoke Jewelry</Link>
                            <Link href="/services" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Repairs & Polishing</Link>
                            <Link href="/services" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Diamond Setting</Link>
                          </>
                        )}
                        {link.name === 'PRODUCTS' && (
                          <>
                            <Link href="/#shop" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Cuban Links</Link>
                            <Link href="/#shop" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Diamond Rings</Link>
                            <Link href="/#shop" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Grillz</Link>
                          </>
                        )}
                        {link.name === 'BLOGS' && (
                          <>
                            <Link href="/journal" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Latest Drops</Link>
                            <Link href="/journal" className="text-pure-white hover:text-electric-gold transition-colors block text-sm">Style Guide</Link>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          
          <div className="flex space-x-6 text-pure-white relative z-20">
            <button className="hover:text-electric-gold transition-all scale-95 duration-200">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="hover:text-electric-gold transition-all scale-95 duration-200">
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="hover:text-electric-gold transition-all scale-95 duration-200">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex justify-between items-center w-full px-margin-mobile py-4 md:hidden relative z-20">
          <button className="text-pure-white" onClick={() => setMenuOpen(true)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link href="/" className="font-display-lg-mobile text-headline-xl font-bold text-electric-gold">FULLY ICED</Link>
          <button className="text-pure-white">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>
      </header>

      {/* SideNavBar (Mobile Only) */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 md:hidden ${menuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMenuOpen(false)}></div>
        <nav className={`bg-matte-black border-r border-dark-grey shadow-2xl flex flex-col h-full py-stack-md px-margin-mobile absolute top-0 left-0 w-80 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center mb-8">
            <div className="font-display-lg-mobile text-headline-xl font-bold text-electric-gold tracking-tight">FULLY ICED</div>
            <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" className="text-pure-white hover:text-electric-gold transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex flex-col space-y-6 font-headline-sm text-headline-sm text-pure-white uppercase">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-electric-gold transition-colors" onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
