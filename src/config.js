export const config = {
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5581994262615?text=Ol%C3%A1,%20quero%20conhecer%20a%20Movyo%20Delivery',
  apiUrl: (import.meta.env.VITE_API_URL || 'https://api.movyo.delivery').replace(/\/$/, ''),
  playStoreUrl: import.meta.env.VITE_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=delivery.movyo.hub',
  restaurantSignupPath: import.meta.env.VITE_RESTAURANT_SIGNUP_PATH || '/api/restaurantes/public-cadastro',
  hubUrl: import.meta.env.VITE_HUB_URL || 'https://hub.movyo.delivery',
  apkUrl: import.meta.env.VITE_APK_URL || 'https://movyo.delivery/downloads/movyo-hub.apk',
  desktopUrl: import.meta.env.VITE_DESKTOP_URL || 'https://movyo.delivery/downloads/Movyo-Food-Setup.exe'
};
