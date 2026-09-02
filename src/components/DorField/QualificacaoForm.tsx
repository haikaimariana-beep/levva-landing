import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Form, Input } from 'antd';
import { COPY } from '../../data/copy';
import { isEmailCorporativo } from '../../lib/email';
import { isWhatsappValido } from '../../lib/phone';
import { classifyDor } from '../../lib/classifyDor';
import { submitLead } from '../../lib/submitLead';
import { track } from '../../lib/track';

interface FormValues {
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string;
  cargo: string;
  contexto: string;
}

export interface QualificacaoFormHandle {
  submit: () => void;
}

interface QualificacaoFormProps {
  dor: string;
  origem: 'hero' | 'card_dor';
  onSuccess: () => void;
  /** O botão de envio mora no rodapé fixo do drawer (ver DorField) — precisa saber quando desabilitar/girar. */
  onSendingChange: (sending: boolean) => void;
  /** Idem: o botão só destrava quando os campos obrigatórios estão todos preenchidos e válidos. */
  onValidChange: (valid: boolean) => void;
}

// O botão de envio fica no footer fixo do Drawer (DorField), por isso o form expõe
// submit() via ref em vez de ter seu próprio botão.
export const QualificacaoForm = forwardRef<QualificacaoFormHandle, QualificacaoFormProps>(function QualificacaoForm(
  { dor, origem, onSuccess, onSendingChange, onValidChange },
  ref,
) {
  const [form] = Form.useForm<FormValues>();
  const [sending, setSending] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    onSendingChange(sending);
  }, [sending, onSendingChange]);

  // validateOnly: checa sem disparar as mensagens de erro na tela — só pra saber se já dá pra habilitar o botão.
  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => onValidChange(true))
      .catch(() => onValidChange(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useImperativeHandle(ref, () => ({ submit: () => form.submit() }), [form]);

  async function handleFinish(values: FormValues) {
    setSending(true);
    setErroEnvio(false);
    const categoria = classifyDor(dor);
    try {
      const res = await submitLead({
        dor,
        categoria,
        nome: values.nome,
        emailCorporativo: values.email,
        whatsapp: values.whatsapp,
        empresa: values.empresa,
        cargo: values.cargo,
        contexto: values.contexto,
        origem,
        timestamp: new Date().toISOString(),
      });
      if (res.ok) {
        track('lead_form_submit', { categoria });
        onSuccess();
      } else {
        setErroEnvio(true);
      }
    } catch {
      setErroEnvio(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div data-track="lead-form" className="dor-flow-card">
      <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: 'var(--ink)' }}>{COPY.mecanica.qualifTitulo}</h3>
      <Form form={form} layout="vertical" onFinish={handleFinish} requiredMark={false}>
        <Form.Item name="nome" label="Nome" rules={[{ required: true, min: 2, message: 'Conta seu nome pra gente.' }]}>
          <Input size="large" placeholder="Como te chamam?" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail corporativo"
          extra={<span style={{ color: 'var(--text-muted)', fontSize: 13 }}>{COPY.mecanica.emailHint}</span>}
          rules={[
            { required: true, message: COPY.mecanica.erroEmail },
            {
              validator: (_, value) =>
                !value || isEmailCorporativo(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error(COPY.mecanica.erroEmail)),
            },
          ]}
        >
          <Input size="large" type="email" placeholder="você@suaempresa.com" />
        </Form.Item>
        <Form.Item
          name="whatsapp"
          label={COPY.mecanica.whatsappLabel}
          rules={[
            { required: true, message: COPY.mecanica.erroWhatsapp },
            {
              validator: (_, value) =>
                !value || isWhatsappValido(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error(COPY.mecanica.erroWhatsapp)),
            },
          ]}
        >
          <Input size="large" type="tel" placeholder={COPY.mecanica.whatsappPlaceholder} />
        </Form.Item>
        <Form.Item name="empresa" label="Empresa" rules={[{ required: true, message: 'Conta o nome da empresa.' }]}>
          <Input size="large" placeholder="Nome da empresa" />
        </Form.Item>
        <Form.Item name="cargo" label="Cargo/área" rules={[{ required: true, message: 'Conta seu cargo ou área.' }]}>
          <Input size="large" placeholder="Ex.: Head de Dados" />
        </Form.Item>
        <Form.Item
          name="contexto"
          label={COPY.mecanica.contextoLabel}
          style={{ marginBottom: erroEnvio ? 16 : 0 }}
          rules={[{ required: true, min: 10, message: 'Conta um pouco mais pra gente já chegar com um caminho certeiro.' }]}
        >
          <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} placeholder={COPY.mecanica.contextoPlaceholder} />
        </Form.Item>
        {erroEnvio && (
          <p role="alert" style={{ color: 'var(--error)', marginBottom: 0 }}>
            {COPY.mecanica.erroEnvio}
          </p>
        )}
      </Form>
    </div>
  );
});
