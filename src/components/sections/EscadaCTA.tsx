import { useRef } from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Section } from '../Section';
import { DegrauOferta } from '../ui/DegrauOferta';
import { CTA_FINAL, DEGRAUS } from '../../data/degraus';
import { COPY } from '../../data/copy';
import { useDor } from '../../context/DorContext';
import { track } from '../../lib/track';
import { useStagger } from '../../lib/motion/useStagger';

export function EscadaCTA() {
  const { scrollToHero } = useDor();
  const timelineRef = useRef<HTMLDivElement>(null);
  useStagger(timelineRef, '.escada-step');

  function handleCtaFinal() {
    track('cta_proximo_passo_click', { degrau: 'cta_final' });
    scrollToHero();
  }

  return (
    <Section id="comecar" tone="black">
      <span className="section-eyebrow">{COPY.escada.eyebrow}</span>
      <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 48px' }}>
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            marginBottom: 16,
          }}
        >
          {COPY.escada.titulo}
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--on-dark-muted)' }}>{COPY.escada.sub}</p>
      </div>

      <div className="escada-timeline" ref={timelineRef}>
        {DEGRAUS.map((d) => (
          <DegrauOferta key={d.id} degrau={d} onCtaClick={scrollToHero} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 56 }}>
        <Button
          size="large"
          icon={<ArrowRightOutlined />}
          iconPlacement="end"
          onClick={handleCtaFinal}
          data-track="degrau"
          data-degrau="cta_final"
          className="escada-cta-final"
          style={{ height: 56, fontSize: 16, paddingInline: 32 }}
        >
          {CTA_FINAL}
        </Button>
      </div>
    </Section>
  );
}
