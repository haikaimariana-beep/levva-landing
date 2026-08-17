import { useRef } from 'react';
import type { ReactNode, RefObject } from 'react';
import { useReveal } from '../lib/motion/useReveal';

export type SectionTone = 'gold' | 'black' | 'white';

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
  /** Seções com entrada própria (ex.: Hero com mask+stagger) dispensam o fade genérico. */
  noReveal?: boolean;
  /** Expõe o <section> real para motion custom da seção (ex.: parallax do Hero). */
  sectionRef?: RefObject<HTMLElement | null>;
}

const TONE_BG: Record<SectionTone, string> = {
  gold: 'var(--gold)',
  black: 'var(--black)',
  white: 'var(--white)',
};

const TONE_FG: Record<SectionTone, string> = {
  gold: 'var(--ink)',
  black: 'var(--white)',
  white: 'var(--ink)',
};

export function Section({ id, tone = 'gold', className, children, noReveal, sectionRef }: SectionProps) {
  const ownRef = useRef<HTMLElement>(null);
  const ref = sectionRef ?? ownRef;
  useReveal(ref, { disabled: noReveal });

  return (
    <section
      id={id}
      ref={ref}
      className={`section--${tone}${className ? ` ${className}` : ''}`}
      style={{
        padding: 'var(--section-padding-y) 0',
        background: TONE_BG[tone],
        color: TONE_FG[tone],
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 var(--container-margin)',
        }}
      >
        {children}
      </div>
    </section>
  );
}
