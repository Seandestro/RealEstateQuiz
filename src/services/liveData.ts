/**
 * Unified live data fetcher.
 * Maps quiz categories to relevant real-time API calls and returns
 * a normalized array of LiveStat objects for display.
 */

import { getMortgage30yr, getFedFundsRate } from './fred';
import { getSanDiegoUnemployment, getNationalUnemployment } from './bls';
import { getWalkScore } from './walkscore';

export type LiveStat = {
  label: string;
  value: string;
  subtext?: string;   // e.g. "as of March 2025" or description
  source: string;
  sourceUrl: string;
};

export type LiveDataResult = {
  stats: LiveStat[];
  fetchedAt: string;  // human-readable time
};

/** Categories that have live data support */
export const LIVE_DATA_CATEGORIES = new Set([
  'market',
  'economics',
  'transportation',
  'neighborhoods',
]);

export async function fetchLiveData(
  category: string,
  city?: string,
  _state?: string,
): Promise<LiveDataResult> {
  const stats: LiveStat[] = [];
  const fetchedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // ── Market & Economics: mortgage rates + fed funds ──────────────────────
  if (category === 'market' || category === 'economics') {
    const [mortgage, fedFunds] = await Promise.allSettled([
      getMortgage30yr(),
      getFedFundsRate(),
    ]);

    if (mortgage.status === 'fulfilled' && mortgage.value) {
      const rate = parseFloat(mortgage.value.value).toFixed(2);
      stats.push({
        label: '30-yr Fixed Rate',
        value: `${rate}%`,
        subtext: `Week of ${mortgage.value.date}`,
        source: 'FRED',
        sourceUrl: 'https://fred.stlouisfed.org/series/MORTGAGE30US',
      });
    }

    if (fedFunds.status === 'fulfilled' && fedFunds.value) {
      const rate = parseFloat(fedFunds.value.value).toFixed(2);
      stats.push({
        label: 'Fed Funds Rate',
        value: `${rate}%`,
        subtext: fedFunds.value.date,
        source: 'FRED',
        sourceUrl: 'https://fred.stlouisfed.org/series/FEDFUNDS',
      });
    }
  }

  // ── Economics: unemployment rates ────────────────────────────────────────
  if (category === 'economics') {
    const [local, national] = await Promise.allSettled([
      getSanDiegoUnemployment(),
      getNationalUnemployment(),
    ]);

    if (local.status === 'fulfilled' && local.value) {
      stats.push({
        label: 'San Diego Unemployment',
        value: `${local.value.value}%`,
        subtext: local.value.period,
        source: 'BLS',
        sourceUrl: 'https://www.bls.gov/lau/',
      });
    }

    if (national.status === 'fulfilled' && national.value) {
      stats.push({
        label: 'National Unemployment',
        value: `${national.value.value}%`,
        subtext: national.value.period,
        source: 'BLS',
        sourceUrl: 'https://www.bls.gov/lau/',
      });
    }
  }

  // ── Transportation & Neighborhoods: Walk Score ───────────────────────────
  if (
    (category === 'transportation' || category === 'neighborhoods') &&
    city
  ) {
    const walkData = await getWalkScore(city).catch(() => null);

    if (walkData) {
      stats.push({
        label: 'Walk Score',
        value: String(walkData.walkscore),
        subtext: walkData.description,
        source: 'Walk Score',
        sourceUrl: 'https://www.walkscore.com',
      });

      if (walkData.transit) {
        stats.push({
          label: 'Transit Score',
          value: String(walkData.transit.score),
          subtext: walkData.transit.description,
          source: 'Walk Score',
          sourceUrl: 'https://www.walkscore.com',
        });
      }

      if (walkData.bike) {
        stats.push({
          label: 'Bike Score',
          value: String(walkData.bike.score),
          subtext: walkData.bike.description,
          source: 'Walk Score',
          sourceUrl: 'https://www.walkscore.com',
        });
      }
    }
  }

  return { stats, fetchedAt };
}
