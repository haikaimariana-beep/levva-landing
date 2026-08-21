import type { CategoriaDor } from '../data/dores';
import { supabase } from './supabase';

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

export async function submitLead(p: LeadPayload): Promise<LeadResponse> {
  if (!supabase) {
    // Sem VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY configuradas (ver .env.example) — não tem pra onde mandar.
    console.error('Supabase não configurado: defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env');
    return { ok: false, error: 'supabase_not_configured' };
  }

  // Sem .select() de propósito: a policy de RLS libera só INSERT, não leitura —
  // pedir a linha de volta (o padrão do supabase-js) esbarraria nessa mesma RLS.
  const { error } = await supabase.from('leads').insert({
    dor: p.dor,
    categoria: p.categoria,
    nome: p.nome,
    email_corporativo: p.emailCorporativo,
    whatsapp: p.whatsapp,
    empresa: p.empresa,
    cargo: p.cargo,
    contexto: p.contexto,
    origem: p.origem,
    criado_em: p.timestamp,
  });

  if (error) {
    console.error('Falha ao gravar lead no Supabase:', error.message);
    return { ok: false, error: error.message };
  }

  return { ok: true };
}
