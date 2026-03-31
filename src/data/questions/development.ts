import type { Question } from './index';

export const developmentQuestions: Question[] = [
  {
    id: 'dev_1',
    question: 'Building permits are best described as:',
    options: [
      'Private documents only accessible to developers',
      'Public records available through city or county planning departments',
      'Federal documents filed with the Census Bureau',
      'MLS records showing new construction listings',
    ],
    correct: 1,
    explanation: 'Building permits are public records filed with local government. They\'re a key data source for tracking construction activity and developer confidence in a market.',
    category: 'development',
  },
  {
    id: 'dev_2',
    question: 'The "Whole Foods Effect" refers to what real estate phenomenon?',
    options: [
      'Organic grocery stores reducing foot traffic to neighborhoods',
      'Premium anchor retailers correlating with home value increases in surrounding areas',
      'Health-conscious buyers paying more for homes with large kitchens',
      'Grocery store proximity being a top-3 buyer priority nationally',
    ],
    correct: 1,
    explanation: 'Research has shown that when premium anchor retailers like Whole Foods open in an area, home values in surrounding neighborhoods tend to increase — the retailer signals demographic confidence.',
    category: 'development',
  },
  {
    id: 'dev_3',
    question: 'What does "upzoning" mean in land use planning?',
    options: [
      'Increasing property taxes in high-value zones',
      'Designating land as flood zone elevation',
      'Allowing higher density development than previously permitted',
      'Upgrading a property\'s historical designation',
    ],
    correct: 2,
    explanation: 'Upzoning changes zoning rules to allow higher-density development (e.g., from single-family to multi-family). It often increases land value and signals where growth is expected.',
    category: 'development',
  },
  {
    id: 'dev_4',
    question: 'Which organization publishes long-term Transportation Improvement Plans showing where infrastructure dollars are headed?',
    options: [
      'National Association of Realtors (NAR)',
      'Metropolitan Planning Organization (MPO)',
      'Federal Housing Administration (FHA)',
      'US Army Corps of Engineers',
    ],
    correct: 1,
    explanation: 'Metropolitan Planning Organizations (MPOs) are federally required bodies that publish 20-year Transportation Improvement Plans for their regions — an excellent resource for predicting growth corridors.',
    category: 'development',
  },
  {
    id: 'dev_5',
    question: 'When new construction increases supply in a submarket, what is the typical SHORT-term effect on existing resale prices?',
    options: [
      'Resale prices always rise due to increased buyer activity',
      'No effect — new construction and resale markets are completely separate',
      'Resale prices may be temporarily suppressed as buyers have more options',
      'Resale prices double as the neighborhood gains prestige',
    ],
    correct: 2,
    explanation: 'New construction adds inventory, giving buyers more choices. In the short term, this competition can suppress or slow resale price growth until the new supply is absorbed.',
    category: 'development',
  },
];
