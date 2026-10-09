import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Img } from './Img';
import { floaterIcons } from '../assets/icons';
import { projects } from '../data/projects';
import { email } from '../data/socials';
import { useTyping } from '../hooks/useTyping';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useIsMobile } from '../hooks/useMediaQuery';

const HEADING = 'hi, kumasi here.';
const RESUME_DELAY = 450; // ms the carousel waits after the pointer leaves a card before it moves again

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const { typed, done } = useTyping(HEADING);
  const [iconsIn, setIconsIn] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIconsIn(true), reduced ? 0 : 250);
    return () => clearTimeout(t);
  }, [reduced]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const enter = (key) => {
    clearTimeout(resumeTimer.current);
    setHovered(key);
    setPaused(true);
  };
  const leave = () => {
    setHovered(null);
    resumeTimer.current = setTimeout(() => setPaused(false), reduced ? 0 : RESUME_DELAY);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-top">
        <div className="hero-content">
          <h1 className="hero-title" aria-label={HEADING}>
            <span className="hero-title-ghost" aria-hidden="true">{HEADING}</span>
            <span className="hero-title-typed" aria-hidden="true">
              {typed}
              <span className={`caret ${done ? 'blink' : ''}`} />
            </span>
          </h1>
          <div className="hero-bio">
            <p>A Product Designer and Developer from Port Harcourt.</p>
            <p>I kinda draw as well...</p>
          </div>
          <a className="hero-cta" href={`mailto:${email}`}>Say hello!</a>
        </div>

        <div className={`hero-floaters ${iconsIn ? 'in' : ''}`} aria-hidden="true">
          <span className="floater floater-ibis" style={{ '--d': '0s' }}><span><img src={floaterIcons.ibisPaint.src} width={floaterIcons.ibisPaint.size} height={floaterIcons.ibisPaint.size} alt="" /></span></span>
          <span className="floater floater-figma" style={{ '--d': '0.15s' }}><span><img src={floaterIcons.figma.src} width={floaterIcons.figma.size} height={floaterIcons.figma.size} alt="" /></span></span>
          <span className="floater floater-js" style={{ '--d': '0.3s' }}><span><img src={floaterIcons.javascript.src} width={floaterIcons.javascript.size} height={floaterIcons.javascript.size} alt="" /></span></span>
        </div>
      </div>

      {!isMobile && (
        <div className={`hero-carousel ${done ? 'visible' : ''}`} aria-label="Selected projects">
          <div className={`hero-track ${paused ? 'paused' : ''} ${hovered ? 'has-hover' : ''}`}>
            {[0, 1].map((group) => (
              <div className="hero-track-group" key={group} aria-hidden={group === 1}>
                {projects.map((p) => {
                  const key = `${group}-${p.slug}`;
                  return (
                    <Link
                      key={key}
                      to={`/project/${p.slug}`}
                      className={`hero-card ${hovered === key ? 'is-hovered' : ''}`}
                      aria-label={p.title}
                      tabIndex={group === 1 ? -1 : 0}
                      onMouseEnter={() => enter(key)}
                      onMouseLeave={leave}
                      onFocus={() => enter(key)}
                      onBlur={leave}
                    >
                      <Img src={p.thumbnail} alt={group === 0 ? p.title : ''} loading="lazy" />
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {isMobile && <p className="hero-scroll">you might wanna scroll</p>}
    </section>
  );
}
