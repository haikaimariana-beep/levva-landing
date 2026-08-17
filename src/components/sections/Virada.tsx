import { useRef } from 'react';
import { Section } from '../Section';
import { COPY } from '../../data/copy';
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
            <span className="thin">A diferença entre os 5% e o resto não é a ferramenta. </span>
            <span className="bold">É o método.</span>
          </h2>
        </div>
        <ViradaIllustration />
      </Section>

      <Section tone="black">
        <div className="virada-manifesto">
          <h2>
            <span className="thin">Na levva, IA não é feature. </span>
            <span className="bold">É como o trabalho é feito.</span>
          </h2>
          <p>{COPY.virada.paragrafo}</p>
        </div>
      </Section>
    </>
  );
}
