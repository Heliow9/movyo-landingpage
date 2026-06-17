# Movyo Landing Page — versão completa para produção

Landing page oficial da Movyo Delivery desenvolvida em React + Vite e preparada para publicação em produção.

## Conteúdo desta versão

- apresentação comercial completa do ecossistema Movyo;
- foco no Movyo Food Desktop como central da operação;
- Movyo Hub para iPhone via PWA e Android pela Play Store ou APK;
- demonstração visual de iOS e Android com notificações organizadas;
- chat Movy com opção de abrir, minimizar e fechar;
- seção completa de Pagamentos Digitais:
  - PIX automatizado;
  - cartão de crédito e débito;
  - integração com o fluxo do pedido;
  - benefícios comerciais e operacionais;
- área de downloads corrigida:
  - Play Store;
  - APK Android;
  - Movyo Food Desktop com impressão térmica integrada ao instalador;
- cadastro público de restaurante vinculado à API;
- criação inicial no plano Free por 7 dias com status bloqueado para validação;
- textos revisados para publicação comercial;
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

O build pronto para o servidor será criado em:

```bash
dist/
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste as URLs quando necessário.

