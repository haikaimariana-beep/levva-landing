import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, prefersReducedMotion } from './gsap';

interface HeroMotionRefs {
  section: RefObject<HTMLElement | null>;
  titleMask: RefObject<HTMLDivElement | null>;
  content: RefObject<HTMLDivElement | null>;
}

/**
 * Entrada de marca do Hero: título revelado sob máscara (categoria "masking") seguido
 * de stagger no restante do conteúdo.
 */
export function useHeroMotion({ section, titleMask, content }: HeroMotionRefs) {
  useLayoutEffect(() => {
    const sectionEl = section.current;
    if (!sectionEl) return;

    if (prefersReducedMotion()) {
      if (titleMask.current) titleMask.current.style.transform = 'none';
      if (content.current) content.current.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      if (titleMask.current) {
        tl.fromTo(titleMask.current, { yPercent: 115 }, { yPercent: 0, duration: 1.1 }, 0);
      }
      if (content.current) {
        tl.fromTo(
          content.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
          '-=0.7',
        );
      }
    }, sectionEl);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
