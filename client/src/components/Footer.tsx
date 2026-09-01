'use client';

import FlowingMenu from './FlowingMenu';
import ModelViewer from './ModelViewer';

export default function Footer() {
  const demoItems = [
    { link: '#', text: 'Chains', image: '/necklace.png' },
    { link: '#', text: 'Rings', image: '/ring.png' },
    { link: '#', text: 'Bracelets', image: '/bracelet.png' },
    { link: '#', text: 'Pendants', image: '/necklace.png' }
  ];

  return (
    <>
      {/* Flowing Menu Section - Moved completely outside of footer to prevent overlap */}
      <div className="w-full relative z-20 border-t border-dark-grey">
        <FlowingMenu items={demoItems} bgColor="#0c0c0e" marqueeBgColor="#dcb95e" marqueeTextColor="#0c0c0e" textColor="#fff" borderColor="rgba(255,255,255,0.1)" />
      </div>

      <footer className="bg-matte-black border-t border-dark-grey font-body-md text-body-md w-full bottom-0 z-10 relative pb-8 overflow-hidden">
        {/* Huge background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden mix-blend-overlay">
          <div className="font-display-lg text-[clamp(100px,20vw,400px)] text-pure-white whitespace-nowrap uppercase tracking-tighter font-black">
            FULLY ICED
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-mobile md:px-margin-desktop py-stack-lg max-w-[1440px] mx-auto relative z-10">
        
        {/* ModelViewer 3D object */}
        <div className="hidden md:flex justify-center items-center pointer-events-auto w-full h-[300px] border border-dark-grey relative bg-surface-variant/20">
          <ModelViewer
            url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
            width="100%"
            height="100%"
            environmentPreset="sunset"
            defaultZoom={1}
          />
        </div>

        {/* Service */}
        <div>
          <h4 className="font-headline-sm text-headline-sm text-electric-gold uppercase mb-6 tracking-widest">Help</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Sizing</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Shipping</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Returns</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Repairs</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-headline-sm text-headline-sm text-electric-gold uppercase mb-6 tracking-widest">Studio</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Our Cloth</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Stockists</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Journal</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#">Careers</a></li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h4 className="font-headline-sm text-headline-sm text-electric-gold uppercase mb-6 tracking-widest">Shop</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#shop">Rings</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#shop">Necklaces</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#shop">Bracelets</a></li>
            <li><a className="text-on-surface-variant hover:text-pure-white hover:translate-x-1 inline-block transition-transform uppercase font-label-caps tracking-wider" href="#shop">Archive Sale</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <div className="w-16 h-16 bg-electric-gold text-matte-black rounded-sm flex items-center justify-center font-black mb-6 font-display-lg-mobile shadow-[0_0_15px_rgba(220,185,94,0.4)]">
            FI
          </div>
          <h4 className="font-headline-lg text-headline-lg text-pure-white uppercase mb-4 tracking-tighter">JOIN THE MOVEMENT</h4>
          <div className="flex mb-4 relative group">
            <input className="w-full bg-surface-container-low text-pure-white placeholder-on-surface-variant border border-dark-grey py-4 px-4 focus:outline-none focus:border-electric-gold transition-colors font-body-md" placeholder="Enter your email" type="email"/>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-pure-white text-matte-black rounded-sm flex items-center justify-center hover:bg-electric-gold transition-colors shadow-md">
              <span className="material-symbols-outlined text-md">arrow_forward</span>
            </button>
          </div>
          <p className="text-sm text-on-surface-variant mb-6 font-body-sm leading-relaxed">
            Discover exclusive access to our biggest drops, promotions, members-only products, and more.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a className="text-pure-white hover:text-electric-gold transition-colors hover:scale-110 transform" href="#">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
            </a>
            <a className="text-pure-white hover:text-electric-gold transition-colors hover:scale-110 transform" href="#">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Payments */}
      <div className="px-margin-mobile md:px-margin-desktop py-6 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center border-t border-dark-grey mt-stack-lg relative z-10">
        <div className="text-sm text-on-surface-variant mb-6 md:mb-0 text-center md:text-left font-label-caps uppercase tracking-widest">
          <p className="text-pure-white mb-2">© 2026 FULLY ICED STUDIO LTD. ALL RIGHTS RESERVED.</p>
          <address className="not-italic text-xs opacity-70">
            18 Redchurch Street, London E2 7DP <br/>
            hello@fullyiced.studio
          </address>
        </div>
        <div className="flex gap-3 opacity-80 items-center">
          <div className="w-12 h-8 bg-pure-white rounded flex items-center justify-center font-bold text-xs text-matte-black">VISA</div>
          <div className="w-12 h-8 bg-pure-white rounded flex items-center justify-center font-bold text-xs text-matte-black">MC</div>
          <div className="w-12 h-8 bg-pure-white rounded flex items-center justify-center font-bold text-xs text-matte-black">AMEX</div>
          <div className="w-12 h-8 bg-pure-white rounded flex items-center justify-center font-bold text-xs text-matte-black">PAY</div>
        </div>
      </div>
    </footer>
    </>
  );
}
