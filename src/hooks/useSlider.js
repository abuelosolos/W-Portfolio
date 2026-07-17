import { useState, useEffect, useRef } from 'react';

export function useSlider(total, ms = 5000) {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  const start = () => {
    timer.current = setInterval(() => setCurrent((c) => (c + 1) % total), ms);
  };

  const reset = () => {
    clearInterval(timer.current);
    start();
  };

  useEffect(() => {
    if (!total) return;
    start();
    return () => clearInterval(timer.current);
  }, [total, ms]);

  const goTo = (i) => {
    setCurrent(((i % total) + total) % total);
    reset();
  };

  return {
    current,
    goTo,
    next: () => goTo(current + 1),
    prev: () => goTo(current - 1),
    pause: () => clearInterval(timer.current),
    resume: reset,
  };
}
