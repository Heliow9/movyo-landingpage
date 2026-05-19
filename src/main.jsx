import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  ChefHat,
  Cloud,
  CreditCard,
  Download,
  Laptop,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  UtensilsCrossed,
  X,
  Zap
} from 'lucide-react';
import './styles.css';
import logo from './assets/logo.png';

const apiUrl = import.meta.env.VITE_API_URL || 'https://api.movyo.delivery';
const apkUrl = import.meta.env.VITE_APK_URL || 'https://download1532.mediafire.com/e7dit0iq11sggn7YPWQHFV5ska30qiSboi0ePfRWx2hMysOLX0hiQ08i3tnFWgZcrLjPi-JbZIH5ODWbuLznUQ2JxY_S9bXYK5Rb4WfcpH-IU2vInAevEtna-v3mrs9IPAQMmX0XXRTudhVr62WnHheVc9eQiFzdEmia_-34_xOW024/m1opv308qbt7fyp/movyo-garcom.apk';
const desktopUrl = import.meta.env.VITE_DESKTOP_URL || 'https://download850.mediafire.com/1nvfkrjnv15gpEywN_DBlWaCg2pzQ8kZSs3YiRKSZVB_FntsE3wv2cBphpzr_swNfV1-sId8TjMYNWGRv8Cg3PZRbMO7JEtH8USa8zm-gGfxmYZR4OzsZuWopySmhGKytyu5JIQ7_ZK7VnJraIEpEslH4Ar0bbtYNU5kuNQI0UHdPNI/6t0ivyebvrwxopa/movyo-desktop.exe';
const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || 'https://movyo.delivery/app';
const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5581994262615';

const modules = [
  { icon: ShoppingBag, title: 'Pedidos online', text: 'Cardápio digital, adicionais, observações, status e fluxo completo do pedido.' },
  { icon: Truck, title: 'Delivery e balcão', text: 'Controle pedidos para entrega, retirada e consumo local em um só painel.' },
  { icon: Smartphone, title: 'App garçom', text: 'Atendimento na mesa pelo celular, com envio direto para a operação.' },
  { icon: Laptop, title: 'Sistema desktop', text: 'Gestão operacional rápida para cozinha, caixa, pedidos e impressão.' },
  { icon: Bot, title: 'Bot WhatsApp', text: 'Atendimento automático conectado ao restaurante, horários e disponibilidade.' },
  { icon: BarChart3, title: 'Gestão em tempo real', text: 'Acompanhe pedidos, clientes, faturamento e operação sem complicação.' }
];

const benefits = [
  'Reduz erros no atendimento e na montagem dos pedidos',
  'Organiza delivery, balcão, mesas e cozinha em tempo real',
  'Permite vender mais com cardápio digital moderno',
  'Centraliza restaurante, equipe, garçom e desktop',
  'Integra operação online com API preparada para escalar',
  'Visual premium para passar confiança ao cliente final'
];

const steps = [
  { number: '01', title: 'Cliente faz o pedido', text: 'Pelo cardápio online, WhatsApp ou atendimento interno.' },
  { number: '02', title: 'Equipe recebe na hora', text: 'Pedido aparece no painel, desktop ou fluxo operacional.' },
  { number: '03', title: 'Cozinha e entrega acompanham', text: 'Status, balcão, delivery e mesa ficam sincronizados.' },
  { number: '04', title: 'Restaurante controla tudo', text: 'Mais velocidade, menos falhas e melhor experiência.' }
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = ['Soluções', 'Aplicativos', 'Como funciona', 'Downloads'];
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Movyo Delivery">
        <img src={logo} alt="Movyo" />
        <span>Movyo Delivery</span>
      </a>
      <nav className={open ? 'nav open' : 'nav'}>
        {links.map((item) => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase().replace('ç', 'c').replace(' ', '-')}`}>{item}</a>)}
        <a className="navCta" href={dashboardUrl}>Acessar sistema</a>
      </nav>
      <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

function HeroMockup() {
  return (
    <div className="mockupWrap" aria-label="Prévia visual do sistema Movyo">
      <div className="glowCard"></div>
      <div className="desktopMockup">
        <div className="windowBar"><span></span><span></span><span></span></div>
        <div className="dashGrid">
          <div className="sidePanel">
            <img src={logo} alt="" />
            <div></div><div></div><div></div><div></div>
          </div>
          <div className="mainPanel">
            <div className="metricRow">
              <div><strong>128</strong><small>Pedidos hoje</small></div>
              <div><strong>R$ 4.870</strong><small>Faturamento</small></div>
            </div>
            <div className="orderCard"><span>Pedido #1024</span><b>Em preparo</b></div>
            <div className="orderCard"><span>Mesa 08</span><b className="green">Pronto</b></div>
            <div className="chart"><i></i><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>
      <div className="phoneMockup">
        <div className="phoneTop"></div>
        <div className="appLogo"><img src={logo} alt="" /></div>
        <h4>App Garçom</h4>
        <p>Mesa 12 • 4 itens</p>
        <button>Enviar pedido</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <main id="top">
      <Header />

      <section className="hero sectionPad">
        <div className="heroText">
          <div className="eyebrow"><Sparkles size={16} /> Plataforma completa para restaurantes</div>
          <h1>Transforme seu restaurante em uma operação digital, rápida e organizada.</h1>
          <p>O Movyo Delivery une cardápio digital, pedidos online, delivery, balcão, app garçom, desktop, WhatsApp e gestão em tempo real para seu restaurante vender mais com menos erro.</p>
          <div className="heroActions">
            <a className="btn primary" href={dashboardUrl}>Acessar sistema <ArrowRight size={18} /></a>
            <a className="btn secondary" href="#downloads">Baixar aplicativos <Download size={18} /></a>
          </div>
          <div className="trustRow">
            <span><BadgeCheck size={18} /> API: {apiUrl}</span>
            <span><ShieldCheck size={18} /> Pronto para produção</span>
          </div>
        </div>
        <HeroMockup />
      </section>

      <section className="logos">
        <span><Star size={18} /> Delivery</span>
        <span><UtensilsCrossed size={18} /> Restaurante</span>
        <span><ChefHat size={18} /> Cozinha</span>
        <span><CreditCard size={18} /> Caixa</span>
        <span><Cloud size={18} /> API online</span>
      </section>

      <section id="solucoes" className="sectionPad">
        <div className="sectionTitle">
          <span>Soluções</span>
          <h2>Tudo que o restaurante precisa para operar sem bagunça.</h2>
          <p>Uma plataforma pensada para o fluxo real do food service: cliente, garçom, balcão, cozinha, entrega e gestão.</p>
        </div>
        <div className="cardsGrid">
          {modules.map(({ icon: Icon, title, text }) => (
            <article className="featureCard" key={title}>
              <div className="iconBox"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="aplicativos" className="split sectionPad darkPanel">
        <div>
          <span className="miniLabel">Aplicativos conectados</span>
          <h2>Desktop para operação. APK para atendimento. Tudo falando com a mesma API.</h2>
          <p>O Movyo foi feito para trabalhar no ritmo do restaurante: tela grande para a gestão, celular para o garçom e API centralizada para manter tudo sincronizado.</p>
          <div className="checkList">
            {benefits.map((item) => <span key={item}><PackageCheck size={18} /> {item}</span>)}
          </div>
        </div>
        <div className="visualPanel">
          <div className="floatingBadge one"><Zap size={18} /> Pedido recebido</div>
          <div className="floatingBadge two"><MessageCircle size={18} /> WhatsApp ativo</div>
          <MonitorSmartphone size={110} />
          <h3>Operação sincronizada</h3>
          <p>API, desktop, garçom e cardápio trabalhando juntos.</p>
        </div>
      </section>

      <section id="como-funciona" className="sectionPad">
        <div className="sectionTitle left">
          <span>Como funciona</span>
          <h2>Do pedido à entrega, o fluxo fica claro para todo mundo.</h2>
        </div>
        <div className="stepsGrid">
          {steps.map((step) => (
            <article className="stepCard" key={step.number}>
              <strong>{step.number}</strong>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="downloads" className="sectionPad downloadSection">
        <div className="downloadText">
          <span className="miniLabel">Downloads</span>
          <h2>Baixe o Movyo Garçom e o Movyo Desktop.</h2>
          <p>Substitua os arquivos em <code>public/downloads</code> pelos instaladores oficiais e os botões já apontam para o lugar certo.</p>
        </div>
        <div className="downloadCards">
          <a className="downloadCard" href={apkUrl} download>
            <Smartphone size={36} />
            <h3>Download APK</h3>
            <p>Aplicativo para garçons e operação mobile.</p>
            <span>Baixar APK <Download size={17} /></span>
          </a>
          <a className="downloadCard" href={desktopUrl} download>
            <Laptop size={36} />
            <h3>Sistema Desktop</h3>
            <p>Instalador para computador da operação.</p>
            <span>Baixar Desktop <Download size={17} /></span>
          </a>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Pronto para colocar seu restaurante no digital?</h2>
          <p>Use o Movyo como central da operação e entregue uma experiência mais rápida, moderna e confiável.</p>
        </div>
        <a className="btn primary white" href={whatsappUrl}>Falar no WhatsApp <MessageCircle size={18} /></a>
      </section>

      <footer>
        <div className="brand footerBrand"><img src={logo} alt="Movyo" /><span>Movyo Delivery</span></div>
        <p>© {new Date().getFullYear()} Movyo Tecnologia. Sistema para restaurantes, delivery e atendimento digital.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
