import { config } from '../config';
import { trackEvent } from '../lib/analytics';

export async function registerRestaurant(payload) {
  const endpoint = `${config.apiUrl}${config.restaurantSignupPath}`;
  trackEvent('lead_form_submit_attempt', {
    form_name: 'cadastro_restaurante_free',
    trial_days: 20,
    restaurant_segment: payload.segmento,
    restaurant_city: payload.cidade,
  });

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      plano: 'free',
      planoNome: 'Free',
      diasTeste: 20,
      status: 'bloqueado',
      statusLicenca: 'bloqueado',
      origem: 'site-movyo'
    })
  });

  let data = null;
  try { data = await response.json(); } catch { data = null; }

  if (!response.ok) {
    trackEvent('lead_form_submit_error', {
      form_name: 'cadastro_restaurante_free',
      status_code: response.status,
    });
    throw new Error(data?.message || data?.erro || 'Não foi possível concluir o cadastro agora.');
  }

  trackEvent('generate_lead', {
    form_name: 'cadastro_restaurante_free',
    lead_type: 'restaurant_trial',
    trial_days: 20,
    restaurant_segment: payload.segmento,
    restaurant_city: payload.cidade,
  });

  return data;
}
