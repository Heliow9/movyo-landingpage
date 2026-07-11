const fallbackCta = { label: 'Começar teste de 20 dias', href: '#cadastro' };

export const movySuggestions = [
  'A Movyo cobra comissão por pedido?',
  'Como funciona a integração com iFood?',
  'Tem app para entregadores?',
  'O que vem no teste grátis?',
  'Como funcionam os pagamentos online?',
  'A Movyo tem PDV e caixa?',
  'Como instalo o Hub no iPhone?',
  'O que diferencia a Movyo de outros sistemas?',
];

const answers = [
  {
    id: 'greeting',
    keywords: ['oi', 'ola', 'olá', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem', 'e ai', 'e aí', 'hey', 'hello', 'saudacoes', 'saudações'],
    answer:
      'Olá! Sou o Movy, assistente da Movyo. Posso te ajudar a entender como a plataforma organiza pedidos, PDV, iFood, entregadores, pagamentos, Hub, desktop e teste grátis de 20 dias.\n\nSe quiser, me pergunte algo como: “a Movyo cobra comissão?”, “tem integração com iFood?” ou “como funciona o app dos entregadores?”.',
    cta: fallbackCta,
  },
  {
    id: 'commission',
    keywords: ['comissao', 'comissão', 'taxa por pedido', 'cobra por pedido', 'sem comissao', 'sem comissão', 'por pedido'],
    answer:
      'Não. A Movyo não cobra comissão sobre cada pedido. O restaurante mantém o controle do canal próprio e dos pedidos.\n\nO que pode existir são taxas transacionais quando o cliente paga online dentro do cardápio digital, como PIX automatizado, cartão de crédito ou carteiras digitais. Essas taxas podem variar de R$ 0,20 a R$ 0,50 conforme acordo comercial e provedor de pagamento.',
    cta: { label: 'Ver cadastro Free', href: '#cadastro' },
  },
  {
    id: 'payments',
    keywords: ['pagamento', 'pagamentos', 'pix', 'cartao', 'cartão', 'credito', 'crédito', 'carteira', 'mercado pago', 'taxas transacionais'],
    answer:
      'A Movyo permite pagamento online no fluxo do cardápio digital. O cliente pode pedir e pagar na mesma experiência, reduzindo troca de comprovante, espera por confirmação manual e cancelamentos.\n\nAs taxas transacionais aparecem somente quando um pagamento online é processado pelo provedor, como PIX automatizado, cartão de crédito ou carteiras digitais habilitadas.',
    cta: { label: 'Conhecer pagamentos', href: '#pagamentos' },
  },
  {
    id: 'ifood',
    keywords: ['ifood', 'i food', 'marketplace', 'integracao ifood', 'integração ifood', 'integrar ifood'],
    answer:
      'A integração com iFood é um diferencial importante da Movyo. A ideia é trazer os pedidos do marketplace para uma operação mais organizada, junto com PDV, delivery próprio, produção, caixa e relatórios.\n\nAssim o restaurante não precisa tratar iFood, balcão, salão e canal próprio como mundos separados.',
    cta: { label: 'Ver integração iFood', href: '/integracao-ifood/' },
  },
  {
    id: 'couriers',
    keywords: ['entregador', 'entregadores', 'entrega', 'motoboy', 'moto boy', 'rota', 'rotas', 'delivery proprio', 'delivery próprio'],
    answer:
      'Sim. A Movyo inclui gestão de entregadores e app para entregadores. Isso ajuda o restaurante a organizar a entrega própria, acompanhar pedidos em rota e reduzir controle manual por mensagens soltas.\n\nO objetivo é conectar pedido, produção, pagamento e entrega na mesma operação.',
    cta: { label: 'Ver gestão de entregadores', href: '/gestao-entregadores/' },
  },
  {
    id: 'trial',
    keywords: ['teste', 'gratis', 'grátis', 'free', '20 dias', 'plano', 'cadastro', 'começar', 'comecar'],
    answer:
      'O cadastro cria uma conta no plano Free com 20 dias de teste. Por segurança, a conta nasce com status bloqueado para validação e liberação comercial.\n\nEsse período é pensado para o restaurante conhecer o fluxo da Movyo, entender os módulos e avaliar a operação antes de seguir para um plano contratado.',
    cta: fallbackCta,
  },
  {
    id: 'pdv',
    keywords: ['pdv', 'caixa', 'frente de caixa', 'balcao', 'balcão', 'sangria', 'suprimento', 'desconto', 'operador'],
    answer:
      'A Movyo tem PDV, balcão e frente de caixa. O restaurante pode centralizar pedidos locais, telefone e balcão, além de trabalhar com abertura e fechamento de caixa, sangria, suprimento, descontos e visão por operador.\n\nO desktop Windows funciona como central da operação, conectando atendimento, produção, impressão e relatórios.',
    cta: { label: 'Ver recursos', href: '#recursos' },
  },
  {
    id: 'waiter',
    keywords: ['garcom', 'garçom', 'mesa', 'mesas', 'comanda', 'comandas', 'salao', 'salão'],
    answer:
      'A Movyo tem aplicativo para garçom dentro do ecossistema Hub. Ele ajuda no atendimento de salão com mesas, comandas, itens, edição de pedidos, movimentação de clientes e fechamento da conta dentro do fluxo da operação.',
    cta: { label: 'Ver app para garçom', href: '/aplicativo-para-garcom/' },
  },
  {
    id: 'hub',
    keywords: ['hub', 'iphone', 'ios', 'android', 'play store', 'apk', 'instalar', 'pwa', 'celular'],
    answer:
      'O Movyo Hub é o app de apoio para equipe e gestor. No Android, pode ser usado pela Play Store ou APK. No iPhone, funciona como PWA: abra o Hub no Safari, toque em Compartilhar e escolha Adicionar à Tela de Início.\n\nCom o Hub, a equipe acompanha pedidos, caixa, alertas, operação e produtividade pelo celular.',
    cta: { label: 'Ver instalação do Hub', href: '#instalar-hub' },
  },
  {
    id: 'desktop',
    keywords: ['desktop', 'windows', 'computador', 'impressao', 'impressão', 'termica', 'térmica', 'instalador'],
    answer:
      'O Movyo Food Desktop é a central da operação no computador Windows. Ele reúne atendimento, produção, fila de pedidos, vitrine, status, indicadores e impressão térmica integrada ao programa.\n\nPara o restaurante, isso reduz ferramentas separadas e deixa produção, caixa e atendimento trabalhando no mesmo fluxo.',
    cta: { label: 'Solicitar Desktop', href: 'https://wa.me/5581994262615?text=Ol%C3%A1,%20quero%20receber%20o%20instalador%20do%20Movyo%20Food%20Desktop' },
  },
  {
    id: 'stock',
    keywords: ['estoque', 'receita', 'ingrediente', 'ingredientes', 'esgotado', 'produto esgotado', 'baixa'],
    answer:
      'A Movyo trabalha com controle de estoque por produto e por receita. Isso permite configurar regras para itens esgotados e baixar ingredientes conforme a venda.\n\nEsse recurso é especialmente útil para pizzarias, hamburguerias, açaís, lanchonetes e restaurantes com adicionais, combos e montagem de produtos.',
    cta: { label: 'Ver estoque por receita', href: '/controle-de-estoque-restaurante/' },
  },
  {
    id: 'recovery',
    keywords: ['recuperador', 'recuperacao', 'recuperação', 'abandono', 'cliente voltou', 'mensagem automatica', 'mensagem automática', 'whatsapp'],
    answer:
      'O Recuperador de Vendas ajuda a trazer oportunidades de volta. Quando o cliente demonstra intenção, a Movyo pode apoiar uma jornada de retorno com mensagens automáticas e atalho para o cardápio.\n\nIsso fortalece o canal próprio e aumenta as chances de recompra sem depender apenas de anúncio pago.',
    cta: { label: 'Ver recuperador', href: '/recuperador-de-vendas/' },
  },
  {
    id: 'difference',
    keywords: ['diferencial', 'diferenciais', 'comparativo', 'outros sistemas', 'concorrente', 'por que escolher', 'vantagem'],
    answer:
      'Os principais diferenciais da Movyo são: canal próprio sem comissão por pedido, integração com iFood, app para entregadores, PDV, frente de caixa, aplicativo para garçom, Hub mobile, desktop Windows, estoque por receita, pagamentos online e recuperação de vendas.\n\nA proposta é tirar a operação do improviso e colocar atendimento, venda, produção, entrega e gestão em um fluxo só.',
    cta: { label: 'Ver diferenciais', href: '#diferenciais' },
  },
  {
    id: 'who',
    keywords: ['restaurante', 'pizzaria', 'hamburgueria', 'açai', 'açaí', 'lanchonete', 'segmento', 'serve para'],
    answer:
      'A Movyo faz sentido para restaurantes, pizzarias, hamburguerias, lanchonetes, açaís e operações que vendem por salão, balcão, telefone, WhatsApp, iFood e delivery próprio.\n\nEla ajuda principalmente quando o restaurante quer organizar pedidos, caixa, produção, pagamento, estoque, entrega e canais de venda no mesmo ambiente.',
    cta: fallbackCta,
  },
];

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getMovyAnswer(question) {
  const normalizedQuestion = normalize(question);

  let best = null;
  for (const item of answers) {
    const score = item.keywords.reduce((total, keyword) => {
      const normalizedKeyword = normalize(keyword);
      if (!normalizedKeyword) return total;
      if (normalizedQuestion === normalizedKeyword) return total + 12;
      if (normalizedQuestion.includes(normalizedKeyword)) return total + 6;
      return total;
    }, 0);

    if (!best || score > best.score) best = { ...item, score };
  }

  if (best?.score > 0) {
    return {
      text: best.answer,
      cta: best.cta,
      matchedId: best.id,
    };
  }

  return {
    text:
      'Posso te ajudar com os principais pontos da Movyo: PDV, iFood, app para entregadores, Hub mobile, desktop Windows, cardápio digital, pagamentos online, taxas transacionais, estoque por receita, garçom, WhatsApp e teste grátis de 20 dias.\n\nSe preferir, clique em uma pergunta rápida ou me pergunte com suas palavras.',
    cta: fallbackCta,
    matchedId: 'fallback',
  };
}
