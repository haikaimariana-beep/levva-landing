import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, prefersReducedMotion } from './gsap';

/**
 * Zoom scrubado pelo scroll: o texto cresce de leve e ganha opacidade conforme passa
 * pelo centro da tela. Categoria "zoom" do motion — reforça o respiro da seção "A virada"
 * sem recorrer a pin (mais seguro em mobile e não briga com o smooth scroll do Lenis).
 */
export function useZoomReveal(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 0.9, opacity: 0.45 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 0.4,
          },
        },
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
