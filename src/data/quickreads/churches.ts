import type { QuickReadData } from './index';

export const churchesRead: QuickReadData = {
  intro: "Places of worship are an important part of community life for many buyers. Here's how to discuss this topic professionally while staying on the right side of fair housing law.",
  sections: [
    {
      id: 'community',
      icon: '🤝',
      title: 'Community & Lifestyle Impact',
      bullets: [
        'Many buyers — especially families and retirees — prioritize proximity to their place of worship.',
        'Walkable access to a congregation supports community connection and regular attendance.',
        'Areas with diverse worship options appeal to a wider range of buyers and demographics.',
        'Religious institutions often serve as community anchors with events, food programs, and support networks.',
      ],
      tip: 'Let buyers bring up religion first — then you can provide factual information about what\'s nearby.',
    },
    {
      id: 'fair-housing',
      icon: '⚖️',
      title: 'Fair Housing & Religion',
      bullets: [
        'Religion is a federally protected class under the Fair Housing Act.',
        'Never steer buyers toward or away from neighborhoods based on the religious character of an area.',
        'Mentioning the religious composition of a neighborhood can be grounds for a discrimination complaint.',
        'Provide factual info (names of nearby institutions) without commentary on religious identity.',
      ],
      tip: 'If a buyer asks "are there churches nearby?" — answer factually. Never volunteer religious demographics of residents.',
    },
    {
      id: 'zoning',
      icon: '🏛️',
      title: 'Zoning & Land Use',
      bullets: [
        'Religious institutions are typically zoned as institutional or quasi-public, not residential or commercial.',
        'RLUIPA (Religious Land Use and Institutionalized Persons Act) protects churches from discriminatory zoning.',
        'Large churches can bring traffic and parking impacts to residential streets — worth noting to buyers nearby.',
        'Conversion of church buildings to residential use is a growing trend in urban markets.',
      ],
      tip: 'A converted church loft can be a unique listing opportunity — know your local zoning for adaptive reuse.',
    },
    {
      id: 'value',
      icon: '📊',
      title: 'Market Value Considerations',
      bullets: [
        'Homes directly adjacent to large churches may see traffic on weekends — buyers should visit on a Sunday.',
        'Church-owned land can be a development wildcard — if sold, nearby homes may be impacted.',
        'Tax-exempt status of religious properties affects local property tax revenue and services.',
        'Faith-based communities can drive strong neighborhood cohesion, which supports long-term values.',
      ],
      tip: 'Suggest buyers attend a Sunday service at a nearby church to experience the neighborhood at its busiest.',
    },
  ],
};
