import Hero from '../components/Hero';
import About from '../components/About';
import Resume from '@/components/Resume';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
// import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
     
      {/* <Skills />
      <Contact />
      <Footer /> */}
    </>
  );
}
