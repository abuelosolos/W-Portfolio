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

        {/* MOBILE CARDS — hidden on desktop via CSS */}
        <div className="proj-mobile-list">
          {slides.map((s, i) => (
            <div key={i} className="proj-mobile-card">
              <div className="proj-mobile-top">
                <div className="proj-mobile-figma-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
                    <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
                    <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E"/>
                    <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
                    <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
                  </svg>
                </div>
                {s.link !== '#' && (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener"
                    className="proj-mobile-behance-icon"
                    aria-label="View on Behance"
                  >
                    <svg className="f" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M7.5 10.5c.97 0 1.75-.78 1.75-1.75S8.47 7 7.5 7H3v3.5h4.5zm.25 3.25c0-1.1-.9-2-2-2H3V16h2.75c1.1 0 2-.9 2-2zM2 5h6c2.2 0 4 1.8 4 4 0 1.1-.45 2.1-1.17 2.83C12.17 12.5 13 13.67 13 15c0 2.2-1.8 4-4 4H2V5zm15 9h5.5c-.28 1.4-1.56 2.5-3 2.5-1.38 0-2.5-.9-3-2.5H17zm-1.5-1c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .34-.04.67-.1 1H15.6c-.1-.33-.1-.67-.1-1zm4.5-3c-1.38 0-2.5 1.12-2.5 2.5H22.5C22.5 11.12 21.38 10 20 10zm-2.25-3.5h4.5v1H17.75v-1z"/>
                    </svg>
                  </a>
                )}
              </div>

              <h3 className="proj-mobile-title">{s.title}</h3>

              <div className="proj-mobile-img-wrap">
                <img src={s.img} alt={s.title} />
              </div>

              <p className="proj-mobile-desc">{s.desc}</p>

              <div className="proj-mobile-label">{s.label}</div>

              {s.link !== '#' && (
                <div className="proj-mobile-foot">
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener"
                    className="proj-mobile-cta"
                  >
                    View project →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
