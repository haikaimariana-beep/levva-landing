import type { Degrau } from '../../data/degraus';
import { track } from '../../lib/track';

export function DegrauOferta({ degrau, onCtaClick }: { degrau: Degrau; onCtaClick: () => void }) {
  function handleClick() {
    track('cta_proximo_passo_click', { degrau: degrau.id });
    onCtaClick();
  }

  return (
    <div
      className={`escada-step${degrau.destaque ? ' escada-step--destaque' : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      data-track="degrau"
      data-degrau={degrau.id}
    >
      <span className="escada-step__dot" aria-hidden="true" />
      <span className="escada-step__badge">{degrau.badge}</span>
      <h3 className="escada-step__nome">{degrau.nome}</h3>
      <p className="escada-step__desc">{degrau.descricao}</p>
    </div>
  );
}
