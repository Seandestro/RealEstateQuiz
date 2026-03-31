import type { QuickReadData } from './index';

export const economicsRead: QuickReadData = {
  intro: "Local economic health drives real estate demand more than almost any other factor. Agents who understand employment, income trends, and affordability advise clients with real confidence.",
  sections: [
    {
      id: 'employment',
      icon: '💼',
      title: 'Employment & Major Employers',
      bullets: [
        'Markets anchored by diverse employers (healthcare, government, tech, education) are more recession-resistant.',
        'Single-employer towns carry outsized risk — a plant closure or headquarters relocation reshapes the entire market.',
        'Job growth rate is a leading indicator for housing demand — new jobs attract new residents who need housing.',
        'Bureau of Labor Statistics (BLS) publishes monthly local area unemployment statistics (LAUS) for free.',
        'Major employer announcements (expansions, relocations) often precede housing price surges by 6–18 months.',
      ],
      tip: 'Track major employer news in your market through the local business journal — it\'s one of the best leading indicators for demand shifts.',
    },
    {
      id: 'affordability',
      icon: '🏡',
      title: 'Affordability & Income',
      bullets: [
        'The standard affordability benchmark is housing costs at or below 30% of gross income.',
        'Price-to-income ratio (median home price ÷ median household income) measures long-run affordability.',
        'Rising incomes without rising home prices signal an improving buyer opportunity.',
        'HUD publishes Area Median Income (AMI) data used for loan qualification and affordable housing programs.',
        'Affordability constraints slow price appreciation — markets near affordability ceilings are vulnerable to correction.',
      ],
      tip: 'FRED (Federal Reserve Economic Data at fred.stlouisfed.org) offers free, downloadable data on income, employment, and affordability by metro area.',
    },
    {
      id: 'interest',
      icon: '📈',
      title: 'Interest Rates & Mortgage Market',
      bullets: [
        'A 1% increase in mortgage rates reduces buying power by roughly 10% — it\'s one of the biggest demand drivers.',
        'Rate lock-in effect: homeowners with sub-3% mortgages are reluctant to sell, reducing inventory in rising-rate markets.',
        'ARM (adjustable-rate mortgage) adoption rises when rates are high — signals buyer desperation for affordability.',
        'FRED tracks the 30-year fixed mortgage rate weekly — watch the trend, not just today\'s number.',
        'Federal Reserve meeting dates and commentary move rate expectations — track the Fed Funds futures market.',
      ],
      tip: 'When rates drop even 0.5%, contact your past clients — thousands of dollars in monthly savings can unlock move-up buyers.',
    },
    {
      id: 'investment',
      icon: '💰',
      title: 'Investment & Rental Economics',
      bullets: [
        'Cap rate (Net Operating Income ÷ Property Value) measures investment return independent of financing.',
        'Gross rent multiplier (GRM = Price ÷ Annual Rent) is a quick screening tool for rental properties.',
        'Rental yield above 6% generally signals a cash-flow-positive opportunity in most markets.',
        'Rising rents relative to home prices signal increasing rental demand — often precedes buyer demand.',
        'Rentometer and Zillow Rent Zestimate provide comparable rental data for most US markets.',
      ],
      tip: 'Even if you don\'t specialize in investment property, knowing cap rates and GRM helps you speak the language of investor clients — a high-value niche.',
    },
  ],
};
