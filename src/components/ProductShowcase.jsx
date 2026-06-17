import React from 'react';
import {
  BellRing,
  Bot,
  CheckCircle2,
  Maximize2,
  MessageCircle,
  Minimize2,
  MonitorSmartphone,
  PlayCircle,
  Sparkles,
  Smartphone,
  TimerReset,
  X,
} from 'lucide-react';
import logo from '../assets/logo.png';

const iosShots = [
  '/showcase/ios-home-kpis.jpg',
  '/showcase/ios-home-actions.jpg',
  '/showcase/ios-orders.jpg',
];

const androidShots = [
  '/showcase/android-dashboard.jpg',
  '/showcase/android-license.jpg',
  '/showcase/android-orders.jpg',
  '/showcase/android-profile.jpg',
];

const notifications = [
  { title: 'Pedido entrou em produção', text: '#BK00329 • Reziane • R$ 24,00', time: 'agora' },
  { title: 'Novo pedido recebido', text: '#BK00331 • Luana • R$ 31,00', time: 'há 1 min' },
  { title: 'Caixa aberto com sucesso', text: 'Operador Hélio • 19:02', time: 'há 3 min' },
];

const experienceCards = [
  {
    icon: CheckCircle2,
    title: 'Desktop como central da operação',
    text: 'Produção, fila, impressão, vitrine, status e indicadores reunidos no computador.',
  },
  {
    icon: Smartphone,
    title: 'Hub mobile para equipe e gestor',
    text: 'Acompanhamento pelo celular com iPhone via PWA e Android na Play Store ou APK.',
  },
  {
    icon: BellRing,
    title: 'Alertas realmente úteis',
    text: 'Pedidos, produção e eventos importantes chegando de forma clara e profissional.',
  },
  {
    icon: TimerReset,
    title: 'Operação sincronizada em tempo real',
    text: 'Desktop, Hub, caixa, fila e pedidos atualizados para toda a equipe.',
  },
];

function DeviceMovy() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`device-movy ${open ? 'open' : ''}`}>
      {open && (
        <div className="device-movy-window">
          <div className="device-movy-head">
            <div>
              <strong>Movy</strong>
              <small>assistente da Movyo</small>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Minimizar Movy">
              <Minimize2 size={14} />
            </button>
          </div>
          <div className="device-movy-body">
            <div className="device-movy-msg">Oi :) Posso explicar planos, Hub, desktop, impressão e operação da Movyo.</div>
            <div className="device-movy-msg user">Quero entender como funciona no meu restaurante.</div>
          </div>
        </div>
      )}
      <button
        type="button"
        className="device-movy-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Fechar Movy' : 'Abrir Movy'}
      >
        {open ? <X size={16} /> : <><Bot size={16} /><span>Movy</span></>}
      </button>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section className="showcase section" id="demo">
      <div className="section-title showcase-title" data-reveal>
        <span className="eyebrow"><MonitorSmartphone size={15} /> Movyo em operação real</span>
        <h2>Uma apresentação de produção, pronta para vender a Movyo com mais força.</h2>
        <p>
          A Movyo foi pensada para unir computador, operação mobile, vitrine online, caixa, pedidos,
          impressão e acompanhamento em tempo real. Nesta seção, o foco principal é mostrar a força do
          ecossistema no dia a dia do restaurante, com visual mais premium e comunicação clara.
        </p>
      </div>

      <div className="showcase-premium glass" data-reveal>
        <div className="showcase-copy">
          <span className="pill"><Sparkles size={15} /> Demonstração premium</span>
          <h3>Mais controle no computador. Mais agilidade no celular. Tudo conectado.</h3>
          <p>
            A experiência comercial da Movyo precisa mostrar valor logo de cara: o computador como central
            de atendimento e gestão, e o Hub no celular como extensão da equipe em tempo real.
          </p>

          <div className="showcase-bullets">
            {experienceCards.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <div className="showcase-bullet-icon"><Icon size={18} /></div>
                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="showcase-theater" aria-label="Demonstração do Movyo Hub em iOS e Android">
          <div className="theater-glow theater-glow-a" />
          <div className="theater-glow theater-glow-b" />

          <div className="device-card device-card-ios">
            <div className="device-chip"><Smartphone size={14} /> iOS</div>
            <div className="device-shell">
              <div className="device-notch" />
              <div className="device-screen clean-swaps">
                {iosShots.map((shot, index) => (
                  <img key={shot} src={shot} alt="Tela do Movyo Hub no iPhone" style={{ '--i': index }} />
                ))}
              </div>
            </div>
          </div>

          <div className="device-card device-card-android">
            <div className="device-chip chip-android"><Smartphone size={14} /> Android</div>
            <div className="device-shell android-shell">
              <div className="device-camera" />
              <div className="device-screen clean-swaps delay">
                {androidShots.map((shot, index) => (
                  <img key={shot} src={shot} alt="Tela do Movyo Hub no Android" style={{ '--i': index }} />
                ))}
                <DeviceMovy />
              </div>
            </div>
          </div>

          <div className="notify-dock">
            <div className="notify-dock-head">
              <div>
                <span><BellRing size={15} /> Notificações em tempo real</span>
                <small>Push claro para novos pedidos, produção e eventos do caixa</small>
              </div>
              <em>Movyo Hub</em>
            </div>
            <div className="notify-dock-list">
              {notifications.map((item) => (
                <article key={item.title}>
                  <div className="notify-icon-wrap">
                    <img src={logo} alt="Movyo" />
                  </div>
                  <div>
                    <b>{item.title}</b>
                    <small>{item.text}</small>
                  </div>
                  <time>{item.time}</time>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="video-experience glass" data-reveal>
        <div className="video-copy">
          <span className="eyebrow"><PlayCircle size={15} /> Fluxo real em vídeo</span>
          <h3>O movimento do produto ajuda o restaurante a confiar mais rápido na solução.</h3>
          <p>
            Use este bloco para mostrar o Movyo Hub funcionando de verdade. Ele reforça a percepção de que
            a plataforma está pronta para produção, tem identidade forte e entrega uma operação moderna.
          </p>

          <div className="video-points">
            <span><CheckCircle2 size={16} /> Hub para gestor e equipe no dia a dia</span>
            <span><CheckCircle2 size={16} /> Pedidos, fila e caixa em tempo real</span>
            <span><CheckCircle2 size={16} /> Instalação iPhone, Play Store, APK e desktop Windows</span>
          </div>
        </div>

        <div className="video-device-wrap">
          <div className="video-device-frame">
            <div className="video-device-top">
              <span />
              <span />
              <span />
            </div>
            <video src="/showcase/movyo-hub-demo.mp4" autoPlay muted loop playsInline controls />
          </div>
          <div className="video-floating-card card-one">
            <strong>Movyo Hub</strong>
            <small>Operação móvel para pedidos, acompanhamento, caixa e produtividade da equipe.</small>
          </div>
          <div className="video-floating-card card-two">
            <strong>Movyo Food Desktop</strong>
            <small>Programa principal de atendimento com impressão térmica já integrada na instalação.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MovyChat() {
  const [open, setOpen] = React.useState(true);
  const [minimized, setMinimized] = React.useState(false);

  if (!open) {
    return (
      <button className="movy-fab" type="button" onClick={() => { setOpen(true); setMinimized(false); }} aria-label="Abrir chat Movy">
        <Bot size={22} />
        <span>Movy</span>
      </button>
    );
  }

  return (
    <aside className={`movy-chat ${minimized ? 'minimized' : ''}`} aria-label="Chat de IA Movy" data-reveal>
      <div className="movy-chat-header">
        <div className="movy-bot">
          <div className="movy-avatar"><Bot size={28} /></div>
          <div>
            <strong>Movy</strong>
            <small>assistente da Movyo</small>
          </div>
        </div>
        <div className="movy-header-actions">
          <button type="button" onClick={() => setMinimized((value) => !value)} aria-label={minimized ? 'Expandir chat' : 'Minimizar chat'}>
            {minimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button type="button" onClick={() => setOpen(false)} aria-label="Fechar chat">
            <X size={16} />
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          <div className="movy-conversation">
            <div className="movy-bubble">Olá! Eu sou o Movy :) Posso apresentar planos, instalação, Hub, desktop, vitrine, pedidos, impressão e WhatsApp.</div>
            <div className="movy-bubble user">Quero organizar meu delivery e minha operação no balcão.</div>
            <div className="movy-bubble">Perfeito. A Movyo reúne vitrine própria, caixa, pedidos, Hub mobile, desktop Windows, impressão térmica e gestão em tempo real para o restaurante operar melhor.</div>
          </div>

          <div className="movy-input-fake">
            <span>Pergunte ao Movy...</span>
            <a className="btn btn-primary" href="#cadastro">Começar</a>
          </div>
        </>
      )}
    </aside>
  );
}
