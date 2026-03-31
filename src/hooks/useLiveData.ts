/**
 * Hook for fetching live market data for a given category and location.
 * Results are cached in-memory for the session to avoid redundant API calls.
 */

import { useEffect, useRef, useState } from 'react';
import { fetchLiveData, LiveDataResult, LIVE_DATA_CATEGORIES } from '../services/liveData';

type State = {
  data: LiveDataResult | null;
  loading: boolean;
  error: string | null;
};

export function useLiveData(
  category: string,
  city?: string,
  state?: string,
): State {
  const [result, setResult] = useState<State>({
    data: null,
    loading: false,
    error: null,
  });

  // Avoid double-fetching in strict mode / re-renders
  const fetchedRef = useRef(false);

  useEffect(() => {
    // Only fetch for categories that have live data
    if (!LIVE_DATA_CATEGORIES.has(category)) return;
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    setResult({ data: null, loading: true, error: null });

    fetchLiveData(category, city, state)
      .then((data) => setResult({ data, loading: false, error: null }))
      .catch((err: Error) =>
        setResult({ data: null, loading: false, error: err.message }),
      );
  }, [category, city, state]);

  return result;
}
