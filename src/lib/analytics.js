const MEASUREMENT_ID = 'G-JV6P9XFLFE';

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', name, {
    measurement_id: MEASUREMENT_ID,
    transport_type: 'beacon',
    ...params,
  });
}

export function describeTrackedLink(anchor) {
  const href = anchor.getAttribute('href') || '';
  const text = anchor.textContent?.trim().replace(/\s+/g, ' ').slice(0, 90) || 'link';
  const normalizedText = text.toLowerCase();

  if (href.includes('wa.me') || href.includes('whatsapp')) {
    if (normalizedText.includes('apk')) {
      return ['request_android_apk', { link_text: text, link_url: href }];
    }

    if (normalizedText.includes('desktop')) {
      return ['request_desktop_windows', { link_text: text, link_url: href }];
    }

    return ['contact_whatsapp', { link_text: text, link_url: href }];
  }

  if (href.includes('play.google.com')) {
    return ['download_app_play_store', { link_text: text, link_url: href }];
  }

  if (href.endsWith('.apk')) {
    return ['download_android_apk', { link_text: text, link_url: href }];
  }

  if (href.endsWith('.exe')) {
    return ['download_desktop_windows', { link_text: text, link_url: href }];
  }

  if (href.includes('hub.movyo.delivery')) {
    return ['open_movyo_hub', { link_text: text, link_url: href }];
  }

  if (href === '#cadastro') {
    return ['cta_start_trial', { link_text: text, trial_days: 20 }];
  }

  if (href.startsWith('#')) {
    return ['section_navigation', { link_text: text, section: href.replace('#', '') }];
  }

  return ['outbound_link_click', { link_text: text, link_url: href }];
}
