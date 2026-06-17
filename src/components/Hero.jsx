import { ArrowRight, BellRing, Clock3, MonitorSmartphone, Rocket, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';
import logo from '../assets/logo.png';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy" data-reveal>
        <div className="pill"><Sparkles size={16} /> Movyo Delivery • plataforma completa para restaurantes</div>
        <h1>O sistema que organiza atendimento, pedidos e gestão do restaurante de ponta a ponta.</h1>
        <p>
          A Movyo entrega uma operação conectada: desktop para atendimento e produção, Hub mobile para equipe e gestor,
          vitrine própria, balcão, caixa, relatórios, notificações e acompanhamento em tempo real.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-xl" href="#cadastro"><Rocket size={20} /> Criar conta grátis <small>7 dias no plano Free</small></a>
          <a className="btn btn-ghost btn-xl" href="#solucao">Ver recursos <ArrowRight size={18} /></a>
        </div>
        <div className="hero-badges">
          <span><MonitorSmartphone /> Desktop + Hub integrados</span>
          <span><Clock3 /> Ativação rápida</span>
          <span><ShieldCheck /> Conta segura</span>
          <span><BellRing /> Notificações em tempo real</span>
        </div>
      </div>
      <div className="hero-visual" data-reveal>
        <div className="glow glow-a" />
        <div className="desktop-card">
          <div className="screen-top"><img src={logo} alt="" /><span>Movyo Food Desktop</span><i /></div>
          <div className="kpi-row">
            <div><small>Faturamento do turno</small><strong>R$ 3.482</strong><em>tempo real</em></div>
            <div><small>Pedidos em andamento</small><strong>124</strong><em>fila viva</em></div>
            <div><small>Tempo médio</small><strong>12 min</strong><em>operação</em></div>
          </div>
          <div className="bars"><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="queue">
            <b>Central da operação</b>
            <p><i /> Produção, balcão e vitrine em uma única fila</p>
            <p><i /> Impressão térmica integrada ao programa</p>
            <p><i /> Status do caixa, pedidos e atendimento em tempo real</p>
          </div>
        </div>
        <div className="phone-card">
          <div className="phone-head"><Smartphone size={16} /> Movyo Hub</div>
          <div className="mini-grid"><span>Pedidos<br/><b>33</b></span><span>Caixa<br/><b>Aberto</b></span></div>
          <div className="phone-item"><BellRing size={16} /> Novo pedido recebido</div>
          <div className="phone-item"><MonitorSmartphone size={16} /> Gestor acompanhando em tempo real</div>
        </div>
      </div>
    </section>
  );
}
