import { COPY } from '../../data/copy';

export function Rodape() {
  return (
    <footer className="site-footer">
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 var(--container-margin)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div>
          <strong>{COPY.marca.logo}</strong> — {COPY.marca.assinatura}
        </div>
        <p style={{ fontSize: 14 }}>{COPY.rodape.contato}</p>
        <p style={{ fontSize: 13, maxWidth: 560, lineHeight: 1.5 }}>{COPY.rodape.lgpd}</p>
      </div>
    </footer>
  );
}
