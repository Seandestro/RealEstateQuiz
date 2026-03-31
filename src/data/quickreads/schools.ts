import type { QuickReadData } from './index';

export const schoolsRead: QuickReadData = {
  intro: "School quality is one of the top drivers of home values. Knowing how to discuss schools accurately — and legally — is essential for every agent.",
  sections: [
    {
      id: 'ratings',
      icon: '⭐',
      title: 'School Rating Systems',
      bullets: [
        'GreatSchools rates on a 1–10 scale using test scores, progress, equity, and college readiness.',
        'Niche.com provides letter grades and reviews across academics, teachers, and culture.',
        'State report cards are the most official source — check your state\'s Department of Education site.',
        'Ratings change year to year — always verify current scores rather than relying on memory.',
      ],
      tip: 'Direct buyers to GreatSchools.org and let them draw their own conclusions — don\'t editorialize.',
    },
    {
      id: 'boundaries',
      icon: '🗺️',
      title: 'Attendance Zones & Boundaries',
      bullets: [
        'Attendance zones are set by school districts and determine which school a child attends.',
        'Boundaries can change — always verify current boundaries with the school district directly.',
        'A home listed "in the XYZ School District" may feed into multiple different schools by grade level.',
        'Open enrollment policies allow some students to attend schools outside their zone.',
      ],
      tip: 'Never guarantee school assignment — always say "based on current boundaries" and direct clients to verify.',
    },
    {
      id: 'types',
      icon: '🏫',
      title: 'Types of Schools',
      bullets: [
        'Traditional public schools are assigned by attendance zone with no cost to attend.',
        'Charter schools are publicly funded but independently operated, often with lottery enrollment.',
        'Magnet schools offer specialized programs (STEM, arts) and may draw from a wider area.',
        'Private and parochial schools have tuition and independent admission processes.',
      ],
      tip: 'Knowing the difference between school types helps you answer buyer questions without overstepping.',
    },
    {
      id: 'fair-housing',
      icon: '⚖️',
      title: 'Fair Housing & Schools',
      bullets: [
        'Steering buyers toward or away from areas based on school demographics violates the Fair Housing Act.',
        'You can share factual data (ratings, rankings) but should not make subjective quality judgments.',
        'Providing school info to all buyers equally — regardless of whether they have children — avoids discrimination claims.',
        'Familial status is a protected class — treat all buyers the same in school-related discussions.',
      ],
      tip: 'When in doubt, say: "Here are some resources to research schools — I recommend reaching out to the district directly."',
    },
  ],
};
