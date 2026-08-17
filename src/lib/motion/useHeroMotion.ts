import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, prefersReducedMotion } from './gsap';

interface HeroMotionRefs {
  section: RefObject<HTMLElement | null>;
  titleMask: RefObject<HTMLDivElement | null>;
  content: RefObject<HTMLDivElement | null>;
  arcs: RefObject<HTMLImageElement | null>;
}

/**
 * Entrada de marca do Hero: título revelado sob máscara (categoria "masking"), conteúdo em
 * stagger logo atrás, e a ilustração de arcos com parallax + rotação sutil de scroll
 * (categoria "parallax") — dá profundidade sem competir com o campo de dor.
 */
export function useHeroMotion({ section, titleMask, content, arcs }: HeroMotionRefs) {
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

      if (arcs.current) {
        tl.fromTo(arcs.current, { opacity: 0, scale: 0.92, rotate: -4 }, { opacity: 0.13, scale: 1, rotate: 0, duration: 1.4 }, 0);
      }
      if (titleMask.current) {
        tl.fromTo(titleMask.current, { yPercent: 115 }, { yPercent: 0, duration: 1.1 }, 0.15);
      }
      if (content.current) {
        tl.fromTo(
          content.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
          '-=0.7',
        );
      }

      if (arcs.current) {
        gsap.to(arcs.current, {
          y: '-=40',
          scrollTrigger: {
            trigger: sectionEl,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });

        // Deriva contínua e lenta — o fundo nunca fica estático, mas sem competir com o campo de dor.
        gsap.to(arcs.current, {
          rotation: '+=360',
          duration: 160,
          repeat: -1,
          ease: 'none',
          delay: 1.4,
        });
      }
    }, sectionEl);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
