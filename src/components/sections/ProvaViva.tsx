import { useRef } from 'react';
import { Section } from '../Section';
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
      <p className="prova-cases-titulo">{COPY.prova.casesTitulo}</p>
      <div ref={gridRef} className="bento-prova">
        {CASES.map((c) => (
          <div key={c.cliente} className="numero-card">
            <span className={c.logoEscurecer ? 'numero-card__logo numero-card__logo--escurecer' : 'numero-card__logo'}>
              <img src={c.logo} alt={c.cliente} />
            </span>
            <span className="numero-card__segmento">{c.segmento}</span>
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
