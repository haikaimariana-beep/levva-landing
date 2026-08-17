import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';

let lenisInstance: Lenis | null = null;

/**
 * Instância ativa do Lenis (ou null sob prefers-reduced-motion / antes do mount).
 * Qualquer scroll programático do app (CTA -> hero, card de dor -> hero) precisa
 * passar por ela — window.scrollTo/scrollIntoView nativos são sobrescritos pelo
 * próximo frame do Lenis, que não sabe que o alvo mudou. Ver smoothScrollTo().
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Smooth scroll (Lenis) sincronizado ao ticker do GSAP, alimentando o ScrollTrigger.
 * Sem isso, ScrollTrigger mede o scroll nativo e o pin/scrub perde o "peso" do easing do Lenis.
 * Desligado inteiro sob prefers-reduced-motion: scroll nativo, sem interceptação.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisInstance = null;
      lenis.destroy();
    };
  }, []);

  return children;
}
