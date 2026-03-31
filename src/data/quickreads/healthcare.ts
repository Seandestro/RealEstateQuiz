import type { QuickReadData } from './index';

export const healthcareRead: QuickReadData = {
  intro: "Healthcare access is a top priority for retirees, families, and anyone managing health conditions. Knowing your area's healthcare landscape makes you a more trusted advisor.",
  sections: [
    {
      id: 'value',
      icon: '🏥',
      title: 'Healthcare & Home Values',
      bullets: [
        'Proximity to major hospitals increases demand from medical professionals and support staff.',
        'Medical districts are economic anchors — nearby neighborhoods benefit from stable employment demand.',
        'Retirees rank healthcare access among their top 3 relocation criteria consistently.',
        'Very close proximity (under 0.25 miles) to large hospitals may reduce values due to noise and traffic.',
      ],
      tip: 'For listings near hospitals, highlight the employment and access benefits while acknowledging the trade-offs honestly.',
    },
    {
      id: 'types',
      icon: '🩺',
      title: 'Types of Healthcare Facilities',
      bullets: [
        'Major hospitals provide trauma care, specialty services, and large employment bases.',
        'Urgent care centers offer fast, affordable care for non-emergency needs — growing rapidly in suburbs.',
        'Freestanding emergency rooms provide ER-level care without a full hospital — common in newer suburbs.',
        'Specialty clinics (cancer centers, heart institutes) attract medical professionals to surrounding areas.',
      ],
      tip: 'Know the nearest ER and urgent care to every listing — clients with families or health needs always ask.',
    },
    {
      id: 'seniors',
      icon: '👴',
      title: 'Senior Healthcare Access',
      bullets: [
        'Active adult communities often market healthcare proximity as a primary amenity.',
        'PACE programs and senior centers provide integrated care — their locations matter to aging buyers.',
        'Assisted living and memory care facilities near homes can affect values — research before advising.',
        'Telehealth has reduced some need for in-person access, but specialist care still requires proximity.',
      ],
      tip: 'When working with buyers 55+, proactively share info on nearby senior services — it builds tremendous trust.',
    },
    {
      id: 'wellness',
      icon: '💪',
      title: 'Wellness & Preventive Health',
      bullets: [
        'Fitness centers, yoga studios, and gyms are increasingly valued as neighborhood amenities.',
        'Walkability and park access support physical health — a quantifiable quality-of-life factor.',
        'Health food stores and farmers markets signal a health-conscious demographic.',
        'Mental health services and community wellness centers are growing in buyer consideration.',
      ],
      tip: 'Wellness amenities appeal to a wide range of buyers — don\'t overlook them in your neighborhood pitch.',
    },
  ],
};
