import type { CategoriaDor } from '../data/dores';

export interface LeadPayload {
  dor: string;
  categoria: CategoriaDor;
  nome: string;
  emailCorporativo: string;
  whatsapp: string;
  empresa: string;
  cargo: string;
  contexto: string;
  origem: 'hero' | 'card_dor';
  timestamp: string; // ISO
}

export interface LeadResponse { ok: boolean; id?: string; error?: string; }

// STUB front-only: resolve sem chamar rede.
// TODO: POST para VITE_LEAD_ENDPOINT (webhook/e-mail/CRM — decidir depois).
export async function submitLead(_p: LeadPayload): Promise<LeadResponse> {
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true, id: 'stub-' + Date.now() };
}
