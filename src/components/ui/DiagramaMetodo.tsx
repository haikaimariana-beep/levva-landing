/**
 * DiagramaMetodo — o desenho do método "Contexto Primeiro".
 *
 * Duas variantes no mesmo componente, alternadas por CSS (não por JS, para não
 * depender de hidratação nem de listener de resize):
 *   .metodo-diagrama__h  → horizontal, desktop e tablet (≥ 768px)
 *   .metodo-diagrama__v  → vertical empilhado, mobile (< 768px)
 *
 * Gramática visual, para quem for mexer:
 *   losangos soltos     = estado de entrada fragmentado (Terreno)
 *   losango que fecha   = Contexto — converge numa agulha, o ponto intransponível
 *   agulha + marcador   = o GATE (governança). É o trecho mais estreito do desenho
 *   losango maior       = Construção — contexto pronto multiplica o espaço de solução
 *   forma que abre      = Colheita — custo marginal cai a cada novo caso de uso
 *   faixas que engrossam= as três trilhas que acumulam e nunca terminam
 *   claro → sólido      = IA conduz a exploração, o humano valida toda convergência
 *
 * Os textos internos são decorativos (aria-hidden) — o <desc> descreve a sequência
 * pro leitor de tela, e os rótulos das fases seguem existindo como HTML na seção.
 * Cores vêm de var(--gold), então o desenho acompanha o tema automaticamente.
 */

interface DiagramaMetodoProps {
  className?: string;
  /** Mostra o rótulo "GATE" junto da agulha. Default true. */
  gateLabel?: boolean;
}

const DESC =
  'O método avança em quatro fases. Terreno: o estado de entrada, com dados e processos ' +
  'fragmentados e desconectados. Contexto: uma fase que diverge para mapear dados, processos ' +
  'e gargalos, e converge num ponto único e estreito, o gate de governança, que nada atravessa ' +
  'sem contexto centralizado e regra de acesso. Construção: a fase mais ampla, onde agentes e ' +
  'produtos são construídos sobre o contexto pronto, com exploração exponencial e curadoria ' +
  'humana em cada estreitamento, até uma decisão explícita de escalar, pivotar ou encerrar. ' +
  'Colheita: uma forma que se abre, porque cada novo caso de uso custa menos, terminando num ' +
  'resultado de negócio medido, não horas entregues. Por baixo das quatro fases correm três ' +
  'trilhas que só engrossam e nunca terminam: letramento, memória corporativa e FinOps.';

export function DiagramaMetodo({ className, gateLabel = true }: DiagramaMetodoProps) {
  return (
    <div className={className ? `metodo-diagrama ${className}` : 'metodo-diagrama'}>
      {/* ============================ HORIZONTAL ============================ */}
      <svg
        className="metodo-diagrama__h"
        viewBox="0 0 1200 560"
        role="img"
        aria-label="O método Contexto Primeiro da levva"
        aria-describedby="mtd-h-desc"
      >
        {/* desc (não <title>) de propósito — <title> dispara o tooltip nativo do navegador no hover */}
        <desc id="mtd-h-desc">{DESC}</desc>

        <defs>
          <linearGradient id="mtd-trilha-h" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.18" />
            <stop offset="55%" stopColor="var(--gold)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id="mtd-glow-h" cx="60%" cy="38%" r="65%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1200" height="560" fill="url(#mtd-glow-h)" />

        {/* legenda */}
        <g className="metodo-diagrama__legenda">
          <rect x="900" y="26" width="70" height="9" rx="2" fill="var(--gold)" fillOpacity="0.22" />
          <text x="980" y="34">IA conduz</text>
          <rect x="900" y="48" width="70" height="9" rx="2" fill="var(--gold)" />
          <text x="980" y="56" className="is-strong">Humano valida</text>
          <text x="900" y="74" className="is-faint">a convergência é sempre humana</text>
        </g>

        {/* rótulos de abertura — decorativos */}
        <g aria-hidden="true">
          <text x="20" y="103" className="metodo-diagrama__eyebrow metodo-diagrama__eyebrow--muted">ESTADO DE ENTRADA</text>
          <text x="186" y="103" className="metodo-diagrama__eyebrow">INGESTÃO → GOVERNANÇA</text>
        </g>

        {/* 0 · terreno fragmentado */}
        <g className="metodo-diagrama__terreno">
          <rect x="24" y="144" width="12" height="12" transform="rotate(45 30 150)" />
          <rect x="73" y="127" width="10" height="10" transform="rotate(45 78 132)" />
          <rect x="113" y="151" width="13" height="13" transform="rotate(45 120 158)" />
          <rect x="41" y="191" width="9" height="9" transform="rotate(45 46 196)" />
          <rect x="89" y="189" width="14" height="14" transform="rotate(45 96 196)" />
          <rect x="132" y="218" width="8" height="8" transform="rotate(45 136 222)" />
          <rect x="19" y="237" width="13" height="13" transform="rotate(45 26 244)" />
          <rect x="69" y="253" width="10" height="10" transform="rotate(45 74 258)" />
          <rect x="110" y="276" width="11" height="11" transform="rotate(45 116 282)" />
        </g>
        <text x="20" y="366" className="metodo-diagrama__nota" aria-hidden="true">
          <tspan x="20" dy="0">dados em silos · processos</tspan>
          <tspan x="20" dy="16">espalhados · contexto na</tspan>
          <tspan x="20" dy="16">cabeça de cada um</tspan>
        </text>

        {/* 1 · contexto — diverge e fecha na agulha */}
        <polygon points="160,210 270,120 270,300" fill="var(--gold)" fillOpacity="0.10"
                 stroke="var(--gold)" strokeOpacity="0.35" />
        <polygon points="270,120 380,210 270,300" fill="var(--gold)" fillOpacity="0.16" />
        <polygon points="270,152 380,210 270,268" fill="var(--gold)" fillOpacity="0.30" />
        <polygon points="270,177 380,210 270,243" fill="var(--gold)" fillOpacity="0.52" />
        <polygon points="270,196 380,210 270,224" fill="var(--gold)" fillOpacity="0.95" />

        <text x="192" y="172" className="metodo-diagrama__interno" aria-hidden="true">
          <tspan x="192" dy="0">Mapear dados,</tspan>
          <tspan x="192" dy="17">processos e</tspan>
          <tspan x="192" dy="17">gargalos</tspan>
        </text>

        {/* o gate */}
        <line x1="380" y1="150" x2="380" y2="270" stroke="var(--gold)" strokeOpacity="0.5"
              strokeWidth="1" strokeDasharray="2 5" />
        <circle cx="380" cy="210" r="7" fill="var(--black)" stroke="var(--gold)" strokeWidth="2.5" />
        {gateLabel && (
          <text x="393" y="147" className="metodo-diagrama__gate-label">GATE</text>
        )}

        {/* 2 · construção — o maior losango */}
        <polygon points="410,210 580,75 580,345" fill="var(--gold)" fillOpacity="0.09"
                 stroke="var(--gold)" strokeOpacity="0.30" />
        <polygon points="580,75 720,210 580,345" fill="var(--gold)" fillOpacity="0.16" />
        <polygon points="580,118 720,210 580,302" fill="var(--gold)" fillOpacity="0.30" />
        <polygon points="580,155 720,210 580,265" fill="var(--gold)" fillOpacity="0.52" />
        <polygon points="580,186 720,210 580,234" fill="var(--gold)" fillOpacity="0.95" />
        <circle cx="720" cy="210" r="6" fill="var(--black)" stroke="var(--gold)" strokeWidth="2.5" />

        <text x="440" y="222" className="metodo-diagrama__interno" aria-hidden="true">
          <tspan x="440" dy="0">Agentes, automações</tspan>
          <tspan x="440" dy="18">e produtos sobre</tspan>
          <tspan x="440" dy="18">contexto pronto</tspan>
        </text>
        <text x="720" y="102" textAnchor="middle" aria-hidden="true">
          <tspan x="720" dy="0" className="metodo-diagrama__eyebrow">DECISÃO EXPLÍCITA</tspan>
          <tspan x="720" dy="16" className="metodo-diagrama__decisao">escalar · pivotar · encerrar</tspan>
        </text>
        <line x1="720" y1="124" x2="720" y2="203" stroke="var(--gold)" strokeOpacity="0.4"
              strokeWidth="1" strokeDasharray="2 5" aria-hidden="true" />
        <text x="420" y="378" className="metodo-diagrama__nota" aria-hidden="true">
          <tspan x="420" dy="0">exploração exponencial — curadoria humana</tspan>
          <tspan x="420" dy="16">em cada estreitamento</tspan>
        </text>

        {/* 3 · colheita — abre em vez de fechar */}
        <polygon points="745,210 1010,95 1010,325" fill="var(--gold)" fillOpacity="0.13" />
        <polygon points="745,210 1010,135 1010,285" fill="var(--gold)" fillOpacity="0.28" />
        <polygon points="745,210 1010,172 1010,248" fill="var(--gold)" fillOpacity="0.52" />
        <polygon points="745,210 1010,202 1010,218" fill="var(--gold)" fillOpacity="0.95" />
        <circle cx="1016" cy="210" r="7" fill="var(--black)" stroke="var(--gold)" strokeWidth="2.5" />
        <text x="1030" y="187" className="metodo-diagrama__resultado" aria-hidden="true">
          <tspan x="1030" dy="0">Resultado de</tspan>
          <tspan x="1030" dy="17">negócio medido</tspan>
        </text>
        <text x="760" y="378" className="metodo-diagrama__nota" aria-hidden="true">
          <tspan x="760" dy="0">cada novo caso de uso custa menos —</tspan>
          <tspan x="760" dy="16">o contexto já existe</tspan>
        </text>

        {/* trilhas que acumulam */}
        <text x="16" y="440" className="metodo-diagrama__trilhas-label">O QUE ACUMULA</text>
        <polygon points="16,472 1010,458 1010,474 16,474" fill="url(#mtd-trilha-h)" />
        <polygon points="160,496 1010,482 1010,498 160,498" fill="url(#mtd-trilha-h)" />
        <polygon points="410,520 1010,506 1010,522 410,522" fill="url(#mtd-trilha-h)" />
        <g fill="var(--gold)">
          <circle cx="16" cy="473" r="2.5" />
          <circle cx="160" cy="497" r="2.5" />
          <circle cx="410" cy="521" r="2.5" />
        </g>
        <g className="metodo-diagrama__trilhas-nome">
          <text x="1026" y="470">LETRAMENTO</text>
          <text x="1026" y="494">MEMÓRIA</text>
          <text x="1026" y="518">FINOPS</text>
        </g>
      </svg>

      {/* ============================= VERTICAL ============================= */}
      <svg
        className="metodo-diagrama__v"
        viewBox="0 0 360 760"
        role="img"
        aria-label="O método Contexto Primeiro da levva"
        aria-describedby="mtd-v-desc"
      >
        <desc id="mtd-v-desc">{DESC}</desc>

        <defs>
          <linearGradient id="mtd-trilha-v" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.18" />
            <stop offset="55%" stopColor="var(--gold)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* 0 · terreno */}
        <text x="12" y="16" className="metodo-diagrama__eyebrow metodo-diagrama__eyebrow--muted" aria-hidden="true">ESTADO DE ENTRADA</text>
        <g className="metodo-diagrama__terreno">
          <rect x="44" y="34" width="12" height="12" transform="rotate(45 50 40)" />
          <rect x="115" y="28" width="10" height="10" transform="rotate(45 120 33)" />
          <rect x="188" y="40" width="13" height="13" transform="rotate(45 194 46)" />
          <rect x="264" y="30" width="9" height="9" transform="rotate(45 268 34)" />
          <rect x="308" y="48" width="12" height="12" transform="rotate(45 314 54)" />
          <rect x="76" y="70" width="14" height="14" transform="rotate(45 83 77)" />
          <rect x="152" y="76" width="8" height="8" transform="rotate(45 156 80)" />
          <rect x="228" y="68" width="11" height="11" transform="rotate(45 233 73)" />
          <rect x="288" y="80" width="9" height="9" transform="rotate(45 292 84)" />
        </g>
        <text x="12" y="112" className="metodo-diagrama__nota" aria-hidden="true">
          <tspan x="12" dy="0">dados em silos · processo na cabeça de quem faz</tspan>
        </text>

        {/* 1 · contexto */}
        <text x="12" y="152" className="metodo-diagrama__eyebrow" aria-hidden="true">INGESTÃO → GOVERNANÇA</text>
        <polygon points="180,180 80,240 280,240" fill="var(--gold)" fillOpacity="0.10"
                 stroke="var(--gold)" strokeOpacity="0.35" />
        <polygon points="80,240 180,300 280,240" fill="var(--gold)" fillOpacity="0.16" />
        <polygon points="110,240 180,300 250,240" fill="var(--gold)" fillOpacity="0.30" />
        <polygon points="135,240 180,300 225,240" fill="var(--gold)" fillOpacity="0.52" />
        <polygon points="156,240 180,300 204,240" fill="var(--gold)" fillOpacity="0.95" />
        <text x="180" y="215" textAnchor="middle" className="metodo-diagrama__interno" aria-hidden="true">
          <tspan x="180" dy="0">Mapear dados, processos</tspan>
          <tspan x="180" dy="16">e gargalos</tspan>
        </text>

        {/* o gate */}
        <line x1="96" y1="300" x2="264" y2="300" stroke="var(--gold)" strokeOpacity="0.5"
              strokeWidth="1" strokeDasharray="2 5" />
        <circle cx="180" cy="300" r="7" fill="var(--black)" stroke="var(--gold)" strokeWidth="2.5" />
        {gateLabel && (
          <text x="274" y="304" className="metodo-diagrama__gate-label">GATE</text>
        )}

        {/* 2 · construção */}
        <polygon points="180,328 50,410 310,410" fill="var(--gold)" fillOpacity="0.09"
                 stroke="var(--gold)" strokeOpacity="0.30" />
        <polygon points="50,410 180,492 310,410" fill="var(--gold)" fillOpacity="0.16" />
        <polygon points="88,410 180,492 272,410" fill="var(--gold)" fillOpacity="0.30" />
        <polygon points="120,410 180,492 240,410" fill="var(--gold)" fillOpacity="0.52" />
        <polygon points="152,410 180,492 208,410" fill="var(--gold)" fillOpacity="0.95" />
        <circle cx="180" cy="492" r="6" fill="var(--black)" stroke="var(--gold)" strokeWidth="2.5" />
        <text x="180" y="360" textAnchor="middle" className="metodo-diagrama__interno" aria-hidden="true">
          <tspan x="180" dy="0">Agentes e produtos sobre</tspan>
          <tspan x="180" dy="16">contexto pronto</tspan>
        </text>
        <text x="180" y="524" textAnchor="middle" className="metodo-diagrama__decisao" aria-hidden="true">escalar · pivotar · encerrar</text>

        {/* 3 · colheita */}
        <polygon points="180,548 60,652 300,652" fill="var(--gold)" fillOpacity="0.13" />
        <polygon points="180,548 95,652 265,652" fill="var(--gold)" fillOpacity="0.28" />
        <polygon points="180,548 130,652 230,652" fill="var(--gold)" fillOpacity="0.52" />
        <polygon points="180,548 172,652 188,652" fill="var(--gold)" fillOpacity="0.95" />
        <circle cx="180" cy="660" r="7" fill="var(--black)" stroke="var(--gold)" strokeWidth="2.5" />
        <text x="180" y="694" textAnchor="middle" className="metodo-diagrama__resultado" aria-hidden="true">Resultado de negócio medido</text>

        {/* trilhas */}
        <text x="16" y="722" className="metodo-diagrama__trilhas-label">O QUE ACUMULA</text>
        <g className="metodo-diagrama__trilhas-nome">
          <text x="16" y="740">LETRAMENTO</text>
          <text x="16" y="753">MEMÓRIA</text>
          <text x="16" y="766">FINOPS</text>
        </g>
        <polygon points="120,737 344,730 344,741 120,741" fill="url(#mtd-trilha-v)" />
        <polygon points="120,750 344,743 344,754 120,754" fill="url(#mtd-trilha-v)" />
        <polygon points="120,763 344,756 344,767 120,767" fill="url(#mtd-trilha-v)" />
      </svg>
    </div>
  );
}
