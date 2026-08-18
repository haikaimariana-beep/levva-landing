import { useRef } from 'react';
import { Section } from '../Section';
import { DiagramaMetodo } from '../ui/DiagramaMetodo';
import { COPY } from '../../data/copy';
import { FASES_METODO } from '../../data/metodo';
import { useReveal } from '../../lib/motion/useReveal';
import { useStagger } from '../../lib/motion/useStagger';

export function Metodo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fasesRef = useRef<HTMLDivElement>(null);

  // Ordem do reveal segue a leitura: headline → diagrama → fases → gate → recusa.
  // A citação do Ali Ghodsi já abre a Virada, logo acima — não repete aqui.
  useReveal(wrapRef, { stagger: '.metodo-reveal', y: 24 });
  useStagger(fasesRef, '.metodo-fase');

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

        <div className="metodo-reveal">
          <DiagramaMetodo />
          <p className="metodo-lead" style={{ fontSize: 14 }}>
            {COPY.metodo.legendaDesenho}
          </p>
        </div>

        <div className="metodo-reveal metodo-fases" ref={fasesRef}>
          {FASES_METODO.map((fase) => (
            <div key={fase.id} className="metodo-fase">
              <h3 className="metodo-fase__nome">{fase.nome}</h3>
              <p className="metodo-fase__linha">{fase.linha}</p>
            </div>
          ))}
        </div>

        <div className="metodo-reveal metodo-gate-recusa">
          <div className="metodo-gate">
            <h3>{COPY.metodo.gateTitulo}</h3>
            <p>{COPY.metodo.gateTexto}</p>
          </div>

          <div className="metodo-recusa">
            <h3>{COPY.metodo.recusaTitulo}</h3>
            <p>{COPY.metodo.recusaTexto}</p>
            {/* "Ver o método inteiro" fica de fora até existir uma URL real (ver PROMPT_CLAUDE_CODE.md, seção 3) */}
          </div>
        </div>
      </div>
    </Section>
  );
}
