import { useEffect, useState } from 'react';
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
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    if (!activeImg) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImg(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeImg]);

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
            <div
              key={img.alt}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt} full size`}
              className={`album-item reveal-item ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${150 + i * 110}ms` }}
              onClick={() => setActiveImg(img)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImg(img);
                }
              }}
            >
              <Img src={img.src} alt={img.alt} loading="lazy" style={img.position ? { objectPosition: img.position } : undefined} />
            </div>
          ))}
        </div>

        <div className={`album-cta reveal ${visible ? 'visible' : ''}`}>
          <CaseStudyBtn href={pinterestUrl}>Explore Collection</CaseStudyBtn>
        </div>
      </div>

      {activeImg && (
        <div
          className="art-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImg.alt}
          onClick={() => setActiveImg(null)}
        >
          <button
            type="button"
            className="art-lightbox-close"
            aria-label="Close image preview"
            onClick={() => setActiveImg(null)}
            autoFocus
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Img
            className="art-lightbox-img"
            src={activeImg.src}
            alt={activeImg.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
