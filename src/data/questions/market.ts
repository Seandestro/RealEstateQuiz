import type { Question } from './index';

export const marketQuestions: Question[] = [
  {
    id: 'mkt_1',
    question: 'What does "absorption rate" measure in real estate?',
    options: ['The speed at which available homes sell', 'The interest rate on mortgages', 'The rate of property tax increases', 'The percentage of homes that are rentals'],
    correct: 0,
    explanation: 'Absorption rate measures how fast homes sell in a given market. A high rate = seller\'s market; low rate = buyer\'s market.',
    category: 'market',
  },
  {
    id: 'mkt_2',
    question: 'A market with less than 3 months of inventory is typically called:',
    options: ['A buyer\'s market', 'A balanced market', 'A seller\'s market', 'A renter\'s market'],
    correct: 2,
    explanation: 'Less than 3 months of inventory favors sellers because demand exceeds supply, often leading to multiple offers and rising prices.',
    category: 'market',
  },
  {
    id: 'mkt_3',
    question: 'What is a "comparable sale" (comp) used for?',
    options: ['Calculating property taxes', 'Determining a home\'s market value', 'Setting mortgage interest rates', 'Estimating renovation costs'],
    correct: 1,
    explanation: 'Comps are recently sold similar properties used to estimate the fair market value of a home being priced or appraised.',
    category: 'market',
  },
  {
    id: 'mkt_4',
    question: 'What does "days on market" (DOM) indicate?',
    options: ['How long a home has been owned', 'How many days until closing', 'How long a listing has been active', 'The number of showings per day'],
    correct: 2,
    explanation: 'DOM tracks how long a property has been listed. A high DOM can signal overpricing or low demand in that area.',
    category: 'market',
  },
  {
    id: 'mkt_5',
    question: 'Which factor most directly affects mortgage interest rates?',
    options: ['Local property tax rates', 'Federal Reserve monetary policy', 'HOA fees', 'Number of active listings'],
    correct: 1,
    explanation: 'The Federal Reserve\'s decisions on the federal funds rate directly influence mortgage rates set by lenders.',
    category: 'market',
  },
];
