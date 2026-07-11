# Movyo Site Oficial — recursos comerciais e operacionais

Site oficial da Movyo Delivery em React + Vite, revisado e preparado para produção.

## Conteúdo desta versão

- apresentação comercial completa do ecossistema Movyo;
- foco no Movyo Food Desktop como central da operação;
- Movyo Hub para iPhone via PWA e Android pela Play Store ou APK;
- demonstração visual de iOS e Android com notificações organizadas;
- Movy com opção de abrir, minimizar e fechar;
- Pagamentos Digitais:
  - PIX automatizado;
  - cartão de crédito no checkout;
  - confirmação vinculada ao pedido;
  - explicação transparente das taxas transacionais;
- Recuperador de Vendas com mensagens automáticas e retorno ao cardápio;
- Aplicativo para Garçom com mesas, comandas, edição e movimentação de clientes;
- PDV para balcão, atendimento local e telefone;
- Frente de Caixa com abertura, fechamento, sangria e suprimento;
- Controle de Estoque:
  - quantidade por item;
  - regras para produtos esgotados;
  - baixa automática por receita e ingredientes;
- Gestor de Pedidos e Relatórios com canais centralizados, KPIs, caixa e formas de pagamento;
- FAQ comercial explicando ausência de comissão por pedido, taxas transacionais de pagamento online, integração com iFood e gestão de entregadores;
- área de downloads com Play Store, APK e Movyo Food Desktop;
- links de APK e Desktop podem apontar para arquivos reais ou para solicitação comercial no WhatsApp enquanto os instaladores não estiverem publicados;
- impressão térmica integrada ao instalador desktop;
- cadastro público vinculado à API com plano Free por 20 dias e status bloqueado para validação;
- SEO atualizado e dados estruturados para perguntas frequentes;
- layout responsivo com prioridade para apresentação em desktop.

## Executar localmente

```bash
npm install
npm run dev
```

## Gerar build de produção

```bash
npm run build
```

O build pronto para publicação será criado em `dist/`.

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste as URLs de API, Hub, Play Store, APK, desktop e WhatsApp.
