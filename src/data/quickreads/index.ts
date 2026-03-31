export type QuickReadSection = {
  id: string;
  icon: string;
  title: string;
  bullets: string[];
  tip?: string;
};

export type QuickReadData = {
  intro: string;
  sections: QuickReadSection[];
};

import { marketRead } from './market';
import { neighborhoodsRead } from './neighborhoods';
import { schoolsRead } from './schools';
import { churchesRead } from './churches';
import { entertainmentRead } from './entertainment';
import { shoppingRead } from './shopping';
import { restaurantsRead } from './restaurants';
import { parksRead } from './parks';
import { healthcareRead } from './healthcare';
import { transportationRead } from './transportation';

export const ALL_QUICKREADS: Record<string, QuickReadData> = {
  market: marketRead,
  neighborhoods: neighborhoodsRead,
  schools: schoolsRead,
  churches: churchesRead,
  entertainment: entertainmentRead,
  shopping: shoppingRead,
  restaurants: restaurantsRead,
  parks: parksRead,
  healthcare: healthcareRead,
  transportation: transportationRead,
};
