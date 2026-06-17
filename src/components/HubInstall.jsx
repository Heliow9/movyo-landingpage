import { ExternalLink, Smartphone } from 'lucide-react';
import { config } from '../config';
import { installSteps } from '../data/siteData';

export function HubInstall() {
  return (
    <section className="hub-install hub-install-light" id="instalar-hub" data-reveal>
      <div>
        <span className="eyebrow">Movyo Hub no iPhone</span>
        <h2>Como instalar o Movyo Hub no iOS</h2>
        <p>
          No iPhone, o Movyo Hub funciona como PWA instalado pela tela inicial. No Android, o app pode ser usado pela
          Play Store ou via APK na área de downloads. Assim, a equipe trabalha com mais praticidade em qualquer cenário.
        </p>
        <a className="btn btn-primary" href={config.hubUrl}><Smartphone /> Abrir Hub no Safari <ExternalLink size={16} /></a>
      </div>
      <div className="install-steps">
        {installSteps.map((step, index) => (
          <article key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <b>{step.title}</b>
            <small>{step.text}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
