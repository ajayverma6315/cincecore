export interface Project {
  id: string;
  title: string;
  category: 'Living' | 'Dining' | 'Bedroom' | 'Kitchen' | 'Study';
  location: string;
  year: number;
  image: string;
  areaSqFt: number;
  description: string;
  palette: string[];
  materials: string[];
  keyFeatures: string[];
}

export interface ResidentialTypology {
  id: '2bhk' | '3bhk' | '4bhk' | 'estate';
  tag: string;
  name: string;
  typicalArea: string;
  minAreaSqFt: number;
  maxAreaSqFt: number;
  avgTimeline: string;
  suitedFor: string;
  image: string;
  overview: string;
  keyInclusions: string[];
  roomBreakdown: { room: string; spec: string }[];
}

export interface InquiryForm {
  name: string;
  email: string;
  phone?: string;
  serviceType: 'Full Residence' | 'Single Space' | 'Spatial Architecture' | 'Material Consultation';
  spaceType: string;
  budgetTier: string;
  timeline: string;
  message: string;
}

export const RESIDENTIAL_TYPOLOGIES: ResidentialTypology[] = [
  {
    id: '2bhk',
    tag: '2 BHK Residences',
    name: 'Curated 2 BHK Urban Sanctuary',
    typicalArea: '1,100 – 1,450 sq ft',
    minAreaSqFt: 1100,
    maxAreaSqFt: 1450,
    avgTimeline: '8 – 12 Weeks',
    suitedFor: 'Design connoisseurs, urban couples, and executive pied-à-terres',
    image: '/src/assets/images/project_minimalist_bedroom_1792337182811.webp',
    overview:
      'Maximizing spatial openness through seamless concealed storage, low-slung architectural seating, and bespoke partition millwork that preserves uninterrupted sightlines.',
    keyInclusions: [
      'Master bedroom fluted headboard acoustic wall',
      'Dual-purpose living and gallery dining layout',
      'Concealed bespoke cabinetry and architectural wardrobe',
      'Circadian warm lighting integration'
    ],
    roomBreakdown: [
      { room: 'Living & Dining', spec: 'Open-concept salon with herringbone timber & floating credenza' },
      { room: 'Master Suite', spec: 'Acoustic fluting, linen drapery, and integrated warm brass sconces' },
      { room: 'Guest / Study Suite', spec: 'Transformative pocket-door study with built-in library millwork' },
      { room: 'Culinary Galley', spec: 'Minimalist flat-panel dark oak and honed stone counters' }
    ]
  },
  {
    id: '3bhk',
    tag: '3 BHK Residences',
    name: 'Signature 3 BHK Botanical Residence',
    typicalArea: '1,800 – 2,600 sq ft',
    minAreaSqFt: 1800,
    maxAreaSqFt: 2600,
    avgTimeline: '12 – 16 Weeks',
    suitedFor: 'Growing families seeking calm, organic luxury and generational durability',
    image: '/src/assets/images/hero_olive_living_room_1792337181639.webp',
    overview:
      'Our most requested typology: deep sage and olive architectural envelopes, custom boiserie paneling, generous formal dining, and dedicated quiet zones for every family member.',
    keyInclusions: [
      'Full formal living salon with boiserie and steel grid glazing',
      'Dedicated formal dining salon with statement lighting',
      'Private master sanctuary with walk-in dressing gallery',
      'Integrated smart lighting scenes (Morning, Entertaining, Rest)'
    ],
    roomBreakdown: [
      { room: 'Grand Living Salon', spec: 'Custom sage boiserie, multi-pane steel glazing, low sectional sofa' },
      { room: 'Formal Dining', spec: 'Circular fluted oak pedestal table with sculptural pendant' },
      { room: 'Primary Master Suite', spec: 'En-suite dressing gallery, textured linen, French doors' },
      { room: 'Two Secondary Suites', spec: 'Tailored study desk millwork, organic wool carpets' }
    ]
  },
  {
    id: '4bhk',
    tag: '4 BHK Residences',
    name: 'Expansive 4 BHK Penthouse Suite',
    typicalArea: '3,000 – 4,500 sq ft',
    minAreaSqFt: 3000,
    maxAreaSqFt: 4500,
    avgTimeline: '16 – 22 Weeks',
    suitedFor: 'High-profile residences, panoramic skyline apartments, and art collectors',
    image: '/src/assets/images/project_penthouse_dining_1792337182747.webp',
    overview:
      'Uncompromising architectural grandeur. Features monolithic travertine islands, double-height entertaining lounges, a dedicated private library, and multi-zone climate & acoustic isolation.',
    keyInclusions: [
      'Monolithic honed travertine 3.6m kitchen waterfall island',
      'Private temperature-controlled wine & glass display gallery',
      'Dedicated private library / corner cigar lounge',
      'Separate service entrance and pantry prep galley'
    ],
    roomBreakdown: [
      { room: 'Great Room & Lounge', spec: 'Panoramic skyline framing, monumental stone fireplace, lounge groupings' },
      { room: 'Culinary & Show Kitchen', spec: 'Travertine waterfall island and hidden back-kitchen prep' },
      { room: 'Executive Study / Library', spec: 'Floor-to-ceiling lacquered oak joinery and vintage reading chairs' },
      { room: 'Four Luxury Suites', spec: 'Full private en-suites with bookmatched slab marble' }
    ]
  },
  {
    id: 'estate',
    tag: 'Private Duplex & Estates',
    name: 'Architectural Duplex & Country Estate',
    typicalArea: '5,000 – 12,000+ sq ft',
    minAreaSqFt: 5000,
    maxAreaSqFt: 12000,
    avgTimeline: '6 – 10 Months',
    suitedFor: 'Generational family compounds, heritage townhouse restorations, and private villas',
    image: '/src/assets/images/project_reading_lounge_1792337182414.webp',
    overview:
      'Turnkey architectural restoration and bespoke interior furnishing. Hand-hewn stone, artisan-forged ironwork, antique parquet restoration, and bespoke landscape integration.',
    keyInclusions: [
      'Historical preservation and custom moulding recreation',
      'Art curation and bespoke commissioned sculptural fixtures',
      'Full home wellness suite, sauna, and private wine cellar',
      'Complete outdoor courtyard and terrace living extensions'
    ],
    roomBreakdown: [
      { room: 'Grand Gallery Hall', spec: 'Sweeping spiral staircase, antique limestone pavers, monumental art' },
      { room: 'Double-Height Living', spec: 'Hand-carved fireplace surrounds and double-height casement windows' },
      { room: 'Private Study & Cigar Lounge', spec: 'Smoked oak coffered ceilings and bespoke humidor joinery' },
      { room: 'Wellness Pavilion', spec: 'Heated Roman plunge bath and cedar sauna' }
    ]
  }
];

export function getBhkTypology(id: string): ResidentialTypology {
  const found = RESIDENTIAL_TYPOLOGIES.find((t) => t.id === id);
  return found || RESIDENTIAL_TYPOLOGIES[1]; // default 3BHK
}

export function filterProjects(
  projects: Project[],
  selectedCategory: string,
  searchQuery: string = ''
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;

    if (!matchesCategory) return false;

    if (!query) return true;

    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesLocation = project.location.toLowerCase().includes(query);
    const matchesCategoryName = project.category.toLowerCase().includes(query);
    const matchesMaterials = project.materials.some((m) =>
      m.toLowerCase().includes(query)
    );
    const matchesDescription = project.description.toLowerCase().includes(query);

    return (
      matchesTitle ||
      matchesLocation ||
      matchesCategoryName ||
      matchesMaterials ||
      matchesDescription
    );
  });
}

export function formatArea(sqFt: number): string {
  if (sqFt <= 0) return '0 sq ft';
  return `${sqFt.toLocaleString()} sq ft`;
}

export function validateInquiryForm(form: Partial<InquiryForm>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!form.serviceType) {
    errors.serviceType = 'Please select a service type.';
  }

  if (!form.budgetTier) {
    errors.budgetTier = 'Please select an estimated budget tier.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
