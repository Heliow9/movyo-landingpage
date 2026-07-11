import {
  BadgeCheck,
  CheckCircle2,
  Layers3,
  PackageCheck,
  RefreshCw,
  Scale,
  Smartphone,
  Store,
  Truck,
  WalletCards,
  X,
} from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const advantages = [
  {
    icon: Scale,
    title: 'Sem comissão por pedido',
    text: 'A Movyo não cobra comissão sobre cada pedido. Taxas existem apenas quando há pagamento online processado por provedor, como PIX, cartão ou carteiras digitais.',
  },
  {
    icon: Layers3,
    title: 'Operação em uma fila',
    text: 'Delivery, balcão, salão, mesas, caixa, produção e relatórios ficam conectados para reduzir retrabalho e perda de informação.',
  },
  {
    icon: Smartphone,
    title: 'Desktop + Hub mobile',
    text: 'O computador centraliza a rotina e o Hub leva pedidos, alertas e gestão para celular Android, iPhone/PWA e equipe em movimento.',
  },
  {
    icon: WalletCards,
    title: 'Pagamento no checkout',
    text: 'PIX, cartão e status de pagamento podem caminhar junto com o pedido, reduzindo comprovantes soltos e confirmações manuais.',
  },
  {
    icon: PackageCheck,
    title: 'Estoque por receita',
    text: 'A gestão pode baixar ingredientes conforme a venda, ajudando a controlar disponibilidade e produtos esgotados com mais critério.',
  },
  {
    icon: Store,
    title: 'Marca própria em primeiro lugar',
    text: 'A vitrine própria fortalece o restaurante, melhora recorrência e abre espaço para campanhas, WhatsApp e recuperação de vendas.',
  },
  {
    icon: RefreshCw,
    title: 'Integração com iFood',
    text: 'Pedidos do iFood podem entrar no fluxo operacional da Movyo, conectando marketplace, produção, caixa e gestão em uma rotina mais organizada.',
  },
  {
    icon: Truck,
    title: 'Gestão de entregadores',
    text: 'A Movyo também cobre a entrega própria, com gestão de entregadores e app incluso para o entregador acompanhar sua rotina de pedidos.',
  },
];

const comparison = [
  ['Custo por venda', 'Comissão por pedido, taxas altas ou regras externas do canal', 'Sem comissão por pedido; taxas só no pagamento online, podendo variar de R$ 0,20 a R$ 0,50'],
  ['Atendimento', 'Ferramentas separadas para salão, balcão e delivery', 'Pedidos centralizados para equipe, caixa e produção'],
  ['Gestão', 'Relatórios desconectados ou muito básicos', 'KPIs, caixa, formas de pagamento e operação em tempo real'],
  ['Canais de venda', 'Marketplace e canal próprio tratados como rotinas separadas', 'Vitrine própria, WhatsApp e integração com iFood no fluxo'],
  ['Entrega', 'Controle manual do entregador e pouca visão do andamento', 'Gestão de entregadores com app incluso para a operação de entrega'],
  ['Expansão', 'Integrações travadas ou pouco flexíveis', 'Base preparada para pagamentos, iFood, WhatsApp, Hub, desktop e automações'],
];

export function CompetitiveAdvantages() {
  return (
    <section className="competitive-section section" id="diferenciais">
      <SectionTitle
        eyebrow="Diferenciais competitivos"
        title="Mais controle para vender, atender, integrar canais e gerenciar entregas."
        text="A Movyo organiza canal próprio, iFood, atendimento, entrega, pagamento e gestão em uma única operação, sem comissão por pedido e com taxas transacionais apenas quando há pagamento online."
      />

      <div className="advantage-grid">
        {advantages.map(({ icon: Icon, title, text }, index) => (
          <article className="advantage-card glass" key={title} data-reveal style={{ '--delay': `${index * 45}ms` }}>
            <div className="advantage-icon"><Icon /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="comparison-panel glass" data-reveal>
        <div className="comparison-copy">
          <span className="eyebrow"><BadgeCheck size={15} /> Comparativo comercial</span>
          <h3>O que muda quando o restaurante sai do improviso e entra em um ecossistema próprio?</h3>
          <p>
            A Movyo deve ser apresentada como uma plataforma para ganhar controle: menos dependência, menos conferência manual,
            mais visibilidade operacional e uma jornada mais profissional para o cliente final.
          </p>
        </div>

        <div className="comparison-table" aria-label="Comparativo da Movyo com sistemas comuns">
          <div className="comparison-row head">
            <span>Critério</span>
            <span>Sistemas comuns</span>
            <span>Movyo</span>
          </div>
          {comparison.map(([criterion, common, movyo]) => (
            <div className="comparison-row" key={criterion}>
              <strong>{criterion}</strong>
              <span><X size={16} /> {common}</span>
              <span><CheckCircle2 size={16} /> {movyo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
