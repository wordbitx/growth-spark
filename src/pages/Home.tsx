import { Hero } from '@/sections/Hero';
import { Products } from '@/sections/Products';
import { Services } from '@/sections/Services';
import { Testimonials } from '@/sections/Testimonials';

export function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Services />
      <Testimonials />
    </main>
  );
}
