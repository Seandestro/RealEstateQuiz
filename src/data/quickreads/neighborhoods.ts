import type { QuickReadData } from './index';

export const neighborhoodsRead: QuickReadData = {
  intro: "Knowing your neighborhoods inside and out is what separates good agents from great ones. Buyers aren't just buying a home — they're buying into a community.",
  sections: [
    {
      id: 'character',
      icon: '🏡',
      title: 'Neighborhood Character',
      bullets: [
        'Walk Score, Transit Score, and Bike Score are free tools that quantify neighborhood livability.',
        'Age of housing stock affects maintenance expectations — older neighborhoods may need more work.',
        'Mixed-use neighborhoods (retail + residential) typically command price premiums.',
        'Street grid patterns affect walkability — grid streets are more walkable than cul-de-sac designs.',
      ],
      tip: 'Visit neighborhoods at different times of day — evening and weekend feel can differ drastically from weekday mornings.',
    },
    {
      id: 'hoa',
      icon: '📋',
      title: 'HOAs & Planned Communities',
      bullets: [
        'HOA fees can range from $50/month to $1,500+/month — always factor into affordability.',
        'Review CC&Rs (Covenants, Conditions & Restrictions) before advising buyers — they govern what owners can do.',
        'HOA financials matter — underfunded reserves signal future special assessments.',
        'Gated communities command a premium but may have slower emergency response access.',
      ],
      tip: 'Request the last 12 months of HOA meeting minutes — they reveal known issues before they become your problem.',
    },
    {
      id: 'trends',
      icon: '🔄',
      title: 'Neighborhood Trends',
      bullets: [
        'Gentrification signals: new coffee shops, renovated storefronts, rising permit activity.',
        'Watch for anchor projects — a new park, transit stop, or school can transform values.',
        'Declining neighborhoods show: rising vacancy, deferred maintenance, business closures.',
        'Opportunity zones may offer tax incentives for buyers investing in transitional areas.',
      ],
      tip: 'Your city\'s planning department publishes zoning and development applications — check them regularly.',
    },
    {
      id: 'demographics',
      icon: '👥',
      title: 'Demographics & Lifestyle',
      bullets: [
        'Median age of residents affects what neighborhood amenities are priorities.',
        'Renter vs. owner-occupancy ratio affects property values and neighborhood stability.',
        'Crime data is available at the neighborhood level through local police department dashboards.',
        'Neighborhood Facebook groups and Nextdoor give real-time resident sentiment.',
      ],
      tip: 'Never steer clients toward or away from neighborhoods based on demographics — it violates the Fair Housing Act.',
    },
  ],
};
