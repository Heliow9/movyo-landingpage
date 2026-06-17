import { config } from '../config';
import { downloads } from '../data/siteData';
import { SectionTitle } from './SectionTitle';

export function Downloads() {
  return (
    <section className="section" id="downloads">
      <SectionTitle
        eyebrow="Downloads"
        title="Instale o ecossistema Movyo no restaurante"
        text="Baixe o Hub para Android e o programa desktop Windows. No desktop, a impressão térmica já acompanha a instalação, evitando processos separados."
      />
      <div className="download-grid download-grid-3">
        {downloads.map(({ icon: Icon, title, text, key, cta }) => (
          <article className="download-card glass" key={title} data-reveal>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
            <a className="btn btn-ghost" href={config[key]}>{cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
