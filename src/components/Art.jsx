import { useReveal } from '../hooks/useReveal';
import jersey1 from '../assets/images/Jersey1.webp';
import jersey2 from '../assets/images/Jersey2.webp';
import jersey3 from '../assets/images/Jersey3.webp';
import wizzo from '../assets/images/Wizzo.webp';
import artCover from '../assets/images/ArtCover.webp';
import artCover1 from '../assets/images/ArtCover1.webp';

const artImages = [
  { src: jersey1, alt: 'Jersey 1' },
  { src: wizzo, alt: 'Wizzo' },
  { src: jersey2, alt: 'Jersey 2' },
  { src: artCover, alt: 'Art Cover' },
  { src: jersey3, alt: 'Jersey 3' },
  { src: artCover1, alt: 'Art Cover 1' },
];

export function Art() {
  const [ref, visible] = useReveal();

  return (
    <section className="section" id="art" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <div className="section-heading">
          <span className="section-label">/ art</span>
          <span className="section-rule"></span>
        </div>

        <a className="art-link" href="https://www.pinterest.com/HeisAbuelo/art/" target="_blank" rel="noopener">Explore collection</a>
        <p className="art-description">A collection of original characters and conceptual illustrations. Full gallery on Pinterest.</p>

        <div className="art-grid">
          {artImages.map((img, i) => (
            <div key={i} className="art-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
