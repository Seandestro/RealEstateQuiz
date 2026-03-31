import type { QuickReadData } from '../quickreads';
import type { Question } from '../questions';

export type MarketData = {
  city: string;
  state: string;
  county: string;
  aliases: string[]; // alternate spellings / casings
  tagline: string;   // short market descriptor
  quickreads: Partial<Record<string, QuickReadData>>;
  questions: Partial<Record<string, Question[]>>;
};

import { laJollaMarket } from './la-jolla';
import { sanDiegoMarket } from './san-diego';

// All known markets — add new cities here
const MARKETS: MarketData[] = [
  laJollaMarket,
  sanDiegoMarket,
];

/**
 * Returns market-specific data if the city is recognized.
 * Matching is case-insensitive and checks aliases too.
 */
export function getMarket(city?: string, state?: string): MarketData | null {
  if (!city) return null;
  const normalizedCity  = city.trim().toLowerCase();
  const normalizedState = state?.trim().toLowerCase() ?? '';

  return MARKETS.find((m) => {
    const cityMatch = [m.city, ...m.aliases].some(
      (alias) => alias.toLowerCase() === normalizedCity
    );
    const stateMatch = !normalizedState ||
      m.state.toLowerCase() === normalizedState ||
      m.state.toLowerCase().startsWith(normalizedState);
    return cityMatch && stateMatch;
  }) ?? null;
}

/**
 * Get the quick read for a category, using market-specific content
 * when available and falling back to generic content.
 */
export function getQuickRead(
  category: string,
  city?: string,
  state?: string,
  genericFallback?: QuickReadData
): QuickReadData | undefined {
  const market = getMarket(city, state);
  return market?.quickreads[category] ?? genericFallback;
}

/**
 * Get quiz questions for a category, using market-specific questions
 * when available and falling back to generic questions.
 */
export function getQuestions(
  category: string,
  city?: string,
  state?: string,
  genericFallback?: Question[]
): Question[] {
  const market = getMarket(city, state);
  return market?.questions[category] ?? genericFallback ?? [];
}
