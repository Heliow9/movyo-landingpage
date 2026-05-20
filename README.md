# Movyo Landing Page Premium

Landing page React + Vite em estilo SaaS premium para o domínio `movyo.delivery`.

## O que vem nesta versão

- UI/UX premium dark com laranja Movyo
- Navbar transparente com blur e animação no scroll
- Hero com mockup visual de dashboard, celular e cards flutuantes
- Seção de recursos do sistema
- Seção de pagamentos seguros com Mercado Pago
- Fluxo de teste grátis de 15 dias com liberação via WhatsApp
- Depoimentos, confiança, downloads e botão flutuante do WhatsApp
- Links técnicos/API removidos da experiência do usuário

## Instalação

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

A pasta de produção será criada em:

```bash
dist/
```

## Configuração dos links

Crie um arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

Edite:

```env
VITE_WHATSAPP_URL=https://wa.me/5581994262615?text=Olá,%20quero%20liberar%20minha%20conta%20teste%20grátis%20de%2015%20dias%20no%20Movyo%20Delivery
VITE_APK_URL=https://movyo.delivery/downloads/movyo-garcom.apk
VITE_DESKTOP_URL=https://movyo.delivery/downloads/movyo-desktop.exe
```

## Deploy Nginx

Depois do build, aponte o Nginx para:

```bash
/var/www/movyo-landingpage/dist
```
