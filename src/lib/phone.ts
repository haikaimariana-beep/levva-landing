/** Aceita com ou sem DDI/DDD formatado — valida só a quantidade de dígitos (10 ou 11, com DDD). */
export function isWhatsappValido(valor: string): boolean {
  const digitos = valor.replace(/\D/g, '');
  const semDDI = digitos.startsWith('55') && digitos.length > 11 ? digitos.slice(2) : digitos;
  return semDDI.length === 10 || semDDI.length === 11;
}
