import {
  BarChart3,
  BellRing,
  Bot,
  CheckCircle2,
  Cloud,
  CreditCard,
  Gauge,
  LockKeyhole,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  QrCode,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Store,
  TabletSmartphone,
  Truck,
  UtensilsCrossed,
  WalletCards,
  Zap,
} from 'lucide-react';

export const modules = [
  {
    icon: MonitorSmartphone,
    title: 'Movyo Food Desktop',
    text: 'Central principal da operação no computador com fila de pedidos, produção, impressão térmica, vitrine, relatórios e status em tempo real.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Movyo Hub',
    text: 'Aplicativo de apoio para gestor e equipe com pedidos, mesas, caixa, balcão, resumo da operação e notificações push.',
  },
  {
    icon: Store,
    title: 'Vitrine própria',
    text: 'Cardápio online com identidade do restaurante, adicionais, observações, checkout otimizado e acompanhamento do pedido.',
  },
  {
    icon: ReceiptText,
    title: 'PDV, balcão e caixa',
    text: 'Venda local, comandas, fechamento de mesa, suprimento, sangria, descontos e relatórios por caixa e operador.',
  },
  {
    icon: CreditCard,
    title: 'PIX e pagamentos',
    text: 'Gestão de pagamentos em dinheiro, PIX e cartão, com visão clara do faturamento e apoio à integração com Mercado Pago.',
  },
  {
    icon: BellRing,
    title: 'Notificações inteligentes',
    text: 'Avisos claros para novos pedidos, entrada em produção, caixa aberto e eventos importantes da operação.',
  },
  {
    icon: Bot,
    title: 'Bot WhatsApp',
    text: 'Apoio ao atendimento com automações para relacionamento, cardápio, pedidos e comunicação com o cliente.',
  },
  {
    icon: BarChart3,
    title: 'Indicadores e relatórios',
    text: 'KPIs, faturamento, pedidos, ticket médio, formas de pagamento e visão operacional para tomada de decisão.',
  },
];

export const highlights = [
  'Teste grátis por 7 dias no plano Free',
  'Cadastro inicial com status bloqueado para validação segura',
  'Desktop Windows como central da operação do restaurante',
  'Movyo Hub no iPhone via Safari/PWA e no Android pela Play Store ou APK',
  'Impressão térmica instalada junto com o programa desktop',
  'Pedidos, caixa, vitrine e equipe sincronizados em tempo real',
];

export const downloads = [
  {
    icon: TabletSmartphone,
    title: 'Movyo Hub na Play Store',
    text: 'Versão Android pela loja oficial para instalação prática e rápida na equipe.',
    key: 'playStoreUrl',
    cta: 'Abrir Play Store',
  },
  {
    icon: Smartphone,
    title: 'Movyo Hub APK',
    text: 'Download direto do APK para Android quando o restaurante preferir instalação manual.',
    key: 'apkUrl',
    cta: 'Baixar APK',
  },
  {
    icon: MonitorSmartphone,
    title: 'Movyo Food Desktop',
    text: 'Programa Windows para atendimento, produção, caixa e gestão. A impressão térmica já acompanha a instalação.',
    key: 'desktopUrl',
    cta: 'Baixar Desktop',
  },
];

export const installSteps = [
  { title: 'Abra no Safari', text: 'No iPhone, acesse hub.movyo.delivery usando o navegador Safari.' },
  { title: 'Toque em Compartilhar', text: 'Use o botão Compartilhar do iOS na barra inferior do navegador.' },
  { title: 'Adicione à Tela de Início', text: 'Escolha Adicionar à Tela de Início para criar o ícone do Movyo Hub.' },
  { title: 'Entre e ative alertas', text: 'Faça login e permita as notificações para receber pedidos e avisos da operação.' },
];

export const trust = [
  { icon: ShieldCheck, title: 'Operação segura', text: 'Controle por plano, licença, conta e validação.' },
  { icon: Cloud, title: 'Cloud', text: 'Estrutura pronta para restaurante operar online.' },
  { icon: LockKeyhole, title: 'Dados protegidos', text: 'Boas práticas de segurança e cuidado com os acessos.' },
  { icon: Zap, title: 'Tempo real', text: 'Pedidos, indicadores e status sempre atualizados.' },
  { icon: CheckCircle2, title: 'Suporte próximo', text: 'Implantação e acompanhamento com atendimento humano.' },
];

export const benefits = [
  { icon: Gauge, title: 'Mais agilidade', text: 'Menos retrabalho, menos ruído e mais velocidade no atendimento.' },
  { icon: WalletCards, title: 'Marca própria mais forte', text: 'Venda no seu canal, fortaleça o restaurante e reduza dependência de marketplaces.' },
  { icon: PackageCheck, title: 'Pedido organizado', text: 'Fluxo claro da entrada do pedido até produção, entrega e fechamento.' },
  { icon: CreditCard, title: 'Financeiro mais visível', text: 'Faturamento, caixa e formas de pagamento com leitura simples para o gestor.' },
  { icon: QrCode, title: 'Salão, balcão e delivery', text: 'Uma plataforma para atender consumo no local, retirada e entrega.' },
  { icon: MessageCircle, title: 'Relação com o cliente', text: 'WhatsApp, notificações e vitrine própria para uma experiência mais profissional.' },
];
