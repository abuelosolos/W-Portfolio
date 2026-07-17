import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Art } from './components/Art';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Art />
      <div className="divider" />
      <Connect />
      <div className="divider" />
      <Footer />
    </>
  );
}
