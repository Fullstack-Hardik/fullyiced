import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Season from '@/components/Season';
import Shop from '@/components/Shop';
import Lookbook from '@/components/Lookbook';
import Signup from '@/components/Signup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-matte-black text-pure-white selection:bg-electric-gold selection:text-matte-black">
      <Navbar />
      <Hero />
      <Categories />
      <Season />
      <Shop />
      <Lookbook />
      <Signup />
      <Footer />
    </main>
  );
}
