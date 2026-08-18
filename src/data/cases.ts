import ambev from '../assets/logos/ambev.svg';
import ems from '../assets/logos/ems.svg';
import b3 from '../assets/logos/b3.png';
import stoller from '../assets/logos/stoller.jpg';
import craft from '../assets/logos/craft.svg';

export interface CaseProva {
  numero: string;   // vai em --ink, peso 800
  cliente: string;
  segmento: string;
  contexto: string;
  logo: string;
  /** Logo com cor clara demais pro fundo branco do card — precisa de filtro pra ficar legível. */
  logoEscurecer?: boolean;
}

export const CASES: CaseProva[] = [
  {
    numero: 'R$ 3,42 mi/ano',
    cliente: 'Ambev',
    segmento: 'Bebidas',
    contexto: 'de economia · Dados & Decisão',
    logo: ambev,
  },
  {
    numero: '98%',
    cliente: 'Grupo EMS',
    segmento: 'Farmacêutica',
    contexto: 'de precisão documental · +100 pessoas treinadas',
    logo: ems,
  },
  {
    numero: '+120%',
    cliente: 'B3',
    segmento: 'Bolsa de valores',
    contexto: 'de velocidade na definição de requisitos',
    logo: b3,
  },
  {
    numero: '75%',
    cliente: 'Stoller',
    segmento: 'Agro',
    contexto: 'de retenção de usuários · app novo, do zero',
    logo: stoller,
  },
  {
    numero: '3x',
    cliente: 'Craft',
    segmento: 'Logística',
    contexto: 'mais rápido no onboarding · core 100% mapeado',
    logo: craft,
    logoEscurecer: true,
  },
];
