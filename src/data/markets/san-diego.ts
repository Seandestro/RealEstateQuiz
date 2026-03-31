import type { MarketData } from './index';

export const sanDiegoMarket: MarketData = {
  city: 'San Diego',
  state: 'California',
  county: 'San Diego',
  aliases: ['san diego', 'sandiego', 'sd'],
  tagline: "America's Finest City",

  // ─────────────────────────────────────────────
  // QUICK READS
  // ─────────────────────────────────────────────
  quickreads: {

    market: {
      intro: "San Diego is one of the most desirable — and expensive — metros in the US. Constrained land supply, world-class climate, and a diversified economy keep demand consistently elevated.",
      sections: [
        {
          id: 'sd-market-overview',
          icon: '📊',
          title: 'San Diego Market Snapshot',
          bullets: [
            'Median single-family home price: approximately $900K–$1.1M countywide, with wide variation by submarket.',
            'Coastal submarkets (La Jolla, Del Mar, Coronado) trade at $2M–$10M+; inland areas offer more affordable price points.',
            'Active inventory has historically run at 1–2 months supply — a persistent seller\'s market.',
            'San Diego County is the 6th most expensive housing market in the US by median price-to-income ratio.',
          ],
          tip: 'San Diego\'s land is geographically constrained by ocean, mountains, and the US-Mexico border — structural undersupply is a long-term demand driver.',
        },
        {
          id: 'sd-submarkets',
          icon: '🗺️',
          title: 'Key Submarkets',
          bullets: [
            'Coastal: La Jolla, Del Mar, Coronado, Encinitas — highest prices, strongest appreciation, lifestyle premium.',
            'Urban Core: Downtown, Hillcrest, North Park, South Park — condo-heavy, walkable, younger demographic.',
            'Inland: Rancho Bernardo, Poway, Santee, El Cajon — more affordable SFRs, family-oriented, car-dependent.',
            'Military-adjacent: Chula Vista, National City, Lemon Grove — stable demand driven by base employment.',
          ],
          tip: 'San Diego has no single "market" — always analyze at the ZIP code or neighborhood level. A county-level median hides dramatic variation.',
        },
        {
          id: 'sd-demand-drivers',
          icon: '🚀',
          title: 'Demand Drivers',
          bullets: [
            'Military presence: 3 major bases (Pendleton, Miramar, 32nd Street Naval Station) generate stable, consistent housing demand.',
            'Biotech/life sciences cluster in Torrey Pines Mesa is one of the world\'s top three — draws high earners.',
            'Tourism and hospitality employment (Balboa Park, SeaWorld, Convention Center) supports renter demand.',
            'Remote worker migration since 2020 has increased demand from California transplants and out-of-state buyers.',
          ],
          tip: 'Military relocation (PCS orders) creates a steady pool of motivated buyers and sellers on tight timelines — building relationships with base housing offices pays dividends.',
        },
        {
          id: 'sd-appreciation',
          icon: '📈',
          title: 'Appreciation & Long-Term Value',
          bullets: [
            'San Diego has appreciated an average of 6–7% annually over the past 30 years — one of the nation\'s strongest records.',
            'Geographic constraints prevent the oversupply that derails other markets during economic slowdowns.',
            'Climate, lifestyle, and proximity to Mexico/Pacific give San Diego persistent international buyer appeal.',
            'Coastal properties have outpaced inland appreciation by 1.5–2x over the long run.',
          ],
          tip: 'San Diego\'s 30-year appreciation track record is a powerful tool when buyers ask "is now a good time to buy?" — history strongly favors long-term owners.',
        },
      ],
    },

    neighborhoods: {
      intro: "San Diego is a city of villages — each neighborhood has a distinct identity, price point, and lifestyle. Understanding the submarkets is essential for advising buyers and pricing listings.",
      sections: [
        {
          id: 'sd-north-park',
          icon: '🌆',
          title: 'North Park & Hillcrest',
          bullets: [
            'San Diego\'s most walkable urban neighborhoods — Walk Scores of 85–90.',
            'North Park has transformed from affordable to sought-after over the past decade, driven by food, arts, and culture.',
            'Craftsman bungalows and Spanish Revival homes dominate — significant ADU conversion activity.',
            'Hillcrest is San Diego\'s LGBTQ+ cultural hub with strong neighborhood identity and commercial vitality.',
          ],
          tip: 'North Park and Hillcrest consistently attract buyers priced out of coastal markets who want urban walkability — they\'re reliably appreciating.',
        },
        {
          id: 'sd-mission-valley',
          icon: '🏙️',
          title: 'Mission Valley & UTC',
          bullets: [
            'Mission Valley is San Diego\'s commercial spine — major retail, medical, SDSU\'s new stadium, and dense condo market.',
            'UTC (University Towne Centre) offers walkable suburban living near UCSD, anchored by Westfield UTC.',
            'Both areas have significant transit investment — the trolley Blue Line runs through Mission Valley and now connects UTC to downtown.',
            'New mixed-use developments are transforming former strip mall corridors into walkable urban nodes.',
          ],
          tip: 'Mission Valley is one of San Diego\'s highest-flood-risk zones — always check FEMA maps and flood insurance costs for listings near the San Diego River.',
        },
        {
          id: 'sd-east-county',
          icon: '🏔️',
          title: 'East County',
          bullets: [
            'El Cajon, Santee, La Mesa, and Lemon Grove offer the most affordable single-family homes in the county.',
            'Largely car-dependent with limited transit, but high quality-of-life metrics for families seeking space and value.',
            'El Cajon and Spring Valley are rapidly diversifying with significant immigrant and first-generation buyer populations.',
            'Wildfire risk increases significantly in the foothill and mountain communities — Viejas, Alpine, Ramona.',
          ],
          tip: 'East County buyers need thorough fire insurance guidance — policies have become expensive and some carriers have exited California entirely.',
        },
        {
          id: 'sd-south-bay',
          icon: '🌉',
          title: 'South Bay & Chula Vista',
          bullets: [
            'Chula Vista is San Diego County\'s second-largest city and one of its fastest-growing.',
            'Otay Ranch is a master-planned community with newer construction, top-rated schools, and strong family appeal.',
            'Proximity to the US-Mexico border creates cross-border buyer demand — many buyers are Tijuana professionals.',
            'New Chula Vista Bayfront development (hotel, convention center, parks) is reshaping the area\'s investment profile.',
          ],
          tip: 'The Chula Vista Bayfront project is one of the largest coastal development projects in Southern California — it\'s a long-term value catalyst for nearby properties.',
        },
      ],
    },

    schools: {
      intro: "San Diego Unified is one of California's largest districts, but school quality varies dramatically by neighborhood. Knowing the landscape helps you serve families and price listings accurately.",
      sections: [
        {
          id: 'sd-top-public',
          icon: '🏫',
          title: 'Top Public Schools & Districts',
          bullets: [
            'San Diego Unified (SDUSD) is the second-largest district in California — quality varies widely by school.',
            'Poway Unified School District is consistently ranked among California\'s top 10 large districts.',
            'Del Mar Union and Solana Beach districts serve high-income coastal communities with excellent elementary schools.',
            'Magnets and choice programs (High Tech High, School of Creative and Performing Arts) attract citywide applicants.',
          ],
          tip: 'Poway Unified boundaries are a meaningful value driver — homes in PUSD often command a measurable premium over comparable homes in neighboring districts.',
        },
        {
          id: 'sd-private',
          icon: '🎓',
          title: 'Private Schools',
          bullets: [
            'San Diego has over 200 private schools — Bishop\'s, LJCDS, Francis Parker, Cathedral Catholic, and USD High are among the most prominent.',
            'Many private schools draw from across the county — proximity matters for carpool logistics but isn\'t always a value driver.',
            'San Diego has a strong Catholic school network (Diocese of San Diego) offering affordable private alternatives.',
            'Military families often use DoD-dependent schools on-base, reducing private school demand in military-adjacent areas.',
          ],
          tip: 'When listing near a prominent private school, mention it in marketing — even buyers without children recognize the value signal.',
        },
        {
          id: 'sd-higher-ed',
          icon: '🔬',
          title: 'Higher Education & Research',
          bullets: [
            'UC San Diego (La Jolla) is a top-10 public research university and San Diego\'s largest employer.',
            'San Diego State University (SDSU) has a 35,000-student campus in Mission Valley with growing housing demand.',
            'USD (University of San Diego), Point Loma Nazarene, and National University provide additional student populations.',
            'The Scripps Research Institute, Salk Institute, and J. Craig Venter Institute are world-class research anchors.',
          ],
          tip: 'University proximity creates durable rental demand — SDSU and UCSD neighborhoods consistently outperform on gross rental yield.',
        },
        {
          id: 'sd-school-value',
          icon: '📈',
          title: 'Schools & Property Values',
          bullets: [
            'Poway Unified homes have historically sold for 10–15% more than comparable homes just outside the district.',
            'School rating changes on GreatSchools can move buyer interest quickly — monitor ratings in your farm area.',
            'San Diego\'s school choice programs mean families are less tethered to neighborhood schools than in other cities.',
            'International buyers — a significant San Diego segment — specifically prioritize school proximity.',
          ],
          tip: 'Always direct buyers to sandiegounified.org or the relevant district site to verify current attendance boundaries — never state them as guaranteed.',
        },
      ],
    },

    churches: {
      intro: "San Diego has a deeply diverse faith community shaped by its military population, Latino heritage, and coastal cosmopolitan culture. Knowing the major congregations helps you connect buyers to community.",
      sections: [
        {
          id: 'sd-faith-diversity',
          icon: '🕍',
          title: 'Diverse Faith Landscape',
          bullets: [
            'San Diego\'s large Latino population makes it one of the most prominent Catholic regions in California.',
            'Military families bring diverse denominational backgrounds — chapel communities on base serve many.',
            'The Jewish community is well-established, particularly in Rancho Bernardo, Carmel Valley, and UTC.',
            'San Diego has a growing number of non-denominational megachurches serving the suburban communities.',
          ],
          tip: 'Understanding a buyer\'s faith community is a useful qualifying question — it often points you toward the right neighborhood cluster.',
        },
        {
          id: 'sd-landmark',
          icon: '⛪',
          title: 'Landmark Congregations',
          bullets: [
            'St. Joseph Cathedral (Downtown) is the mother church of the Diocese of San Diego.',
            'The Rock Church (Point Loma) is one of San Diego\'s largest megachurches with 10,000+ weekly attendance.',
            'Congregation Beth Israel (Mission Hills) is San Diego\'s oldest Jewish congregation, founded 1861.',
            'Christ Presbyterian Church (Rancho Bernardo) anchors the faith community in North County inland.',
          ],
          tip: 'Listing near a major congregation can be a positive selling point for buyers with faith as a lifestyle priority — include walkability to churches in your pitch.',
        },
        {
          id: 'sd-military-faith',
          icon: '🎖️',
          title: 'Military & Faith Community',
          bullets: [
            'Military installations have chaplain-led chapel programs serving all denominations — a significant community resource.',
            'Military families often seek faith communities quickly after relocation — congregations near bases have high turnover but strong attendance.',
            'Veterans organizations (VFW, American Legion) often overlap with faith community gatherings.',
            'Navy and Marine chaplain networks can be helpful referral sources for military buyer relationships.',
          ],
          tip: 'Military relocation buyers often ask about faith community access early — knowing the landscape near bases builds trust quickly.',
        },
        {
          id: 'sd-growth-churches',
          icon: '🌱',
          title: 'Growing Faith Communities',
          bullets: [
            'Chula Vista and South Bay have seen rapid growth in evangelical and Pentecostal congregations tracking demographic growth.',
            'Asian American congregations are increasingly prominent in Kearny Mesa and Mira Mesa.',
            'New church plants in East County serve growing suburban communities.',
            'Online and hybrid services have expanded reach of all major congregations post-2020.',
          ],
          tip: 'Growing congregations often signal neighborhood demographic growth — both tend to precede residential demand increases.',
        },
      ],
    },

    entertainment: {
      intro: "San Diego offers world-class entertainment anchored by its beaches, Balboa Park, and a thriving food and arts scene. Knowing the lifestyle amenities makes you a more compelling local expert.",
      sections: [
        {
          id: 'sd-balboa',
          icon: '🏛️',
          title: 'Balboa Park & Cultural Anchors',
          bullets: [
            'Balboa Park is one of the largest urban cultural parks in the US — 1,200 acres with 17 museums.',
            'The San Diego Zoo is globally acclaimed and one of the city\'s top tourism drivers.',
            'The Old Globe Theatre in Balboa Park is a Tony Award-winning regional theater.',
            'Balboa Park\'s proximity is a significant selling point for listings in Hillcrest, North Park, and South Park.',
          ],
          tip: 'Buyers from major cities (NYC, Chicago, SF) recognize world-class park quality — highlight Balboa Park proximity as a lifestyle differentiator.',
        },
        {
          id: 'sd-beaches',
          icon: '🏄',
          title: 'Beaches & Outdoor Recreation',
          bullets: [
            'San Diego has 70 miles of Pacific coastline — from Oceanside in the north to Imperial Beach at the border.',
            'Surfing culture is central to San Diego identity — Ocean Beach, Pacific Beach, and Encinitas are top surf spots.',
            'Mission Bay is a 4,600-acre aquatic park perfect for sailing, kayaking, and recreational boating.',
            'Year-round 70°F climate means outdoor recreation is a daily lifestyle, not a seasonal event.',
          ],
          tip: 'Beach access is San Diego\'s most powerful lifestyle selling point — always quantify the drive time to the nearest beach from listings.',
        },
        {
          id: 'sd-sports',
          icon: '⚽',
          title: 'Sports & Events',
          bullets: [
            'Snapdragon Stadium (SDSU Mission Valley) hosts SDSU Aztecs football and San Diego FC (MLS expansion team).',
            'The San Diego Padres play at Petco Park in the East Village — one of MLB\'s best ballparks.',
            'San Diego hosts the Comic-Con International annually — one of the world\'s largest pop culture events.',
            'The Rock \'n\' Roll Marathon, San Diego Triathlon Series, and Spartan Races drive active lifestyle tourism.',
          ],
          tip: 'Petco Park and Snapdragon Stadium are significant catalysts for East Village and Mission Valley condo demand — proximity is a marketing point.',
        },
        {
          id: 'sd-nightlife',
          icon: '🍺',
          title: 'Dining, Craft Beer & Nightlife',
          bullets: [
            'San Diego is known as "Craft Beer Capital of America" — over 150 breweries operate in the county.',
            'Little Italy has become San Diego\'s premier dining and nightlife district over the past decade.',
            'Gaslamp Quarter is the historic entertainment hub with live music, clubs, and dining.',
            'North Park, South Park, and Barrio Logan are the creative dining frontiers attracting James Beard-recognized chefs.',
          ],
          tip: 'San Diego\'s beer and dining scene is a genuine quality-of-life differentiator — buyers relocating from less food-centric markets consistently cite it.',
        },
      ],
    },

    shopping: {
      intro: "San Diego's retail landscape ranges from premium coastal boutiques to major mall anchors. Understanding the shopping geography helps buyers assess lifestyle fit and agents price neighborhoods.",
      sections: [
        {
          id: 'sd-malls',
          icon: '🛍️',
          title: 'Major Retail Centers',
          bullets: [
            'Westfield UTC is the county\'s most upscale mall, recently renovated with Nordstrom, Apple, Restoration Hardware, and 100+ shops.',
            'Fashion Valley (Mission Valley) anchors the county\'s luxury retail with Neiman Marcus, Louis Vuitton, and Bloomingdale\'s.',
            'Otay Ranch Town Center (Chula Vista) serves South Bay with major anchor tenants and dining.',
            'North County: Westfield Carlsbad and Westfield Escondido serve the growing inland North County market.',
          ],
          tip: 'UTC\'s $400M renovation made it the undisputed premium shopping destination — proximity to UTC is a selling point for La Jolla, Carmel Valley, and UTC listings.',
        },
        {
          id: 'sd-grocery',
          icon: '🥦',
          title: 'Grocery & Premium Food',
          bullets: [
            'Whole Foods has multiple San Diego locations (UTC, La Jolla, Hillcrest, Encinitas) — each signals an affluent catchment area.',
            'Trader Joe\'s has broad coverage countywide — typically a top-3 grocery priority for buyers under 45.',
            'Specialty markets: Mitsuwa Marketplace (Kearny Mesa) for Japanese, 99 Ranch Markets for Asian grocery.',
            'San Diego\'s farmers markets (Hillcrest, Little Italy, Ocean Beach) attract loyal followings and signal community health.',
          ],
          tip: 'Grocery accessibility is a top buyer search criterion — always know the nearest Trader Joe\'s, Whole Foods, and conventional grocery to every listing.',
        },
        {
          id: 'sd-little-italy',
          icon: '🏪',
          title: 'Neighborhood Retail & Boutiques',
          bullets: [
            'Little Italy and Gaslamp Quarter offer concentrated independent retail and restaurant experiences.',
            'North Park, South Park, and Normal Heights have strong independent boutique ecosystems.',
            'Encinitas and Del Mar have upscale surf/lifestyle boutiques along their coastal retail corridors.',
            'Online-to-offline retail trends have strengthened neighborhood commercial districts in walkable San Diego neighborhoods.',
          ],
          tip: 'Vibrant neighborhood retail is increasingly correlated with property value appreciation — track the health of commercial corridors in your farm area.',
        },
        {
          id: 'sd-outlet',
          icon: '🏬',
          title: 'Outlet & Value Retail',
          bullets: [
            'Las Americas Premium Outlets (San Ysidro, near the border) offers major outlet shopping.',
            'Costco has numerous locations countywide — proximity to Costco is a legitimate buyer preference.',
            'San Diego Premium Outlets (Oceanside) serves North County.',
            'Value retail corridors exist in El Cajon, National City, and Lemon Grove for budget-conscious demographics.',
          ],
          tip: 'Border proximity amplifies shopping options for South Bay residents — day trips to Tijuana for specialty goods, dentistry, and dining are common.',
        },
      ],
    },

    restaurants: {
      intro: "San Diego's restaurant scene has matured into a nationally recognized culinary destination. From James Beard nominees in North Park to legendary fish tacos at the beach, food culture is central to San Diego's identity.",
      sections: [
        {
          id: 'sd-culinary-scene',
          icon: '👨‍🍳',
          title: 'Culinary Landscape',
          bullets: [
            'San Diego has produced multiple James Beard Award nominees and winners in recent years.',
            'Little Italy is the most concentrated fine dining district, anchored by restaurants like Herb & Wood and Born & Raised.',
            'North Park and South Park have the most dynamic independent restaurant ecosystem — new openings happen regularly.',
            'San Diego\'s Mexican food culture is authentic and deeply rooted — influenced by its border location and Latino heritage.',
          ],
          tip: 'San Diego\'s food culture is a relocation selling point — buyers from less vibrant food cities consistently note it as a surprise lifestyle benefit.',
        },
        {
          id: 'sd-iconic',
          icon: '🌮',
          title: 'Iconic San Diego Food',
          bullets: [
            'Fish tacos are San Diego\'s signature food — Oscar\'s, Tacos El Gordo, and Las Cuatro Milpas are institutions.',
            'California burritos (carne asada with fries) are a San Diego original — found at countless local taquerias.',
            'Craft beer food pairings are a defining feature of the dining scene — brewery tap rooms double as restaurants.',
            'Seafood: Pacific catch, lobster from Baja, and poke bowls reflect the city\'s ocean orientation.',
          ],
          tip: 'Recommending a few authentic local food experiences to relocation buyers creates goodwill and positions you as a genuine local insider.',
        },
        {
          id: 'sd-neighborhoods-food',
          icon: '🍜',
          title: 'Dining by Neighborhood',
          bullets: [
            'Kearny Mesa: San Diego\'s best Asian restaurant cluster — Korean BBQ, ramen, pho, and Japanese.',
            'University Avenue (City Heights): authentic international dining — Ethiopian, Vietnamese, Somali, and more.',
            'Ocean Beach and Pacific Beach: casual, surfer-friendly dining with legendary breakfast spots.',
            'Del Mar and Solana Beach: upscale coastal dining targeting the North County affluent demographic.',
          ],
          tip: 'The Kearny Mesa Asian food corridor is a well-kept secret among food lovers — knowing it signals genuine local knowledge to buyers.',
        },
        {
          id: 'sd-craft-beer',
          icon: '🍻',
          title: 'Craft Beer Culture',
          bullets: [
            'San Diego County has over 150 craft breweries — more than any comparable metro in the US.',
            'Ballast Point, Stone Brewing, AleSmith, and Modern Times are nationally distributed San Diego brands.',
            'Miramar has become a brewery industrial district — multiple award-winning breweries within walking distance.',
            'Craft beer culture drives foot traffic and vitality in neighborhoods like North Park, South Park, and Ocean Beach.',
          ],
          tip: 'San Diego\'s craft beer culture is a genuine quality-of-life differentiator that resonates with the 25–45 buyer demographic — use it in your pitch.',
        },
      ],
    },

    parks: {
      intro: "San Diego's outdoor amenities are among its most powerful lifestyle selling points. From world-famous reserves to neighborhood beach parks, understanding the green space landscape makes you a more compelling advisor.",
      sections: [
        {
          id: 'sd-balboa-park',
          icon: '🌳',
          title: 'Balboa Park',
          bullets: [
            'At 1,200 acres, Balboa Park is one of the largest urban cultural parks in the United States.',
            'Home to 17 museums, multiple theaters, the San Diego Zoo, botanical gardens, and miles of trails.',
            'Proximity to Balboa Park is a premium for listings in Hillcrest, North Park, South Park, and Mission Hills.',
            'Annual events including the Fleet Week Air Show, December Nights, and cultural festivals draw millions.',
          ],
          tip: 'Balboa Park proximity is a legitimate value driver — comparable homes within a 10-minute walk of the park consistently command premiums.',
        },
        {
          id: 'sd-state-parks',
          icon: '🏕️',
          title: 'State Parks & Natural Reserves',
          bullets: [
            'Torrey Pines State Natural Reserve (La Jolla) is home to one of the rarest pine species in the world.',
            'Cabrillo National Monument (Point Loma) offers historic significance, tide pools, and panoramic bay views.',
            'Mission Trails Regional Park is one of the largest urban parks in the US — 7,000+ acres of hiking.',
            'Anza-Borrego Desert State Park (1.5 hours east) is the largest state park in the contiguous US.',
          ],
          tip: 'State parks are permanently protected — homes adjacent to or near state land have assured view and access preservation, a long-term value argument.',
        },
        {
          id: 'sd-beaches',
          icon: '🏖️',
          title: 'Beaches & Coastal Parks',
          bullets: [
            'Mission Bay Park: 4,600 acres of aquatic park — unmatched in the US for freshwater and saltwater recreation.',
            'Silver Strand State Beach (Coronado) offers some of Southern California\'s calmest swimming conditions.',
            'Swami\'s Beach (Encinitas) is a legendary surf break and protected cliff-top park.',
            'Dog-friendly beaches (Del Mar, Fiesta Island) are a specific draw for pet-owning buyers.',
          ],
          tip: 'Dog beach access is a growing buyer criterion — know which beaches are dog-friendly and during what hours.',
        },
        {
          id: 'sd-trails',
          icon: '🥾',
          title: 'Hiking & Trail Systems',
          bullets: [
            'San Diego has over 300 miles of maintained hiking trails within city limits.',
            'Cowles Mountain (Mission Trails) is the most-hiked summit in San Diego — popular with all fitness levels.',
            'The Coast to Crest Trail connects the coast to the Cuyamaca Mountains — a signature San Diego experience.',
            'Iron Mountain, Potato Chip Rock, and Black Mountain are social media-popular hikes drawing thousands weekly.',
          ],
          tip: 'Trail access within a 10-minute drive is a meaningful selling point for fitness-oriented buyers — quantify it for listings near trailheads.',
        },
      ],
    },

    healthcare: {
      intro: "San Diego has a world-class healthcare ecosystem anchored by UCSD Health, Scripps, and Sharp — three nationally recognized health systems. Understanding the landscape positions you as a trusted advisor for medical professionals and health-conscious buyers.",
      sections: [
        {
          id: 'sd-health-systems',
          icon: '🏥',
          title: 'Major Health Systems',
          bullets: [
            'UCSD Health: academic medical center anchored in La Jolla, Level I Trauma Center, ranked among US News top hospitals.',
            'Scripps Health: five-hospital system with flagship Scripps La Jolla — one of California\'s most respected health networks.',
            'Sharp HealthCare: largest private hospital system in San Diego — 4 acute care hospitals, strong community reputation.',
            'Kaiser Permanente San Diego: serves a significant share of insured San Diegans — important for listing agents near Kaiser facilities.',
          ],
          tip: 'Healthcare professionals (doctors, researchers, nurses) are a significant buyer segment in San Diego — UCSD and Scripps campuses anchor strong surrounding buyer demand.',
        },
        {
          id: 'sd-research',
          icon: '🔬',
          title: 'Biomedical Research',
          bullets: [
            'San Diego\'s Torrey Pines Mesa is one of the world\'s top three biotech/life sciences clusters.',
            'Salk Institute, Scripps Research, and J. Craig Venter Institute are globally recognized research organizations.',
            'Over 700 life sciences companies employ 75,000+ workers countywide — a major housing demand driver.',
            'Annual NIH funding to San Diego exceeds $1 billion — stabilizing research employment through economic cycles.',
          ],
          tip: 'Biotech employment anchors demand in La Jolla, Carmel Valley, Sorrento Valley, and UTC — these submarkets hold value even in downturns.',
        },
        {
          id: 'sd-veterans',
          icon: '🎖️',
          title: 'Veterans Healthcare',
          bullets: [
            'The VA San Diego Healthcare System (La Jolla) serves one of the nation\'s largest veteran populations.',
            'San Diego has the 2nd-highest concentration of active military and veterans in the US.',
            'VA healthcare access is a top relocation criterion for veterans — proximity matters.',
            'Vet Center locations throughout the county provide mental health and readjustment support.',
          ],
          tip: 'Understanding VA loan benefits and VA healthcare access is table stakes for agents working in military-adjacent submarkets.',
        },
        {
          id: 'sd-wellness',
          icon: '💪',
          title: 'Wellness & Active Living',
          bullets: [
            'San Diego consistently ranks in the top 5 of national well-being and fitness indices.',
            'The year-round 70°F climate enables daily outdoor exercise — hiking, cycling, surfing, swimming.',
            'World-class fitness facilities: Barry\'s, Orangetheory, SoulCycle, and independent gyms are densely distributed.',
            'Whole Foods, Sprouts, farmers markets, and organic dining options are abundant countywide.',
          ],
          tip: 'San Diego\'s health and wellness culture is a key relocation appeal — it consistently ranks as a top quality-of-life factor in buyer surveys.',
        },
      ],
    },

    transportation: {
      intro: "San Diego is a car-dependent city with an improving transit system. Understanding commute patterns, the trolley network, and highway access is essential for advising buyers and sellers.",
      sections: [
        {
          id: 'sd-highways',
          icon: '🛣️',
          title: 'Highway System',
          bullets: [
            'I-5 is the coastal spine connecting Tijuana to the north county — a critical commute corridor.',
            'I-15 serves the inland communities (Escondido, Rancho Bernardo, Poway) and connects to Riverside County.',
            'I-8 runs east-west connecting Ocean Beach through Mission Valley to the Imperial Valley.',
            'SR-56, SR-52, and SR-125 are key suburban connectors — important for buyers in Carmel Valley, Santee, and Chula Vista.',
          ],
          tip: 'Always run Google Maps commute tests during peak hours (7–9am) from a listing to a buyer\'s workplace — San Diego traffic patterns can surprise inland and out-of-state buyers.',
        },
        {
          id: 'sd-trolley',
          icon: '🚆',
          title: 'Trolley & Transit',
          bullets: [
            'The San Diego Trolley (MTS) operates three lines: Blue (downtown to UTC and south to the border), Orange (east to El Cajon), and Green (east to Santee).',
            'The Mid-Coast Trolley extension (2021) added UCSD, UTC, and UC San Diego Medical Center to the Blue Line.',
            'Light rail proximity is most valuable in the urban core — suburban trolley stations generally don\'t command a price premium yet.',
            'NCTD Coaster commuter rail serves Oceanside to Santa Fe Depot (downtown) — key for North County buyers.',
          ],
          tip: 'The Mid-Coast Trolley has meaningfully improved transit options for UCSD and UTC — it\'s a selling point for listings within 10 minutes of those stations.',
        },
        {
          id: 'sd-airport',
          icon: '✈️',
          title: 'Airport Access',
          bullets: [
            'San Diego International Airport (SAN) is one of the busiest single-runway airports in the US — and a source of noise impact for nearby neighborhoods.',
            'North Park, Bankers Hill, and Mission Hills experience the most significant flight path noise.',
            'SAN is just 3 miles from downtown — commute times under 15 minutes from most central neighborhoods.',
            'LAX is 2.5 hours north by car — a meaningful secondary option for long-haul international flights.',
          ],
          tip: 'Always check whether a listing falls under SAN flight paths — it\'s a material disclosure item and buyers will notice during showings.',
        },
        {
          id: 'sd-border',
          icon: '🌐',
          title: 'US-Mexico Border & Cross-Border Commuting',
          bullets: [
            'The San Ysidro Port of Entry is the world\'s busiest land border crossing.',
            'Significant professional cross-border commuting occurs — Tijuana residents working in San Diego and vice versa.',
            'SENTRI (trusted traveler) lane access dramatically reduces border wait times for frequent crossers.',
            'The Cross Border Xpress (CBX) airport connector provides direct access to Tijuana\'s international airport from Otay Ranch.',
          ],
          tip: 'Border proximity is a value driver for buyers with Tijuana connections — not a negative for this buyer segment. Know your audience.',
        },
      ],
    },

    crime: {
      intro: "San Diego is consistently ranked one of the safest large cities in America. Understanding crime patterns by submarket — and how to discuss them professionally — is essential knowledge for San Diego agents.",
      sections: [
        {
          id: 'sd-crime-overview',
          icon: '🛡️',
          title: 'San Diego Crime Overview',
          bullets: [
            'San Diego\'s violent crime rate is among the lowest of any major US city — typically ranking in the top 10 safest cities over 500,000 population.',
            'Property crime (theft, auto burglary) is more prevalent than violent crime and follows predictable geographic patterns.',
            'Auto burglary near beach areas and tourist corridors (La Jolla, Pacific Beach, Gaslamp) is the most commonly reported crime.',
            'Year-over-year trends have generally shown stable or improving crime metrics across most San Diego neighborhoods since 2010.',
          ],
          tip: 'San Diego\'s strong safety metrics are a genuine relocation selling point — use them proactively with out-of-state buyers from high-crime metros.',
        },
        {
          id: 'sd-crime-by-area',
          icon: '🗺️',
          title: 'Crime by Submarket',
          bullets: [
            'Safest: La Jolla, Rancho Bernardo, Carmel Valley, Del Mar, Coronado — among the safest in California.',
            'Moderate: North Park, Hillcrest, Mission Hills — urban neighborhoods with improving trends.',
            'Higher than average: Southeast San Diego, City Heights, National City — concentrated poverty correlates with higher property crime.',
            'SDPD\'s CrimeView Dashboard publishes real-time incident data by neighborhood — a reliable primary source.',
          ],
          tip: 'Direct buyers to the SDPD CrimeView Dashboard (sandiego.gov/police) for specific address-level data — it\'s free, official, and neutralizes anxiety about speculation.',
        },
        {
          id: 'sd-fair-housing',
          icon: '⚖️',
          title: 'Fair Housing & Crime Data',
          bullets: [
            'Never characterize San Diego neighborhoods in terms of demographics when discussing safety.',
            'You may share publicly available SDPD crime statistics — you cannot make subjective safety characterizations.',
            'Point buyers to official sources (SDPD CrimeView, NeighborhoodScout) and let them evaluate independently.',
            'California has additional fair housing protections beyond federal law — California Association of Realtors provides guidance.',
          ],
          tip: 'California REALTORS® should complete the required implicit bias and fair housing training — C.A.R. offers it free to members.',
        },
        {
          id: 'sd-safety-features',
          icon: '💡',
          title: 'Physical Safety Features',
          bullets: [
            'San Diego\'s year-round outdoor activity culture creates natural "eyes on the street" in most neighborhoods.',
            'Gated communities are concentrated in high-end inland areas (Rancho Santa Fe, Santaluz) — note in listings.',
            'Lighting infrastructure, sidewalk quality, and park maintenance are strong in most San Diego neighborhoods.',
            'Neighborhood watch programs are active in many established residential areas — a selling point.',
          ],
          tip: 'Walking a neighborhood at different times — evening and weekend morning — gives buyers a visceral safety read that supplements data.',
        },
      ],
    },

    economics: {
      intro: "San Diego's economy is one of the most diversified and resilient in the West — anchored by military, biotech, tourism, and a growing tech sector. Understanding the local economic drivers helps you advise with authority.",
      sections: [
        {
          id: 'sd-economy-overview',
          icon: '💼',
          title: 'Economic Overview',
          bullets: [
            'San Diego County GDP exceeds $250 billion annually — it would rank among the top 20 economies globally if it were a nation.',
            'The five economic pillars: military/defense, life sciences/biotech, tourism, technology, and international trade.',
            'Unemployment in San Diego typically runs 0.5–1% below the California average.',
            'Median household income: approximately $85,000–$95,000 countywide, with significant variation by submarket.',
          ],
          tip: 'San Diego\'s economic diversification is a core long-term housing stability argument — no single industry can collapse the market.',
        },
        {
          id: 'sd-military',
          icon: '🎖️',
          title: 'Military Economy',
          bullets: [
            'The military is San Diego\'s largest economic sector — over $30 billion in annual economic impact.',
            'Major installations: Naval Base San Diego, Camp Pendleton (USMC), MCAS Miramar, Naval Air Station North Island.',
            'Military employment is counter-cyclical — base spending stays stable regardless of private sector conditions.',
            'Military families generate consistent housing demand with predictable PCS (Permanent Change of Station) cycles.',
          ],
          tip: 'VA loans allow 0% down on homes up to conforming limits — many San Diego military buyers are well-qualified VA borrowers. Know the VA loan process thoroughly.',
        },
        {
          id: 'sd-biotech',
          icon: '🔬',
          title: 'Life Sciences & Tech',
          bullets: [
            'San Diego\'s biotech cluster on the Torrey Pines Mesa employs 75,000+ and generates billions in annual payroll.',
            'Major employers: Illumina, Dexcom, Neurocrine Biosciences, Sorrento Therapeutics, Hologic, and hundreds of smaller firms.',
            'Tech sector is growing: Qualcomm, ServiceNow, and a dense startup ecosystem.',
            'Life sciences salaries typically range $120K–$300K+ — creating strong demand for $800K–$2M housing.',
          ],
          tip: 'Biotech and tech employees are a primary buyer segment for La Jolla, Carmel Valley, Sorrento Valley, and UTC — know the commute times from these submarkets to the Torrey Pines Mesa.',
        },
        {
          id: 'sd-affordability',
          icon: '🏡',
          title: 'Affordability Challenges',
          bullets: [
            'San Diego is among the least affordable major metros in the US — median home price is ~9x median household income.',
            'First-time buyers increasingly rely on down payment assistance programs — California DREAM for All and San Diego HAP.',
            'Multigenerational housing and ADUs are growing strategies to improve affordability and rental income.',
            'Remote workers from higher-paying markets (NYC, SF, Seattle) have further stretched affordability for local buyers.',
          ],
          tip: 'Know your down payment assistance programs — California DREAM for All (CalHFA) and San Diego Housing Commission programs can open the door for first-time buyers.',
        },
      ],
    },

    development: {
      intro: "San Diego is in the midst of a major urban transformation — transit-oriented development, infill housing, and master-planned growth are reshaping submarkets. Tracking what's being built is a key competitive advantage.",
      sections: [
        {
          id: 'sd-dev-overview',
          icon: '🏗️',
          title: 'Development Landscape',
          bullets: [
            'San Diego issued over 15,000 building permits annually in peak growth years — tracking trends signals market momentum.',
            'State housing mandates (SB 9, SB 10, AB 2011) are forcing increased density in single-family zones statewide.',
            'Transit-oriented development (TOD) around trolley stations is the primary growth strategy per the San Diego Forward plan.',
            'Infill development in established neighborhoods is accelerating as greenfield sites become scarce.',
          ],
          tip: 'San Diego\'s City Planning department publishes a Development Services portal with active permit data — it\'s a free intelligence source for active agents.',
        },
        {
          id: 'sd-major-projects',
          icon: '🏙️',
          title: 'Major Active Developments',
          bullets: [
            'Chula Vista Bayfront: 535-acre master planned development with hotel, convention center, and parks — transforming South Bay.',
            'East Village (Downtown): multiple high-rise residential towers under construction near Petco Park.',
            'SDSU Mission Valley: 91-acre campus expansion on former Qualcomm Stadium site — Snapdragon Stadium already open.',
            'Navy Broadway Complex (Downtown): Navy is redeveloping its downtown waterfront — major mixed-use planned.',
          ],
          tip: 'Chula Vista Bayfront and SDSU Mission Valley are the two largest active developments reshaping undervalued submarkets — they\'re long-term value catalysts.',
        },
        {
          id: 'sd-adu',
          icon: '🏠',
          title: 'ADU & Missing Middle Housing',
          bullets: [
            'California\'s ADU reform laws have made San Diego one of the most ADU-friendly jurisdictions in the US.',
            'San Diego permitted over 3,000 ADUs annually in recent years — a major new housing supply source.',
            'ADU presence meaningfully improves rental yield — house hacking is a growing first-time buyer strategy.',
            'City of San Diego\'s ADU Bonus Program streamlines permitting for attached and detached ADUs.',
          ],
          tip: 'ADU potential is a legitimate value-add talking point — knowing lot size, setbacks, and ADU eligibility for listings gives you a competitive advantage.',
        },
        {
          id: 'sd-zoning',
          icon: '📋',
          title: 'Zoning & Policy Changes',
          bullets: [
            'San Diego\'s Complete Communities program allows density bonuses near transit corridors.',
            'SB 9 statewide allows ministerial lot splits and duplexes in single-family zones — reshaping development math.',
            'Climate Action Plan commitments drive transit investment and bike lane infrastructure expansion.',
            'Accessory Dwelling Unit streamlining has made infill development easier and faster than at any time in recent history.',
          ],
          tip: 'State housing laws have changed the development calculus dramatically — clients interested in investment or development should consult a local land use attorney for current rules.',
        },
      ],
    },

  },

  // ─────────────────────────────────────────────
  // QUIZ QUESTIONS
  // ─────────────────────────────────────────────
  questions: {

    market: [
      { id: 'sd_mkt_1', category: 'market', question: 'What is the approximate median single-family home price across San Diego County?', options: ['$450,000–$550,000', '$650,000–$750,000', '$900,000–$1.1M', '$1.5M–$2M'], correct: 2, explanation: 'San Diego County\'s median SFR price is approximately $900K–$1.1M countywide, though coastal submarkets trade significantly higher.' },
      { id: 'sd_mkt_2', category: 'market', question: 'San Diego County is ranked approximately what number among the most expensive US housing markets?', options: ['25th', '15th', '6th', '1st'], correct: 2, explanation: 'San Diego ranks approximately 6th among the most expensive US housing markets by median price-to-income ratio — among the least affordable metros in the country.' },
      { id: 'sd_mkt_3', category: 'market', question: 'Which of San Diego\'s geographic factors creates structural long-term housing undersupply?', options: ['Strict zoning only', 'Ocean, mountains, and the US-Mexico border constrain developable land', 'Low population growth', 'Lack of employer demand'], correct: 1, explanation: 'San Diego is bounded by the Pacific Ocean, coastal mountains, and the Mexican border — a rare trifecta of geographic constraints that permanently limits buildable land.' },
      { id: 'sd_mkt_4', category: 'market', question: 'What is San Diego\'s approximate average annual home appreciation over the past 30 years?', options: ['1–2%', '3–4%', '6–7%', '12–15%'], correct: 2, explanation: 'San Diego has appreciated at an average of 6–7% annually over 30 years, one of the strongest long-term track records among major US metros.' },
      { id: 'sd_mkt_5', category: 'market', question: 'Which San Diego submarket typically offers the most affordable single-family home prices?', options: ['La Jolla', 'Del Mar', 'East County (El Cajon, Santee)', 'Coronado'], correct: 2, explanation: 'East County communities like El Cajon and Santee offer San Diego\'s most affordable SFR prices — significantly below the coastal and North County submarkets.' },
    ],

    schools: [
      { id: 'sd_sch_1', category: 'schools', question: 'Which San Diego school district is consistently ranked among California\'s top 10 large districts?', options: ['San Diego Unified', 'Poway Unified', 'Sweetwater Union', 'Cajon Valley Union'], correct: 1, explanation: 'Poway Unified School District (PUSD) consistently ranks among California\'s top 10 large school districts and commands a measurable property value premium.' },
      { id: 'sd_sch_2', category: 'schools', question: 'High Tech High, one of San Diego\'s most celebrated schools, is what type of institution?', options: ['A SDUSD magnet school', 'A charter school network', 'A private independent school', 'A UCSD-affiliated laboratory school'], correct: 1, explanation: 'High Tech High is a nationally acclaimed charter school network in San Diego, known for project-based learning and strong college placement.' },
      { id: 'sd_sch_3', category: 'schools', question: 'Which university contributes most directly to housing demand in the La Jolla and UTC submarkets?', options: ['SDSU', 'USD', 'UC San Diego', 'Point Loma Nazarene'], correct: 2, explanation: 'UC San Diego (UCSD) is San Diego\'s largest employer and a top-ranked public research university — faculty, staff, and researchers are primary buyers in La Jolla and UTC.' },
      { id: 'sd_sch_4', category: 'schools', question: 'What should an agent always do when a buyer asks about school boundaries?', options: ['State them confidently as fact', 'Refer to last year\'s district map', 'Direct the buyer to verify directly with the district', 'Guarantee the nearest school based on address'], correct: 2, explanation: 'School boundaries can change year to year. Always direct buyers to verify directly with the district — guaranteeing enrollment based on address creates liability.' },
      { id: 'sd_sch_5', category: 'schools', question: 'SDSU\'s campus expansion in Mission Valley is expected to impact the surrounding area by:', options: ['Reducing home values due to student traffic', 'Creating new housing demand and retail/dining vitality near the campus', 'Restricting development in the area for 10 years', 'Moving students away from the Mission Valley area'], correct: 1, explanation: 'SDSU\'s 91-acre Mission Valley campus expansion adds student housing, retail, and institutional demand that generates long-term value for surrounding neighborhoods.' },
    ],

    transportation: [
      { id: 'sd_trn_1', category: 'transportation', question: 'Which trolley line was extended in 2021 to connect downtown San Diego to UCSD and UTC?', options: ['Orange Line', 'Green Line', 'Blue Line (Mid-Coast extension)', 'Red Line'], correct: 2, explanation: 'The Mid-Coast Trolley extension opened in November 2021, connecting UCSD, UTC, and several new stations to the existing Blue Line downtown.' },
      { id: 'sd_trn_2', category: 'transportation', question: 'Which highway is San Diego\'s primary coastal north-south commute corridor?', options: ['I-15', 'I-8', 'I-5', 'SR-56'], correct: 2, explanation: 'I-5 is San Diego\'s coastal spine, connecting the US-Mexico border to North County and beyond — the primary commute corridor for coastal submarket residents.' },
      { id: 'sd_trn_3', category: 'transportation', question: 'San Diego International Airport (SAN) is known for which operational challenge?', options: ['Being too far from the city', 'Being one of the busiest single-runway airports in the US', 'Serving only domestic routes', 'Frequent fog closures'], correct: 1, explanation: 'SAN has a single runway — making it one of the busiest and most operationally challenged single-runway airports in the US despite its central location.' },
      { id: 'sd_trn_4', category: 'transportation', question: 'What commuter rail service connects North County San Diego to downtown Santa Fe Depot?', options: ['Amtrak Pacific Surfliner only', 'NCTD Coaster', 'MTS Blue Line Trolley', 'SPRINTER'], correct: 1, explanation: 'The NCTD Coaster runs from Oceanside to Santa Fe Depot (downtown), serving North County commuters with multiple daily trips.' },
      { id: 'sd_trn_5', category: 'transportation', question: 'What should San Diego listing agents always check regarding San Diego International Airport?', options: ['Terminal assignment for nearby flights', 'Whether the listing is under SAN flight paths, as it\'s a material disclosure issue', 'TSA wait times from nearby neighborhoods', 'Whether the airport plans expansion'], correct: 1, explanation: 'SAN\'s flight paths significantly impact neighborhoods including North Park, Bankers Hill, and Mission Hills. It\'s a material factor buyers should be made aware of.' },
    ],

    crime: [
      { id: 'sd_crm_1', category: 'crime', question: 'How does San Diego\'s violent crime rate compare to other major US cities?', options: ['Among the highest in the US', 'About average for a large city', 'Among the lowest — typically top 10 safest cities over 500,000', 'Data is not publicly available for San Diego'], correct: 2, explanation: 'San Diego consistently ranks among the top 10 safest large US cities by violent crime rate — a genuine selling point for relocation buyers from high-crime metros.' },
      { id: 'sd_crm_2', category: 'crime', question: 'What is the most commonly reported crime type in San Diego\'s tourist and beach areas?', options: ['Violent crime', 'Auto burglary and property crime', 'Commercial robbery', 'Residential burglary'], correct: 1, explanation: 'Auto burglary — particularly of tourist vehicles near La Jolla Cove, Pacific Beach, and Gaslamp — is the most frequently reported crime in San Diego\'s tourist corridors.' },
      { id: 'sd_crm_3', category: 'crime', question: 'Where can buyers find official, address-level San Diego crime data?', options: ['Zillow crime overlay', 'SDPD CrimeView Dashboard (sandiego.gov/police)', 'Yelp neighborhood reviews', 'Google Maps'], correct: 1, explanation: 'SDPD\'s CrimeView Dashboard publishes real-time, address-level incident data for free at sandiego.gov/police — it\'s the most authoritative source for San Diego crime data.' },
      { id: 'sd_crm_4', category: 'crime', question: 'Which San Diego submarkets consistently rank among California\'s safest communities?', options: ['City Heights and National City', 'Southeast San Diego and Logan Heights', 'La Jolla, Rancho Bernardo, and Carmel Valley', 'Ocean Beach and Pacific Beach'], correct: 2, explanation: 'La Jolla, Rancho Bernardo, Carmel Valley, and Del Mar consistently rank among California\'s safest communities with violent crime rates well below state and national averages.' },
      { id: 'sd_crm_5', category: 'crime', question: 'Under California\'s Fair Housing law, what must an agent NEVER do when discussing neighborhood safety?', options: ['Share official SDPD crime statistics', 'Direct buyers to the SDPD CrimeView Dashboard', 'Make subjective safety characterizations tied to neighborhood demographics', 'Advise buyers to visit a neighborhood in person'], correct: 2, explanation: 'California Fair Housing law (which extends beyond federal law) prohibits steering and characterizing neighborhoods in demographic terms. Always share data and let clients draw their own conclusions.' },
    ],

    economics: [
      { id: 'sd_eco_1', category: 'economics', question: 'Which sector is San Diego\'s single largest economic driver by annual economic impact?', options: ['Tourism', 'Technology', 'Military/Defense', 'Life Sciences/Biotech'], correct: 2, explanation: 'The military sector generates over $30 billion in annual economic impact in San Diego — the largest of any single sector — anchored by Camp Pendleton, Naval Base San Diego, and MCAS Miramar.' },
      { id: 'sd_eco_2', category: 'economics', question: 'San Diego\'s Torrey Pines Mesa biotech cluster is ranked globally as:', options: ['A minor regional cluster', 'One of the world\'s top three life sciences clusters', 'Primarily a research cluster without major employment', 'The largest biotech cluster in California'], correct: 1, explanation: 'San Diego\'s Torrey Pines Mesa / Sorrento Valley life sciences cluster is consistently ranked among the world\'s top three biotech/life sciences hubs alongside Boston and San Francisco.' },
      { id: 'sd_eco_3', category: 'economics', question: 'What is San Diego\'s approximate median home price-to-income ratio, making it one of the US\'s least affordable markets?', options: ['3x income', '5x income', '9x income', '15x income'], correct: 2, explanation: 'San Diego\'s median home price is approximately 9x the median household income — putting it among the least affordable large metros in the US.' },
      { id: 'sd_eco_4', category: 'economics', question: 'Which California first-time buyer program provides down payment assistance and has been used widely in San Diego?', options: ['FHA Advantage Program', 'California DREAM for All (CalHFA)', 'Freddie Mac HomeOne', 'USDA Rural Development loan'], correct: 1, explanation: 'CalHFA\'s DREAM for All program provides shared appreciation down payment loans for first-time buyers in California — an important tool for San Diego\'s affordability-challenged market.' },
      { id: 'sd_eco_5', category: 'economics', question: 'Military employment in San Diego is described as "counter-cyclical" because:', options: ['Military wages decrease during recessions', 'Base spending and employment remain stable regardless of private sector downturns', 'Military bases expand during economic growth periods only', 'Soldiers are required to buy homes near bases'], correct: 1, explanation: 'Federal defense spending continues regardless of economic conditions — making military employment a stabilizing force in San Diego\'s housing market during private sector downturns.' },
    ],

    development: [
      { id: 'sd_dev_1', category: 'development', question: 'The Chula Vista Bayfront development project is significant because:', options: ['It adds 500 single-family homes', 'It is one of the largest coastal development projects in Southern California, including a hotel, convention center, and parks', 'It is a private gated community', 'It replaces the San Diego Convention Center'], correct: 1, explanation: 'The Chula Vista Bayfront is a 535-acre master planned mixed-use development — one of the largest coastal projects in SoCal — transforming South Bay\'s investment profile.' },
      { id: 'sd_dev_2', category: 'development', question: 'California\'s ADU (Accessory Dwelling Unit) reform laws have made San Diego:', options: ['More restrictive about ADUs than other California cities', 'One of the most ADU-friendly jurisdictions in the US', 'Exempt from state ADU requirements', 'Limited to one ADU per block'], correct: 1, explanation: 'California\'s ADU reform laws, combined with San Diego\'s ADU Bonus Program, have made San Diego one of the most ADU-friendly cities in the US — with thousands permitted annually.' },
      { id: 'sd_dev_3', category: 'development', question: 'San Diego\'s Complete Communities program allows developers to build additional density in exchange for:', options: ['Paying higher property taxes', 'Including affordable housing units near transit corridors', 'Building in designated flood zones', 'Converting commercial buildings only'], correct: 1, explanation: 'San Diego\'s Complete Communities program provides density bonuses to developers who include affordable housing units in projects near transit corridors.' },
      { id: 'sd_dev_4', category: 'development', question: 'SDSU\'s Mission Valley campus expansion (Snapdragon Stadium site) is expected to add approximately how many acres of new development?', options: ['10 acres', '30 acres', '91 acres', '200 acres'], correct: 2, explanation: 'SDSU is redeveloping 91 acres of the former Qualcomm/Mission Valley stadium site into a new campus hub including Snapdragon Stadium, academic buildings, and housing.' },
      { id: 'sd_dev_5', category: 'development', question: 'What state law (effective 2022) allows ministerial lot splits and duplexes in single-family zones throughout California?', options: ['AB 1482', 'SB 9', 'Prop 19', 'SB 1070'], correct: 1, explanation: 'SB 9 allows property owners in single-family zones to build a second unit and split their lot — significantly changing the development potential of San Diego\'s single-family parcels.' },
    ],

  },
};
