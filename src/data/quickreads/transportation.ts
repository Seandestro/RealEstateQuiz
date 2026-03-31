import type { QuickReadData } from './index';

export const transportationRead: QuickReadData = {
  intro: "How people get around affects their daily quality of life more than almost any other factor. Transportation access can make or break a buyer's decision — and a home's long-term value.",
  sections: [
    {
      id: 'transit',
      icon: '🚆',
      title: 'Public Transit & Home Values',
      bullets: [
        'Homes within half a mile of commuter rail stations sell for 5–15% more on average.',
        'The "transit premium" is strongest in high-density, high-cost cities where commuting time matters most.',
        'Bus rapid transit (BRT) lines are delivering value premiums previously only seen with rail.',
        'Transit-oriented development (TOD) zones around stations attract significant investment.',
      ],
      tip: 'Transit Score is available free at walkscore.com — include it in marketing for transit-accessible listings.',
    },
    {
      id: 'commute',
      icon: '⏱️',
      title: 'Commute Patterns',
      bullets: [
        'Average commute time under 30 minutes is a consistent driver of residential desirability.',
        'Remote and hybrid work has shifted demand away from transit-dependent urban areas to suburban markets.',
        'Highway access within 5–10 minutes is a top criteria for many car-dependent buyers.',
        'Multiple commute route options reduce risk — single-route areas are vulnerable to traffic disruptions.',
      ],
      tip: 'Use Google Maps to calculate commute times during peak hours for listings near employment centers — buyers will ask.',
    },
    {
      id: 'infrastructure',
      icon: '🛣️',
      title: 'Road & Highway Infrastructure',
      bullets: [
        'Highway proximity provides accessibility but direct adjacency brings noise, pollution, and lower values.',
        'New highway interchanges often trigger commercial and residential development within a mile radius.',
        'Road widening projects may temporarily impact values but typically boost long-term accessibility.',
        'Traffic studies for development projects are public records — review them for major listings.',
      ],
      tip: 'Sound walls and berms near highways significantly mitigate noise impacts — note their presence in listings.',
    },
    {
      id: 'future',
      icon: '🔮',
      title: 'Future Transportation Projects',
      bullets: [
        'Planned transit lines and stations are publicly announced years before completion — track them.',
        'New highway interchanges, bridge projects, and bypass roads reshape value patterns.',
        'Bike lane and pedestrian infrastructure investment signals long-term city commitment to walkability.',
        'Electric vehicle charging infrastructure availability is becoming a buyer consideration.',
      ],
      tip: 'Your regional MPO (Metropolitan Planning Organization) publishes transportation improvement plans — a goldmine for future value signals.',
    },
  ],
};
