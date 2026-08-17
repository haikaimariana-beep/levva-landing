import { useRef } from 'react';
import { Section } from '../Section';
import { NumeroAncora } from '../ui/NumeroAncora';
import { ESPELHO } from '../../data/espelho';
import { COPY } from '../../data/copy';
import { useStagger } from '../../lib/motion/useStagger';

export function Espelho() {
  const rowRef = useRef<HTMLDivElement>(null);
  useStagger(rowRef, '.espelho-stat-row');

  return (
    <Section id="espelho" tone="gold">
      <span className="section-eyebrow">{COPY.espelho.eyebrow}</span>
      <h2
        style={{
          textAlign: 'center',
          fontSize: 'clamp(32px, 5vw, 42px)',
          fontWeight: 800,
          letterSpacing: '-0.01em',
          marginBottom: 56,
        }}
      >
        {COPY.espelho.titulo}
      </h2>

      <div className="espelho-row">
        <div>
          <NumeroAncora valor={COPY.espelho.numeroGrande} className="espelho-number-big" />
          <p>{COPY.espelho.textoGrande}</p>
        </div>

        <div className="espelho-stat-list" ref={rowRef}>
          {ESPELHO.map((n) => (
            <div key={n.valor} className="espelho-stat-row">
              <NumeroAncora valor={n.valor} className="espelho-stat-row__num" />
              <p className="espelho-stat-row__text">{n.rotulo}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
