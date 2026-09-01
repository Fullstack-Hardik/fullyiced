import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Service from '@/components/Service';
import Atelier from '@/components/Atelier';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-matte-black text-pure-white selection:bg-electric-gold selection:text-matte-black">
      <Navbar />
      
      <div className="pt-10">
        <Service />
        <Atelier />
      </div>

      <Footer />
    </main>
  );
}
