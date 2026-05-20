import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle2,
  ChefHat,
  ChevronRight,
  Clock3,
  Cloud,
  CreditCard,
  Download,
  Headphones,
  LockKeyhole,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  PlayCircle,
  QrCode,
  ReceiptText,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Truck,
  UtensilsCrossed,
  WalletCards,
  X,
  Zap
} from 'lucide-react';
import './styles.css';
import logo from './assets/logo.png';

const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5581994262615?text=Olá,%20quero%20liberar%20minha%20conta%20teste%20grátis%20de%2015%20dias%20no%20Movyo%20Delivery';
const apkUrl = import.meta.env.VITE_APK_URL || 'https://movyo.delivery/downloads/movyo-garcom.apk';
const desktopUrl = import.meta.env.VITE_DESKTOP_URL || 'https://movyo.delivery/downloads/movyo-desktop.exe';

const features = [
  { icon: Smartphone, title: 'Delivery próprio', text: 'Seu restaurante vendendo direto, com cardápio moderno e experiência premium.' },
  { icon: ReceiptText, title: 'PDV & Balcão', text: 'Vendas no balcão, controle de pedidos, emissão e operação centralizada.' },
  { icon: UtensilsCrossed, title: 'Garçom digital', text: 'Atendimento por mesa, comandas e envio ágil para a produção.' },
  { icon: QrCode, title: 'Cardápio digital', text: 'Fotos, adicionais, observações e combos com navegação fácil.' },
  { icon: BarChart3, title: 'Gestão completa', text: 'Financeiro, relatórios, clientes, fluxo de vendas e desempenho.' },
  { icon: Bot, title: 'WhatsApp inteligente', text: 'Automação para atendimento, dúvidas, horários e pedidos.' },
  { icon: Truck, title: 'Entregas & motoboys', text: 'Organização de entregas, rotas, status e acompanhamento.' },
  { icon: Store, title: 'App do cliente', text: 'Mais praticidade para seus clientes pedirem com sua marca.' }
];

const trust = [
  { icon: LockKeyhole, title: 'SSL 256 bits', text: 'Ambiente seguro' },
  { icon: Cloud, title: 'Infraestrutura cloud', text: 'Alta performance' },
  { icon: ShieldCheck, title: 'LGPD', text: 'Proteção de dados' },
  { icon: Headphones, title: 'Suporte humano', text: 'Atendimento de verdade' },
  { icon: Zap, title: 'Atualizações constantes', text: 'Plataforma evoluindo' }
];

const testimonials = [
  ['“A Movyo mudou nossa operação. Ficou mais rápido, organizado e com menos erro.”', 'Carlos Mendes', 'Restaurante Sabor Brasileiro'],
  ['“O app próprio deu outra cara para nossa marca e melhorou a experiência dos clientes.”', 'Fernanda Oliveira', 'Pizzaria Forno & Lenha'],
  ['“Sistema completo e simples. A equipe aprendeu rápido e o suporte ajudou muito.”', 'João Paulo Santos', 'Hamburgueria Artesanal']
];

function useReveal() {
  React.useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.14 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Recursos', '#recursos'],
    ['Para quem é', '#para-quem'],
    ['Pagamentos', '#pagamentos'],
    ['Teste grátis', '#teste'],
    ['Depoimentos', '#depoimentos']
  ];

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Movyo">
        <img src={logo} alt="Movyo" />
      </a>

      <nav className={`nav ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="btn btn-ghost hide-sm" href={whatsappUrl}>Entrar</a>
        <a className="btn btn-primary" href={whatsappUrl}>Começar teste grátis</a>
      </div>

      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" data-reveal>
      <div className="orbit orbit-1" />
      <div className="orbit orbit-2" />
      <div className="laptop">
        <div className="laptop-screen">
          <div className="dash-top">
            <span><img src={logo} alt="" /> Dashboard</span>
            <div><i /><i /><i /></div>
          </div>
          <div className="dash-grid">
            <div className="metric"><small>Pedidos hoje</small><strong>152</strong><em>+18%</em></div>
            <div className="metric"><small>Faturamento</small><strong>R$ 4.850</strong><em>+12%</em></div>
            <div className="metric"><small>Ticket médio</small><strong>R$ 31,91</strong><em>+7%</em></div>
          </div>
          <div className="chart"><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="dash-bottom">
            <div className="donut" />
            <div className="orders"><b>Pedidos ao vivo</b><p><i /> Novo pedido #1025</p><p><i /> Saiu para entrega</p></div>
          </div>
        </div>
        <div className="keyboard" />
      </div>
      <div className="phone">
        <div className="phone-top">Pizzaria do João</div>
        <div className="search">Buscar produto...</div>
        {['Pizza Calabresa', 'Combo Família', 'Burger Bacon'].map((item, i) => (
          <div className="food" key={item}><span className={`food-img f${i}`} /><div><b>{item}</b><small>R$ {i === 0 ? '55,90' : i === 1 ? '89,90' : '32,90'}</small></div><button>+</button></div>
        ))}
      </div>
      <div className="floating-card order-card"><ShoppingBag size={20} /><div><b>Pedido recebido!</b><span>#1025 • R$ 65,90</span></div></div>
      <div className="floating-card app-card"><PackageCheck size={20} /><div><b>App próprio</b><span>com sua marca</span></div></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy" data-reveal>
        <div className="pill"><span /> A plataforma completa para restaurantes</div>
        <h1>Mais pedidos.<br />Menos complicação.<br /><strong>Movyo resolve.</strong></h1>
        <p>Sistema completo para delivery, balcão, garçom, gestão e muito mais. Tenha seu próprio app, controle tudo em um só lugar e aumente seus lucros.</p>
        <div className="hero-buttons">
          <a className="btn btn-primary btn-xl" href={whatsappUrl}><Rocket size={20} /> Quero testar grátis por 15 dias <small>Liberação via WhatsApp</small></a>
          <a className="btn btn-ghost btn-xl" href="#recursos"><PlayCircle size={20} /> Ver demonstração <small>Veja como funciona</small></a>
        </div>
        <div className="mini-benefits">
          <span><Clock3 size={18} /> <b>15 dias grátis</b><small>sem cartão de crédito</small></span>
          <span><MessageCircle size={18} /> <b>Ativação via WhatsApp</b><small>rápida e humanizada</small></span>
          <span><Headphones size={18} /> <b>Suporte humano</b><small>especializado</small></span>
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}

function Stats() {
  return (
    <section className="stats glass" data-reveal>
      <div><strong>+2.500</strong><span>restaurantes ativos</span></div>
      <div className="rating"><div className="avatars"><i /><i /><i /><i /><i /></div><p><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /> <b>5,0</b></p><span>Avaliação dos clientes</span></div>
      <div><strong>99,9%</strong><span>uptime da plataforma</span></div>
      <div><strong>+1M</strong><span>pedidos processados</span></div>
    </section>
  );
}

function Features() {
  return (
    <section className="section compact" id="recursos">
      <div className="section-title" data-reveal>
        <span>Tudo que seu restaurante precisa</span>
        <h2>Uma plataforma completa, integrada e fácil de usar</h2>
      </div>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, text }, index) => (
          <article className="feature-card" data-reveal key={title} style={{ '--delay': `${index * 45}ms` }}>
            <div className="icon"><Icon size={25} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="audience glass" id="para-quem" data-reveal>
      <div>
        <span className="eyebrow">Para quem é</span>
        <h2>Feito para restaurantes que querem vender mais com controle total</h2>
        <p>Ideal para pizzarias, hamburguerias, açaíterias, lanchonetes, restaurantes, deliverys e operações que precisam organizar pedidos, equipe, pagamentos e atendimento.</p>
      </div>
      <ul>
        {['Delivery próprio com sua marca', 'Balcão, retirada e consumo local', 'Gestão de motoboys e entregas', 'Equipe trabalhando no mesmo fluxo'].map((item) => <li key={item}><CheckCircle2 size={20} /> {item}</li>)}
      </ul>
    </section>
  );
}

function Payments() {
  return (
    <section className="payments glass" id="pagamentos" data-reveal>
      <div className="payment-copy">
        <span className="eyebrow">Parceria que gera confiança</span>
        <h2>Pagamentos seguros com <strong>Mercado Pago</strong></h2>
        <p>A Movyo utiliza a infraestrutura do Mercado Pago para processar pagamentos com segurança, estabilidade e alta disponibilidade.</p>
        <div className="mp-badge"><span>🤝</span><b>Parceiro de pagamentos Mercado Pago</b></div>
      </div>
      <div className="payment-grid">
        {[
          ['Pix', 'Instantâneo', WalletCards],
          ['Cartões', 'Crédito e débito', CreditCard],
          ['Aprovação rápida', 'Mais vendas aprovadas', BadgeCheck],
          ['Segurança avançada', 'Antifraude', ShieldCheck],
          ['Checkout otimizado', 'Mais conversões', ShoppingBag],
          ['Conciliação automática', 'Controle das vendas', ReceiptText]
        ].map(([title, text, Icon]) => <div className="pay-item" key={title}><Icon size={24} /><div><b>{title}</b><small>{text}</small></div></div>)}
      </div>
      <div className="payment-phone"><CheckCircle2 size={54} /><b>Pagamento aprovado!</b><strong>R$ 65,90</strong><small>Mercado Pago</small></div>
    </section>
  );
}

function Trial() {
  return (
    <section className="trial glass" id="teste" data-reveal>
      <div className="trial-badge"><strong>15</strong><span>DIAS</span><em>GRÁTIS</em></div>
      <div className="trial-flow">
        <h2>Teste grátis por 15 dias!</h2>
        <p>Para liberar sua conta é simples: fale com nossa equipe pelo WhatsApp e receba a ativação do período de teste.</p>
        <div className="steps">
          <div><MessageCircle size={26} /><b>Entre em contato</b><small>Clique no botão e chame no WhatsApp.</small></div>
          <ChevronRight className="arrow" />
          <div><ReceiptText size={26} /><b>Informe seu negócio</b><small>Coletamos algumas informações básicas.</small></div>
          <ChevronRight className="arrow" />
          <div><Rocket size={26} /><b>Conta liberada</b><small>Seu teste grátis fica ativo para começar.</small></div>
        </div>
      </div>
      <aside className="trial-cta">
        <h3>Fale com nossa equipe e libere seu teste grátis</h3>
        <a className="btn whatsapp" href={whatsappUrl}><MessageCircle size={21} /> Chamar no WhatsApp</a>
        <small>Atendimento rápido, humano e especializado.</small>
        <div className="social-proof"><div className="avatars"><i /><i /><i /><i /></div><span>+ de 2.500 restaurantes já usam e recomendam!</span></div>
      </aside>
    </section>
  );
}

function Downloads() {
  return (
    <section className="downloads glass" id="downloads" data-reveal>
      <div>
        <span className="eyebrow">Aplicativos</span>
        <h2>Baixe os apps da operação</h2>
        <p>Use o app garçom e o sistema desktop para acelerar atendimento, balcão e gestão.</p>
      </div>
      <div className="download-actions">
        <a className="btn btn-ghost" href={apkUrl}><Download size={18} /> Baixar APK Garçom</a>
        <a className="btn btn-ghost" href={desktopUrl}><MonitorSmartphone size={18} /> Baixar Desktop</a>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="trust-bar glass" data-reveal>
      {trust.map(({ icon: Icon, title, text }) => <div key={title}><Icon size={23} /><b>{title}</b><small>{text}</small></div>)}
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section compact" id="depoimentos">
      <div className="section-title left" data-reveal>
        <h2>O que <strong>nossos clientes</strong> dizem</h2>
      </div>
      <div className="testimonials">
        {testimonials.map(([quote, name, role], i) => <article className="testimonial glass" key={name} data-reveal style={{ '--delay': `${i * 70}ms` }}><p>{quote}</p><div><span className="avatar" /><b>{name}</b><small>{role}</small></div><div className="stars"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div></article>)}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer glass">
      <div className="footer-brand"><img src={logo} alt="Movyo" /><p>A plataforma completa para restaurantes que querem vender mais, com mais controle e menos taxas.</p><div className="social"><i /> <i /> <i /> <i /></div></div>
      <div><b>Produto</b><a href="#recursos">Recursos</a><a href="#teste">Teste grátis</a><a href="#downloads">Aplicativos</a></div>
      <div><b>Institucional</b><a href="#para-quem">Sobre a Movyo</a><a href="#pagamentos">Mercado Pago</a><a href={whatsappUrl}>Fale conosco</a></div>
      <div><b>Suporte</b><a href={whatsappUrl}>Central de ajuda</a><a href={whatsappUrl}>WhatsApp</a><a href="#teste">Ativação da conta</a></div>
      <div className="footer-apps"><b>Baixe nossos aplicativos</b><a href={apkUrl}>Google Play</a><a href={desktopUrl}>Desktop</a><small>© 2026 Movyo. Todos os direitos reservados.</small></div>
    </footer>
  );
}

function App() {
  useReveal();
  return (
    <main>
      <div className="bg"><span /><span /><span /></div>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Audience />
      <Payments />
      <Trial />
      <TrustBar />
      <Testimonials />
      <Downloads />
      <Footer />
      <a className="float-whatsapp" href={whatsappUrl} aria-label="Chamar no WhatsApp"><MessageCircle size={32} /></a>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
