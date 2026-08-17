import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ease de marca: leve overshoot na entrada, chegada macia — usado em todo reveal/stagger.
export const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export { gsap, ScrollTrigger };
