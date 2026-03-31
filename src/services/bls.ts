/**
 * Bureau of Labor Statistics (BLS) Public API v1.
 *
 * No API key required for public series — rate limits apply.
 * Upgrade to v2 with a free key at https://data.bls.gov/registrationEngine/
 * Set EXPO_PUBLIC_BLS_API_KEY in your .env for v2 access (higher rate limits).
 *
 * Docs: https://www.bls.gov/developers/api_signature.htm
 */

import { getCached, setCached } from './cache';

const BASE = 'https://api.bls.gov/publicAPI/v1/timeseries/data/';

/**
 * BLS LAUS series IDs
 * Format: LAUMT + state FIPS (06 = CA) + area code + measure
 * Measure 03 = Unemployment Rate
 */
export const BLS_SERIES = {
  /** San Diego-Carlsbad, CA MSA unemployment rate */
  sanDiegoUnemployment: 'LAUMT062726000000003',
  /** National unemployment rate (seasonally adjusted) */
  nationalUnemployment: 'LNS14000000',
} as const;

export type BlsObservation = {
  value: string;   // numeric string, e.g. "3.9"
  period: string;  // human-readable, e.g. "March 2025"
};

async function fetchLatestValue(seriesId: string): Promise<BlsObservation | null> {
  const cacheKey = `bls:${seriesId}`;
  const cached = getCached<BlsObservation>(cacheKey);
  if (cached) return cached;

  const currentYear = new Date().getFullYear();

  try {
    const res = await fetch(BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seriesid: [seriesId],
        startyear: String(currentYear - 1),
        endyear: String(currentYear),
      }),
    });

    if (!res.ok) return null;
    const json = await res.json();

    // BLS returns data newest-first within the array
    const dataPoint = json?.Results?.series?.[0]?.data?.[0];
    if (!dataPoint) return null;

    const result: BlsObservation = {
      value: dataPoint.value,
      period: `${dataPoint.periodName} ${dataPoint.year}`,
    };
    setCached(cacheKey, result);
    return result;
  } catch {
    return null;
  }
}

export const getSanDiegoUnemployment = () => fetchLatestValue(BLS_SERIES.sanDiegoUnemployment);
export const getNationalUnemployment = () => fetchLatestValue(BLS_SERIES.nationalUnemployment);
