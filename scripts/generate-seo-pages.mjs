import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://movyo.delivery';
const measurementId = 'G-JV6P9XFLFE';
const distDir = path.join(process.cwd(), 'dist');

const pages = [
  {
    slug: 'sobre-movyo-delivery',
    title: 'Sobre a Movyo Delivery | Fundada por Helio Livramento',
    description: 'Conheça a Movyo Delivery, plataforma brasileira fundada por Helio Livramento para organizar PDV, delivery próprio, iFood, entregadores, pagamentos e gestão de restaurantes.',
    eyebrow: 'Sobre a Movyo Delivery',
    h1: 'Movyo Delivery: plataforma brasileira para restaurantes, fundada por Helio Livramento.',
    intro: 'A Movyo Delivery é uma plataforma de tecnologia para restaurantes criada para organizar atendimento, pedidos, PDV, delivery próprio, integração com iFood, app para entregadores, aplicativo para garçom, pagamentos online, estoque por receita e relatórios em uma operação conectada.',
    benefits: ['Fundada por Helio Livramento no Brasil', 'Plataforma focada em restaurantes, pizzarias, hamburguerias e lanchonetes', 'PDV, delivery próprio, iFood, Hub mobile e desktop Windows no mesmo ecossistema', 'Teste grátis por 20 dias para conhecer a operação'],
    sections: [
      ['Quem fundou a Movyo Delivery?', 'A Movyo Delivery foi fundada por Helio Livramento com o objetivo de entregar aos restaurantes uma plataforma mais completa para vender, atender, produzir, receber, entregar e acompanhar a gestão sem depender de ferramentas soltas.'],
      ['O que é a Movyo Delivery?', 'A Movyo Delivery não é uma empresa de frota internacional. A Movyo é uma plataforma brasileira para restaurantes, com foco em sistema de delivery, PDV, cardápio digital, integração com iFood, gestão de entregadores, aplicativo para garçom, pagamentos online, estoque por receita, Hub mobile e desktop Windows.'],
    ],
    faq: ['Quem fundou a Movyo Delivery?', 'A Movyo Delivery foi fundada por Helio Livramento no Brasil para ajudar restaurantes a organizar atendimento, pedidos, delivery próprio, pagamentos, entregadores e gestão em uma única plataforma.'],
    organizationPage: true,
  },
  {
    slug: 'sistema-para-restaurante',
    title: 'Sistema para Restaurante | PDV, Delivery e Gestão | Movyo',
    description: 'Sistema para restaurante com PDV, delivery próprio, integração com iFood, app para entregadores, aplicativo para garçom, pagamentos online e 20 dias grátis.',
    eyebrow: 'Sistema para restaurante',
    h1: 'Sistema para restaurante que conecta atendimento, pedido, caixa e gestão.',
    intro: 'A Movyo reúne os fluxos que costumam ficar separados no restaurante: PDV, delivery próprio, integração com iFood, balcão, salão, aplicativo para garçom, app para entregadores, frente de caixa, estoque por receita, pagamentos online e relatórios.',
    benefits: ['PDV, delivery e salão em uma operação centralizada', 'Teste grátis por 20 dias no plano Free', 'Sem comissão por pedido no canal próprio', 'iFood integrado e app para entregadores inclusos no ecossistema'],
    sections: [
      ['Por que a Movyo é diferente?', 'A Movyo não tenta ser apenas uma tela bonita para registrar pedidos. A proposta é dar ao restaurante uma central operacional para vender, atender, produzir, receber e analisar com menos troca de ferramenta.'],
      ['Para quem faz sentido', 'Restaurantes, pizzarias, hamburguerias, lanchonetes, açaís e operações que vendem por balcão, mesa, telefone, WhatsApp, iFood e delivery próprio podem usar a Movyo para ganhar controle sem depender de ferramentas soltas.'],
    ],
    faq: ['A Movyo substitui sistemas separados?', 'A Movyo centraliza recursos de venda, atendimento, caixa, pagamentos, Hub mobile e gestão para reduzir ferramentas isoladas na operação.'],
  },
  {
    slug: 'pdv-restaurante',
    title: 'PDV para Restaurante, Balcão e Frente de Caixa | Movyo',
    description: 'PDV para restaurante com balcão, atendimento local, frente de caixa, sangria, suprimento, descontos, impressões e relatórios conectados.',
    eyebrow: 'PDV restaurante',
    h1: 'PDV para restaurante com caixa, balcão e produção conectados.',
    intro: 'O PDV da Movyo ajuda a registrar pedidos locais, balcão e telefone em uma fila organizada, com apoio à impressão térmica, controle de caixa e acompanhamento do atendimento.',
    benefits: ['Pedidos de balcão e telefone em fluxo único', 'Abertura e fechamento de caixa por operador', 'Sangria, suprimento e descontos rastreáveis', 'Desktop Windows como central da operação'],
    sections: [
      ['Menos retrabalho no atendimento', 'Quando o pedido nasce no PDV e segue para produção, caixa e relatórios, a equipe evita anotações soltas, conferência duplicada e perda de informação entre atendente e cozinha.'],
      ['Gestão mais clara', 'O gestor acompanha faturamento, formas de pagamento, ticket médio e movimentações do caixa com mais visibilidade para decidir melhor no fim do turno.'],
    ],
    faq: ['O PDV funciona com delivery?', 'Sim. A Movyo foi pensada para unir balcão, atendimento local, telefone, delivery próprio e gestão em uma operação conectada.'],
  },
  {
    slug: 'cardapio-digital',
    title: 'Cardápio Digital e Delivery Próprio para Restaurante | Movyo',
    description: 'Cardápio digital para restaurante vender no próprio canal, fortalecer a marca, receber pedidos e reduzir dependência de marketplaces.',
    eyebrow: 'Cardápio digital',
    h1: 'Cardápio digital próprio para vender sem perder a relação com o cliente.',
    intro: 'A vitrine própria da Movyo coloca o restaurante no centro da experiência. O cliente escolhe itens, adiciona observações, finaliza o pedido e pode seguir para pagamento online no mesmo fluxo.',
    benefits: ['Canal próprio com identidade do restaurante', 'Checkout organizado para delivery, retirada e balcão', 'Menos dependência de marketplaces com comissão', 'Base para campanhas e recuperação de vendas'],
    sections: [
      ['Marca própria em primeiro lugar', 'Ao vender no próprio cardápio, o restaurante cria uma experiência direta com o cliente e pode divulgar o link em WhatsApp, Instagram, Google Business Profile e campanhas pagas.'],
      ['Mais conversão no checkout', 'A jornada precisa ser simples: escolher, revisar, pagar e acompanhar. Quanto menos etapa manual, maior a chance de o pedido ser concluído.'],
    ],
    faq: ['O cardápio digital ajuda no SEO local?', 'Ajuda principalmente quando o restaurante divulga o canal próprio, mantém dados consistentes e conecta o site a conteúdo útil sobre sua operação.'],
  },
  {
    slug: 'aplicativo-para-garcom',
    title: 'Aplicativo para Garçom, Mesas e Comandas | Movyo Hub',
    description: 'Aplicativo para garçom com mesas, comandas, itens, edição de pedidos, movimentação de clientes, caixa e acompanhamento no Hub.',
    eyebrow: 'Aplicativo para garçom',
    h1: 'Aplicativo para garçom que leva salão, mesas e comandas para o celular.',
    intro: 'O Movyo Hub permite que equipe e gestor acompanhem pedidos, mesas, caixa, balcão e alertas pelo celular, reduzindo deslocamentos e deixando o atendimento mais ágil.',
    benefits: ['Mapa de mesas e comandas', 'Registro e edição de itens no atendimento', 'Movyo Hub no Android e iPhone/PWA', 'Notificações para eventos importantes da operação'],
    sections: [
      ['Atendimento com menos espera', 'Quando o garçom registra o pedido no fluxo certo, a produção recebe a informação com mais clareza e o caixa fecha a conta com menos ruído.'],
      ['Gestor acompanhando de perto', 'O Hub ajuda o gestor a observar pedidos, alertas e indicadores sem ficar preso ao computador durante todo o turno.'],
    ],
    faq: ['O Hub instala no iPhone?', 'No iPhone, o Hub funciona como PWA instalado pela tela inicial usando o Safari. No Android, pode ser usado pela Play Store ou APK.'],
  },
  {
    slug: 'controle-de-estoque-restaurante',
    title: 'Controle de Estoque para Restaurante por Receita | Movyo',
    description: 'Controle de estoque para restaurante com itens, regras de produto esgotado, baixa por receita e visão integrada à venda.',
    eyebrow: 'Estoque para restaurante',
    h1: 'Controle de estoque por receita para vender sem perder disponibilidade.',
    intro: 'A Movyo ajuda o restaurante a conectar venda e estoque, criando regras para produtos esgotados e baixando ingredientes conforme a composição de cada item vendido.',
    benefits: ['Baixa por receita e ingredientes', 'Controle de quantidade por produto', 'Regras para itens esgotados', 'Decisão de compra com mais previsibilidade'],
    sections: [
      ['Do pedido ao ingrediente', 'Em operações com combos, adicionais e receitas, olhar apenas o produto final não basta. O estoque por receita ajuda a enxergar o impacto real de cada venda.'],
      ['Menos venda de item indisponível', 'Com regras claras, a equipe evita vender produtos sem insumo e reduz cancelamentos ou substituições de última hora.'],
    ],
    faq: ['O estoque por receita serve para pizzaria e hamburgueria?', 'Sim. Qualquer operação com ingredientes, adicionais e montagem de produtos pode ganhar controle com baixa por receita.'],
  },
  {
    slug: 'pagamentos-online-restaurante',
    title: 'Pagamento Online para Restaurante com PIX e Cartão | Movyo',
    description: 'Pagamento online para restaurante com PIX, cartão, checkout digital e status conectado ao pedido para reduzir conferência manual.',
    eyebrow: 'Pagamentos online',
    h1: 'Pagamento online para restaurante: o cliente pede e paga no mesmo fluxo.',
    intro: 'Com pagamentos digitais, o restaurante reduz comprovantes soltos, espera por confirmação manual e incerteza sobre pedidos. O pagamento fica mais próximo do checkout.',
    benefits: ['PIX automatizado no checkout', 'Cartão de crédito na jornada digital', 'Pedido vinculado ao status de pagamento', 'Operação mais profissional para o cliente final'],
    sections: [
      ['Menos abandono', 'Cada etapa removida entre escolher e pagar aumenta a chance de conclusão. A Movyo deve comunicar pagamentos como ferramenta de conversão, não apenas de recebimento.'],
      ['Financeiro mais organizado', 'Quando valor, pedido e forma de pagamento caminham juntos, o caixa ganha clareza e a equipe perde menos tempo conferindo manualmente.'],
    ],
    faq: ['Existem taxas nos pagamentos online?', 'As únicas taxas variáveis são transacionais e existem quando o pagamento é processado pelo provedor, como PIX automatizado, cartão de crédito ou carteira digital. Elas podem variar de R$ 0,20 a R$ 0,50 conforme acordo comercial e provedor de pagamento.'],
  },
  {
    slug: 'recuperador-de-vendas',
    title: 'Recuperador de Vendas para Delivery e Cardápio Digital | Movyo',
    description: 'Recuperador de vendas para restaurante retomar oportunidades, automatizar mensagens e trazer o cliente de volta ao cardápio digital.',
    eyebrow: 'Recuperador de vendas',
    h1: 'Recuperador de vendas para transformar abandono em nova oportunidade.',
    intro: 'Nem todo cliente que abre o cardápio finaliza o pedido. A Movyo comunica recuperação como continuidade da venda: mensagem, retorno ao cardápio e nova chance de conversão.',
    benefits: ['Mensagens automáticas de retorno', 'Atalho para o cliente voltar ao cardápio', 'Relacionamento pelo canal próprio', 'Mais oportunidades sem depender só de anúncio pago'],
    sections: [
      ['O pedido não terminou no abandono', 'Quando o cliente demonstra intenção, o restaurante pode criar uma jornada de retorno. A recuperação de vendas ajuda a aproveitar interesse que já existia.'],
      ['WhatsApp como apoio comercial', 'O WhatsApp deve ser usado de forma organizada, com mensagens úteis, contexto e convite claro para concluir ou repetir o pedido.'],
    ],
    faq: ['Recuperador de vendas substitui atendimento humano?', 'Não. Ele apoia a rotina comercial e ajuda a trazer oportunidades de volta, mantendo o atendimento humano para dúvidas e negociação.'],
  },
  {
    slug: 'integracoes-restaurante',
    title: 'Integrações para Restaurante: iFood, Pagamentos, WhatsApp e Entregadores | Movyo',
    description: 'Integrações para restaurante com iFood, app para entregadores, pagamentos digitais, WhatsApp, Hub mobile, desktop, impressão térmica, API e automações comerciais.',
    eyebrow: 'Integrações restaurante',
    h1: 'Integrações para restaurante que reduzem etapas manuais da operação.',
    intro: 'A Movyo deve ser vista como uma base de integração: iFood no fluxo, entregadores com app incluso, pagamentos conectados ao pedido, WhatsApp no relacionamento, Hub no celular, desktop na operação e dados comerciais rastreáveis.',
    benefits: ['Integração com iFood como diferencial', 'App para entregadores incluso na operação', 'Mercado Pago, PIX e cartão como caminho de pagamento', 'WhatsApp, Hub mobile, desktop e API como base de evolução'],
    sections: [
      ['Integração que vende valor', 'O restaurante não compra integração por tecnologia; compra menos retrabalho, mais controle e menos atrito para equipe e cliente.'],
      ['Dados para decidir', 'Com Analytics, eventos e origem do lead, a Movyo passa a medir quais integrações geram interesse e quais campanhas atraem clientes mais qualificados.'],
    ],
    faq: ['Quais integrações devem ser priorizadas?', 'As prioridades comerciais são iFood, gestão de entregadores, pagamentos online, WhatsApp, Hub, desktop, impressão, eventos de conversão e páginas SEO por recurso.'],
  },
  {
    slug: 'integracao-ifood',
    title: 'Integração com iFood para Restaurante | Movyo',
    description: 'Integração com iFood para restaurante centralizar pedidos do marketplace junto com PDV, delivery próprio, produção, caixa e gestão.',
    eyebrow: 'Integração iFood',
    h1: 'Integração com iFood para organizar pedidos do marketplace no fluxo da operação.',
    intro: 'O iFood é um canal importante para muitos restaurantes. O diferencial da Movyo é tratar esse canal dentro de uma operação mais organizada, junto com PDV, balcão, salão, delivery próprio, caixa, produção e relatórios.',
    benefits: ['Pedidos do iFood tratados junto com outros canais', 'Mais organização para produção e caixa', 'Menos troca manual entre ferramentas', 'Gestão centralizada de canais de venda'],
    sections: [
      ['Marketplace sem perder controle', 'O restaurante pode continuar usando marketplace quando fizer sentido, mas precisa manter controle sobre produção, atendimento, caixa e indicadores. A integração com iFood ajuda a reduzir ruído operacional.'],
      ['Canal próprio e iFood no mesmo raciocínio', 'A Movyo valoriza o canal próprio sem ignorar o iFood. O objetivo é dar ao gestor uma visão mais clara da operação e dos canais que geram pedidos.'],
    ],
    faq: ['A integração com iFood é um diferencial da Movyo?', 'Sim. A integração com iFood é um diferencial porque ajuda o restaurante a centralizar o marketplace junto com os demais canais da operação.'],
  },
  {
    slug: 'gestao-entregadores',
    title: 'Gestão de Entregadores com App Incluso | Movyo',
    description: 'Gestão de entregadores para restaurante com app incluso para entregadores acompanharem pedidos, rotas e rotina de entrega própria.',
    eyebrow: 'Gestão de entregadores',
    h1: 'Gestão de entregadores com app incluso para organizar a entrega própria.',
    intro: 'Além de vender e produzir melhor, o restaurante precisa controlar a entrega. A Movyo inclui gestão de entregadores e aplicativo para o entregador acompanhar sua rotina de pedidos.',
    benefits: ['App incluso para entregadores', 'Acompanhamento da rotina de entrega própria', 'Pedidos e entregadores em uma operação mais clara', 'Menos controle manual por mensagem solta'],
    sections: [
      ['Entrega própria com mais organização', 'Quando o entregador tem um app dedicado, a operação ganha mais clareza sobre pedidos, rotas e andamento da entrega. Isso reduz improviso e facilita o acompanhamento.'],
      ['Do pedido ao cliente final', 'A Movyo conecta pedido, produção, pagamento e entrega para o restaurante acompanhar mais etapas da jornada sem depender de controles separados.'],
    ],
    faq: ['A Movyo inclui app para entregadores?', 'Sim. A Movyo oferece gestão de entregadores com app incluso para apoiar a rotina da entrega própria do restaurante.'],
  },
  {
    slug: 'comparativo-sistemas-delivery',
    title: 'Movyo vs Sistemas de Delivery e Marketplaces | Comparativo',
    description: 'Comparativo da Movyo com sistemas comuns de delivery: sem comissão por pedido, iFood integrado, app para entregadores, PDV, cardápio próprio, pagamentos e gestão.',
    eyebrow: 'Comparativo',
    h1: 'Movyo vs sistemas comuns: mais controle, menos dependência e operação integrada.',
    intro: 'Muitos restaurantes usam várias ferramentas ao mesmo tempo: marketplace, anotação manual, caixa separado, WhatsApp solto e relatórios frágeis. A Movyo organiza tudo em um ecossistema mais coerente.',
    benefits: ['Sem comissão por pedido no canal próprio', 'iFood integrado e app para entregadores', 'PDV, garçom, caixa, estoque e relatórios no mesmo fluxo', '20 dias grátis para validar na operação'],
    sections: [
      ['Quando marketplace não basta', 'Marketplace pode gerar demanda, mas também aumenta dependência e reduz controle sobre cliente, marca, taxa e recorrência. A Movyo fortalece o canal próprio.'],
      ['Quando sistema simples vira gargalo', 'Um PDV isolado pode registrar venda, mas não necessariamente resolve pagamento online, Hub mobile, salão, estoque por receita e recuperação de vendas.'],
    ],
    faq: ['A Movyo concorre com marketplace?', 'A Movyo fortalece o canal próprio do restaurante. O objetivo é reduzir dependência e dar controle operacional, não impedir que o restaurante use outros canais quando fizer sentido.'],
  },
];

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderAnalytics() {
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
    <script>
      if (window.location.hostname === 'www.movyo.delivery') {
        window.location.replace('https://movyo.delivery' + window.location.pathname + window.location.search + window.location.hash);
      }

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    </script>`;
}

function renderJsonLd(page) {
  const canonical = `${siteUrl}/${page.slug}/`;
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: 'pt-BR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Movyo Delivery',
        url: siteUrl,
      },
      about: {
        '@id': `${siteUrl}/#organization`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Movyo Delivery', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: page.eyebrow, item: canonical },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: page.faq[0],
          acceptedAnswer: {
            '@type': 'Answer',
            text: page.faq[1],
          },
        },
      ],
    },
  ];

  if (page.organizationPage) {
    graph.push(
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Movyo Delivery',
        legalName: 'Movyo Delivery',
        alternateName: ['Movyo', 'Movyo Food', 'Movyo Hub'],
        url: `${siteUrl}/`,
        logo: `${siteUrl}/movyo-logo.png`,
        description: 'A Movyo Delivery é uma plataforma brasileira para restaurantes, fundada por Helio Livramento, que conecta PDV, delivery próprio, integração com iFood, app para entregadores, aplicativo para garçom, pagamentos online, estoque e relatórios.',
        founder: {
          '@type': 'Person',
          '@id': `${canonical}#helio-livramento`,
          name: 'Helio Livramento',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
      },
      {
        '@type': 'Person',
        '@id': `${canonical}#helio-livramento`,
        name: 'Helio Livramento',
        description: 'Fundador da Movyo Delivery.',
        affiliation: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    );
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}

function renderPage(page) {
  const canonical = `${siteUrl}/${page.slug}/`;
  const founderBlock = page.organizationPage
    ? `<section class="faq" id="helio-livramento">
        <h2>Helio Livramento, fundador da Movyo Delivery</h2>
        <p>Helio Livramento é o fundador da Movyo Delivery, plataforma brasileira criada para ajudar restaurantes a organizar pedidos, atendimento, delivery próprio, iFood, entregadores, pagamentos, estoque e gestão em um fluxo único.</p>
      </section>`
    : '';

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="theme-color" content="#f97316" />
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Movyo Delivery" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/og-movyo.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.title)}" />
    <meta name="twitter:description" content="${esc(page.description)}" />
    <meta name="twitter:image" content="${siteUrl}/og-movyo.png" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/seo-pages.css" />
    ${renderAnalytics()}
    <script type="application/ld+json">${renderJsonLd(page)}</script>
  </head>
  <body>
    <header class="seo-header">
      <a class="brand" href="/" aria-label="Movyo Delivery"><img src="/movyo-logo.png" alt="" /> Movyo Delivery</a>
      <nav>
        <a href="/sobre-movyo-delivery/">Sobre</a>
        <a href="/sistema-para-restaurante/">Sistema</a>
        <a href="/pdv-restaurante/">PDV</a>
        <a href="/cardapio-digital/">Cardápio</a>
        <a href="/integracoes-restaurante/">Integrações</a>
        <a class="nav-cta" href="/#cadastro">20 dias grátis</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <span class="eyebrow">${esc(page.eyebrow)}</span>
        <h1>${esc(page.h1)}</h1>
        <p>${esc(page.intro)}</p>
        <div class="actions">
          <a class="button primary" href="/#cadastro">Começar teste grátis de 20 dias</a>
          <a class="button ghost" href="https://wa.me/5581994262615?text=Ol%C3%A1,%20quero%20conhecer%20a%20Movyo%20Delivery">Falar no WhatsApp</a>
        </div>
      </section>

      <section class="benefits" aria-label="Benefícios">
        ${page.benefits.map((benefit) => `<article><strong>${esc(benefit)}</strong></article>`).join('\n        ')}
      </section>

      <section class="content-grid">
        ${page.sections.map(([title, text]) => `<article><h2>${esc(title)}</h2><p>${esc(text)}</p></article>`).join('\n        ')}
      </section>

      ${founderBlock}

      <section class="faq">
        <h2>${esc(page.faq[0])}</h2>
        <p>${esc(page.faq[1])}</p>
      </section>

      <section class="link-band">
        <h2>Conheça o ecossistema completo da Movyo.</h2>
        <div>
          <a href="/pdv-restaurante/">PDV para restaurante</a>
          <a href="/aplicativo-para-garcom/">Aplicativo para garçom</a>
          <a href="/controle-de-estoque-restaurante/">Estoque por receita</a>
          <a href="/pagamentos-online-restaurante/">Pagamentos online</a>
          <a href="/integracao-ifood/">Integração iFood</a>
          <a href="/gestao-entregadores/">Gestão de entregadores</a>
          <a href="/recuperador-de-vendas/">Recuperador de vendas</a>
          <a href="/comparativo-sistemas-delivery/">Comparativo</a>
          <a href="/sobre-movyo-delivery/">Sobre a Movyo</a>
        </div>
      </section>
    </main>

    <footer>
      <p>Movyo Delivery: PDV, delivery próprio, Hub mobile, caixa, pagamentos, estoque, relatórios e automações para restaurantes.</p>
      <a href="/">Voltar para a página principal</a>
    </footer>
  </body>
</html>
`;
}

const css = `:root{--bg:#07080c;--panel:#11131a;--text:#fff7ef;--muted:rgba(255,247,239,.72);--line:rgba(255,255,255,.13);--orange:#ff6a00;--orange2:#ff8f24;--green:#25d366;--blue:#29a7ff;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--text);background:var(--bg)}*{box-sizing:border-box}body{margin:0;min-width:320px;background:radial-gradient(circle at 12% 0,rgba(255,106,0,.23),transparent 34%),radial-gradient(circle at 92% 8%,rgba(41,167,255,.16),transparent 30%),#07080c}a{color:inherit;text-decoration:none}.seo-header{position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:16px clamp(18px,4vw,56px);background:rgba(7,8,12,.86);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}.brand{display:flex;align-items:center;gap:10px;font-weight:950}.brand img{width:36px;height:36px;border-radius:12px}.seo-header nav{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.seo-header nav a{padding:10px 12px;border-radius:999px;color:var(--muted);font-size:13px;font-weight:850}.seo-header nav a:hover,.nav-cta{color:#fff!important;background:rgba(255,106,0,.16)}main{width:min(1120px,calc(100% - 32px));margin:0 auto}.hero{padding:86px 0 54px}.eyebrow{display:inline-flex;padding:8px 13px;border-radius:999px;color:#ffd6bb;background:rgba(255,106,0,.12);border:1px solid rgba(255,106,0,.28);font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.06em}h1{max-width:930px;margin:22px 0 22px;font-size:clamp(44px,7vw,84px);line-height:.94;letter-spacing:-.06em}h2{margin:0 0 12px;font-size:clamp(28px,3vw,42px);line-height:1;letter-spacing:-.04em}.hero p,.content-grid p,.faq p,footer p{color:var(--muted);font-size:18px;line-height:1.75}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 20px;border-radius:999px;font-weight:950}.primary{color:#fff;background:linear-gradient(135deg,var(--orange),var(--orange2));box-shadow:0 18px 55px rgba(255,106,0,.24)}.ghost{border:1px solid var(--line);background:rgba(255,255,255,.06)}.benefits{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:36px}.benefits article{min-height:108px;padding:18px;border-radius:22px;border:1px solid var(--line);background:rgba(255,255,255,.055)}.benefits strong{line-height:1.35}.content-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.content-grid article,.faq,.link-band{padding:28px;border-radius:28px;border:1px solid var(--line);background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.035));box-shadow:0 22px 70px rgba(0,0,0,.22)}.faq{margin-top:16px}.link-band{margin-top:16px}.link-band div{display:flex;flex-wrap:wrap;gap:10px}.link-band a{padding:11px 13px;border-radius:999px;border:1px solid rgba(255,106,0,.24);color:#ffd6bb;background:rgba(255,106,0,.10);font-weight:850;font-size:13px}footer{width:min(1120px,calc(100% - 32px));margin:28px auto 0;padding:28px 0 48px;color:var(--muted)}footer a{color:#ffd6bb;font-weight:900}@media(max-width:820px){.seo-header{align-items:flex-start;flex-direction:column}.benefits,.content-grid{grid-template-columns:1fr}h1{font-size:clamp(40px,13vw,64px)}.actions .button{width:100%}}`;

if (!existsSync(distDir)) {
  throw new Error('A pasta dist não existe. Rode vite build antes de gerar páginas SEO.');
}

writeFileSync(path.join(distDir, 'seo-pages.css'), css, 'utf8');

for (const page of pages) {
  const pageDir = path.join(distDir, page.slug);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(path.join(pageDir, 'index.html'), renderPage(page), 'utf8');
}

console.log(`Paginas SEO geradas: ${pages.length}`);
