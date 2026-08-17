import { useRef } from 'react';
import { Section } from '../Section';
import { COPY } from '../../data/copy';
import { PARCEIRO_LOGOS } from '../../data/logoAssets';
import { useStagger } from '../../lib/motion/useStagger';

const NUMEROS = ['①', '②', '③'];

export function ComoTrabalha() {
  const listRef = useRef<HTMLDivElement>(null);
  useStagger(listRef, '.como-item');

  return (
    <Section id="como" tone="black">
      <span className="section-eyebrow">{COPY.como.eyebrow}</span>
      <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            marginBottom: 16,
          }}
        >
          {COPY.como.titulo}
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--on-dark-muted)' }}>{COPY.como.sub}</p>
      </div>

      <div className="como-lista" ref={listRef}>
        {COPY.como.blocos.map((bloco, i) => (
          <div key={bloco.titulo} className="como-item">
            <span className="como-item__numero" aria-hidden="true">
              {NUMEROS[i]}
            </span>
            <div>
              <h3 className="como-item__titulo">{bloco.titulo.replace(/\.$/, '')}</h3>
              <p className="como-item__texto">{bloco.texto}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="muro-pills">
        {PARCEIRO_LOGOS.map((logo) => (
          <span key={logo.nome} className="muro-pills__item">
            <img src={logo.src} alt={logo.nome} />
          </span>
        ))}
      </div>
    </Section>
  );
}
