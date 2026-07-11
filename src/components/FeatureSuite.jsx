import React from 'react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChefHat,
  CreditCard,
  Layers3,
  MessageCircleMore,
  MonitorSmartphone,
  PackageOpen,
  ReceiptText,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  Store,
  UtensilsCrossed,
  WalletCards,
} from 'lucide-react';

const groups = [
  {
    id: 'vendas',
    label: 'Venda e conversão',
    eyebrow: 'Mais pedidos concluídos',
    title: 'Recupere oportunidades e facilite o pagamento.',
    description:
      'A Movyo ajuda o restaurante a reduzir atritos antes, durante e depois do pedido, mantendo o cliente próximo do cardápio e tornando o pagamento mais simples.',
    metrics: [
      ['Jornada', 'mais direta'],
      ['Pagamento', 'no cardápio'],
      ['Retorno', 'automatizado'],
    ],
    features: [
      {
        icon: RefreshCw,
        title: 'Recuperador de vendas',
        text: 'Recupere clientes com mensagens automáticas e incentive o retorno ao cardápio para concluir uma compra interrompida ou realizar um novo pedido.',
        bullets: ['Mensagens automáticas', 'Retorno direto ao cardápio', 'Mais oportunidades de recompra'],
      },
      {
        icon: WalletCards,
        title: 'Pagamento Online',
        text: 'Receba por PIX ou cartão de crédito direto no cardápio digital. O cliente pede e paga na mesma experiência, com mais rapidez, segurança e praticidade.',
        bullets: ['Pagamento no checkout', 'Menos espera e conferência', 'Pedido vinculado ao pagamento'],
      },
    ],
  },
  {
    id: 'atendimento',
    label: 'Salão e atendimento',
    eyebrow: 'Operação integrada',
    title: 'Do garçom ao caixa, todos trabalham no mesmo fluxo.',
    description:
      'A equipe atende no salão, registra pedidos locais e por telefone, acompanha comandas e fecha o caixa sem depender de ferramentas separadas.',
    metrics: [
      ['Mesas', 'em tempo real'],
      ['Pedidos', 'centralizados'],
      ['Caixa', 'por operador'],
    ],
    features: [
      {
        icon: UtensilsCrossed,
        title: 'Aplicativo para Garçom',
        text: 'Visualize mesas ocupadas e disponíveis, adicione itens à comanda, edite pedidos, mova clientes entre mesas e feche a conta pelo próprio fluxo do atendimento.',
        bullets: ['Mapa de mesas', 'Comandas e itens', 'Permissões por usuário'],
      },
      {
        icon: MonitorSmartphone,
        title: 'PDV',
        text: 'Centralize pedidos do balcão, atendimento local e telefone em uma única ferramenta, simplificando a rotina da equipe e da produção.',
        bullets: ['Balcão e telefone', 'Fila única de pedidos', 'Impressão térmica integrada'],
      },
      {
        icon: ReceiptText,
        title: 'Frente de Caixa',
        text: 'Faça abertura e fechamento de caixa, suprimento, sangria, descontos e conferência por operador de forma simples, rápida e rastreável.',
        bullets: ['Abertura e fechamento', 'Sangria e suprimento', 'Resumo por caixa'],
      },
    ],
  },
  {
    id: 'gestao',
    label: 'Gestão e inteligência',
    eyebrow: 'Controle para crescer',
    title: 'Estoque, pedidos e resultados em uma visão única.',
    description:
      'A Movyo transforma a operação diária em informação útil para o gestor, conectando disponibilidade de produtos, consumo de ingredientes, canais de venda e relatórios.',
    metrics: [
      ['Estoque', 'por item/receita'],
      ['Canais', 'em uma fila'],
      ['Relatórios', 'em tempo real'],
    ],
    features: [
      {
        icon: PackageOpen,
        title: 'Controle de Estoque',
        text: 'Controle a ativação e a quantidade dos itens, configure regras para produtos esgotados e utilize a gestão por receita para baixar automaticamente os ingredientes usados em cada venda.',
        bullets: ['Quantidade por produto', 'Regra de item esgotado', 'Baixa por receita e ingrediente'],
      },
      {
        icon: BarChart3,
        title: 'Gestor de Pedidos e Relatórios',
        text: 'Tenha pedidos de canais diferentes em um só lugar e acompanhe faturamento, ticket médio, formas de pagamento, caixa e desempenho da operação.',
        bullets: ['Pedidos de vários canais', 'KPIs e relatórios', 'Visão por caixa e período'],
      },
    ],
  },
];

const faqs = [
  {
    question: 'Quantos dias de teste grátis a Movyo oferece?',
    answer:
      'A Movyo oferece 20 dias de teste grátis no plano Free. A conta nasce com status bloqueado para validação e liberação segura antes do uso comercial.',
  },
  {
    question: 'A Movyo cobra comissão por pedido?',
    answer:
      'Não. A Movyo não cobra comissão sobre cada pedido. As únicas cobranças variáveis são taxas transacionais quando um pagamento online é processado pelo provedor.',
  },
  {
    question: 'Existem taxas nos pagamentos online?',
    answer:
      'As únicas taxas transacionais são as cobradas pelo processamento dos pagamentos feitos dentro do cardápio digital, como PIX automatizado, cartão de crédito ou carteiras digitais habilitadas pelo provedor de pagamento.',
  },
  {
    question: 'O cliente consegue pagar sem falar com o restaurante?',
    answer:
      'Sim. O cliente pode concluir o pagamento diretamente no checkout do cardápio digital. Isso reduz espera, troca de comprovantes, cancelamentos e trabalho manual da equipe.',
  },
  {
    question: 'Os pedidos do salão, balcão e delivery ficam juntos?',
    answer:
      'Sim. O gestor de pedidos reúne os canais da operação em uma fila organizada, permitindo que atendimento, produção e gestão acompanhem o mesmo fluxo.',
  },
];

function FeatureIcon({ icon: Icon }) {
  return <div className="suite-feature-icon"><Icon /></div>;
}

export function FeatureSuite() {
  const [activeId, setActiveId] = React.useState(groups[0].id);
  const activeGroup = groups.find((group) => group.id === activeId) || groups[0];

  return (
    <section className="feature-suite section" id="recursos">
      <div className="section-title suite-title" data-reveal>
        <span className="eyebrow"><Sparkles size={15} /> Recursos para toda a operação</span>
        <h2>Uma plataforma que vende, atende e administra com o restaurante.</h2>
        <p>
          Da recuperação de clientes ao controle de estoque por receita, a Movyo conecta recursos comerciais e
          operacionais para reduzir retrabalho, aumentar conversão e dar mais clareza ao gestor.
        </p>
      </div>

      <div className="suite-shell glass" data-reveal>
        <div className="suite-tabs" role="tablist" aria-label="Categorias de recursos Movyo">
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={group.id === activeId}
              className={group.id === activeId ? 'active' : ''}
              onClick={() => setActiveId(group.id)}
            >
              {group.id === 'vendas' && <ShoppingBag />}
              {group.id === 'atendimento' && <ChefHat />}
              {group.id === 'gestao' && <Layers3 />}
              <span>{group.label}</span>
            </button>
          ))}
        </div>

        <div className="suite-content" key={activeGroup.id}>
          <div className="suite-intro">
            <span>{activeGroup.eyebrow}</span>
            <h3>{activeGroup.title}</h3>
            <p>{activeGroup.description}</p>

            <div className="suite-metrics">
              {activeGroup.metrics.map(([label, value]) => (
                <div key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <a className="btn btn-primary" href="#cadastro">
              Conhecer a Movyo <ArrowRight size={17} />
            </a>
          </div>

          <div className={`suite-feature-grid count-${activeGroup.features.length}`}>
            {activeGroup.features.map((feature) => (
              <article key={feature.title}>
                <FeatureIcon icon={feature.icon} />
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
                <div className="suite-feature-bullets">
                  {feature.bullets.map((bullet) => (
                    <span key={bullet}><CheckCircle2 /> {bullet}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="suite-flow" data-reveal>
        <div className="suite-flow-copy">
          <span className="eyebrow"><MessageCircleMore size={15} /> Venda que continua</span>
          <h3>O cliente saiu sem concluir? A Movyo ajuda a trazer essa oportunidade de volta.</h3>
          <p>
            O Recuperador de Vendas mantém o relacionamento ativo com mensagens automáticas e atalhos para o
            cardápio. Em vez de perder o interesse do cliente, o restaurante cria uma nova chance de conversão e recompra.
          </p>
        </div>
        <div className="recovery-demo" aria-label="Demonstração do recuperador de vendas">
          <div className="recovery-phone-head">
            <div><Store /></div>
            <span><strong>Movyo</strong><small>mensagem automática</small></span>
            <em>agora</em>
          </div>
          <div className="recovery-message">
            <p>Seu pedido ficou esperando por você 🍔</p>
            <span>Volte ao cardápio e finalize em poucos passos.</span>
          </div>
          <button type="button">Retornar ao cardápio <ArrowRight size={15} /></button>
          <div className="recovery-status"><CheckCircle2 /> Jornada automática e personalizada</div>
        </div>
      </div>

      <div className="pricing-faq" id="duvidas" data-reveal>
        <div className="pricing-card">
          <span className="eyebrow"><CreditCard size={15} /> Modelo transparente</span>
          <h3>Sem comissão por pedido. Taxas apenas no pagamento online.</h3>
          <p>
            A Movyo não cobra comissão sobre cada pedido realizado. As únicas taxas transacionais são cobradas quando
            um pagamento online é processado dentro do cardápio digital, como PIX automatizado, cartão de crédito ou
            carteiras digitais habilitadas pelo provedor. Essas taxas podem variar de R$ 0,20 a R$ 0,50 conforme o
            acordo comercial e o provedor de pagamento.
          </p>
          <div className="pricing-points">
            <span><CheckCircle2 /> Sem comissão por pedido no canal próprio</span>
            <span><CheckCircle2 /> Pedidos ilimitados conforme o plano contratado</span>
            <span><CheckCircle2 /> Integração com iFood como diferencial operacional</span>
            <span><CheckCircle2 /> Gestão de entregadores com app incluso para entregadores</span>
            <span><CheckCircle2 /> Taxas transacionais apenas no pagamento online, geralmente entre R$ 0,20 e R$ 0,50</span>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span>+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
