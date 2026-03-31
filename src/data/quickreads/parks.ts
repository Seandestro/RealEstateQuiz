import type { QuickReadData } from './index';

export const parksRead: QuickReadData = {
  intro: "Green space access is a proven driver of home values and quality of life. Buyers increasingly prioritize outdoor access — knowing your local parks gives you a competitive edge.",
  sections: [
    {
      id: 'value',
      icon: '💰',
      title: 'Parks & Property Values',
      bullets: [
        'Homes within walking distance of parks sell for 5–20% more than comparable homes without access.',
        'Views of green space command the highest premiums — sometimes 25%+ for direct park-front homes.',
        'Trail networks and greenways increase walkability scores, driving additional value.',
        'Dog parks have become a notable amenity driver as pet ownership rises nationwide.',
      ],
      tip: 'Always mention park proximity in listing descriptions — it\'s a lifestyle benefit that resonates with most buyers.',
    },
    {
      id: 'types',
      icon: '🌲',
      title: 'Types of Green Space',
      bullets: [
        'Regional parks and nature preserves offer the strongest value premium due to scale and permanence.',
        'Pocket parks improve walkability but have limited impact on values beyond immediate neighbors.',
        'Linear parks along greenways and waterways connect neighborhoods and boost multiple properties.',
        'Sports complexes attract families but can bring weekend traffic and noise.',
      ],
      tip: 'Know the difference between a maintained city park and an undeveloped lot — buyers notice.',
    },
    {
      id: 'trails',
      icon: '🚴',
      title: 'Trails & Active Recreation',
      bullets: [
        'Bike lanes and trail networks are top priorities for active buyers and young professionals.',
        'Rails-to-trails conversions are transforming former rail corridors into major community assets.',
        'Access to running trails and fitness amenities reduces the need for gym memberships.',
        'Multi-use trail connectivity to employment centers is a growing home value driver.',
      ],
      tip: 'Bikeability scores are available on walkscore.com — include them in your listing marketing.',
    },
    {
      id: 'access',
      icon: '🗺️',
      title: 'Park Equity & Access',
      bullets: [
        'Park equity disparities exist across income levels — lower-income neighborhoods often have fewer, lower-quality parks.',
        'City master plans often signal where new parks are planned — check for upcoming green space investments.',
        'Privately owned public spaces (POPS) in mixed-use developments add amenity without municipal cost.',
        'National recreation areas and state parks near suburbs can significantly expand outdoor access.',
      ],
      tip: 'Check your city\'s parks master plan — upcoming green space projects near listings are a strong selling point.',
    },
  ],
};
