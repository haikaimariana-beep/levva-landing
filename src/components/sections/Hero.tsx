import { useRef } from 'react';
import { Section } from '../Section';
import { DorField } from '../DorField/DorField';
import { COPY } from '../../data/copy';
import { CLIENTE_LOGOS } from '../../data/logoAssets';
import { useHeroMotion } from '../../lib/motion/useHeroMotion';
import gptw from '../../assets/logos/gptw.png';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleMaskRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useHeroMotion({ section: sectionRef, titleMask: titleMaskRef, content: contentRef });

  return (
    <Section id="hero" className="hero-section" noReveal sectionRef={sectionRef}>
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

        <div className="hero-selos">
          {COPY.hero.selos.map((selo) => (
            <span key={selo} className="hero-selo-pill">
              {selo}
            </span>
          ))}
          <img src={gptw} alt="Great Place to Work" className="hero-selo-gptw" />
        </div>
      </div>
    </Section>
  );
}
