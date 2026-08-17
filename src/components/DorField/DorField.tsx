import { useRef, useState } from 'react';
import { Button, Drawer, Input } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { COPY } from '../../data/copy';
import { DORES } from '../../data/dores';
import { useDor } from '../../context/DorContext';
import { classifyDor } from '../../lib/classifyDor';
import { track } from '../../lib/track';
import { useTypewriter } from '../../lib/useTypewriter';
import { QualificacaoForm, type QualificacaoFormHandle } from './QualificacaoForm';
import { SucessoCard } from './SucessoCard';

// Máquina de estados da mecânica "Qual é a sua dor?" (v1 — captura visual completa).
// idle/focused/typing → submitting → qualifying → success (ou error_email/error_network,
// tratados dentro do QualificacaoForm, que já expõe os dois casos de erro).
// qualifying/success abrem um drawer lateral — o campo de dor permanece visível atrás dele.
type Status = 'idle' | 'focused' | 'typing' | 'submitting' | 'qualifying' | 'success';

// Exemplos do placeholder cobrem os mesmos temas dos cards de "onde a levva resolve" —
// gira sozinho enquanto o campo está vazio e sem foco, pra sempre sugerir uma dor real.
const EXEMPLOS_PLACEHOLDER = DORES.map((d) => d.preencheHero);

export function DorField() {
  const { dorText, setDorText, origem, heroFieldRef } = useDor();
  const [status, setStatus] = useState<Status>('idle');
  const [hasFocusedOnce, setHasFocusedOnce] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const qualificacaoRef = useRef<QualificacaoFormHandle>(null);
  const exemploDigitado = useTypewriter(EXEMPLOS_PLACEHOLDER, { paused: status !== 'idle' });

  function handleFocus() {
    if (!hasFocusedOnce) {
      track('hero_dor_focus', { origem: 'hero' });
      setHasFocusedOnce(true);
    }
    setStatus((s) => (s === 'idle' ? 'focused' : s));
  }

  function handleChange(texto: string) {
    setDorText(texto);
    setStatus(texto.trim() ? 'typing' : 'focused');
  }

  function handleSubmitDor() {
    if (!dorText.trim()) return;
    const categoria = classifyDor(dorText);
    track('hero_dor_submit', { categoria });
    setStatus('submitting');
    window.setTimeout(() => {
      track('lead_form_start');
      setStatus('qualifying');
    }, 500);
  }

  function handleDrawerClose() {
    // Fechar sem enviar não deve descartar a dor já digitada — só volta pro campo.
    // Depois de um envio com sucesso, libera pra contar outra dor do zero.
    setStatus((s) => (s === 'success' ? 'idle' : 'typing'));
    if (status === 'success') setDorText('');
  }

  return (
    <div className="dor-field-wrap" data-track="hero-dor">
      <div className="dor-field-textarea-outer">
        <Input.TextArea
          ref={heroFieldRef}
          value={dorText}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          autoSize={{ minRows: 1, maxRows: 6 }}
          aria-label="Qual é a sua dor?"
        />
        {status === 'idle' && (
          <span className="dor-field-placeholder" aria-hidden="true">
            {exemploDigitado ? `Ex.: "${exemploDigitado}"` : ''}
            <span className="dor-field-placeholder__caret" />
          </span>
        )}
      </div>
      <div aria-live="polite" style={{ minHeight: 22, marginTop: 8, color: 'var(--text-muted)', fontSize: 14 }}>
        {status === 'submitting' ? COPY.mecanica.submitting : ''}
      </div>
      <Button
        type="primary"
        size="large"
        icon={<ArrowRightOutlined />}
        iconPlacement="end"
        block
        loading={status === 'submitting'}
        disabled={!dorText.trim()}
        onClick={handleSubmitDor}
        data-track="hero-submit"
        style={{ marginTop: 16, fontSize: 17, height: 56 }}
      >
        {COPY.hero.cta}
      </Button>

      <Drawer
        title={COPY.mecanica.drawerTitulo}
        placement="right"
        open={status === 'qualifying' || status === 'success'}
        onClose={handleDrawerClose}
        size={480}
        className="dor-drawer"
        maskClosable
        styles={{ body: { padding: 0 } }}
        footer={
          status === 'qualifying' ? (
            <div style={{ display: 'flex', gap: 12 }}>
              <Button size="large" onClick={handleDrawerClose} style={{ height: 52, flexShrink: 0 }}>
                Cancelar
              </Button>
              <Button
                type="primary"
                size="large"
                loading={enviando}
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                data-track="lead-submit"
                onClick={() => qualificacaoRef.current?.submit()}
                style={{ height: 52, fontSize: 16, flex: 1, background: 'var(--ink)', borderColor: 'var(--ink)' }}
              >
                {COPY.mecanica.qualifCta}
              </Button>
            </div>
          ) : null
        }
      >
        {/* data-lenis-prevent: o Lenis intercepta o wheel da página inteira — sem isso,
            rolar o mouse dentro do drawer rolava o fundo em vez do formulário. */}
        <div className="dor-drawer__scroll" data-lenis-prevent>
          {status === 'success' ? (
            <SucessoCard />
          ) : (
            <QualificacaoForm
              ref={qualificacaoRef}
              dor={dorText}
              origem={origem}
              onSuccess={() => setStatus('success')}
              onSendingChange={setEnviando}
            />
          )}
        </div>
      </Drawer>
    </div>
  );
}
