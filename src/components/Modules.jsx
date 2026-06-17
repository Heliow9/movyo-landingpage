import { modules } from '../data/siteData';
import { SectionTitle } from './SectionTitle';

export function Modules() {
  return (
    <section className="section" id="solucao">
      <SectionTitle eyebrow="Ecossistema Movyo" title="Tudo conectado para o restaurante operar melhor" text="A Movyo reúne venda, atendimento, produção, pagamento e gestão em uma única plataforma." />
      <div className="card-grid">
        {modules.map(({ icon: Icon, title, text }, index) => (
          <article className="module-card glass" key={title} data-reveal style={{ '--delay': `${index * 45}ms` }}>
            <div className="icon"><Icon /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
