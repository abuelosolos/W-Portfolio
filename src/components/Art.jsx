import { useReveal } from '../hooks/useReveal';
import { Img } from './Img';
import { CaseStudyBtn } from './CaseStudyBtn';
import { artSasha, artLulu, artAbuelo, artMorse } from '../assets/images';
import { pinterestUrl } from '../data/socials';

// Mosaic order matches the Figma "Album Grid": tall, tall, wide, wide.
const artImages = [
  { src: artSasha, alt: 'Sasha', position: '50% 8%' },
  { src: artLulu, alt: 'Lulu' },
  { src: artAbuelo, alt: 'Abuelo' },
  { src: artMorse, alt: 'Morse', position: '50% 35%' },
];

export function Art() {
  const [ref, visible] = useReveal();

  return (
    <section className="section" id="art" ref={ref}>
      <div className="container">
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="title-body">
            <h2 className="section-title">/collection.</h2>
            <p className="section-sub">A collection of original characters and illustrations. Full gallery on Pinterest.</p>
          </div>
        </div>

        <div className="album-grid">
          {artImages.map((img, i) => (
            <div key={img.alt} className={`album-item reveal-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${150 + i * 110}ms` }}>
              <Img src={img.src} alt={img.alt} loading="lazy" style={img.position ? { objectPosition: img.position } : undefined} />
            </div>
          ))}
        </div>

        <div className={`album-cta reveal ${visible ? 'visible' : ''}`}>
          <CaseStudyBtn href={pinterestUrl}>Explore Collection</CaseStudyBtn>
        </div>
      </div>
    </section>
  );
}
