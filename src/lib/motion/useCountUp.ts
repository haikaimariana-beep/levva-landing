import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, prefersReducedMotion } from './gsap';

/**
 * Conta do zero até o número embutido no texto (ex.: "70%", "R$ 3,42 mi/ano", "+120%"),
 * preservando prefixo/sufixo e o formato decimal (vírgula, casas) do valor original.
 * Categoria "transform/morph" do motion — número ganha peso porque é conquistado, não só lido.
 */
export function useCountUp(ref: RefObject<HTMLElement | null>, value: string) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = value;
      return;
    }

    const match = value.match(/-?\d+(?:[.,]\d+)?/);
    if (!match || match.index === undefined) {
      el.textContent = value;
      return;
    }

    const numStr = match[0];
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + numStr.length);
    const decimals = numStr.includes(',') ? numStr.split(',')[1].length : 0;
    const target = parseFloat(numStr.replace(',', '.'));

    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: target,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate: () => {
          const formatted =
            decimals > 0 ? counter.val.toFixed(decimals).replace('.', ',') : Math.round(counter.val).toString();
          el.textContent = `${prefix}${formatted}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, value]);
}
