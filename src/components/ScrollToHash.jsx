import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to #hash targets (about, work, art, connect) or to the top after navigation.
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, key]);

  return null;
}
