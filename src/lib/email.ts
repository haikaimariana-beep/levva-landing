const PUBLICOS = [
  'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'yahoo.com.br',
  'icloud.com', 'live.com', 'bol.com.br', 'uol.com.br', 'terra.com.br',
];

const RE = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;

export function isEmailCorporativo(email: string): boolean {
  const m = RE.exec(email.trim().toLowerCase());
  if (!m) return false;
  return !PUBLICOS.includes(m[1]);
}
