import { useRef } from 'react';
import { Section } from '../Section';
import { COPY } from '../../data/copy';
import { PRISMA_METODO } from '../../data/metodo';
import { useReveal } from '../../lib/motion/useReveal';
import { useStagger } from '../../lib/motion/useStagger';

export function Metodo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useReveal(wrapRef, { stagger: '.metodo-reveal', y: 24 });
  useStagger(gridRef, '.prisma-item');

  return (
    <Section id="metodo" tone="black" noReveal>
      <div ref={wrapRef}>
        <div className="metodo-reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
          <span className="section-eyebrow">{COPY.metodo.eyebrow}</span>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 42px)',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginBottom: 16,
            }}
          >
            {COPY.metodo.titulo}
          </h2>
          <p className="metodo-lead">{COPY.metodo.lead}</p>
        </div>

        <div className="metodo-reveal prisma-grid" ref={gridRef}>
          {PRISMA_METODO.map((fase) => (
            <div key={fase.id} className="prisma-item">
              <span className="prisma-item__dot" aria-hidden="true">
                <span className="material-symbols-outlined">{fase.icone}</span>
              </span>
              <h3 className="prisma-item__nome">
                <span className="prisma-item__letra">{fase.letra}</span>
                {fase.palavra.slice(1)}
              </h3>
              <p className="prisma-item__linha">{fase.linha}</p>
            </div>
          ))}
        </div>

        <p className="metodo-reveal metodo-lead" style={{ fontSize: 14, textAlign: 'center', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          {COPY.metodo.legendaDesenho}
        </p>
      </div>
    </Section>
  );
}
