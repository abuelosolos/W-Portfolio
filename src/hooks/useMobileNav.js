import { useState } from 'react';

export function useMobileNav() {
  const [open, setOpen] = useState(false);

  return {
    open,
    toggle: () => setOpen((value) => !value),
    close: () => setOpen(false),
  };
}
