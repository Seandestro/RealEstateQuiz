export type Question = {
  id: string;
  question: string;
  options: string[];
  correct: number; // index of correct option
  explanation: string;
  category: string;
};

export { marketQuestions } from './market';
export { neighborhoodsQuestions } from './neighborhoods';
export { schoolsQuestions } from './schools';
export { churchesQuestions } from './churches';
export { entertainmentQuestions } from './entertainment';
export { shoppingQuestions } from './shopping';
export { restaurantsQuestions } from './restaurants';
export { parksQuestions } from './parks';
export { healthcareQuestions } from './healthcare';
export { transportationQuestions } from './transportation';

import { marketQuestions } from './market';
import { neighborhoodsQuestions } from './neighborhoods';
import { schoolsQuestions } from './schools';
import { churchesQuestions } from './churches';
import { entertainmentQuestions } from './entertainment';
import { shoppingQuestions } from './shopping';
import { restaurantsQuestions } from './restaurants';
import { parksQuestions } from './parks';
import { healthcareQuestions } from './healthcare';
import { transportationQuestions } from './transportation';

export const ALL_QUESTIONS: Record<string, Question[]> = {
  market: marketQuestions,
  neighborhoods: neighborhoodsQuestions,
  schools: schoolsQuestions,
  churches: churchesQuestions,
  entertainment: entertainmentQuestions,
  shopping: shoppingQuestions,
  restaurants: restaurantsQuestions,
  parks: parksQuestions,
  healthcare: healthcareQuestions,
  transportation: transportationQuestions,
};
