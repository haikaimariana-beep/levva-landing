import { COPY } from '../data/copy';

/** Link "click to chat" do WhatsApp com o número e a mensagem padrão da levva pré-preenchidos. */
export function whatsappLink(): string {
  const texto = encodeURIComponent(COPY.whatsapp.mensagem);
  return `https://wa.me/${COPY.whatsapp.numero}?text=${texto}`;
}
