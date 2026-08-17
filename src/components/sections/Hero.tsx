import { useRef } from 'react';
import { Section } from '../Section';
import { DorField } from '../DorField/DorField';
import { COPY } from '../../data/copy';
import { CLIENTE_LOGOS } from '../../data/logoAssets';
import { useHeroMotion } from '../../lib/motion/useHeroMotion';
import heroArcs from '../../assets/figma/hero-arcs.svg';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleMaskRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const arcsRef = useRef<HTMLImageElement>(null);

  useHeroMotion({ section: sectionRef, titleMask: titleMaskRef, content: contentRef, arcs: arcsRef });

  return (
    <Section id="hero" className="hero-section" noReveal sectionRef={sectionRef}>
      <img src={heroArcs} alt="" className="hero-arcs" ref={arcsRef} aria-hidden="true" />

      <div className="hero-inner" ref={contentRef}>
        <div className="hero-heading">
          <div className="hero-title-mask">
            <h1 className="hero-title" ref={titleMaskRef}>
              {COPY.hero.h1}
            </h1>
          </div>
          <p className="hero-sub">{COPY.hero.sub}</p>
        </div>

        <div className="hero-field-outer">
          <DorField />
        </div>

        <div className="hero-logos" aria-hidden="true">
          {CLIENTE_LOGOS.map((logo) => (
            <span key={logo.nome} className="hero-logo-pill">
              <img src={logo.src} alt={logo.nome} />
            </span>
          ))}
        </div>

        <p className="hero-microprova">
          {COPY.hero.microProva}
          <br />
          <strong>{COPY.hero.selos}</strong>
        </p>
      </div>
    </Section>
  );
}
