import { useRef } from 'react';
import { Section } from '../Section';
import { useZoomReveal } from '../../lib/motion/useZoomReveal';
import { ViradaIllustration } from '../ui/ViradaIllustration';

export function Virada() {
  const zoomRef = useRef<HTMLDivElement>(null);
  useZoomReveal(zoomRef);

  return (
    <>
      <Section id="virada" tone="gold" className="virada-hero" noReveal>
        <div ref={zoomRef} style={{ padding: '32px 0' }}>
          <h2 className="virada-headline">
            <span className="thin">A diferença entre os 5% e os outros 95% não é a ferramenta. </span>
            <span className="bold">É o contexto que a ferramenta recebe.</span>
          </h2>
        </div>
        <ViradaIllustration />
      </Section>

      <Section tone="black">
        <div className="virada-manifesto">
          <h2>
            <span className="thin">A IA não tem um problema de inteligência. </span>
            <span className="bold">Tem um problema de contexto.</span>
          </h2>
        </div>
      </Section>
    </>
  );
}
