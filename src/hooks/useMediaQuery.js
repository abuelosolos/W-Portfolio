import { useEffect, useState } from 'react';

// Must stay in sync with the mobile breakpoint in styles/index.css (@media (max-width: 768px)).
export const MOBILE_QUERY = '(max-width: 768px)';

const read = (query) => typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : false;

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => read(query));

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export const useIsMobile = () => useMediaQuery(MOBILE_QUERY);
