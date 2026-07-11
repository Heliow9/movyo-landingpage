import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CloudCog,
  CreditCard,
  MessageCircle,
  Printer,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Truck,
} from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const integrations = [
  {
    icon: CreditCard,
    title: 'Pagamentos digitais',
    text: 'Base para PIX, cartão e conciliação do pedido com o status de pagamento, reduzindo validação manual no atendimento.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp e recuperação',
    text: 'Relacionamento, retorno ao cardápio e recuperação de oportunidades para transformar abandono em nova chance de compra.',
  },
  {
    icon: ShoppingBag,
    title: 'Integração com iFood',
    text: 'O iFood entra como diferencial do ecossistema, permitindo que pedidos do marketplace sejam tratados junto com os demais canais da operação.',
  },
  {
    icon: Truck,
    title: 'App para entregadores',
    text: 'Gestão de entregadores com aplicativo incluso para apoiar a rotina de entrega própria, acompanhamento e organização dos pedidos em rota.',
  },
  {
    icon: Printer,
    title: 'Impressão térmica',
    text: 'O desktop Windows concentra atendimento e produção com impressão integrada ao fluxo operacional do restaurante.',
  },
  {
    icon: Smartphone,
    title: 'Hub Android e iOS/PWA',
    text: 'Equipe e gestor acompanham pedidos, caixa e alertas no celular, com instalação via Play Store, APK ou tela inicial no iPhone.',
  },
  {
    icon: CloudCog,
    title: 'API e operação em nuvem',
    text: 'Cadastro, pedidos, licenças, Hub e desktop podem trabalhar em uma base conectada para evoluir integrações futuras.',
  },
  {
    icon: Bot,
    title: 'Movy e automações',
    text: 'A marca já apresenta um assistente para explicar planos, recursos e jornada de implantação com linguagem simples.',
  },
];

const improvements = [
  'Marcar eventos de conversão no GA4 para cadastro, WhatsApp, Hub e downloads.',
  'Separar páginas SEO por recurso para cada integração ganhar uma URL própria.',
  'Acompanhar origem de cada lead com UTM e evento, não apenas com o campo origem da API.',
  'Criar dashboards comerciais por campanha, canal, cidade, segmento e recurso clicado.',
];

export function IntegrationSuite() {
  return (
    <section className="integration-section section" id="integracoes">
      <SectionTitle
        eyebrow="Integrações e automações"
        title="Integrações que reduzem etapas manuais e deixam o lead enxergar valor antes do contato."
        text="A Movyo deve comunicar integração como ganho operacional: iFood dentro do fluxo, entregadores com app incluso, pagamento conectado ao pedido, WhatsApp ligado ao relacionamento e Hub sincronizado com desktop."
      />

      <div className="integration-shell glass" data-reveal>
        <div className="integration-grid">
          {integrations.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <div><Icon /></div>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <aside className="integration-roadmap">
          <span className="eyebrow"><RefreshCw size={15} /> Melhorias aplicadas ao fluxo</span>
          <h3>O site passa a medir e explicar melhor cada ponto de valor.</h3>
          <p>
            A partir de agora, o funil deve separar curiosidade de intenção real: quem clica no WhatsApp, quem abre o Hub,
            quem baixa instaladores e quem chega ao formulário.
          </p>
          <div className="integration-checks">
            {improvements.map((item) => (
              <span key={item}><CheckCircle2 /> {item}</span>
            ))}
          </div>
          <a className="btn btn-primary" href="#cadastro">
            Começar teste de 20 dias <ArrowRight size={17} />
          </a>
          <small><ShieldCheck size={14} /> Leads mais rastreáveis e decisão comercial mais clara.</small>
        </aside>
      </div>
    </section>
  );
}
