import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { Section } from '../Section';
import { CardDor } from '../ui/CardDor';
import { DORES } from '../../data/dores';
import { COPY } from '../../data/copy';
import { useReveal } from '../../lib/motion/useReveal';
import { useParallax } from '../../lib/motion/useParallax';

// Posição de cada card-nuvem — não é grid, é um monte de cartas: quase empilhadas,
// se sobrepondo, cada uma com sua própria rotação, como se tivessem sido derramadas
// ali. Chave = Dor.id (ver data/dores.ts). Z crescente = ordem da pilha.
const NUVEM: Record<string, { top: string; left: string; rot: number; width: number; z: number }> = {
  'legado': { top: '44%', left: '40%', rot: -9, width: 210, z: 2 },
  'trabalho-manual': { top: '46%', left: '59%', rot: 7, width: 210, z: 3 },
  'risco-compliance': { top: '53%', left: '37%', rot: 6, width: 210, z: 4 },
  'dados': { top: '50%', left: '63%', rot: -6, width: 200, z: 5 },
  'falta-time': { top: '60%', left: '43%', rot: -8, width: 200, z: 6 },
  'produto-novo': { top: '57%', left: '61%', rot: 8, width: 210, z: 7 },
  'cultura-adocao': { top: '64%', left: '51%', rot: -4, width: 210, z: 8 },
  'escala': { top: '45%', left: '50%', rot: 4, width: 200, z: 9 },
  'piloto-sem-resultado': { top: '55%', left: '50%', rot: 0, width: 250, z: 10 },
};

export function GridDores() {
  const cloudRef = useRef<HTMLDivElement>(null);
  const cardBackRef = useRef<HTMLDivElement>(null);
  const cardFrontRef = useRef<HTMLDivElement>(null);
  // y:0 de propósito — o card já é posicionado por transform (translate + rotate, ver
  // NUVEM); animar y junto entraria em conflito com essa transform. Só opacidade em cascata.
  useReveal(cloudRef, { stagger: '.card-dor', y: 0 });
  useParallax(cardBackRef, 22);
  useParallax(cardFrontRef, -14);

  return (
    <Section id="dores" tone="white">
      <span className="section-eyebrow">{COPY.dores.eyebrow}</span>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            marginBottom: 16,
          }}
        >
          {COPY.dores.titulo}
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-muted)' }}>{COPY.dores.sub}</p>
      </div>

      <div className="dores-cloud" ref={cloudRef}>
        <div className="dores-mecanica" aria-hidden="true">
          <div className="dores-ring dores-ring--glow" />
          <div className="dores-ring dores-ring--solid" />
          <div className="dores-ring dores-ring--dashed" />

          <div className="dores-example-card dores-example-card--back" ref={cardBackRef}>
            <span className="dores-example-card__tag">Resposta levva</span>
            <p className="dores-example-card__line">
              Você falou sobre <strong>risco e compliance</strong>.
            </p>
          </div>

          <div className="dores-example-card dores-example-card--front" ref={cardFrontRef}>
            <span className="dores-example-card__tag">Resposta levva</span>
            <p className="dores-example-card__line">
              Você falou sobre <strong>trabalho manual e repetitivo</strong>.
            </p>
            <div className="dores-example-card__proof">
              <span className="dores-example-card__proof-number">98%</span>
              <span className="dores-example-card__proof-label">precisão documental — Grupo EMS</span>
            </div>
          </div>
        </div>

        {DORES.map((dor) => {
          const pos = NUVEM[dor.id];
          const style: CSSProperties & Record<`--${string}`, string | number> = {
            '--cloud-top': pos.top,
            '--cloud-left': pos.left,
            '--cloud-rot': `${pos.rot}deg`,
            '--cloud-width': `${pos.width}px`,
            '--cloud-z': pos.z,
          };
          return <CardDor key={dor.id} dor={dor} style={style} />;
        })}
      </div>
    </Section>
  );
}
