import { useRef } from 'react';
import { Section } from '../Section';
import { NumeroAncora } from '../ui/NumeroAncora';
import { CASES } from '../../data/cases';
import { COPY } from '../../data/copy';
import { useStagger } from '../../lib/motion/useStagger';

export function ProvaViva() {
  const gridRef = useRef<HTMLDivElement>(null);
  useStagger(gridRef, '.numero-card');

  return (
    <Section id="prova" tone="gold">
      <span className="section-eyebrow">{COPY.prova.eyebrow}</span>
      <h2
        style={{
          textAlign: 'center',
          fontSize: 'clamp(32px, 5vw, 42px)',
          fontWeight: 800,
          letterSpacing: '-0.01em',
          marginBottom: 56,
        }}
      >
        {COPY.prova.titulo}
      </h2>
      <div ref={gridRef} className="bento-prova">
        {CASES.map((c, i) => (
          <div key={c.cliente} className={i === 0 ? 'numero-card bento-prova__item--flagship' : 'numero-card'}>
            <NumeroAncora
              valor={c.numero}
              className="numero-ancora"
              key={c.numero}
            />
            <p className="numero-card__cliente" style={{ fontSize: i === 0 ? 19 : 17 }}>
              {c.cliente}
            </p>
            <p className="numero-card__contexto">{c.contexto}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 16, maxWidth: 600, margin: '48px auto 0' }}>
        {COPY.prova.fecho}
      </p>
    </Section>
  );
}
