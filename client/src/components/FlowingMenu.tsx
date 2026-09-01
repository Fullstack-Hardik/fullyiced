'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

export default function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#120F17',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#120F17',
  borderColor = '#fff'
}: any) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="menu">
        {items.map((item: any, idx: number) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, speed, textColor, marqueeBgColor, marqueeTextColor, borderColor }: any) {
  const itemRef = useRef<any>(null);
  const marqueeRef = useRef<any>(null);
  const marqueeInnerRef = useRef<any>(null);
  
  useEffect(() => {
    if (!marqueeInnerRef.current || !itemRef.current) return;
    
    // Duplicate the marquee text elements
    const elements = marqueeInnerRef.current.children;
    for (let i = 0; i < 4; i++) {
      marqueeInnerRef.current.appendChild(elements[0].cloneNode(true));
    }
    
    // Set up gsap animation
    const tl = gsap.to(marqueeInnerRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: speed,
      ease: 'linear'
    });

    // Hover effects
    const onEnter = () => {
      gsap.to(marqueeRef.current, { height: '100%', duration: 0.4, ease: 'power3.out' });
      gsap.to(itemRef.current.querySelector('.menu__item-text'), { y: '-100%', duration: 0.4, ease: 'power3.out' });
    };
    
    const onLeave = () => {
      gsap.to(marqueeRef.current, { height: '0%', duration: 0.4, ease: 'power3.out' });
      gsap.to(itemRef.current.querySelector('.menu__item-text'), { y: '0%', duration: 0.4, ease: 'power3.out' });
    };

    const item = itemRef.current;
    item.addEventListener('mouseenter', onEnter);
    item.addEventListener('mouseleave', onLeave);
    
    return () => {
      tl.kill();
      item.removeEventListener('mouseenter', onEnter);
      item.removeEventListener('mouseleave', onLeave);
    };
  }, [speed]);

  return (
    <div 
      ref={itemRef} 
      className="menu__item" 
      style={{ borderBottomColor: borderColor }}
    >
      <a href={link} className="menu__item-link">
        <span className="menu__item-textwrap">
          <span className="menu__item-text" style={{ color: textColor }}>{text}</span>
        </span>
        
        {image && (
          <div className="menu__item-image-wrapper">
            <img src={image} alt={text} className="menu__item-image" />
          </div>
        )}
      </a>
      
      <div 
        ref={marqueeRef} 
        className="menu__item-marquee" 
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div ref={marqueeInnerRef} className="menu__item-marquee-inner">
          <span style={{ color: marqueeTextColor }}>{text}</span>
        </div>
      </div>
    </div>
  );
}
