import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  QrCode,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  TimerReset,
  TrendingUp,
  WalletCards,
  Zap,
} from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Menos abandono no checkout',
    text: 'O cliente conclui o pagamento no mesmo fluxo do pedido, sem trocar de canal ou esperar atendimento.',
  },
  {
    icon: TimerReset,
    title: 'Pedido confirmado mais rápido',
    text: 'A confirmação digital reduz conferências manuais e ajuda a equipe a iniciar o atendimento com mais agilidade.',
  },
  {
    icon: ReceiptText,
    title: 'Financeiro mais organizado',
    text: 'Pedido, valor e forma de pagamento ficam conectados, facilitando a leitura do caixa e da operação.',
  },
  {
    icon: ShieldCheck,
    title: 'Experiência profissional',
    text: 'Seu restaurante oferece uma jornada moderna, segura e compatível com o que o cliente já espera do delivery.',
  },
];

export function DigitalPayments() {
  return (
    <section className="payments-section section" id="pagamentos">
      <div className="payments-heading" data-reveal>
        <div>
          <span className="eyebrow"><WalletCards size={15} /> Pagamentos digitais</span>
          <h2>Seu cliente pede e paga na mesma experiência.</h2>
        </div>
        <p>
          Com a Movyo, o cliente paga direto na plataforma no momento do pedido. Sem depender de maquininha na entrega,
          sem troca de mensagens para confirmar comprovante e sem etapas desnecessárias. É mais rápido para quem compra
          e mais organizado para quem vende.
        </p>
      </div>

      <div className="payments-showcase" data-reveal>
        <div className="payments-copy-panel">
          <span className="payments-kicker"><Zap size={15} /> Venda sem interromper o impulso de compra</span>
          <h3>Por que o seu restaurante precisa do Pagamento Online?</h3>
          <p>
            Porque cada etapa removida entre escolher e pagar aumenta a chance de o pedido ser concluído. Quando o
            pagamento acontece dentro do próprio checkout, o cliente sente confiança, a equipe ganha tempo e o
            restaurante recebe uma operação mais previsível.
          </p>

          <blockquote>
            “Quando pagar é fácil, comprar se torna natural. E quando o pedido já nasce confirmado, a operação trabalha melhor.”
          </blockquote>

          <div className="payments-checks">
            <span><CheckCircle2 /> Pagamento dentro do fluxo do pedido</span>
            <span><CheckCircle2 /> Integração preparada para Mercado Pago</span>
            <span><CheckCircle2 /> PIX, crédito e débito no checkout</span>
            <span><CheckCircle2 /> Status conectado ao acompanhamento do pedido</span>
          </div>

          <a className="btn btn-primary payments-cta" href="#cadastro">
            Ativar meu teste grátis <ArrowRight size={17} />
          </a>
        </div>

        <div className="payments-visual-panel" aria-label="Exemplo de pagamento digital na Movyo">
          <div className="payment-phone">
            <div className="payment-phone-top">
              <span>Movyo Checkout</span>
              <LockKeyhole size={15} />
            </div>

            <div className="payment-order-summary">
              <small>Resumo do pedido</small>
              <strong>R$ 68,90</strong>
              <span>3 itens • entrega</span>
            </div>

            <div className="payment-method active">
              <div className="payment-method-icon"><QrCode /></div>
              <div>
                <b>PIX</b>
                <small>Confirmação digital do pagamento</small>
              </div>
              <i />
            </div>

            <div className="payment-method">
              <div className="payment-method-icon"><CreditCard /></div>
              <div>
                <b>Cartão</b>
                <small>Crédito ou débito no checkout</small>
              </div>
              <i />
            </div>

            <button type="button" className="payment-confirm-button">
              <ShieldCheck size={18} /> Pagar com segurança
            </button>

            <div className="payment-secure-note">
              <LockKeyhole size={13} /> Dados processados pelo provedor de pagamento
            </div>
          </div>

          <div className="payment-success-card">
            <div className="payment-success-icon"><CheckCircle2 /></div>
            <div>
              <small>Pagamento aprovado</small>
              <strong>Pedido enviado para o restaurante</strong>
            </div>
          </div>

          <div className="payment-sync-card">
            <Smartphone size={18} />
            <div>
              <strong>Movyo Hub atualizado</strong>
              <small>A equipe recebe o pedido e acompanha o status.</small>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-method-cards" data-reveal>
        <article>
          <div className="payment-card-icon pix"><QrCode /></div>
          <span>PIX automatizado</span>
          <h3>Pagamento rápido, confirmação clara e menos conferência manual.</h3>
          <p>
            O cliente escolhe PIX no checkout e conclui o pagamento dentro da jornada do pedido. A operação recebe a
            informação conectada ao pedido, reduzindo dúvidas e troca de comprovantes.
          </p>
        </article>

        <article>
          <div className="payment-card-icon card"><CreditCard /></div>
          <span>Crédito e débito</span>
          <h3>Mais opções para o cliente finalizar a compra sem depender de maquininha.</h3>
          <p>
            O pagamento acontece antes do atendimento ou da entrega, oferecendo mais conveniência ao cliente e uma
            experiência mais profissional para o restaurante.
          </p>
        </article>
      </div>

      <div className="payments-reasons" data-reveal>
        {reasons.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <div><Icon /></div>
            <strong>{title}</strong>
            <small>{text}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
