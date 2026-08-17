import { createContext, useCallback, useContext, useRef, useState } from 'react';
import type { ReactNode, RefObject } from 'react';
import type { TextAreaRef } from 'antd/es/input/TextArea';
import { smoothScrollTo } from '../lib/motion/scrollTo';

type Origem = 'hero' | 'card_dor';

interface DorContextValue {
  dorText: string;
  setDorText: (texto: string) => void;
  origem: Origem;
  heroFieldRef: RefObject<TextAreaRef | null>;
  /** Pré-preenche o campo do hero (clique num CardDor), rola até lá e foca. */
  goToHeroWith: (texto: string) => void;
  /** Só rola até o hero e foca — não mexe no texto (CTA da escada). */
  scrollToHero: () => void;
}

const DorContext = createContext<DorContextValue | null>(null);

function focusAndScroll(ref: RefObject<TextAreaRef | null>) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  smoothScrollTo('#hero');
  window.setTimeout(() => ref.current?.focus(), reduce ? 0 : 700);
}

export function DorProvider({ children }: { children: ReactNode }) {
  const [dorText, setDorTextState] = useState('');
  const [origem, setOrigem] = useState<Origem>('hero');
  const heroFieldRef = useRef<TextAreaRef | null>(null);

  const setDorText = useCallback((texto: string) => setDorTextState(texto), []);

  const goToHeroWith = useCallback((texto: string) => {
    setDorTextState(texto);
    setOrigem('card_dor');
    focusAndScroll(heroFieldRef);
  }, []);

  const scrollToHero = useCallback(() => {
    focusAndScroll(heroFieldRef);
  }, []);

  return (
    <DorContext.Provider value={{ dorText, setDorText, origem, heroFieldRef, goToHeroWith, scrollToHero }}>
      {children}
    </DorContext.Provider>
  );
}

export function useDor(): DorContextValue {
  const ctx = useContext(DorContext);
  if (!ctx) throw new Error('useDor precisa estar dentro de um DorProvider');
  return ctx;
}
