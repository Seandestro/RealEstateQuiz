/**
 * Simple in-memory TTL cache for live API responses.
 * Data is cached per app session — clears on restart, which is fine
 * since we want fresh data each time the app is launched.
 */

type CacheEntry<T> = { data: T; timestamp: number };

const store = new Map<string, CacheEntry<unknown>>();

const DEFAULT_TTL_MS = 60 * 60 * 1000; // 1 hour

export function getCached<T>(key: string, ttlMs = DEFAULT_TTL_MS): T | null {
  const entry = store.get(key) as CacheEntry<T> | undefined;
  if (!entry) return null;
  if (Date.now() - entry.timestamp > ttlMs) {
    store.delete(key);
    return null;
  }
  return entry.data;
}

export function setCached<T>(key: string, data: T): void {
  store.set(key, { data, timestamp: Date.now() });
}

export function clearCache(): void {
  store.clear();
}
