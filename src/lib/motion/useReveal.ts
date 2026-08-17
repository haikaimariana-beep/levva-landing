import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, prefersReducedMotion } from './gsap';

interface RevealOptions {
  /** Seletor dos filhos a escalonar. Se omitido, anima o próprio elemento inteiro. */
  stagger?: string;
  y?: number;
  delay?: number;
  start?: string;
  /** Seção com entrada própria (ex.: Hero) — pula o fade genérico. */
  disabled?: boolean;
}

/**
 * Fade + rise com stagger opcional, disparado por ScrollTrigger uma única vez.
 * Substitui o IntersectionObserver simples por easing/delay reais (categorias 1 e 2 do motion da Zajno).
 */
export function useReveal(ref: RefObject<HTMLElement | null>, options: RevealOptions = {}) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || options.disabled) return;

    if (prefersReducedMotion()) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const targets = options.stagger ? el.querySelectorAll(options.stagger) : el;
    const y = options.y ?? 28;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: options.delay ?? 0,
          ease: 'power3.out',
          stagger: options.stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 82%',
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
