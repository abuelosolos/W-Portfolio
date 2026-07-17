import { useMemo } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useSlider } from '../hooks/useSlider';

import engineCover from '../assets/images/EngineCover.webp';
import overviewMac from '../assets/images/OverviewMac.webp';
import defiCover from '../assets/images/DefiCover.webp';

const slides = [
  {
    img: engineCover,
    label: 'AI Game Development Engine',
    title: 'G\'Scapes Game Engine',
    desc: 'An AI-powered game engine with a built-in chatbot for beginner and advanced devs. Scene editing, asset management, intelligent code suggestions.',
    link: 'https://www.behance.net/gallery/247009759/GScapes-Game-Engine-case-study', // Behance case study — already live
  },
  {
    img: overviewMac,
    label: 'Hotel Admin Dashboard',
    title: 'Roomly Dashboard',
    desc: 'Full hotel management: revenue analytics, room tracking, staff scheduling, and guest management.',
    link: '#', // no link for Roomly
  },
  {
    img: defiCover,
    label: 'Pair Swap · NFT Collection · Trade Tokens',
    title: 'Web3 DeFi App',
    desc: 'A mobile crypto wallet for swapping token pairs, staking assets, and browsing NFT collections.',
    link: 'https://www.behance.net/gallery/243482849/Wallet-App-UI-%28AbyFi%29', // TODO: add Figma project link here
  },
];

export function Projects() {
  const [ref, visible] = useReveal();
  const { current, goTo, next, prev, pause, resume } = useSlider(3);
  const touchStartX = useMemo(() => 0, []);

  let touchX = 0;

  const handleTouchStart = (e) => {
    touchX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section className="section" id="work" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <div className="section-heading">
          <span className="section-label">/ projects</span>
          <span className="section-rule"></span>
        </div>

        <div
          className="proj-slider"
          id="slider-projects"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="proj-slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide) => (
              <div className="proj-slide" key={slide.title}>
                <img src={slide.img} alt={slide.title} />
                <div className="proj-slide-overlay"></div>
                <div className="proj-slide-info">
                  <div className="proj-slide-label">{slide.label}</div>
                  <h3 className="proj-slide-title">{slide.title}</h3>
                  <p className="proj-slide-desc">{slide.desc}</p>
                  <a href={slide.link} className="proj-slide-cta">View project →</a>
                </div>
              </div>
            ))}
          </div>

          <button className="proj-slider-btn prev" aria-label="Previous" onClick={() => prev()}>
            <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="proj-slider-btn next" aria-label="Next" onClick={() => next()}>
            <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div className="proj-slider-dots">
            {slides.map((slide, index) => (
              <div key={slide.title} className={`dot ${index === current ? 'active' : ''}`} onClick={() => goTo(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
