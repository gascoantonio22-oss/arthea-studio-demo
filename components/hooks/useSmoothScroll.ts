'use client';

import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToSection = useCallback((href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  return { scrollToSection };
}
