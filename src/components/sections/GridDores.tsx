import { useRef } from 'react';
import { Col, Row } from 'antd';
import { Section } from '../Section';
import { CardDor } from '../ui/CardDor';
import { DORES } from '../../data/dores';
import { COPY } from '../../data/copy';
import { useStagger } from '../../lib/motion/useStagger';
import { useParallax } from '../../lib/motion/useParallax';

export function GridDores() {
  const rowRef = useRef<HTMLDivElement>(null);
  const cardBackRef = useRef<HTMLDivElement>(null);
  const cardFrontRef = useRef<HTMLDivElement>(null);
  useStagger(rowRef, '.ant-col');
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

      <p className="dores-grid-heading">Ou toca direto na sua</p>

      <Row ref={rowRef} gutter={[24, 24]}>
        {DORES.map((dor) => (
          <Col key={dor.id} xs={24} md={12} lg={8}>
            <CardDor dor={dor} />
          </Col>
        ))}
      </Row>
    </Section>
  );
}
