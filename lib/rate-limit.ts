const WINDOW_MS = 60 * 60 * 1000; // 1 heure
const MAX_REQUESTS = 3;

/**
 * Rate limiting en mémoire, par clé (IP). Fonctionne en dev et sur un
 * hébergement mono-instance long-lived. Sur Vercel (serverless), chaque
 * instance de fonction a sa propre mémoire et peut être recyclée à tout
 * moment : la limite n'est donc PAS garantie globalement (plusieurs
 * instances concurrentes, ou un cold start, remettent le compteur à zéro).
 * Pour une limite fiable en production sur Vercel, il faut un store
 * partagé : Upstash Redis (@upstash/ratelimit + @upstash/redis) ou Vercel KV.
 */
const hits = new Map<string, number[]>();

export function checkRateLimit(
  key: string,
  max: number = MAX_REQUESTS,
  windowMs: number = WINDOW_MS
): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const timestamps = (hits.get(key) || []).filter((t) => now - t < windowMs);

  if (timestamps.length >= max) {
    hits.set(key, timestamps);
    const retryAfterSeconds = Math.ceil((timestamps[0] + windowMs - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return { allowed: true };
}
