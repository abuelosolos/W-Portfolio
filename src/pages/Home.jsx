import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Art } from '../components/Art';
import { Connect } from '../components/Connect';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Art />
      <Connect />
      <Footer />
    </>
  );
}
