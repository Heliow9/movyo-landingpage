import { CheckCircle2 } from 'lucide-react';
import { benefits, highlights } from '../data/siteData';

export function Benefits() {
  return (
    <section className="split glass" data-reveal>
      <div>
        <span className="eyebrow">Por que escolher</span>
        <h2>Uma plataforma para vender mais e operar melhor no computador e no celular.</h2>
        <p>
          A Movyo foi construída para o restaurante ter mais controle, menos retrabalho e uma operação mais organizada,
          desde a entrada do pedido até produção, caixa e fechamento.
        </p>
        <div className="check-list">
          {highlights.map((item) => <span key={item}><CheckCircle2 /> {item}</span>)}
        </div>
      </div>
      <div className="benefit-grid">
        {benefits.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon />
            <b>{title}</b>
            <small>{text}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
