export interface ResidentialService {
  slug: string;
  name: string;
  shortTag: string;
  category: 'BHK Residences' | 'Dedicated Spaces';
  areaRange: string;
  timeline: string;
  tagline: string;
  description: string;
  image: string;
  keyDeliverables: string[];
  architecturalPillars: { title: string; desc: string }[];
  idealFor: string;
}

export const RESIDENTIAL_SERVICES: ResidentialService[] = [
  {
    slug: '1-bhk',
    name: '1 BHK Interior Architecture',
    shortTag: '1 BHK Suite',
    category: 'BHK Residences',
    areaRange: '550 – 850 sq ft',
    timeline: '6 – 8 Weeks',
    tagline: 'Pied-à-Terre Precision & Seamless Spatial Flow',
    description:
      'Engineered for compact metropolitan living where every cubic foot matters. We design continuous architectural cabinetry, concealed storage walls, and multi-functional partition joinery that expands the sense of volume without visual clutter.',
    image: '/src/assets/images/project_reading_lounge_1792337182414.webp',
    idealFor: 'Urban professionals, executive pied-à-terres, and design enthusiasts seeking micro-spatial luxury.',
    keyDeliverables: [
      'Full-height concealed storage walls with integrated flush doors',
      'Dual-purpose floating credenzas and dining banquettes',
      'Acoustic wall panelling in French flax linen',
      'Integrated 2400K architectural cove and perimeter lighting'
    ],
    architecturalPillars: [
      { title: 'Concealed Function', desc: 'Every functional necessity—wardrobes, laundry, media—disappears behind seamless fluted or flat-panel millwork.' },
      { title: 'Continuous Sightlines', desc: 'Low-slung European furniture and transparent glass portals maintain unobstructed light transit.' }
    ]
  },
  {
    slug: '2-bhk',
    name: '2 BHK Interior Architecture',
    shortTag: '2 BHK Residence',
    category: 'BHK Residences',
    areaRange: '1,100 – 1,450 sq ft',
    timeline: '8 – 12 Weeks',
    tagline: 'Balanced Proportion, Acoustic Warmth & Tactile Living',
    description:
      'Creating effortless harmony between entertaining and restful retreat. Our 2 BHK designs articulate a generous living-dining salon alongside an acoustically isolated master suite and a transformative second bedroom configured as a study or guest sanctuary.',
    image: '/src/assets/images/project_minimalist_bedroom_1792337182811.webp',
    idealFor: 'Couples, young families, and city dwellers who appreciate understated European refinement.',
    keyDeliverables: [
      'Master bedroom with vertical fluted headboard and warm brass sconces',
      'Transformative guest suite with bespoke library and study millwork',
      'Open culinary and dining layout with honed stone counters',
      'Dedicated entry foyer with integrated coat joinery and mirror niche'
    ],
    architecturalPillars: [
      { title: 'Zoned Acoustic Privacy', desc: 'Separating social salons from resting quarters through solid-core acoustic timber doors.' },
      { title: 'Material Continuity', desc: 'Herringbone European oak flooring and mineral lime plaster uniting all living volumes.' }
    ]
  },
  {
    slug: '3-bhk',
    name: '3 BHK Interior Architecture',
    shortTag: '3 BHK Residence',
    category: 'BHK Residences',
    areaRange: '1,800 – 2,600 sq ft',
    timeline: '12 – 16 Weeks',
    tagline: 'The Signature European Family Residence',
    description:
      'Our quintessential offering: deep botanical architectural envelopes, bespoke wall boiserie, a dedicated formal dining salon, and private family lounges. Every detail is calibrated for generational longevity and effortless domestic rituals.',
    image: '/src/assets/images/hero_olive_living_room_1792337181639.webp',
    idealFor: 'Established families seeking enduring quality, calm acoustics, and spaces that patina gracefully.',
    keyDeliverables: [
      'Formal living salon with custom boiserie and steel grid casements',
      'Separate formal dining salon with statement washi cloud pendant',
      'Primary master suite with walk-in dressing gallery and ensuite',
      'Two tailored secondary suites with built-in acoustic desks'
    ],
    architecturalPillars: [
      { title: 'Daylight Choreography', desc: 'Aligning seating and dining axes with morning and afternoon sun angles.' },
      { title: 'Generational Craftsmanship', desc: 'Solid white oak, honed Roman travertine, and unlacquered burnished brass.' }
    ]
  },
  {
    slug: '4-bhk',
    name: '4 BHK Interior Architecture',
    shortTag: '4 BHK Residence',
    category: 'BHK Residences',
    areaRange: '3,000 – 4,500 sq ft',
    timeline: '16 – 22 Weeks',
    tagline: 'Expansive High-Rise & Townhouse Luxury',
    description:
      'Uncompromising architectural scale. Features double-height entertaining salons, a monolithic 3.6m travertine kitchen island, a dedicated temperature-controlled private wine gallery, and a secluded corner library.',
    image: '/src/assets/images/project_penthouse_dining_1792337182747.webp',
    idealFor: 'High-profile residences, art collectors, and clients who host grand gatherings.',
    keyDeliverables: [
      'Monolithic honed Navona travertine kitchen waterfall island',
      'Great room with floor-to-ceiling panoramic skyline framing',
      'Executive study / library with floor-to-cornice lacquered millwork',
      'Four luxury suites with bookmatched slab marble bathrooms'
    ],
    architecturalPillars: [
      { title: 'Dual-Zone Entertaining', desc: 'Clear division between formal public salons and intimate family living suites.' },
      { title: 'Integrated Smart Concealment', desc: 'Zero visible cables, motorized flush shading, and concealed architectural slots.' }
    ]
  },
  {
    slug: '5-bhk',
    name: '5 BHK & Penthouse Architecture',
    shortTag: '5 BHK & Penthouse',
    category: 'BHK Residences',
    areaRange: '5,000 – 12,000+ sq ft',
    timeline: '6 – 10 Months',
    tagline: 'Monumental Estates, Private Compounds & Sky Villas',
    description:
      'Turnkey architectural restoration and bespoke interior furnishing for generational private estates. Hand-hewn stone, artisan-forged ironwork, antique parquet restoration, and bespoke landscape integration.',
    image: '/src/assets/images/project_travertine_kitchen_1792337183640.webp',
    idealFor: 'Generational family compounds, historic townhouse restorations, and duplex sky estates.',
    keyDeliverables: [
      'Historical preservation and custom architectural boiserie recreation',
      'Private wellness pavilion with cedar sauna and Roman plunge stone',
      'Comprehensive art curation and bespoke commissioned luminaires',
      'Complete outdoor terrace living and landscaped courtyard extensions'
    ],
    architecturalPillars: [
      { title: 'Historical Provenance', desc: 'Restoring structural bones while inserting silent contemporary building technology.' },
      { title: 'Artisanal Commissioning', desc: 'One-of-a-kind stone carvings, hand-forged metals, and French master joinery.' }
    ]
  },
  {
    slug: 'modular-kitchen',
    name: 'Architectural Culinary & Kitchen Design',
    shortTag: 'Culinary Architecture',
    category: 'Dedicated Spaces',
    areaRange: '350 – 800 sq ft',
    timeline: '6 – 10 Weeks',
    tagline: 'Monolithic Stone, Smoked Timber & Culinary Rigor',
    description:
      'Treating the kitchen not as a utility zone, but as the architectural hearth of the residence. Monolithic travertine or marble waterfall islands, concealed pocket-door appliance galleys, and calibrated task lighting.',
    image: '/src/assets/images/project_travertine_kitchen_1792337183640.webp',
    idealFor: 'Culinary enthusiasts, host entertainers, and clients demanding sculptural kitchen presence.',
    keyDeliverables: [
      'Monolithic honed Roman travertine waterfall island with cantilevered seating',
      'Concealed pocket-door pantry galleys with integrated breakfast bar',
      'Dual suspended architectural linear pendants with 2700K warm index',
      'Seamless micro-cement or herringbone timber continuous flooring'
    ],
    architecturalPillars: [
      { title: 'Invisible Utility', desc: 'Refrigeration, induction, and prep galleys disappear behind flush-closing millwork.' },
      { title: 'Tactile Longevity', desc: 'Unsealed natural stone and smoked European oak treated with food-safe botanical oils.' }
    ]
  },
  {
    slug: 'master-bedroom',
    name: 'Master Bedroom & Sanctuary Design',
    shortTag: 'Master Suite',
    category: 'Dedicated Spaces',
    areaRange: '400 – 900 sq ft',
    timeline: '6 – 8 Weeks',
    tagline: 'Circadian Quiet, French Linen & Restorative Calum',
    description:
      'A sanctuary designed exclusively for deep sensory decompression. Acoustic vertical timber fluting behind low-slung platform beds, hand-woven French linen drapes, and circadian warm light scenes that ease the nervous system into sleep.',
    image: '/src/assets/images/project_minimalist_bedroom_1792337182811.webp',
    idealFor: 'Homeowners seeking a hotel-suite calibre retreat within their private residence.',
    keyDeliverables: [
      'Integrated acoustic fluted timber acoustic wall with concealed wiring',
      'Articulated warm patinated brass reading sconces',
      'Ensuite walk-in wardrobe gallery with custom leather-lined drawers',
      'Layered tactile wool and jute floor rug treatment'
    ],
    architecturalPillars: [
      { title: 'Circadian Scene Control', desc: 'Pre-set dawn, reading, and night-rest light levels that respect biological rhythms.' },
      { title: 'Tactile Comfort', desc: 'Raw unbleached linen, brushed velvet pillows, and tactile untreated timber.' }
    ]
  },
  {
    slug: 'living-room',
    name: 'Living Salon & Drawing Room Design',
    shortTag: 'Living Salon',
    category: 'Dedicated Spaces',
    areaRange: '500 – 1,200 sq ft',
    timeline: '8 – 12 Weeks',
    tagline: 'Volumetric Balance, Natural Light & Intimate Conversation',
    description:
      'The central social anchor of the home. We craft balanced conversational arrangements, floor-to-ceiling blackened steel French casements, custom mineral lime plaster, and low-profile European sofas that keep sightlines clear.',
    image: '/src/assets/images/hero_olive_living_room_1792337181639.webp',
    idealFor: 'Hosting intimate dinner gatherings, weekend repose, and showcasing fine art collections.',
    keyDeliverables: [
      'Architectural boiserie paneling in custom sage and olive mineral pigment',
      'Low-profile Belgian linen sectional sofa with deep velvet accents',
      'Round dark walnut coffee table and hand-knitted olive pouf',
      'Full-height steel grid casement windows with daylight harvesting'
    ],
    architecturalPillars: [
      { title: 'Conversational Ease', desc: 'Seating distances calculated for natural acoustic intimacy without shouting.' },
      { title: 'Art & Sculpture Lighting', desc: 'Framing wall art and sculptural objects with museum-grade 98+ CRI spots.' }
    ]
  }
];

export function getServiceBySlug(slug: string): ResidentialService | undefined {
  return RESIDENTIAL_SERVICES.find((s) => s.slug === slug);
}
