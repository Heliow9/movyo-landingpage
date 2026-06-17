import { config } from '../config';

export async function registerRestaurant(payload) {
  const endpoint = `${config.apiUrl}${config.restaurantSignupPath}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      plano: 'free',
      planoNome: 'Free',
      diasTeste: 7,
      status: 'bloqueado',
      statusLicenca: 'bloqueado',
      origem: 'landingpage-movyo'
    })
  });

  let data = null;
  try { data = await response.json(); } catch { data = null; }

  if (!response.ok) {
    throw new Error(data?.message || data?.erro || 'Não foi possível concluir o cadastro agora.');
  }

  return data;
}
