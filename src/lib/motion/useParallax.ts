import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, prefersReducedMotion } from './gsap';

/**
 * Parallax de cursor num elemento: segue o mouse dentro da section-pai com um leve
 * deslocamento (categoria "dimension" do motion) — usado nos cartões flutuantes de exemplo.
 * `strength` positivo segue o cursor, negativo se afasta (profundidade em camadas opostas).
 */
export function useParallax(ref: RefObject<HTMLElement | null>, strength = 16) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const parent = el.closest('section') ?? el.parentElement;
    if (!parent) return;

    function onMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(el, { x: relX * strength, y: relY * (strength * 0.7), duration: 0.6, ease: 'power2.out' });
    }

    parent.addEventListener('mousemove', onMove);
    return () => parent.removeEventListener('mousemove', onMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, strength]);
}
