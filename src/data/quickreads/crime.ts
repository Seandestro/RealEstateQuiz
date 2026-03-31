import type { QuickReadData } from './index';

export const crimeRead: QuickReadData = {
  intro: "Safety is one of the most searched factors when buyers evaluate a neighborhood. Understanding crime data — and how to discuss it professionally — sets great agents apart.",
  sections: [
    {
      id: 'data',
      icon: '📊',
      title: 'Reading Crime Statistics',
      bullets: [
        'Crime rates are typically reported per 1,000 residents — always compare rates, not raw numbers.',
        'Violent crime (assault, robbery, homicide) and property crime (theft, burglary) are tracked separately.',
        'City-level stats can mask hyper-local variation — neighborhood-level data is far more useful.',
        'FBI Uniform Crime Reports and local police department dashboards are the most reliable primary sources.',
        'Year-over-year trends matter more than a single snapshot — look for sustained improvement or decline.',
      ],
      tip: 'SpotCrime, CrimeMapping, and NeighborhoodScout aggregate police data and visualize it by address — bookmark these.',
    },
    {
      id: 'value',
      icon: '🏠',
      title: 'Crime & Property Values',
      bullets: [
        'High violent crime rates are consistently linked to lower property values and slower price appreciation.',
        'Improving crime trends can signal a neighborhood in transition — often a buying opportunity.',
        'Buyers with children or retirees typically weight safety data more heavily than other buyer profiles.',
        'Commercial investment often precedes residential value gains in improving areas — watch business permits.',
        'Lighting, walkability, and "eyes on the street" are physical factors that correlate with lower crime.',
      ],
      tip: 'Frame crime trends positively when appropriate — "this neighborhood has seen a 30% drop in property crime over 3 years" is a powerful selling point.',
    },
    {
      id: 'disclosure',
      icon: '⚖️',
      title: 'Legal & Ethical Considerations',
      bullets: [
        'Fair Housing Act prohibits steering clients away from or toward neighborhoods based on protected class demographics.',
        'You can share publicly available crime statistics — you cannot characterize neighborhoods in discriminatory ways.',
        'Point buyers to data sources and let them draw their own conclusions whenever possible.',
        'Some states require disclosure of certain criminal history on the property itself (not the neighborhood).',
        'Sex offender registry proximity is a common buyer question — direct them to the National Sex Offender Public Website (nsopw.gov).',
      ],
      tip: 'Never characterize a neighborhood as "safe" or "unsafe" yourself — share the data and let clients evaluate it. This protects you legally.',
    },
    {
      id: 'conversation',
      icon: '💬',
      title: 'Talking to Clients About Safety',
      bullets: [
        'Proactively share crime data resources before clients ask — it builds trust and positions you as thorough.',
        'Contextualize data: compare the neighborhood to the city average and regional average.',
        'Ask buyers what safety factors matter most to them — priorities vary widely by household.',
        'Night visits to a neighborhood give clients a real feel that stats alone cannot provide.',
        'Understand that perception of safety can lag reality — improving areas are often undervalued.',
      ],
      tip: 'Visiting a neighborhood at different times of day — morning, evening, weekend — gives clients (and you) a more complete picture than data alone.',
    },
  ],
};
