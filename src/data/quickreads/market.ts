import type { QuickReadData } from './index';

export const marketRead: QuickReadData = {
  intro: "Understanding your local market is the foundation of being a great agent. Here's what every agent needs to know to advise buyers and sellers with confidence.",
  sections: [
    {
      id: 'supply-demand',
      icon: '⚖️',
      title: 'Supply & Demand Basics',
      bullets: [
        'Less than 3 months of inventory = Seller\'s market — prices trend up, multiple offers are common.',
        '3–6 months of inventory = Balanced market — fair negotiation on both sides.',
        'More than 6 months = Buyer\'s market — buyers have leverage, prices may soften.',
        'Absorption rate tells you how fast homes are selling — divide monthly sales by active listings.',
      ],
      tip: 'Always lead with inventory levels when explaining market conditions to clients.',
    },
    {
      id: 'pricing',
      icon: '💰',
      title: 'Pricing Strategy',
      bullets: [
        'Comparable sales (comps) within the last 90 days are most relevant for pricing.',
        'Price per square foot varies dramatically by neighborhood — never apply a citywide average.',
        'Overpriced homes sit — the first 2 weeks on market drive the most buyer interest.',
        'List-to-sale price ratio shows how much negotiation room exists in your market.',
      ],
      tip: 'A home priced right from day one sells faster and often closer to full price.',
    },
    {
      id: 'trends',
      icon: '📈',
      title: 'Key Market Indicators',
      bullets: [
        'Days on Market (DOM) — tracks how long homes sit before going under contract.',
        'Median sale price vs. median list price reveals how competitive the market is.',
        'Year-over-year price appreciation tells a bigger story than month-to-month swings.',
        'Watch new construction permits — they signal future supply changes 12–18 months out.',
      ],
      tip: 'Redfin and Zillow Research publish free weekly market data by zip code.',
    },
    {
      id: 'rates',
      icon: '🏦',
      title: 'Interest Rates & Buying Power',
      bullets: [
        'A 1% rate increase reduces buying power by roughly 10% for the same monthly payment.',
        'Rate buydowns (2-1 buydowns) have become a popular seller concession in higher-rate markets.',
        'Adjustable-rate mortgages (ARMs) become popular when fixed rates are elevated.',
        'Cash buyers are unaffected by rates — track cash sale percentages as a market health signal.',
      ],
      tip: 'Help buyers understand payment impact, not just rate numbers — it makes advice tangible.',
    },
  ],
};
