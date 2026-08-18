export type DegrauId = 'design_session' | 'assessment' | 'poc';

export interface Degrau {
  id: DegrauId;
  nome: string;
  badge: string;
  descricao: string;
  destaque: boolean; // o de MENOR compromisso é o mais destacado
  icone: string; // nome do ícone no Material Symbols Outlined
}

export const DEGRAUS: Degrau[] = [
  {
    id: 'design_session',
    nome: 'AI Driven Design Session',
    badge: 'comece por aqui',
    descricao: 'Um workshop pra mapear onde a IA gera valor no seu contexto. Risco quase zero, clareza imediata.',
    destaque: true,
    icone: 'rocket_launch',
  },
  {
    id: 'assessment',
    nome: 'Assessment de Maturidade',
    badge: 'recomendado',
    descricao: 'A radiografia técnica do seu momento: o que está pronto, o que trava, por onde ir.',
    destaque: false,
    icone: 'query_stats',
  },
  {
    id: 'poc',
    nome: 'POC Powerhouse',
    badge: 'quando quiser provar valor',
    descricao: 'Um agente ou squad piloto rodando no seu problema real, com método e governança.',
    destaque: false,
    icone: 'science',
  },
];

// CTA dominante único (seção 8) — rola de volta ao #hero
export const CTA_FINAL = 'Conta sua dor e escolha por onde começar';
