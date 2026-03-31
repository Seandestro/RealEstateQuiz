import type { MarketData } from './index';

export const laJollaMarket: MarketData = {
  city: 'La Jolla',
  state: 'California',
  county: 'San Diego',
  aliases: ['la jolla', 'lajolla'],
  tagline: 'The Jewel of San Diego',

  // ─────────────────────────────────────────────
  // QUICK READS
  // ─────────────────────────────────────────────
  quickreads: {

    market: {
      intro: "La Jolla is one of Southern California's most prestigious coastal markets. Demand is consistently high, inventory is tight, and cash buyers are common. Here's what every agent needs to know.",
      sections: [
        {
          id: 'lj-market-overview',
          icon: '📊',
          title: 'La Jolla Market Snapshot',
          bullets: [
            'Median single-family home price: $3.5M–$4.5M depending on neighborhood and proximity to the coast.',
            'Median condo/townhome price: $1.1M–$1.6M — entry-level for the La Jolla ZIP codes.',
            'Active inventory typically stays below 100 homes — an extreme seller\'s market by national standards.',
            'Average days on market for well-priced homes: 20–35 days. Overpriced listings can sit for months.',
          ],
          tip: 'Buyers from tech, biotech, and academia (UCSD) drive much of La Jolla demand — know your buyer demographics.',
        },
        {
          id: 'lj-cash-buyers',
          icon: '💵',
          title: 'Cash Is King Here',
          bullets: [
            'Cash buyers make up an estimated 40–50% of La Jolla transactions — well above the national average.',
            'All-cash offers with short inspection periods are common at higher price points.',
            'Financed buyers should be pre-approved with a strong lender letter and ideally a proof-of-funds equivalent.',
            'Jumbo loan market is critical here — most La Jolla SFRs exceed conforming loan limits significantly.',
          ],
          tip: 'When representing buyers, have your lender call the listing agent proactively — it builds confidence in financed offers.',
        },
        {
          id: 'lj-zip-codes',
          icon: '🗺️',
          title: 'La Jolla ZIP Codes',
          bullets: [
            '92037 covers most of La Jolla including The Village, La Jolla Shores, Bird Rock, and Mount Soledad.',
            'Prices within 92037 vary dramatically — oceanfront vs. inland can differ by $2M+ for similar square footage.',
            'UTC area (92122) borders La Jolla and offers more accessible price points while maintaining the La Jolla address.',
            'Always clarify "La Jolla adjacent" listings — some agents market nearby areas as La Jolla.',
          ],
          tip: 'Pull comps by ZIP and sub-neighborhood — a Bird Rock comp is not valid for La Jolla Shores oceanfront.',
        },
        {
          id: 'lj-seasonality',
          icon: '📅',
          title: 'Seasonality & Timing',
          bullets: [
            'Spring (March–June) is peak listing season — most inventory hits the market and competition is highest.',
            'Summer attracts out-of-state and international buyers visiting San Diego.',
            'Fall and winter bring fewer listings but also fewer competing buyers — deals can be found.',
            'La Jolla\'s coastal climate means the typical California seasonality is more muted than inland markets.',
          ],
          tip: 'Sellers who list in January–February often face less competition and attract serious motivated buyers.',
        },
      ],
    },

    neighborhoods: {
      intro: "La Jolla is a collection of distinct micro-neighborhoods, each with its own character, price range, and buyer profile. Knowing them inside-out is what separates local experts from outsiders.",
      sections: [
        {
          id: 'lj-village',
          icon: '🏖️',
          title: 'The Village',
          bullets: [
            'La Jolla\'s walkable heart — Girard Avenue and Prospect Street host boutiques, restaurants, and galleries.',
            'Premium pricing for walkability — condos and townhomes range from $1.2M to $4M+.',
            'Ocean views from upper floors and hillside homes command significant premiums.',
            'Parking is challenging in The Village — buyers should experience it firsthand before committing.',
          ],
          tip: 'The Village is La Jolla\'s most walkable area with a Walk Score of ~75 — highlight this for lifestyle-oriented buyers.',
        },
        {
          id: 'lj-shores',
          icon: '🌊',
          title: 'La Jolla Shores',
          bullets: [
            'Flat, beachfront neighborhood with direct access to La Jolla Shores Beach — one of San Diego\'s best.',
            'Family-friendly with a laid-back vibe — popular with UCSD-connected buyers.',
            'Mix of 1950s–70s original builds and newer luxury rebuilds — lot value often exceeds structure value.',
            'Flood zone considerations apply to some lower-lying parcels — always check FEMA maps.',
          ],
          tip: 'Many Shores homes are in the Coastal Commission jurisdiction — any renovation or rebuild faces additional review.',
        },
        {
          id: 'lj-bird-rock',
          icon: '🐦',
          title: 'Bird Rock',
          bullets: [
            'Southern La Jolla neighborhood with a walkable village center along La Jolla Boulevard.',
            'More affordable entry into La Jolla — median SFR around $2.2M–$2.8M.',
            'Strong neighborhood identity and community feel — local shops, cafes, and a farmers market.',
            'Ocean views from elevated streets; flat streets closer to the water are highly sought.',
          ],
          tip: 'Bird Rock is often the "gateway to La Jolla" for buyers who want the address without Village pricing.',
        },
        {
          id: 'lj-mount-soledad',
          icon: '⛰️',
          title: 'Mount Soledad & Upper La Jolla',
          bullets: [
            'Hilltop location with panoramic views of the Pacific, Mission Bay, and downtown San Diego.',
            'Larger lots, more privacy, and architectural variety from mid-century to contemporary.',
            'Home to some of La Jolla\'s most expensive estates — $5M–$20M+ for premier view properties.',
            'The Mt. Soledad National Veterans Memorial is a landmark and community gathering point.',
          ],
          tip: 'Sunrise and sunset views from Mount Soledad are spectacular — schedule buyer showings at golden hour.',
        },
      ],
    },

    schools: {
      intro: "La Jolla is served by the La Jolla Unified School District (part of SDUSD) and is home to some of San Diego's most prestigious private schools. School quality is a top driver of family buyer decisions here.",
      sections: [
        {
          id: 'lj-public-schools',
          icon: '🏫',
          title: 'Public Schools',
          bullets: [
            'La Jolla High School (LJHS) consistently ranks among San Diego\'s top public high schools — GreatSchools 8/10.',
            'Muirlands Middle School and Bird Rock Elementary are well-regarded within SDUSD.',
            'La Jolla Elementary School serves The Village area and receives strong parent reviews.',
            'SDUSD boundaries apply — confirm current attendance zones with the district, as they can change.',
          ],
          tip: 'Always direct buyers to the SDUSD school boundaries tool at sandiegounified.org — never guarantee enrollment.',
        },
        {
          id: 'lj-private-schools',
          icon: '🎓',
          title: 'Elite Private Schools',
          bullets: [
            'The Bishop\'s School (La Jolla) — prestigious K–12 Episcopal school, tuition ~$40,000/year.',
            'La Jolla Country Day School (LJCDS) — renowned pre-K through 12th, strong college prep reputation.',
            'Francis Parker School — serves grades 6–12, known for academic rigor and athletics.',
            'These schools attract buyers from across San Diego County, not just local La Jolla families.',
          ],
          tip: 'Proximity to Bishop\'s or LJCDS is a selling point for listings within walking or easy driving distance.',
        },
        {
          id: 'lj-ucsd',
          icon: '🔬',
          title: 'UCSD & Higher Education',
          bullets: [
            'UC San Diego is one of the nation\'s top public research universities — a major La Jolla employer.',
            'UCSD faculty, researchers, and staff are a significant buyer segment — often prefer La Jolla or UTC.',
            'The Scripps Institution of Oceanography and Salk Institute are world-class research neighbors.',
            'Student rental demand from UCSD supports a robust condo and ADU rental market.',
          ],
          tip: 'UCSD\'s continued expansion makes La Jolla adjacent areas a strong long-term investment thesis.',
        },
        {
          id: 'lj-school-impact',
          icon: '📈',
          title: 'Schools & Property Values',
          bullets: [
            'The Bishop\'s School and LJCDS generate demand that keeps La Jolla prices elevated even in down markets.',
            'Buyers without school-age children still benefit from the value support strong schools provide.',
            'La Jolla\'s school reputation is a key reason the market holds value during regional corrections.',
            'International buyers — a significant La Jolla segment — specifically seek proximity to top schools.',
          ],
          tip: 'When listing, include school names in property descriptions — buyers searching by school will find your listing.',
        },
      ],
    },

    churches: {
      intro: "La Jolla has a collection of architecturally significant and historically rooted congregations. The community\'s faith life is woven into its civic identity.",
      sections: [
        {
          id: 'lj-notable-churches',
          icon: '⛪',
          title: 'Notable Congregations',
          bullets: [
            'St. James by-the-Sea Episcopal Church (1907) — a La Jolla landmark on Prospect Street, steps from the Cove.',
            'La Jolla Presbyterian Church — large congregation with deep community roots and a prominent Village presence.',
            'Mary Star of the Sea Catholic Church — serves a significant Catholic community in La Jolla.',
            'Temple Solel and Congregation Beth Israel serve La Jolla\'s Jewish community nearby.',
          ],
          tip: 'St. James by-the-Sea is a historic landmark — buyers appreciate its architectural beauty even if non-denominational.',
        },
        {
          id: 'lj-community-role',
          icon: '🤝',
          title: 'Faith & Community Life',
          bullets: [
            'La Jolla\'s churches host community events, concerts, and programs that strengthen neighborhood cohesion.',
            'The La Jolla Town Council and local civic organizations often partner with faith communities.',
            'Charitable giving and community service are culturally important in La Jolla — churches play a visible role.',
            'Walkable access to faith communities is a noted benefit for residents of The Village and nearby areas.',
          ],
          tip: 'Community involvement through faith organizations is one way new residents quickly build local connections.',
        },
        {
          id: 'lj-architecture',
          icon: '🏛️',
          title: 'Architectural Heritage',
          bullets: [
            'St. James by-the-Sea is a California Historical Landmark — a must-see for architecture enthusiasts.',
            'La Jolla\'s church buildings reflect its early 20th century development boom and original character.',
            'Several churches occupy premium coastal real estate, adding to the visual character of the Village.',
            'Historic preservation protections may apply to church-adjacent properties — verify before advising on modifications.',
          ],
          tip: 'Architectural character is a La Jolla selling point — knowing the history of landmark buildings adds depth to your local expertise.',
        },
        {
          id: 'lj-fair-housing',
          icon: '⚖️',
          title: 'Fair Housing Reminder',
          bullets: [
            'Religion is a protected class — never discuss the religious composition of La Jolla\'s residents.',
            'Provide factual information about nearby institutions without making demographic inferences.',
            'All buyers should receive equal information regardless of their religious background.',
            'If a buyer asks about nearby places of worship, answer factually and direct them to research further.',
          ],
          tip: 'Keep it factual: names, locations, denominations. Never characterize the religious makeup of the neighborhood.',
        },
      ],
    },

    entertainment: {
      intro: "La Jolla offers world-class entertainment in a stunning coastal setting. From the cliffs of the Cove to Tony Award-winning theater, this is one of California's premier lifestyle destinations.",
      sections: [
        {
          id: 'lj-outdoor',
          icon: '🌊',
          title: 'Outdoor & Coastal Attractions',
          bullets: [
            'La Jolla Cove — world-famous snorkeling and sea lion habitat, drawing visitors globally.',
            'Children\'s Pool Beach — protected cove popular for wildlife viewing (harbor seals year-round).',
            'Coast Walk Trail — 2-mile clifftop trail with dramatic ocean views above the Cove.',
            'La Jolla Shores Beach — one of San Diego\'s most beautiful and swimmable beaches.',
          ],
          tip: 'Coastal access is La Jolla\'s #1 lifestyle amenity — always include proximity to the Cove in listing descriptions.',
        },
        {
          id: 'lj-arts-culture',
          icon: '🎭',
          title: 'Arts & Culture',
          bullets: [
            'La Jolla Playhouse — Tony Award-winning regional theater on the UCSD campus, nationally acclaimed.',
            'Museum of Contemporary Art San Diego (MCASD) — La Jolla flagship location overlooking the ocean.',
            'La Jolla Music Society — presents world-class concerts at The Conrad performance center.',
            'Athenaeum Music & Arts Library — a unique cultural gem offering art galleries and music programs.',
          ],
          tip: 'La Jolla Playhouse has launched dozens of Broadway shows — a powerful talking point for culturally motivated buyers.',
        },
        {
          id: 'lj-family',
          icon: '👨‍👩‍👧',
          title: 'Family Entertainment',
          bullets: [
            'Birch Aquarium at Scripps Institution of Oceanography — world-class aquarium and tide pool experience.',
            'La Jolla Community Center — recreation programs, events, and community gatherings.',
            'YMCA of San Diego — serves La Jolla families with fitness and youth programs.',
            'Farmers market at La Jolla Open Aire Market (Bird Rock) — Saturdays, beloved community tradition.',
          ],
          tip: 'Birch Aquarium is a hidden gem that resonates strongly with families — mention it when showing to buyers with kids.',
        },
        {
          id: 'lj-nightlife',
          icon: '🍸',
          title: 'Dining & Nightlife Scene',
          bullets: [
            'Comedy Store La Jolla — intimate comedy club with national touring acts.',
            'George\'s at the Cove rooftop bar — iconic happy hour spot with ocean views.',
            'The Village offers upscale dining that doubles as the local evening social scene.',
            'La Jolla\'s nightlife is sophisticated and low-key — more dinner party than late-night club scene.',
          ],
          tip: 'La Jolla\'s entertainment appeals to an affluent, professional buyer — lead with culture and dining, not nightclubs.',
        },
      ],
    },

    shopping: {
      intro: "La Jolla's retail scene blends upscale boutiques, iconic Village shops, and easy access to major retail centers. It's a shopping destination in its own right.",
      sections: [
        {
          id: 'lj-village-retail',
          icon: '🛍️',
          title: 'The Village Boutiques',
          bullets: [
            'Girard Avenue and Prospect Street form La Jolla\'s luxury retail core — fine jewelry, art galleries, and fashion.',
            'Independent boutiques dominate — national chains are limited, preserving the Village\'s unique character.',
            'Art galleries are a significant part of the Village retail mix — La Jolla has a strong collector community.',
            'Parking in The Village is limited — street parking and the La Jolla Cove lots fill quickly on weekends.',
          ],
          tip: 'The Village\'s boutique character is a lifestyle differentiator — buyers pay a premium to be within walking distance.',
        },
        {
          id: 'lj-grocery',
          icon: '🥑',
          title: 'Grocery & Daily Essentials',
          bullets: [
            'Vons (La Jolla Village Drive) and Ralphs serve everyday needs within 92037.',
            'Whole Foods Market (UTC, 10 minutes) is the go-to for the health-conscious La Jolla shopper.',
            'Trader Joe\'s (UTC area) draws loyal La Jolla shoppers — always busy on weekends.',
            'Bristol Farms and Specialty Produce serve La Jolla\'s demand for premium and gourmet grocery.',
          ],
          tip: 'Mention proximity to Whole Foods and Trader Joe\'s in listings — it resonates strongly with the La Jolla buyer profile.',
        },
        {
          id: 'lj-utc',
          icon: '🏬',
          title: 'Westfield UTC (10 min)',
          bullets: [
            'Westfield UTC is a major upscale mall 10 minutes from La Jolla — anchored by Nordstrom, Apple, and REI.',
            'UTC underwent a $400M renovation and expansion — now one of San Diego\'s premier shopping destinations.',
            'The UC San Diego Blue Line Trolley station at UTC connects La Jolla to downtown San Diego.',
            'UTC\'s proximity is a lifestyle benefit for La Jolla residents without the foot traffic of mall adjacency.',
          ],
          tip: 'UTC\'s trolley connection is increasingly relevant for UCSD buyers and those who commute by transit.',
        },
        {
          id: 'lj-bird-rock-retail',
          icon: '🐦',
          title: 'Bird Rock Boulevard',
          bullets: [
            'La Jolla Boulevard in Bird Rock has a neighborhood retail strip with cafes, boutiques, and services.',
            'A walkable, community-scale alternative to The Village — more casual and locally-oriented.',
            'Bird Rock Coffee Roasters is a beloved local institution and a neighborhood gathering point.',
            'Weekend mornings on La Jolla Boulevard feel like a small town — a strong lifestyle sell for that neighborhood.',
          ],
          tip: 'Bird Rock\'s walkable main street is a genuine lifestyle differentiator — take buyers there during showings.',
        },
      ],
    },

    restaurants: {
      intro: "La Jolla has one of San Diego's finest dining scenes, from iconic oceanfront fine dining to beloved neighborhood spots. Knowing the culinary landscape makes you a more compelling local expert.",
      sections: [
        {
          id: 'lj-fine-dining',
          icon: '🍽️',
          title: 'Fine Dining Icons',
          bullets: [
            'George\'s at the Cove — La Jolla\'s most famous restaurant, three levels including a rooftop with Cove views.',
            'The Marine Room — extraordinary dining on the sand at La Jolla Shores, waves at the windows at high tide.',
            'Herringbone — farm-to-table in a stunning space under a live tree canopy in The Village.',
            'Nine-Ten at the Grande Colonial Hotel — locally-sourced California cuisine in an elegant setting.',
          ],
          tip: 'George\'s at the Cove and The Marine Room are San Diego bucket-list restaurants — knowing them builds immediate credibility with buyers.',
        },
        {
          id: 'lj-casual-favorites',
          icon: '☕',
          title: 'Local Favorites',
          bullets: [
            'The Cottage — beloved La Jolla institution for breakfast and lunch, expect a wait on weekends.',
            'Galaxy Taco — acclaimed casual Mexican using heritage ingredients, on La Jolla Boulevard.',
            'Puesto at The Headquarters (nearby downtown) — but La Jolla regulars love this brand.',
            'Bird Rock Coffee Roasters — flagship location, serious coffee culture, neighborhood hub.',
          ],
          tip: 'The Cottage line on a Sunday morning tells buyers everything they need to know about La Jolla\'s community feel.',
        },
        {
          id: 'lj-dining-trends',
          icon: '📈',
          title: 'Dining Scene Trends',
          bullets: [
            'La Jolla\'s dining scene skews toward quality over quantity — fewer restaurants, higher caliber.',
            'Chef-driven concepts have replaced chain restaurants in The Village over the past decade.',
            'Outdoor dining is year-round thanks to La Jolla\'s mild climate — patios are a key amenity.',
            'New restaurant openings in La Jolla generate significant local buzz and media coverage.',
          ],
          tip: 'La Jolla\'s dining scene is a lifestyle anchor — it reduces the feeling of "giving up city life" when buyers leave denser urban areas.',
        },
        {
          id: 'lj-brunch-coffee',
          icon: '🥞',
          title: 'Brunch & Coffee Culture',
          bullets: [
            'La Jolla has a thriving brunch culture — weekends on Girard and Prospect Streets are lively.',
            'Multiple specialty coffee shops serve the village — Blue Bottle, Bird Rock, and local independents.',
            'Coffee culture reflects La Jolla\'s health-conscious, professional demographic.',
            'Proximity to a beloved breakfast spot (like The Cottage) can be a genuine differentiator in listing copy.',
          ],
          tip: 'Mention walkability to coffee and brunch in listings targeting remote workers and retirees — it\'s a daily quality-of-life signal.',
        },
      ],
    },

    parks: {
      intro: "La Jolla is blessed with extraordinary natural beauty — coastal parks, protected ecological reserves, and world-class recreational access. Green space here is a premium lifestyle asset.",
      sections: [
        {
          id: 'lj-torrey-pines',
          icon: '🌲',
          title: 'Torrey Pines State Natural Reserve',
          bullets: [
            '2,000-acre state reserve at La Jolla\'s northern edge — home to the rare Torrey Pine tree, found only here and on Santa Rosa Island.',
            'Miles of trails through coastal sage scrub and along the sea cliffs with Pacific views.',
            'Adjacent Torrey Pines Golf Course (municipal) hosts the PGA Tour\'s Farmers Insurance Open.',
            'The reserve is a major reason northern La Jolla (and Del Mar) commands premium pricing.',
          ],
          tip: 'Listings near Torrey Pines should lead with reserve access — it\'s an irreplaceable natural amenity.',
        },
        {
          id: 'lj-coastal-parks',
          icon: '🏖️',
          title: 'Coastal Parks & the Cove',
          bullets: [
            'Ellen Browning Scripps Park — iconic lawn park above La Jolla Cove, free and central to Village life.',
            'Children\'s Pool Seawall — protected by a concrete breakwater, now a harbor seal habitat and viewing area.',
            'The Cove and Cave Street area have multiple access points to the sea — popular with snorkelers and divers.',
            'Coast Walk Trail connects the Cove area northward along dramatic sandstone cliffs.',
          ],
          tip: 'Ellen Browning Scripps Park is free, beautiful, and central — it\'s the community living room of La Jolla.',
        },
        {
          id: 'lj-recreation',
          icon: '🤿',
          title: 'Outdoor Recreation',
          bullets: [
            'La Jolla Shores is one of California\'s best beaches for kayaking, paddleboarding, and family swimming.',
            'The La Jolla Ecological Reserve underwater is a protected snorkeling/diving destination.',
            'Hang gliding and paragliding from Torrey Pines Gliderport — stunning cliff-top launch above the beach.',
            'Running and cycling on Torrey Pines Road is a local favorite with ocean views throughout.',
          ],
          tip: 'The Gliderport at Torrey Pines is a unique local attraction — buyers from urban markets are wowed by it.',
        },
        {
          id: 'lj-parks-value',
          icon: '💰',
          title: 'Parks & Property Values',
          bullets: [
            'Torrey Pines Reserve creates a permanent green buffer on La Jolla\'s north — protecting those views forever.',
            'Proximity to Scripps Park and the Cove drives some of the highest price-per-square-foot in San Diego.',
            'Public beach access is protected by the California Coastal Commission — a permanent buyer assurance.',
            'La Jolla\'s park system is a key reason the market holds value better than inland areas in corrections.',
          ],
          tip: 'State and federal park adjacency is a permanent value protector — unlike a vacant lot that could be developed.',
        },
      ],
    },

    healthcare: {
      intro: "La Jolla is home to two of the nation's top hospitals and a world-class biomedical research corridor. Healthcare access here is exceptional by any measure.",
      sections: [
        {
          id: 'lj-hospitals',
          icon: '🏥',
          title: 'World-Class Hospitals',
          bullets: [
            'UC San Diego Medical Center (La Jolla) — Level I Trauma Center and one of America\'s top academic medical centers.',
            'Scripps Memorial Hospital La Jolla — Level II Trauma, consistently ranked among San Diego\'s best.',
            'Together they give La Jolla one of the strongest hospital access profiles of any neighborhood in the country.',
            'Both hospitals are major employers, supporting strong housing demand from medical professionals.',
          ],
          tip: 'For buyers concerned about healthcare access — especially retirees — La Jolla is about as good as it gets in the US.',
        },
        {
          id: 'lj-research',
          icon: '🔬',
          title: 'Biomedical Research Hub',
          bullets: [
            'The Salk Institute for Biological Studies is one of the world\'s premier biomedical research centers.',
            'Scripps Research Institute — globally recognized for chemistry and biology research.',
            'The Sanford Burnham Prebys Medical Discovery Institute adds to La Jolla\'s biotech density.',
            'This research corridor drives demand from scientists, physicians, and biotech executives.',
          ],
          tip: 'La Jolla\'s biomedical cluster is one of the reasons the market is recession-resistant — it creates stable, high-income employment.',
        },
        {
          id: 'lj-specialist-care',
          icon: '🩺',
          title: 'Specialty & Outpatient Care',
          bullets: [
            'Scripps Clinic (La Jolla) — one of Southern California\'s leading multi-specialty outpatient clinics.',
            'UCSD Health\'s outpatient facilities provide access to nationally ranked specialty care.',
            'Concierge medicine practices are abundant in La Jolla — reflecting the affluent patient demographic.',
            'Dental, vision, dermatology, and wellness specialists are plentiful throughout 92037.',
          ],
          tip: 'La Jolla\'s specialist density is a significant draw for retirees and buyers managing complex health needs.',
        },
        {
          id: 'lj-wellness',
          icon: '💪',
          title: 'Wellness & Active Lifestyle',
          bullets: [
            'Outdoor activity (beach, trails, water sports) is the primary wellness infrastructure for most residents.',
            'Equinox, Pure Barre, and specialty fitness studios serve La Jolla\'s health-conscious community.',
            'Whole Foods, Bristol Farms, and organic-focused restaurants support a health-forward diet culture.',
            'The mild climate (avg 70°F year-round) enables year-round outdoor fitness — a major quality-of-life asset.',
          ],
          tip: 'La Jolla\'s lifestyle is inherently health-supporting — the environment itself is a wellness asset worth naming in listings.',
        },
      ],
    },

    transportation: {
      intro: "La Jolla is primarily a car-dependent community, but the picture is changing with the Mid-Coast Trolley extension. Understanding transportation is key to setting buyer expectations.",
      sections: [
        {
          id: 'lj-car',
          icon: '🚗',
          title: 'Car Dependency',
          bullets: [
            'La Jolla is predominantly car-dependent — Walk Score for most of the area is 55–75 (Village higher).',
            'I-5 and I-805 provide north-south access; Torrey Pines Road is the primary coastal arterial.',
            'Traffic on Torrey Pines Road and La Jolla Shores Drive peaks during beach season.',
            'Parking in The Village is notoriously limited — residents learn quickly where the reliable spots are.',
          ],
          tip: 'Set expectations with buyers about Village parking — a garage or off-street parking spot adds real value here.',
        },
        {
          id: 'lj-trolley',
          icon: '🚊',
          title: 'Mid-Coast Trolley (Blue Line)',
          bullets: [
            'The UC San Diego Blue Line Trolley opened November 2021, connecting UCSD/UTC to downtown San Diego.',
            'Nearest stops to La Jolla: UTC/Westfield (10 min drive), VA Medical Center, and UCSD Health stops.',
            'The trolley dramatically improved transit access for UCSD students, staff, and commuters.',
            'Future planning may expand transit closer to La Jolla proper — monitor SANDAG\'s long-range plans.',
          ],
          tip: 'UTC trolley access is a genuine lifestyle upgrade for UCSD-connected buyers — mention it when relevant.',
        },
        {
          id: 'lj-commute',
          icon: '⏱️',
          title: 'Commute Patterns',
          bullets: [
            'La Jolla to downtown San Diego: 20–35 minutes by car (I-5 south), longer during peak commute hours.',
            'La Jolla to Sorrento Valley tech corridor: 15 minutes — this is the primary employment commute for many residents.',
            'La Jolla to San Diego Airport: 20–25 minutes — a notable advantage for frequent business travelers.',
            'Remote and hybrid work has reduced commute importance for many La Jolla buyers.',
          ],
          tip: 'La Jolla\'s airport proximity (~20 min) is a real selling point for buyers who travel frequently for work.',
        },
        {
          id: 'lj-bike-walk',
          icon: '🚴',
          title: 'Biking & Walking',
          bullets: [
            'The Village and Bird Rock have the most walkable retail access — daily errands possible without a car.',
            'The Coast Walk Trail and Torrey Pines Road are popular cycling routes with ocean scenery.',
            'Bike lanes are limited in La Jolla — most cycling is recreational rather than commute-oriented.',
            'Flat streets near La Jolla Shores and Bird Rock are most bikeable for daily use.',
          ],
          tip: 'Walkability in The Village is La Jolla\'s most urban quality — highlight it strongly for buyers coming from walkable cities.',
        },
      ],
    },

  },

  // ─────────────────────────────────────────────
  // QUIZ QUESTIONS
  // ─────────────────────────────────────────────
  questions: {

    market: [
      { id: 'lj_mkt_1', category: 'market', question: 'What is the approximate median single-family home price in La Jolla?', options: ['$850,000', '$1.8M', '$3.5M–$4.5M', '$7M+'], correct: 2, explanation: 'La Jolla\'s median SFR price ranges from $3.5M–$4.5M depending on neighborhood and coastal proximity, making it one of California\'s priciest coastal markets.' },
      { id: 'lj_mkt_2', category: 'market', question: 'Approximately what percentage of La Jolla transactions are all-cash purchases?', options: ['10–15%', '20–25%', '40–50%', '70–80%'], correct: 2, explanation: 'Cash buyers make up an estimated 40–50% of La Jolla transactions — well above the national average — due to the affluent buyer pool.' },
      { id: 'lj_mkt_3', category: 'market', question: 'Which ZIP code covers most of La Jolla including The Village and La Jolla Shores?', options: ['92101', '92037', '92122', '92130'], correct: 1, explanation: '92037 is La Jolla\'s primary ZIP code, covering The Village, La Jolla Shores, Bird Rock, and Mount Soledad.' },
      { id: 'lj_mkt_4', category: 'market', question: 'Which buyer segment is a major driver of La Jolla housing demand?', options: ['Agricultural workers', 'UCSD faculty, biotech, and tech professionals', 'Military personnel', 'Tourism industry workers'], correct: 1, explanation: 'UCSD faculty and staff, biotech researchers, and tech industry professionals are among the most consistent La Jolla buyer demographics.' },
      { id: 'lj_mkt_5', category: 'market', question: 'What loan type is most relevant for La Jolla buyers financing a home purchase?', options: ['FHA loans', 'VA loans', 'Jumbo loans', 'USDA loans'], correct: 2, explanation: 'Because most La Jolla homes far exceed conforming loan limits, jumbo loans are the primary financing vehicle for buyers who are not paying all cash.' },
    ],

    neighborhoods: [
      { id: 'lj_nbr_1', category: 'neighborhoods', question: 'Which La Jolla neighborhood is known as the walkable "heart" of La Jolla with boutiques and restaurants?', options: ['Bird Rock', 'La Jolla Shores', 'The Village', 'Mount Soledad'], correct: 2, explanation: 'The Village, centered on Girard Avenue and Prospect Street, is La Jolla\'s walkable commercial and cultural heart.' },
      { id: 'lj_nbr_2', category: 'neighborhoods', question: 'Which La Jolla neighborhood is considered the most "entry-level" price point while still carrying the La Jolla address?', options: ['La Jolla Shores', 'Bird Rock', 'Mount Soledad', 'The Cove'], correct: 1, explanation: 'Bird Rock, in southern La Jolla, typically offers the most accessible pricing — around $2.2M–$2.8M for SFRs — while still being in 92037.' },
      { id: 'lj_nbr_3', category: 'neighborhoods', question: 'What makes Mount Soledad properties particularly desirable?', options: ['Beach access', 'Walkability to The Village', 'Panoramic Pacific and cityscape views', 'Proximity to UCSD'], correct: 2, explanation: 'Mount Soledad\'s hilltop elevation provides panoramic views of the Pacific Ocean, Mission Bay, and downtown San Diego — commanding premium prices.' },
      { id: 'lj_nbr_4', category: 'neighborhoods', question: 'What coastal regulation affects many La Jolla Shores properties?', options: ['HOA restrictions', 'FAA flight path rules', 'California Coastal Commission jurisdiction', 'FEMA elevation requirements only'], correct: 2, explanation: 'Many La Jolla Shores properties fall under California Coastal Commission jurisdiction, which adds review requirements for renovations and rebuilds.' },
      { id: 'lj_nbr_5', category: 'neighborhoods', question: 'What weekly community event happens in Bird Rock?', options: ['Sunday night concerts', 'La Jolla Open Aire Farmers Market on Saturdays', 'Friday art walk', 'Thursday food truck festival'], correct: 1, explanation: 'The La Jolla Open Aire Market in Bird Rock runs on Saturday mornings and is a beloved community tradition for local residents.' },
    ],

    schools: [
      { id: 'lj_sch_1', category: 'schools', question: 'Which elite private school in La Jolla charges approximately $40,000/year in tuition?', options: ['La Jolla High School', 'The Bishop\'s School', 'Muirlands Middle School', 'UCSD Lab School'], correct: 1, explanation: 'The Bishop\'s School is La Jolla\'s prestigious K–12 Episcopal independent school, with tuition around $40,000/year and a strong college prep reputation.' },
      { id: 'lj_sch_2', category: 'schools', question: 'La Jolla High School is part of which school district?', options: ['La Jolla Unified School District', 'San Diego Unified School District', 'Del Mar Union School District', 'Grossmont Union School District'], correct: 1, explanation: 'La Jolla High School is part of San Diego Unified School District (SDUSD) — there is no separate "La Jolla Unified" district.' },
      { id: 'lj_sch_3', category: 'schools', question: 'Which world-class university in La Jolla significantly influences local housing demand?', options: ['San Diego State University', 'USD (University of San Diego)', 'UC San Diego (UCSD)', 'Point Loma Nazarene University'], correct: 2, explanation: 'UC San Diego is one of the nation\'s top public research universities and is La Jolla\'s largest employer — UCSD faculty and staff are a primary buyer demographic.' },
      { id: 'lj_sch_4', category: 'schools', question: 'What should an agent always say when discussing school boundaries with buyers?', options: ['State the boundaries as fact', '"These schools are the best in the city"', '"Based on current boundaries — verify directly with SDUSD"', '"All homes in 92037 attend La Jolla High"'], correct: 2, explanation: 'Agents should always qualify school boundary information with "based on current boundaries" and direct buyers to verify with the district, as boundaries can change.' },
      { id: 'lj_sch_5', category: 'schools', question: 'La Jolla Country Day School (LJCDS) is known primarily as what type of institution?', options: ['Public magnet school', 'Junior college', 'Prestigious independent pre-K through 12th grade school', 'Public charter school'], correct: 2, explanation: 'LJCDS is a highly regarded independent (private) school serving pre-K through 12th grade, known for academic excellence and college preparation.' },
    ],

    entertainment: [
      { id: 'lj_ent_1', category: 'entertainment', question: 'Which Tony Award-winning theater is located on the UCSD campus in La Jolla?', options: ['The Old Globe', 'La Jolla Playhouse', 'Balboa Theatre', 'Copley Symphony Hall'], correct: 1, explanation: 'La Jolla Playhouse on the UCSD campus has won multiple Tony Awards and launched dozens of Broadway productions, making it nationally acclaimed.' },
      { id: 'lj_ent_2', category: 'entertainment', question: 'What is the Birch Aquarium at Scripps?', options: ['A private marine club', 'A world-class aquarium operated by Scripps Institution of Oceanography', 'A UCSD student center', 'A seafood restaurant'], correct: 1, explanation: 'Birch Aquarium at Scripps Institution of Oceanography is a world-class public aquarium featuring tide pools and marine exhibits, beloved by families.' },
      { id: 'lj_ent_3', category: 'entertainment', question: 'What unique outdoor activity is available from the Torrey Pines Gliderport?', options: ['Skydiving', 'Hang gliding and paragliding off the sea cliffs', 'Bungee jumping', 'Rock climbing'], correct: 1, explanation: 'The Torrey Pines Gliderport offers hang gliding and paragliding launches from dramatic sea cliffs above the beach — a one-of-a-kind La Jolla experience.' },
      { id: 'lj_ent_4', category: 'entertainment', question: 'Which museum in La Jolla overlooks the ocean and focuses on contemporary art?', options: ['San Diego Museum of Art', 'Museum of Contemporary Art San Diego (MCASD)', 'Timken Museum', 'San Diego Natural History Museum'], correct: 1, explanation: 'The Museum of Contemporary Art San Diego (MCASD) has its flagship La Jolla location with dramatic ocean views and a world-class contemporary collection.' },
      { id: 'lj_ent_5', category: 'entertainment', question: 'La Jolla Cove is internationally known for what activity?', options: ['Surfing', 'Snorkeling and sea lion watching', 'Deep sea fishing', 'Jet skiing'], correct: 1, explanation: 'La Jolla Cove is world-famous for snorkeling in its protected cove, plus sea lion and seal habitats that attract visitors globally.' },
    ],

    shopping: [
      { id: 'lj_shp_1', category: 'shopping', question: 'What are the two main streets that form La Jolla Village\'s retail core?', options: ['La Jolla Blvd and Torrey Pines Rd', 'Girard Avenue and Prospect Street', 'Pearl Street and Fay Avenue', 'Nautilus and Draper'], correct: 1, explanation: 'Girard Avenue and Prospect Street form the heart of La Jolla Village, hosting upscale boutiques, galleries, restaurants, and cafes.' },
      { id: 'lj_shp_2', category: 'shopping', question: 'Which major upscale mall is approximately 10 minutes from La Jolla?', options: ['Fashion Valley', 'Mission Valley Center', 'Westfield UTC', 'Horton Plaza'], correct: 2, explanation: 'Westfield UTC, recently renovated with a $400M investment, is 10 minutes from La Jolla and anchored by Nordstrom, Apple, and REI.' },
      { id: 'lj_shp_3', category: 'shopping', question: 'What is Bird Rock Coffee Roasters known as in the La Jolla community?', options: ['A national chain coffee brand', 'A beloved local coffee institution and neighborhood gathering spot', 'A corporate coffee franchise', 'A UCSD campus cafe'], correct: 1, explanation: 'Bird Rock Coffee Roasters is a celebrated local institution in La Jolla\'s Bird Rock neighborhood — a community hub and specialty coffee destination.' },
      { id: 'lj_shp_4', category: 'shopping', question: 'What is a practical consideration buyers should know about shopping in La Jolla Village?', options: ['It\'s only open on weekdays', 'Parking is limited and fills quickly on weekends', 'Prices are the same as other San Diego neighborhoods', 'There are no national brand stores anywhere nearby'], correct: 1, explanation: 'Parking in La Jolla Village is notoriously limited. Street spots and the Cove lots fill quickly on weekends — buyers should plan accordingly.' },
      { id: 'lj_shp_5', category: 'shopping', question: 'Which premium grocery brand is the top choice for La Jolla\'s health-conscious shoppers, located in UTC?', options: ['Walmart', 'Aldi', 'Whole Foods Market', 'Food 4 Less'], correct: 2, explanation: 'Whole Foods in the UTC area is the go-to grocery for La Jolla\'s health-conscious demographic — proximity to it is a lifestyle selling point.' },
    ],

    restaurants: [
      { id: 'lj_rst_1', category: 'restaurants', question: 'Which La Jolla restaurant is the most iconic, featuring three levels including a rooftop with Cove views?', options: ['The Marine Room', 'The Cottage', 'George\'s at the Cove', 'Herringbone'], correct: 2, explanation: 'George\'s at the Cove is La Jolla\'s most famous restaurant, with three dining levels including a rooftop with stunning views of La Jolla Cove.' },
      { id: 'lj_rst_2', category: 'restaurants', question: 'The Marine Room restaurant in La Jolla is unique because:', options: ['It\'s underground', 'Waves crash against its windows at high tide', 'It\'s only open for breakfast', 'It\'s a floating restaurant'], correct: 1, explanation: 'The Marine Room at La Jolla Shores sits directly on the sand — at high tide, waves dramatically crash against the full-length windows while guests dine.' },
      { id: 'lj_rst_3', category: 'restaurants', question: 'What is The Cottage known for in La Jolla?', options: ['Late-night cocktails', 'Being a beloved breakfast and lunch institution (expect a wait on weekends)', 'Molecular gastronomy fine dining', 'Fast casual Mexican food'], correct: 1, explanation: 'The Cottage is a La Jolla institution beloved for breakfast and lunch — the weekend wait is legendary and a sign of its community icon status.' },
      { id: 'lj_rst_4', category: 'restaurants', question: 'What type of cuisine does Galaxy Taco in La Jolla serve?', options: ['Italian', 'Japanese fusion', 'Acclaimed casual Mexican using heritage ingredients', 'Peruvian'], correct: 2, explanation: 'Galaxy Taco on La Jolla Boulevard is an acclaimed casual Mexican restaurant using heritage corn tortillas and quality local ingredients.' },
      { id: 'lj_rst_5', category: 'restaurants', question: 'What describes La Jolla\'s overall restaurant scene?', options: ['High volume fast food chains', 'Sophisticated and chef-driven, skewing toward quality over quantity', 'Primarily tourist-focused chains', 'Exclusively seafood restaurants'], correct: 1, explanation: 'La Jolla\'s dining scene is sophisticated and chef-driven — independent, quality-focused restaurants have replaced chain concepts in The Village over the past decade.' },
    ],

    parks: [
      { id: 'lj_prk_1', category: 'parks', question: 'Torrey Pines State Natural Reserve is notable because it is one of only two places on Earth where what grows naturally?', options: ['Giant Sequoia', 'The Torrey Pine tree', 'Joshua Tree', 'Coast Redwood'], correct: 1, explanation: 'The Torrey Pine (Pinus torreyana) grows naturally only at Torrey Pines State Reserve in La Jolla and on Santa Rosa Island — making it one of the rarest pine species in the world.' },
      { id: 'lj_prk_2', category: 'parks', question: 'What is the name of the iconic park sitting above La Jolla Cove in The Village?', options: ['Balboa Park', 'Torrey Pines Park', 'Ellen Browning Scripps Park', 'Pacific Beach Park'], correct: 2, explanation: 'Ellen Browning Scripps Park is the beloved lawn park above La Jolla Cove — a central community gathering space and one of the most beautiful free public parks in California.' },
      { id: 'lj_prk_3', category: 'parks', question: 'What water activities is La Jolla Shores Beach best known for?', options: ['Big wave surfing', 'Kayaking, paddleboarding, and family swimming', 'Competitive sailing', 'Deep sea fishing'], correct: 1, explanation: 'La Jolla Shores is one of San Diego\'s best beaches for kayaking, paddleboarding, and family-friendly swimming due to its calm, protected waters.' },
      { id: 'lj_prk_4', category: 'parks', question: 'What prestigious golf event is held at Torrey Pines Golf Course adjacent to the reserve?', options: ['The Masters', 'US Open (has been hosted) and annual Farmers Insurance Open (PGA Tour)', 'Ryder Cup', 'The British Open'], correct: 1, explanation: 'Torrey Pines Golf Course (municipal) hosts the annual Farmers Insurance Open on the PGA Tour, and famously hosted the 2008 US Open won by Tiger Woods.' },
      { id: 'lj_prk_5', category: 'parks', question: 'Why is park and reserve adjacency particularly valuable in La Jolla?', options: ['Parks can be sold to developers in the future', 'State and federal parks are permanently protected — the views and access will never be built over', 'Parks reduce local property taxes', 'Parks are privately owned in La Jolla'], correct: 1, explanation: 'State and federal park protections mean the green space and coastal access adjacent to La Jolla properties is permanently preserved — a reliable long-term value anchor.' },
    ],

    healthcare: [
      { id: 'lj_hlt_1', category: 'healthcare', question: 'What level trauma center is the UC San Diego Medical Center in La Jolla?', options: ['Level IV (basic)', 'Level III (limited)', 'Level II', 'Level I (highest)'], correct: 3, explanation: 'UCSD Medical Center in La Jolla is a Level I Trauma Center — the highest designation — and one of America\'s top academic medical centers.' },
      { id: 'lj_hlt_2', category: 'healthcare', question: 'The Salk Institute for Biological Studies in La Jolla is known as:', options: ['A teaching hospital', 'One of the world\'s premier biomedical research centers', 'A pharmaceutical manufacturer', 'A medical school for UCSD undergrads'], correct: 1, explanation: 'The Salk Institute is globally recognized as one of the world\'s premier independent biomedical research organizations, founded by Jonas Salk.' },
      { id: 'lj_hlt_3', category: 'healthcare', question: 'What type of medical practice is abundant in La Jolla due to the affluent demographic?', options: ['Urgent care chains', 'Emergency rooms only', 'Concierge medicine practices', 'VA clinics'], correct: 2, explanation: 'Concierge medicine — where patients pay a retainer for direct physician access — is widespread in La Jolla, reflecting its affluent and health-conscious population.' },
      { id: 'lj_hlt_4', category: 'healthcare', question: 'Which multi-specialty outpatient clinic is a leading healthcare provider in La Jolla?', options: ['Kaiser La Jolla', 'Scripps Clinic La Jolla', 'Providence Medical La Jolla', 'Sharp Rees-Stealy La Jolla'], correct: 1, explanation: 'Scripps Clinic La Jolla is one of Southern California\'s most respected multi-specialty outpatient medical centers.' },
      { id: 'lj_hlt_5', category: 'healthcare', question: 'What natural feature of La Jolla supports residents\' physical wellness?', options: ['Indoor climate-controlled environments', 'Year-round mild climate (~70°F avg) enabling outdoor activity 365 days a year', 'Altitude above 5,000 feet', 'Underground thermal springs'], correct: 1, explanation: 'La Jolla\'s Mediterranean climate averages around 70°F year-round, enabling residents to hike, bike, swim, and exercise outdoors every day of the year.' },
    ],

    transportation: [
      { id: 'lj_trn_1', category: 'transportation', question: 'When did the UC San Diego Blue Line Trolley extension (Mid-Coast Trolley) open?', options: ['2015', '2019', 'November 2021', '2024'], correct: 2, explanation: 'The Mid-Coast Trolley extension opened November 12, 2021, connecting UCSD and the UTC/Westfield area to downtown San Diego via the Blue Line.' },
      { id: 'lj_trn_2', category: 'transportation', question: 'What is the closest trolley stop to La Jolla proper?', options: ['La Jolla Village Stop', 'UTC/Westfield station (~10 min drive from La Jolla Village)', 'Torrey Pines Station', 'Bird Rock Station'], correct: 1, explanation: 'The UTC/Westfield station is the closest trolley stop to La Jolla Village, approximately 10 minutes by car — making it accessible but not walkable from most of La Jolla.' },
      { id: 'lj_trn_3', category: 'transportation', question: 'Approximately how long does it take to drive from La Jolla to San Diego International Airport?', options: ['5–10 minutes', '20–25 minutes via I-5', '45–60 minutes', '1.5 hours'], correct: 1, explanation: 'La Jolla to San Diego Airport is roughly 20–25 minutes via I-5 south — a meaningful advantage for business travelers and frequent flyers.' },
      { id: 'lj_trn_4', category: 'transportation', question: 'What is a known challenge for residents and visitors to La Jolla Village?', options: ['No highway access', 'Limited and competitive parking', 'No gas stations nearby', 'One-way streets throughout'], correct: 1, explanation: 'Parking in La Jolla Village is notoriously competitive — street spots and nearby lots fill quickly, especially on weekends and during summer.' },
      { id: 'lj_trn_5', category: 'transportation', question: 'Which technology corridor is a primary commute destination for many La Jolla residents?', options: ['Downtown San Diego only', 'Sorrento Valley / I-56 tech corridor (~15 min)', 'Tijuana business district', 'El Cajon industrial area'], correct: 1, explanation: 'The Sorrento Valley technology corridor along I-56 is a 10–15 minute commute from La Jolla and houses many biotech, tech, and life sciences employers.' },
    ],

    crime: [
      { id: 'lj_crm_1', category: 'crime', question: 'La Jolla\'s crime rate compared to the rest of San Diego is:', options: ['Higher than the city average', 'About the same as the city average', 'Significantly lower — one of San Diego\'s safest communities', 'Not tracked separately from San Diego'], correct: 2, explanation: 'La Jolla consistently records among the lowest crime rates in San Diego County — violent crime is rare and property crime is well below city and national averages.' },
      { id: 'lj_crm_2', category: 'crime', question: 'What is the most commonly reported crime in La Jolla?', options: ['Residential burglary', 'Auto burglary, particularly at beach parking areas near the Cove', 'Violent assault', 'Commercial robbery'], correct: 1, explanation: 'Auto burglary targeting tourist vehicles at La Jolla Cove and beach parking lots is the most frequently reported crime in La Jolla — a concern to flag for buyers parking regularly in those areas.' },
      { id: 'lj_crm_3', category: 'crime', question: 'Which official source should La Jolla agents direct buyers to for address-specific crime data?', options: ['Zillow safety scores', 'SDPD CrimeView Dashboard (sandiego.gov/police)', 'Yelp neighborhood reviews', 'La Jolla Light newspaper crime reports'], correct: 1, explanation: 'SDPD\'s CrimeView Dashboard provides free, real-time, address-level crime incident data — the most authoritative public source for San Diego neighborhood crime data.' },
      { id: 'lj_crm_4', category: 'crime', question: 'What physical feature of La Jolla neighborhoods contributes to its low crime environment?', options: ['Gated communities on every block', 'Year-round outdoor activity creating natural "eyes on the street"', 'Private security on all public streets', 'Lack of public beach access'], correct: 1, explanation: 'La Jolla\'s year-round temperate climate and active outdoor culture mean streets, parks, and beaches are consistently populated — a natural deterrent to crime.' },
      { id: 'lj_crm_5', category: 'crime', question: 'When a buyer asks "Is La Jolla safe?", what is the most professional and legally sound response?', options: ['Say "absolutely, it\'s the safest place in San Diego"', 'Refuse to discuss safety', 'Share SDPD data, note the low crime rates, and direct them to verify at sandiego.gov/police', 'Compare it favorably to other neighborhoods by name'], correct: 2, explanation: 'Sharing objective data while directing buyers to verify independently is the most professional response — it\'s accurate, builds trust, and avoids Fair Housing steering concerns.' },
    ],

    economics: [
      { id: 'lj_eco_1', category: 'economics', question: 'Which employer is the single largest driver of La Jolla\'s housing demand?', options: ['The Bishop\'s School', 'UC San Diego (UCSD)', 'Westfield UTC mall', 'La Jolla luxury hotels'], correct: 1, explanation: 'UC San Diego is La Jolla\'s largest employer with thousands of faculty, researchers, and staff who represent a primary and consistent buyer segment.' },
      { id: 'lj_eco_2', category: 'economics', question: 'La Jolla\'s Torrey Pines Mesa biotech cluster is globally ranked as:', options: ['A minor regional research park', 'One of the world\'s top three life sciences hubs', 'The largest biotech cluster in the US', 'Primarily an academic research center without commercial activity'], correct: 1, explanation: 'The Torrey Pines Mesa cluster — anchored by companies like Illumina, Dexcom, and hundreds of biotech firms — is consistently ranked among the world\'s top three life sciences hubs.' },
      { id: 'lj_eco_3', category: 'economics', question: 'What loan type do most La Jolla home buyers require due to the high price point?', options: ['FHA loans', 'VA loans', 'Jumbo loans (above conforming limits)', 'USDA rural development loans'], correct: 2, explanation: 'Because virtually all La Jolla SFRs exceed conforming loan limits, jumbo loans are the primary financing vehicle for buyers who aren\'t paying all-cash.' },
      { id: 'lj_eco_4', category: 'economics', question: 'What percentage of La Jolla transactions are typically all-cash purchases?', options: ['5–10%', '15–20%', '40–50%', '70–80%'], correct: 2, explanation: 'Cash buyers represent approximately 40–50% of La Jolla transactions — far above the national average — reflecting the affluent buyer pool of UCSD faculty, biotech executives, and tech professionals.' },
      { id: 'lj_eco_5', category: 'economics', question: 'La Jolla\'s home prices relative to San Diego County median are approximately:', options: ['Roughly the same', '50% higher', '3–4x the county median', '10x the county median'], correct: 2, explanation: 'La Jolla\'s median SFR price of $3.5M–$4.5M is approximately 3–4x the county-wide median of ~$900K–$1.1M, reflecting its premium coastal positioning.' },
    ],

    development: [
      { id: 'lj_dev_1', category: 'development', question: 'What regulatory body adds additional review requirements for renovations and rebuilds of many La Jolla Shores properties?', options: ['San Diego City Planning Commission', 'California Coastal Commission', 'FEMA Flood Authority', 'California State Lands Commission'], correct: 1, explanation: 'Many La Jolla Shores properties fall within California Coastal Commission jurisdiction — any renovation or rebuild requires Coastal Commission review in addition to standard city permitting.' },
      { id: 'lj_dev_2', category: 'development', question: 'UCSD\'s continued campus expansion is significant for La Jolla real estate because:', options: ['It adds student housing that competes with residential listings', 'It generates sustained employment demand from faculty, researchers, and contractors', 'It requires zoning changes that reduce residential density', 'It has no impact on the residential market'], correct: 1, explanation: 'UCSD\'s ongoing expansion creates continuous demand from incoming faculty, researchers, and staff — a reliable long-term demand driver for La Jolla and UTC residential properties.' },
      { id: 'lj_dev_3', category: 'development', question: 'In La Jolla, why does the lot value of beachfront or near-beachfront properties often exceed the structure value?', options: ['Structures are poorly built in coastal areas', 'Land supply is permanently constrained and the location can never be replicated', 'Property taxes are calculated on land value only', 'Structures depreciate rapidly near salt air'], correct: 1, explanation: 'Beachfront and near-beach land in La Jolla is absolutely supply-constrained — the location can never be replicated, making the land itself the primary value driver.' },
      { id: 'lj_dev_4', category: 'development', question: 'California\'s ADU reform laws in La Jolla have primarily enabled:', options: ['Large condo tower development in The Village', 'Lot splits for new SFR development', 'Additional dwelling unit creation on existing lots, often rented to UCSD affiliates', 'Commercial development on residential parcels'], correct: 2, explanation: 'California\'s ADU laws have made it easier to add rental units to existing La Jolla properties — often rented to UCSD researchers and staff, improving rental yield for owners.' },
      { id: 'lj_dev_5', category: 'development', question: 'What type of development signal should La Jolla agents track as a leading indicator of neighborhood reinvestment?', options: ['New fast food chain openings', 'New luxury restaurant and boutique hotel openings', 'Big box retail development', 'Industrial warehouse construction'], correct: 1, explanation: 'Luxury restaurant and boutique hotel openings signal developer confidence in a submarket\'s affluent demographic and future appreciation potential — a reliable leading indicator in premium coastal markets.' },
    ],

  },
};
