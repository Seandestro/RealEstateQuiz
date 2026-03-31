import type { QuickReadData } from './index';

export const restaurantsRead: QuickReadData = {
  intro: "Dining options reflect a neighborhood's culture, economic health, and buyer appeal. The restaurant scene is often the first thing buyers explore when considering a new area.",
  sections: [
    {
      id: 'value',
      icon: '📊',
      title: 'Restaurants & Home Values',
      bullets: [
        'Harvard research found homes near quality restaurants sell for measurably more than comparable properties.',
        'Starbucks proximity has been shown to precede home price appreciation in urban markets.',
        'Independent restaurant clusters signal entrepreneurial investment and neighborhood confidence.',
        'Cuisine diversity indicates demographic richness — a positive signal for many buyers.',
      ],
      tip: 'Knowing the top 3–5 local restaurants near a listing helps you paint a vivid lifestyle picture.',
    },
    {
      id: 'types',
      icon: '🍴',
      title: 'Reading the Restaurant Scene',
      bullets: [
        'Fast-casual chains signal early-stage neighborhood investment — more affordable, less risk.',
        'Fine dining establishments signal an established affluent buyer/renter base.',
        'Coffee shops, brunch spots, and wine bars are strong indicators of millennial/professional appeal.',
        'Food halls and market concepts signal neighborhood revitalization and culinary investment.',
      ],
      tip: 'Mention specific local favorites in listing descriptions — it tells a story that comps can\'t.',
    },
    {
      id: 'noise',
      icon: '🔊',
      title: 'Noise & Parking Considerations',
      bullets: [
        'Bars and late-night restaurants generate noise after 10PM — visit on a weekend evening.',
        'Delivery traffic (Uber Eats, DoorDash drivers) has increased congestion near restaurant-dense areas.',
        'Outdoor patio dining can affect neighboring homes in warmer months.',
        'Parking spillover from popular restaurants is a common neighbor complaint — assess the situation.',
      ],
      tip: 'Be proactive about disclosing restaurant noise near listings — buyers appreciate honesty upfront.',
    },
    {
      id: 'emerging',
      icon: '🌱',
      title: 'Emerging Dining Scenes',
      bullets: [
        'New restaurant openings in a formerly sparse area often signal developer confidence.',
        'Chef-driven concepts and food trucks test markets before permanent locations — watch for patterns.',
        'Restaurant week participation and food festival presence indicate a maturing dining scene.',
        'Local food blogs and Instagram food accounts reveal what\'s buzzing before mainstream media catches on.',
      ],
      tip: 'Follow local food influencers on Instagram — they\'ll tell you which neighborhoods are heating up before the data does.',
    },
  ],
};
