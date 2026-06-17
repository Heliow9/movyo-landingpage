import { trust } from '../data/siteData';

export function TrustBar() {
  return (
    <section className="trust-bar glass" data-reveal>
      {trust.map(({ icon: Icon, title, text }) => <div key={title}><Icon /><b>{title}</b><small>{text}</small></div>)}
    </section>
  );
}
