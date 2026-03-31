/**
 * FRED (Federal Reserve Economic Data) API client.
 *
 * Free API key: https://fred.stlouisfed.org/docs/api/api_key.html
 * Set EXPO_PUBLIC_FRED_API_KEY in your .env file.
 */

import { getCached, setCached } from './cache';

const BASE = 'https://api.stlouisfed.org/fred/series/observations';

function getKey(): string {
  return process.env.EXPO_PUBLIC_FRED_API_KEY ?? '';
}

export type FredObservation = {
  value: string; // numeric string, e.g. "7.12"
  date: string;  // YYYY-MM-DD
};

async function fetchLatest(seriesId: string): Promise<FredObservation | null> {
  const key = getKey();
  if (!key) return null;

  const cacheKey = `fred:${seriesId}`;
  const cached = getCached<FredObservation>(cacheKey);
  if (cached) return cached;

  try {
    const url =
      `${BASE}?series_id=${seriesId}` +
      `&api_key=${key}` +
      `&sort_order=desc&limit=1&file_type=json`;

    const res = await fetch(url);
    if (!res.ok) return null;
    const json = await res.json();

    const obs = json?.observations?.[0];
    if (!obs || obs.value === '.') return null; // FRED uses '.' for missing values

    const result: FredObservation = { value: obs.value, date: obs.date };
    setCached(cacheKey, result);
    return result;
  } catch {
    return null;
  }
}

/** 30-year fixed mortgage rate (weekly, percent) */
export const getMortgage30yr = () => fetchLatest('MORTGAGE30US');

/** Federal Funds effective rate (monthly, percent) */
export const getFedFundsRate = () => fetchLatest('FEDFUNDS');

/** S&P/Case-Shiller National Home Price Index (monthly, index) */
export const getCaseShillerHPI = () => fetchLatest('CSUSHPINSA');
