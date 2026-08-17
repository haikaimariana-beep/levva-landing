import type { CategoriaDor } from '../data/dores';

// STUB v1: sempre 'nao_classificado'.
// TODO v2: classificar por palavras-chave (mapa dor→categoria do doc de growth),
// depois evoluir para LLM (Anthropic/AWS/OpenAI) quando o volume justificar.
export function classifyDor(_texto: string): CategoriaDor {
  return 'nao_classificado';
}
