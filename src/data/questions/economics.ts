import type { Question } from './index';

export const economicsQuestions: Question[] = [
  {
    id: 'econ_1',
    question: 'What is the traditional benchmark for housing affordability?',
    options: [
      'Housing costs at or below 20% of gross income',
      'Housing costs at or below 30% of gross income',
      'Housing costs at or below 40% of gross income',
      'Housing costs at or below 50% of gross income',
    ],
    correct: 1,
    explanation: 'The widely accepted affordability standard is spending no more than 30% of gross income on housing. Above this threshold, households are considered "cost-burdened."',
    category: 'economics',
  },
  {
    id: 'econ_2',
    question: 'Approximately how much does buying power decrease for every 1% increase in mortgage interest rates?',
    options: ['About 3%', 'About 5%', 'About 10%', 'About 20%'],
    correct: 2,
    explanation: 'A 1% rise in mortgage rates reduces a buyer\'s purchasing power by roughly 10%, because it significantly increases the monthly payment on any given loan amount.',
    category: 'economics',
  },
  {
    id: 'econ_3',
    question: 'What is "cap rate" used to measure?',
    options: [
      'The maximum loan amount a buyer can obtain',
      'An investment property\'s return independent of financing',
      'The rate at which property taxes increase annually',
      'The capitalization of a real estate company',
    ],
    correct: 1,
    explanation: 'Cap rate (Net Operating Income ÷ Property Value) measures an investment property\'s return without factoring in financing. It allows apples-to-apples comparison across properties.',
    category: 'economics',
  },
  {
    id: 'econ_4',
    question: 'Which type of local economy is considered more resilient during recessions?',
    options: [
      'Towns dependent on a single large manufacturer',
      'Markets anchored by diverse employers across multiple sectors',
      'Tourism-dependent coastal markets',
      'Oil and gas dependent markets',
    ],
    correct: 1,
    explanation: 'Diverse employer bases (healthcare, government, education, tech) spread economic risk. Single-employer towns are devastated when that employer downsizes or relocates.',
    category: 'economics',
  },
  {
    id: 'econ_5',
    question: 'What free resource publishes local area unemployment statistics (LAUS) monthly by metro area?',
    options: [
      'Zillow Research',
      'National Association of Realtors',
      'Bureau of Labor Statistics (BLS)',
      'Federal Housing Finance Agency (FHFA)',
    ],
    correct: 2,
    explanation: 'The Bureau of Labor Statistics publishes monthly Local Area Unemployment Statistics (LAUS) broken down by state, metro area, and county — all free at bls.gov.',
    category: 'economics',
  },
];
