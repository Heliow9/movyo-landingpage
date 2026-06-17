import { MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import { config } from '../config';

export function Footer() {
  return (
    <footer className="footer glass" id="contato">
      <div>
        <img src={logo} alt="Movyo" />
        <p>
          Movyo Delivery é a plataforma completa para restaurantes venderem com mais organização: desktop,
          Hub mobile, vitrine própria, caixa, pedidos, impressão térmica, notificações e gestão em tempo real.
        </p>
      </div>
      <div>
        <b>Produto</b>
        <a href="#solucao">Solução</a>
        <a href="#pagamentos">Pagamentos digitais</a>
        <a href="#cadastro">Cadastro Free</a>
        <a href="#downloads">Downloads</a>
      </div>
      <div>
        <b>Plataforma</b>
        <a href={config.hubUrl}>Movyo Hub</a>
        <a href={config.desktopUrl}>Movyo Food Desktop</a>
        <a href="#instalar-hub">Instalar no iPhone</a>
      </div>
      <div>
        <b>Atendimento</b>
        <a href={config.whatsappUrl}>WhatsApp comercial</a>
        <a href="mailto:contato@movyo.delivery">contato@movyo.delivery</a>
        <small>© 2026 Movyo. Todos os direitos reservados.</small>
      </div>
      <a className="float-whatsapp" href={config.whatsappUrl} aria-label="Chamar no WhatsApp"><MessageCircle /></a>
    </footer>
  );
}
