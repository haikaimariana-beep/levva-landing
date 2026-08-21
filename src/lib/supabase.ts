import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// null quando as env vars não estão configuradas (dev local sem .env, ou build antigo) —
// submitLead trata isso como erro de envio em vez de quebrar a página inteira.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
