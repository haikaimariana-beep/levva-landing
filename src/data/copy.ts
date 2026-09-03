export const COPY = {
  marca: { logo: 'levva', assinatura: 'o poder do simples' },

  whatsapp: {
    numero: '5519996518555',
    mensagem: 'Olá! Vim pela landing page da levva e quero saber mais sobre o método Contexto Primeiro.',
  },

  hero: {
    h1: 'Qual é a sua dor?',
    sub: 'Escreve com suas palavras. A gente lê, entende o seu caso, devolve um caminho.',
    cta: 'Quero minha solução',
    selos: ['+30 clientes', 'NPS 72'],
  },

  espelho: {
    eyebrow: 'O espelho do mercado',
    titulo: 'O Espelho do mercado',
    numeroGrande: '5%',
    textoGrande: 'transformam IA generativa em diferencial competitivo. O resto fica no piloto.',
  },

  metodo: {
    eyebrow: 'O método levva',
    titulo: 'Método PRISMA',
    lead: 'Uma abordagem levva para compreender contextos, organizar decisões e aplicar tecnologia em dores reais de negócio. Habilitamos agentes de IA no ciclo de vida do produto, com estratégia, engenharia, governança e validação humana.',
    legendaDesenho: 'Compreender. Organizar. Transformar.',
  },

  dores: {
    eyebrow: 'Onde a levva resolve',
    titulo: 'Reconhece algum problema desses no seu dia a dia?',
    sub: 'Toca nela. A resposta já começa aqui.',
  },

  prova: {
    eyebrow: 'Prova viva',
    titulo: 'Do lado dos 5%. Com número, não com promessa.',
    casesTitulo: 'Marcas que confiam',
    fecho: 'Nenhum número aqui é estimativa. É o que já aconteceu — e é o que você vai cobrar da gente.',
  },

  como: {
    eyebrow: 'Como a levva trabalha',
    titulo: 'IA no comando do resultado. Nunca o contrário.',
    sub: 'O que separa quem capturou valor de quem virou manchete não é tecnologia. É método.',
    blocos: [
      { titulo: 'Método próprio (PRISMA).', texto: 'Problema, realidade e intenção definem o que construir; solução, métrica e aprendizado garantem que funcionou. Sempre com um humano validando cada etapa.' },
      { titulo: 'Modelos flexíveis.', texto: 'Escopo fechado, alocação especializada ou squad dedicado. Quem se encaixa no seu momento é a levva.' },
      { titulo: 'Ecossistema de parceiros.', texto: 'AWS, Anthropic, Microsoft, Google Cloud, Databricks, Snowflake, OpenAI. A gente só recomenda o que usa todos os dias.' },
    ],
  },

  escada: {
    eyebrow: 'Comece por aqui',
    titulo: 'Escolha por onde começar.',
    sub: 'O primeiro passo quase não tem risco. Comece pelo degrau mais leve e avance no seu ritmo.',
  },

  rodape: {
    contato: 'levva.io · LinkedIn',
    lgpd: 'Seus dados servem só para te dar um caminho, nunca virar spam. A gente trata informação com o mesmo rigor que aplica em IA: rastreável, com responsável, dentro da LGPD.',
  },

  mecanica: {
    submitting: 'Recebendo sua dor…',
    drawerTitulo: 'Só mais um passo',
    qualifTitulo: 'Quase lá. Me conta um pouco mais pra eu já chegar com um caminho certeiro.',
    contextoLabel: 'Sobre o seu caso',
    contextoPlaceholder: 'Time, sistemas que já usa, o que já tentou... quanto mais eu souber, mais certeiro chega o caminho.',
    whatsappLabel: 'WhatsApp/Telefone',
    whatsappPlaceholder: '(11) 91234-5678',
    erroWhatsapp: 'Confere o número — com DDD, só falta um dígito ou sobrou um.',
    qualifCta: 'Receber meu caminho',
    emailHint: 'Corporativo porque quem responde é gente que entende o seu caso, não um robô de lista.',
    sucessoTitulo: 'Recebemos sua dor.',
    sucessoCorpo: 'Um especialista da levva volta com um caminho pro seu caso específico. Fica de olho no e-mail corporativo que você deixou.',
    sla: 'Normalmente a gente responde em até 1 dia útil.', // usar só se SHOW_SLA
    erroEmail: 'Não conseguimos validar esse e-mail. Confere se é o corporativo e tenta de novo.',
    erroEnvio: 'A conexão falhou na hora de enviar — sua dor não se perdeu. Toca de novo em "Receber meu caminho".',
  },
} as const;

// SLA depende de confirmação do comercial (seção 18 da spec) — desligado por padrão.
export const SHOW_SLA = false;
