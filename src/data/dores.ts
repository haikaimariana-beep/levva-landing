export type CategoriaDor =
  | 'trabalho_manual' | 'legado' | 'piloto_sem_resultado'
  | 'risco_compliance' | 'dados' | 'falta_time' | 'produto_novo'
  | 'cultura_adocao' | 'escala' | 'nao_classificado';

export interface Dor {
  id: string;
  textoDor: string;      // voz da dor (aspas), vai no card
  areaValor: string;     // seta → área de valor da levva
  categoria: CategoriaDor;
  preencheHero: string;  // texto injetado no campo do hero ao clicar
  destaque?: boolean;    // dor dominante do público (JTBD "atravessar o vão") — ganha peso visual no grid
}

export const DORES: Dor[] = [
  {
    id: 'trabalho-manual',
    textoDor: 'Meu time se afoga em tarefa repetitiva.',
    areaValor: 'Automação + IA aplicada · backoffice inteligente',
    categoria: 'trabalho_manual',
    preencheHero: 'Meu time se afoga em tarefa manual e repetitiva.',
  },
  {
    id: 'legado',
    textoDor: 'Meus sistemas legados travam qualquer evolução.',
    areaValor: 'Modernização (Brownfield)',
    categoria: 'legado',
    preencheHero: 'Meus sistemas legados travam qualquer evolução.',
  },
  {
    id: 'piloto-sem-resultado',
    textoDor: 'Testei IA e não virou resultado.',
    areaValor: 'Estratégia de IA + execução governada',
    categoria: 'piloto_sem_resultado',
    preencheHero: 'Testei IA em uns pilotos, mas nada virou resultado de verdade.',
    destaque: true,
  },
  {
    id: 'risco-compliance',
    textoDor: 'Tenho medo do risco e do compliance.',
    areaValor: 'Governança de IA · LGPD, rastreabilidade, validação humana',
    categoria: 'risco_compliance',
    preencheHero: 'Tenho receio de colocar IA rodando com risco de compliance/LGPD.',
  },
  {
    id: 'dados',
    textoDor: 'Meus dados não viram decisão.',
    areaValor: 'Dados & Decisão',
    categoria: 'dados',
    preencheHero: 'Meus dados são uma bagunça e não viram decisão.',
  },
  {
    id: 'falta-time',
    textoDor: 'Preciso de gente que saiba fazer, rápido.',
    areaValor: 'Squads e especialistas dedicados',
    categoria: 'falta_time',
    preencheHero: 'Preciso de time especializado e não consigo contratar/formar rápido.',
  },
  {
    id: 'produto-novo',
    textoDor: 'Quero lançar um produto novo e não sei por onde começar.',
    areaValor: 'Produto novo (Greenfield) · MVP com IA desde o dia 1',
    categoria: 'produto_novo',
    preencheHero: 'Quero lançar um produto novo, mas não sei nem por onde começar.',
  },
  {
    id: 'cultura-adocao',
    textoDor: 'Minha equipe resiste a usar IA no dia a dia.',
    areaValor: 'Adoção & cultura de IA · treinamento e change management',
    categoria: 'cultura_adocao',
    preencheHero: 'Minha equipe resiste a usar IA no dia a dia e a adoção não engrena.',
  },
  {
    id: 'escala',
    textoDor: 'Meu piloto funcionou, mas não sei escalar pra empresa toda.',
    areaValor: 'Scale-up de IA · da squad piloto pro rollout corporativo',
    categoria: 'escala',
    preencheHero: 'Meu piloto de IA funcionou, mas não sei como escalar pra empresa toda.',
  },
];
