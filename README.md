# Movyo Landing Page

Landing page React + Vite para usar no endereço padrão `movyo.delivery`.

## Rodar local

```bash
npm install
npm run dev
```

## Build produção

```bash
npm run build
```

Envie a pasta `dist/` para o servidor do domínio principal.

## Configuração

Crie um arquivo `.env` baseado em `.env.example`:

```env
VITE_API_URL=https://api.movyo.delivery
VITE_APK_URL=/downloads/movyo-garcom.apk
VITE_DESKTOP_URL=/downloads/movyo-desktop.exe
VITE_DASHBOARD_URL=https://movyo.delivery/app
VITE_WHATSAPP_URL=https://wa.me/5581999999999
```

Coloque os instaladores reais dentro de `public/downloads/` antes do build:

- `public/downloads/movyo-garcom.apk`
- `public/downloads/movyo-desktop.exe`
