import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Img } from './Img';

const DECK = 4; // cards visible in the pile
const PERIOD = 2000; // ms per cycle: each card is on top for 2s in total (the fling overlaps the end of it)

// Mobile hero: an endless deck of project cards, slightly slanted to the left.
// The top card stays 2s, is thrown off to the left, the pile moves up and a new card appears at the back.
// Card `id` shows slides[id % length]; its depth in the pile is id - n (0 = top, -1 = just thrown).
export function HeroFling({ slides, reduced }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const id = setInterval(() => {
      if (!document.hidden) setN((v) => v + 1);
    }, PERIOD);
    return () => clearInterval(id);
  }, [slides.length]);

  // warm the cache for the card about to join the back of the pile
  useEffect(() => {
    const next = slides[(n + DECK) % slides.length];
    if (next) new Image().src = next.image;
  }, [n, slides]);

  const cards = [];
  for (let id = Math.max(n - 1, 0); id < n + DECK; id += 1) {
    const depth = id - n;
    const s = slides[id % slides.length];
    cards.push(
      <Link
        key={id}
        to={`/project/${s.slug}`}
        className={`fling-card ${depth < 0 ? 'is-gone' : ''} ${reduced ? 'is-still' : ''}`}
        style={{ '--d': depth }}
        aria-label={s.title}
        aria-hidden={depth !== 0}
        tabIndex={depth === 0 ? 0 : -1}
      >
        <Img src={s.image} alt="" />
      </Link>,
    );
  }

  return (
    <div className="hero-fling" aria-label="Selected projects">
      {cards}
    </div>
  );
}
