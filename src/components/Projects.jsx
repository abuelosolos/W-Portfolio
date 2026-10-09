import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useIsMobile } from '../hooks/useMediaQuery';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { ProductCard } from './ProductCard';
import { projects, MOBILE_INITIAL_PROJECTS } from '../data/projects';

export function Projects() {
  const [ref, visible] = useReveal();
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef(null);
  const scrollAfterCollapse = useRef(false);

  const collapsible = isMobile && projects.length > MOBILE_INITIAL_PROJECTS;
  const shown = collapsible && !expanded ? projects.slice(0, MOBILE_INITIAL_PROJECTS) : projects;

  // After collapsing, bring the top of the grid back into view (runs once the extra cards are gone).
  useEffect(() => {
    if (expanded || !scrollAfterCollapse.current || !gridRef.current) return;
    scrollAfterCollapse.current = false;
    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 0;
    const top = gridRef.current.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
  }, [expanded, reduced]);

  const toggle = () => {
    scrollAfterCollapse.current = expanded;
    setExpanded(!expanded);
  };

  return (
    <section className="section" id="work">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <h2 className="section-title">/projects.</h2>
        </div>
        <div className="project-grid" ref={gridRef}>
          {shown.map((p, i) => (
            <ProductCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        {collapsible && (
          <div className="more-wrap">
            <button type="button" className="more-btn" aria-expanded={expanded} onClick={toggle}>
              {expanded ? 'Show less' : 'See more'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
