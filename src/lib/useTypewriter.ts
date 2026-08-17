import { useEffect, useRef, useState } from 'react';

interface TypewriterOptions {
  typeSpeed?: number;
  eraseSpeed?: number;
  holdTime?: number;
  paused?: boolean;
}

/**
 * Efeito de máquina de escrever: digita cada frase da lista, segura um tempo, apaga
 * e passa pra próxima (ordem embaralhada por montagem). Usado no placeholder do campo
 * de dor pra sugerir exemplos reais sem competir com o texto que o usuário digita.
 */
export function useTypewriter(items: readonly string[], options: TypewriterOptions = {}): string {
  const { typeSpeed = 34, eraseSpeed = 16, holdTime = 2200, paused = false } = options;
  const orderRef = useRef<number[]>(shuffle(items.length));
  const [text, setText] = useState('');

  useEffect(() => {
    if (paused || items.length === 0) return;

    let itemIndex = 0;
    let charIndex = 0;
    let phase: 'typing' | 'holding' | 'erasing' = 'typing';
    let timeoutId: number;

    function tick() {
      const order = orderRef.current;
      const full = items[order[itemIndex % order.length]] ?? '';

      if (phase === 'typing') {
        charIndex += 1;
        setText(full.slice(0, charIndex));
        if (charIndex >= full.length) {
          phase = 'holding';
          timeoutId = window.setTimeout(tick, holdTime);
          return;
        }
        timeoutId = window.setTimeout(tick, typeSpeed);
        return;
      }

      if (phase === 'holding') {
        phase = 'erasing';
        timeoutId = window.setTimeout(tick, eraseSpeed);
        return;
      }

      // erasing
      charIndex -= 1;
      setText(full.slice(0, charIndex));
      if (charIndex <= 0) {
        itemIndex += 1;
        phase = 'typing';
        timeoutId = window.setTimeout(tick, typeSpeed);
        return;
      }
      timeoutId = window.setTimeout(tick, eraseSpeed);
    }

    timeoutId = window.setTimeout(tick, typeSpeed);
    return () => window.clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, items, typeSpeed, eraseSpeed, holdTime]);

  return text;
}

function shuffle(length: number): number[] {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
