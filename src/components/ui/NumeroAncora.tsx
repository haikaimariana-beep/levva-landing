import { useRef } from 'react';
import { useCountUp } from '../../lib/motion/useCountUp';

interface NumeroAncoraProps {
  valor: string;
  className?: string;
}

/** Número que conta do zero até o valor real ao entrar na viewport (ver useCountUp). */
export function NumeroAncora({ valor, className }: NumeroAncoraProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, valor);

  return (
    <span ref={ref} className={className}>
      {valor}
    </span>
  );
}
