export interface CaseProva {
  numero: string;   // vai em --gold, peso 800
  cliente: string;
  contexto: string;
}

export const CASES: CaseProva[] = [
  { numero: 'R$ 3,42 mi/ano', cliente: 'Ambev',      contexto: 'de economia · Dados & Decisão' },
  { numero: '98%',            cliente: 'Grupo EMS',   contexto: 'de precisão documental · +100 pessoas treinadas' },
  { numero: '+120%',          cliente: 'B3',          contexto: 'de velocidade na definição de requisitos' },
  { numero: '75%',            cliente: 'Stoller',     contexto: 'de retenção de usuários · app novo, do zero' },
  { numero: '3x',             cliente: 'Craft',       contexto: 'mais rápido no onboarding · core 100% mapeado' },
];
