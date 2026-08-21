import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Season from '@/components/Season';
import Service from '@/components/Service';
import Shop from '@/components/Shop';
import Lookbook from '@/components/Lookbook';
import Cloth from '@/components/Cloth';
import Atelier from '@/components/Atelier';
import Signup from '@/components/Signup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Season />
      <Service />
      <Shop />
      <Lookbook />
      <Cloth />
      <Atelier />
      <Signup />
      <Footer />
    </>
  );
}
