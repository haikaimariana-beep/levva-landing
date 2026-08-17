import { CheckCircleFilled } from '@ant-design/icons';
import { COPY, SHOW_SLA } from '../../data/copy';

export function SucessoCard() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="dor-flow-card"
      style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
    >
      <CheckCircleFilled style={{ fontSize: 40, color: 'var(--success)' }} />
      <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)' }}>{COPY.mecanica.sucessoTitulo}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 420, lineHeight: 1.5 }}>
        {COPY.mecanica.sucessoCorpo}
      </p>
      {SHOW_SLA && <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>{COPY.mecanica.sla}</p>}
    </div>
  );
}
