import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, prefersReducedMotion } from './gsap';

/**
 * Stagger dos filhos diretos de um container (grid de dores, números, blocos "como trabalha").
 * Cada item chega com um pequeno delay do anterior — categoria "offset and delay" do motion.
 */
export function useStagger(ref: RefObject<HTMLElement | null>, childSelector: string) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(childSelector);
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      targets.forEach((t) => {
        (t as HTMLElement).style.opacity = '1';
        (t as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 32, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
