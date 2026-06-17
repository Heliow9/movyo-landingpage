import React from 'react';
import { CheckCircle2, Loader2, LockKeyhole, Store } from 'lucide-react';
import { registerRestaurant } from '../services/api';

const initialForm = {
  nomeRestaurante: '',
  responsavel: '',
  email: '',
  telefone: '',
  cidade: '',
  segmento: 'Restaurante',
  senha: ''
};

export function SignupForm() {
  const [form, setForm] = React.useState(initialForm);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(null);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await registerRestaurant(form);
      setForm(initialForm);
      setMessage({ type: 'success', text: 'Cadastro recebido! A conta entrou no plano Free por 7 dias com status bloqueado para validação e liberação segura.' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="signup-section" id="cadastro">
      <div className="signup-copy" data-reveal>
        <span className="eyebrow">Comece agora</span>
        <h2>Cadastre um novo restaurante direto na API Movyo.</h2>
        <p>No envio do formulário, a conta nasce no plano <b>Free</b>, com <b>7 dias de teste</b> e status <b>bloqueado</b> para validação antes da liberação comercial.</p>
        <div className="signup-rules">
          <span><CheckCircle2 /> Plano Free automático</span>
          <span><CheckCircle2 /> 7 dias de validade inicial</span>
          <span><LockKeyhole /> Status bloqueado por segurança</span>
        </div>
      </div>
      <form className="signup-form glass" onSubmit={submit} data-reveal>
        <div className="form-head"><Store /><div><b>Cadastro do restaurante</b><small>Preencha os dados para criar a conta.</small></div></div>
        <label>Nome do restaurante<input name="nomeRestaurante" value={form.nomeRestaurante} onChange={update} required placeholder="Ex.: JR Lanches" /></label>
        <div className="form-row">
          <label>Responsável<input name="responsavel" value={form.responsavel} onChange={update} required placeholder="Nome completo" /></label>
          <label>Telefone/WhatsApp<input name="telefone" value={form.telefone} onChange={update} required placeholder="(81) 99999-9999" /></label>
        </div>
        <label>E-mail de acesso<input type="email" name="email" value={form.email} onChange={update} required placeholder="restaurante@email.com" /></label>
        <div className="form-row">
          <label>Cidade<input name="cidade" value={form.cidade} onChange={update} required placeholder="Olinda/PE" /></label>
          <label>Segmento<select name="segmento" value={form.segmento} onChange={update}><option>Restaurante</option><option>Pizzaria</option><option>Hamburgueria</option><option>Açaí</option><option>Lanchonete</option><option>Outro</option></select></label>
        </div>
        <label>Senha inicial<input type="password" name="senha" value={form.senha} onChange={update} required minLength="6" placeholder="Mínimo 6 caracteres" /></label>
        <button className="btn btn-primary btn-submit" disabled={loading}>{loading ? <Loader2 className="spin" /> : <CheckCircle2 />} Criar restaurante Free</button>
        {message && <div className={`form-message ${message.type}`}>{message.text}</div>}
      </form>
    </section>
  );
}
