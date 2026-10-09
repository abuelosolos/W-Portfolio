import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';
const read = () => typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(QUERY).matches : false;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(read);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia(QUERY);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
