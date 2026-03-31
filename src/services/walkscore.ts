/**
 * Walk Score API client.
 *
 * Free tier: 5,000 requests/day.
 * Get a free API key at: https://www.walkscore.com/professional/api.php
 * Set EXPO_PUBLIC_WALKSCORE_API_KEY in your .env file.
 *
 * Docs: https://www.walkscore.com/professional/walk-score-apis.php
 */

import { getCached, setCached } from './cache';

const BASE = 'https://api.walkscore.com/score';

function getKey(): string {
  return process.env.EXPO_PUBLIC_WALKSCORE_API_KEY ?? '';
}

/** City coordinate lookup for known markets */
const CITY_COORDS: Record<string, { lat: number; lon: number; address: string }> = {
  'la jolla':  { lat: 32.8328, lon: -117.2713, address: 'La Jolla, San Diego, CA 92037' },
  'lajolla':   { lat: 32.8328, lon: -117.2713, address: 'La Jolla, San Diego, CA 92037' },
  'san diego': { lat: 32.7157, lon: -117.1611, address: 'San Diego, CA 92101' },
  'sandiego':  { lat: 32.7157, lon: -117.1611, address: 'San Diego, CA 92101' },
};

export type WalkScoreResult = {
  walkscore: number;
  description: string;
  transit?: { score: number; description: string };
  bike?: { score: number; description: string };
};

export async function getWalkScore(city: string): Promise<WalkScoreResult | null> {
  const key = getKey();
  if (!key) return null;

  const coords = CITY_COORDS[city.toLowerCase()];
  if (!coords) return null;

  const cacheKey = `walkscore:${city.toLowerCase()}`;
  const cached = getCached<WalkScoreResult>(cacheKey);
  if (cached) return cached;

  try {
    const url =
      `${BASE}?format=json` +
      `&address=${encodeURIComponent(coords.address)}` +
      `&lat=${coords.lat}&lon=${coords.lon}` +
      `&transit=1&bike=1` +
      `&wsapikey=${key}`;

    const res = await fetch(url);
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.walkscore) return null;

    const result: WalkScoreResult = {
      walkscore: json.walkscore,
      description: json.description ?? '',
      transit: json.transit
        ? { score: json.transit.score, description: json.transit.description ?? '' }
        : undefined,
      bike: json.bike
        ? { score: json.bike.score, description: json.bike.description ?? '' }
        : undefined,
    };

    setCached(cacheKey, result);
    return result;
  } catch {
    return null;
  }
}

/** Add a new city to the lookup table at runtime */
export function registerCityCoords(
  city: string,
  lat: number,
  lon: number,
  address: string,
): void {
  CITY_COORDS[city.toLowerCase()] = { lat, lon, address };
}
