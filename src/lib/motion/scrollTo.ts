import { getLenis } from './SmoothScrollProvider';
import { prefersReducedMotion } from './gsap';

/**
 * Scroll programático (CTA -> hero, card de dor -> hero) que respeita o Lenis quando ativo.
 * Native scrollIntoView/scrollTo são revertidos pelo próximo raf do Lenis — nunca chamar
 * direto fora daqui.
 */
export function smoothScrollTo(target: string | HTMLElement, headerOffset = -76) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { offset: headerOffset, duration: 1.2 });
    return;
  }

  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  el?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
}
