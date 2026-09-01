import React from 'react';
import Lanyard from '@/components/Lanyard';
import BorderGlow from '@/components/BorderGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-matte-black text-pure-white selection:bg-electric-gold selection:text-matte-black">
      <Navbar />
      
      {/* Hero Section with 3D Lanyard */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden border-b border-dark-grey pt-20">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
        <div className="relative z-10 pointer-events-none text-center">
          <h1 className="font-display-lg text-[clamp(4rem,10vw,8rem)] leading-[0.8] tracking-tighter mix-blend-difference">
            ABOUT <br/> THE STUDIO
          </h1>
          <p className="mt-6 font-body-lg text-on-surface-variant max-w-xl mx-auto mix-blend-difference">
            Fully Iced represents the pinnacle of modern hip-hop jewelry. Built for the streets, crafted for the stars.
          </p>
        </div>
      </section>

      {/* Brand Values / Information Grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#0c0c0e"
            borderRadius={0}
            glowRadius={40}
            glowIntensity={1.0}
            coneSpread={25}
            animated={true}
            colors={['#dcb95e', '#ffffff', '#222222']}
            className="h-full"
          >
            <div className="p-10 h-full flex flex-col justify-between">
              <h3 className="font-headline-lg text-3xl uppercase tracking-widest text-electric-gold mb-6">Craftsmanship</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Every piece is meticulously handcrafted in our London studio. We use only VS1+ clarity diamonds and solid 18k gold to ensure maximum brilliance and durability. Our setters have decades of experience creating custom pieces for industry heavyweights.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#0c0c0e"
            borderRadius={0}
            glowRadius={40}
            glowIntensity={1.0}
            coneSpread={25}
            animated={false}
            colors={['#ffffff', '#dcb95e', '#222222']}
            className="h-full"
          >
            <div className="p-10 h-full flex flex-col justify-between">
              <h3 className="font-headline-lg text-3xl uppercase tracking-widest text-pure-white mb-6">Heritage</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Rooted in the culture, we understand the statement a heavy chain makes. Fully Iced was born from the desire to bridge the gap between traditional fine jewelry techniques and raw, unapologetic urban aesthetics.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#0c0c0e"
            borderRadius={0}
            glowRadius={40}
            glowIntensity={1.0}
            coneSpread={25}
            animated={false}
            colors={['#222222', '#dcb95e', '#ffffff']}
            className="h-full"
          >
            <div className="p-10 h-full flex flex-col justify-between">
              <h3 className="font-headline-lg text-3xl uppercase tracking-widest text-electric-gold mb-6">Custom</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Your vision, our execution. We offer a full bespoke service, from initial 3D CAD renders to the final diamond setting. Whether it's a custom logo pendant or a unique grill, we bring your concepts to reality.
              </p>
            </div>
          </BorderGlow>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
