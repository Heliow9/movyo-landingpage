import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { config } from '../config';

const links = [
  ['Solução', '#solucao'],
  ['Sobre', '/sobre-movyo-delivery/'],
  ['Diferenciais', '#diferenciais'],
  ['Recursos', '#recursos'],
  ['Integrações', '#integracoes'],
  ['Pagamentos', '#pagamentos'],
  ['Downloads', '#downloads'],
  ['Contato', '#contato']
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Movyo Delivery">
        <img src={logo} alt="Movyo" />
      </a>
      <nav className={`nav ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="btn btn-ghost hide-mobile" href={config.hubUrl}>Entrar no Hub</a>
        <a className="btn btn-primary" href="#cadastro">Começar grátis</a>
      </div>
      <button className="menu" type="button" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
