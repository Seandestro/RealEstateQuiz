import type { Question } from './index';

export const crimeQuestions: Question[] = [
  {
    id: 'crime_1',
    question: 'How are crime rates typically reported to allow fair comparisons between cities?',
    options: ['Total incidents per year', 'Per 1,000 residents', 'Per square mile', 'Per police officer'],
    correct: 1,
    explanation: 'Crime rates are reported per 1,000 residents so you can compare cities of different sizes on equal footing. Raw incident counts favor smaller cities.',
    category: 'crime',
  },
  {
    id: 'crime_2',
    question: 'Under the Fair Housing Act, which of the following is PROHIBITED when discussing neighborhoods?',
    options: [
      'Sharing publicly available crime statistics',
      'Directing clients to local police department data',
      'Steering clients based on the racial composition of a neighborhood',
      'Advising clients to visit a neighborhood at night',
    ],
    correct: 2,
    explanation: 'Steering clients toward or away from neighborhoods based on protected class characteristics (including race) is illegal under the Fair Housing Act.',
    category: 'crime',
  },
  {
    id: 'crime_3',
    question: 'Which two main categories do law enforcement agencies use to classify crime?',
    options: [
      'Felonies and misdemeanors',
      'Violent crime and property crime',
      'Street crime and white-collar crime',
      'Reported crime and unreported crime',
    ],
    correct: 1,
    explanation: 'The FBI Uniform Crime Reports divide crime into violent crime (assault, robbery, homicide) and property crime (theft, burglary, arson).',
    category: 'crime',
  },
  {
    id: 'crime_4',
    question: 'What is the most professional way for an agent to handle a buyer asking "Is this neighborhood safe?"',
    options: [
      'Assure them the neighborhood is completely safe',
      'Refuse to discuss safety at all',
      'Share data sources and let the client draw their own conclusions',
      'Compare it favorably to higher-crime neighborhoods nearby',
    ],
    correct: 2,
    explanation: 'Pointing clients to objective data sources protects you legally under Fair Housing rules and builds trust by being thorough and transparent.',
    category: 'crime',
  },
  {
    id: 'crime_5',
    question: 'A neighborhood\'s violent crime rate has dropped 35% over three years. What does this typically signal for real estate?',
    options: [
      'Prices are likely to fall as residents leave',
      'A potential buying opportunity as the neighborhood improves',
      'No impact — buyers only care about current rates',
      'The data is probably inaccurate',
    ],
    correct: 1,
    explanation: 'Sustained crime reduction often signals a neighborhood in transition. Improving areas are frequently undervalued relative to where they\'re heading, presenting a buying opportunity.',
    category: 'crime',
  },
];
