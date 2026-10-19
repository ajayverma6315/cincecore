export interface BhkServiceConfig {
  bhkNumber: 1 | 2 | 3 | 4;
  slug: string;
  routePath: string;
  name: string;
  badge: string;
  tagline: string;
  areaRange: string;
  typicalSquareFootage: number;
  timeline: string;
  investmentGuide: string;
  idealProfile: string;
  heroImage: string;
  overviewSummary: string;
  spacePlanningStrategy: {
    philosophy: string;
    keyTechniques: string[];
  };
  roomLayoutBreakdown: {
    room: string;
    areaEst: string;
    description: string;
    architecturalHighlights: string[];
  }[];
  bespokeStorageInnovations: {
    title: string;
    description: string;
  }[];
  materialsAndFinishes: {
    stone: string;
    timber: string;
    metal: string;
    textile: string;
    wallFinish: string;
  };
  designScopeInclusions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  caseStudyRef: {
    title: string;
    slug: string;
    location: string;
  };
}

export const BHK_CONFIGURATIONS: Record<string, BhkServiceConfig> = {
  '1-bhk': {
    bhkNumber: 1,
    slug: '1-bhk',
    routePath: '/1-bhk-interior-design/',
    name: '1 BHK Interior Design & Architecture',
    badge: 'Pied-à-Terre & Compact Luxury',
    tagline: 'Pied-à-Terre Precision & Seamless Spatial Flow',
    areaRange: '550 – 850 sq ft',
    typicalSquareFootage: 680,
    timeline: '6 – 8 Weeks',
    investmentGuide: '$45,000 – $75,000 (Turnkey execution with custom millwork)',
    idealProfile: 'Urban professionals, executive pied-à-terre owners, and design connoisseurs seeking micro-spatial European luxury without clutter.',
    heroImage: '/src/assets/images/project_reading_lounge_1792337182414.webp',
    overviewSummary:
      'Engineered for high-density metropolitan living where every cubic foot matters. Our 1 BHK architectural transformations eliminate dead circulation space, replace bulky partition walls with continuous acoustic millwork, and deploy multi-functional European joinery that expands the sense of volume while concealing domestic necessities behind flush-closing panels.',
    spacePlanningStrategy: {
      philosophy:
        'In a 1 BHK residence, walls should rarely be static drywall—they must work as double-sided functional millwork that houses closets on one side, floating credenzas on the other, and acoustic baffling within.',
      keyTechniques: [
        'Removal of non-structural corridor walls to form a singular, luminous living-dining-kitchen volume',
        'Floor-to-ceiling blackened steel or fluted glass pocket dividers that preserve daylight transit while granting visual privacy',
        'Concealed European pocket appliances and integrated induction cooktops that allow the kitchen to read as sculptural furniture when not cooking',
        'Continuous low horizontal datum lines (furniture, credenzas, sills) that prevent vertical sightline interruption',
      ],
    },
    roomLayoutBreakdown: [
      {
        room: 'Open Living & Culinary Salon',
        areaEst: '320 – 420 sq ft',
        description:
          'A unified social space pairing a tailored banquette dining alcove, low-profile Belgian linen sofa, and a compact honed travertine breakfast bar.',
        architecturalHighlights: [
          'Full-height flush-door joinery concealing TV, audio, and utility cables',
          'Floating dining banquette with concealed under-seat archive storage drawers',
          'Linear 2400K indirect perimeter cove lighting expanding perceived ceiling height',
        ],
      },
      {
        room: 'Master Bedroom Suite',
        areaEst: '180 – 240 sq ft',
        description:
          'An acoustically insulated sanctuary with integrated platform bedding, wall-to-wall acoustic flax linen headboard panelling, and integrated nightstands.',
        architecturalHighlights: [
          'Lift-up hydraulic gas-strut platform bed frame providing 65 cu ft of hidden seasonal luggage storage',
          'Floor-to-cornice flush wardrobe run with warm interior sensor illumination',
          'Articulated patinated brass reading sconces eliminating nightstand clutter',
        ],
      },
      {
        room: 'Dedicated Pocket Study / Work Niche',
        areaEst: '35 – 50 sq ft',
        description:
          'A discreet executive workstation embedded into living room millwork that can be completely shut behind bi-fold fluted oak pocket doors at the end of the workday.',
        architecturalHighlights: [
          'Integrated cable conduits, USB-C ports, and recessed high-CRI task illumination',
          'Floating smoked oak desktop with solid bronze drawer pulls',
        ],
      },
      {
        room: 'Bespoke Spa Bathroom',
        areaEst: '45 – 65 sq ft',
        description:
          'Micro-cement and honed French limestone surfaces with a frameless glass walk-in rain shower and custom recessed medicine mirror cabinet.',
        architecturalHighlights: [
          'Recessed wall niches with concealed warm perimeter glow',
          'Wall-hung toilet and floating stone vanity maximizing visible floor area',
        ],
      },
    ],
    bespokeStorageInnovations: [
      {
        title: 'Full-Height Concealed Architectural Wall',
        description: 'A 6-meter continuous wall of fluted white oak millwork concealing coat storage, laundry washer/dryer, pantry, and television behind seamless push-to-open touch latches.',
      },
      {
        title: 'Banquette Dining Vault',
        description: 'Bespoke leather dining banquette with custom pull-out drawers designed for dinnerware, entertaining accessories, and bulky textiles.',
      },
      {
        title: 'Recessed Full-Length Mirror Portal',
        description: 'A pivoting bronze-framed floor-to-ceiling mirror cabinet providing 12cm of recessed vertical shoe and fragrance storage while reflecting ambient window light.',
      },
    ],
    materialsAndFinishes: {
      stone: 'Honed Roman Navona Travertine & French Jura Beige Limestone',
      timber: 'Bleached European White Oak & Quarter-Sawn Smoked Ash',
      metal: 'Brushed Champagne Bronze & Matte Blackened Architectural Steel',
      textile: 'French Flax Linen, Oatmeal Bouclé & Tactile Washed Jute',
      wallFinish: 'Natural Mineral Lime Plaster in Warm Alabaster (Zero VOC)',
    },
    designScopeInclusions: [
      'Complete measured spatial audit and 3D volumetric layout blueprints',
      'Structural review and permit filing for non-load-bearing wall reconfigurations',
      'Full technical joinery and millwork production drawings for all cabinetry',
      'Integrated architectural lighting, cove detailing, and electrical schedule',
      'Procurement of imported European stone slabs and custom furniture curation',
      'Turnkey project management, craftsman supervision, and final white-glove handover',
    ],
    faqs: [
      {
        question: 'How do you make a 650 sq ft 1 BHK feel spacious and luxurious?',
        answer:
          'We achieve volumetric expansion by eliminating visual clutter, keeping all millwork flush-to-wall, using a singular continuous flooring material throughout the entire apartment, and applying low-slung European furniture that leaves ceiling sightlines completely unobstructed.',
      },
      {
        question: 'Can you fit both a dining table and a home office into a 1 BHK?',
        answer:
          'Yes. We specialize in concealed multi-functional joinery—such as dining banquettes that double as casual conference seating, or integrated pocket desk cabinets that completely disappear behind flush acoustic doors when entertaining.',
      },
      {
        question: 'How long does a turnkey 1 BHK interior transformation take?',
        answer:
          'Our standard turnkey timeline is 6 to 8 weeks from site mobilization to handover. Custom millwork is prefabricated off-site in our joinery workshop while on-site civil and electrical preparation takes place, reducing site disruption.',
      },
      {
        question: 'Are structural wall removals permitted in my residential building?',
        answer:
          'Our architectural team reviews your building bylaws and structural engineering drawings during the initial feasibility audit. Non-structural partition walls can typically be removed or replaced with glass portals subject to building management approval.',
      },
    ],
    caseStudyRef: {
      title: 'West Village Private Library & Pied-à-Terre',
      slug: 'west-village-study-lounge',
      location: 'Greenwich Village, New York',
    },
  },

  '2-bhk': {
    bhkNumber: 2,
    slug: '2-bhk',
    routePath: '/2-bhk-interior-design/',
    name: '2 BHK Interior Design & Architecture',
    badge: 'Balanced Proportion & Acoustic Harmony',
    tagline: 'Balanced Proportion, Acoustic Warmth & Tactile Living',
    areaRange: '1,100 – 1,450 sq ft',
    typicalSquareFootage: 1280,
    timeline: '8 – 12 Weeks',
    investmentGuide: '$75,000 – $130,000 (Complete bespoke architectural overhaul)',
    idealProfile: 'Urban couples, young families, and professionals who host guests and require a dedicated, high-performance home office that seamlessly transforms into a guest sanctuary.',
    heroImage: '/src/assets/images/project_minimalist_bedroom_1792337182811.webp',
    overviewSummary:
      'The 2 BHK layout is the ultimate canvas for balanced European domesticity. Our architectural approach establishes a clear acoustic separation between the lively social salon and private sleeping suites. The second bedroom is detailed as a dual-purpose room: an inspiring executive study by day, and a welcoming hotel-calibre guest suite by night.',
    spacePlanningStrategy: {
      philosophy:
        'A 2 BHK must feel generous in its public entertaining zones while providing acoustic sanctuary in its resting quarters. We achieve this by positioning circulation galleys as sound buffers.',
      keyTechniques: [
        'Distinct separation of public living and private bedroom zones through acoustic solid-core pocket doors',
        'Expansive open-plan living and dining salon configured around natural daylight angles',
        'Concealed walk-through wardrobe gallery in the master suite acting as a thermal and acoustic sound barrier',
        'Flexible second bedroom with custom integrated desk and concealed guest joinery',
      ],
    },
    roomLayoutBreakdown: [
      {
        room: 'Grand Living-Dining Salon',
        areaEst: '480 – 600 sq ft',
        description:
          'A flowing entertaining space featuring custom boiserie wall paneling in muted sage pigment, herringbone European oak flooring, and a 6-to-8 seat dining arrangement.',
        architecturalHighlights: [
          'Full-height blackened steel multi-pane casement windows capturing panoramic light',
          'Low-slung Italian modular sectional sofa maintaining generous open vistas',
          'Bespoke suspended linear pendant in burnished brass over the dining table',
        ],
      },
      {
        room: 'Master Bedroom Suite & Dressing Niche',
        areaEst: '260 – 320 sq ft',
        description:
          'A restful private retreat anchored by a floor-to-ceiling vertical fluted oak acoustic headboard wall with integrated circadian nightstand sconces.',
        architecturalHighlights: [
          'Dedicated walk-through wardrobe run with tinted glass doors and concealed LED lighting',
          'Ensuite bathroom with dual honed limestone vanities and walk-in thermostatic rainfall shower',
          'Triple-glazed acoustic windows eliminating metropolitan street noise',
        ],
      },
      {
        room: 'Dual-Purpose Study / Guest Suite',
        areaEst: '190 – 240 sq ft',
        description:
          'A hybrid room featuring a solid walnut executive desk, wall-to-wall library shelving, and an integrated Italian sofa-bed mechanism for visiting guests.',
        architecturalHighlights: [
          'Full acoustic panelling in Belgian linen dampening conference call reverb',
          'Concealed wardrobe closet for guests with integrated hanging rail and safe',
        ],
      },
      {
        room: 'Architectural Culinary Galley',
        areaEst: '130 – 180 sq ft',
        description:
          'Monolithic honed travertine countertop surfaces paired with smoked oak flat-panel cabinetry and concealed appliance galleys.',
        architecturalHighlights: [
          'Pocket-door breakfast station keeping appliances hidden from social view',
          'Under-cabinet 2700K high-CRI task lighting and integrated induction surface',
        ],
      },
    ],
    bespokeStorageInnovations: [
      {
        title: 'Master Dressing Galley Wall',
        description: 'Bespoke floor-to-ceiling wardrobe modules with customized leather-lined jewellery drawers, garment hanging bays, and integrated full-length illumination.',
      },
      {
        title: 'Concealed Entry Foyer Cloakroom',
        description: 'Flush-panel entrance joinery incorporating hidden coat closets, key return niche with warm spotlighting, and integrated shoe ventilation.',
      },
      {
        title: 'Acoustic Study Library Millwork',
        description: 'Integrated floor-to-cornice shelving with concealed lower filing cabinets and cord management conduits.',
      },
    ],
    materialsAndFinishes: {
      stone: 'Honed Navona Travertine, Grigio Carnico & Fior di Bosco Marble',
      timber: 'Smoked European White Oak (Herringbone Lay) & Dark Walnut',
      metal: 'Burnished Unlacquered Brass & Blackened Iron',
      textile: 'Belgian Linen, Sage Green Wool-Cashmere & Bouclé',
      wallFinish: 'Hand-Troweled Venetian Marmorino Plaster & Mineral Eggshell',
    },
    designScopeInclusions: [
      'Comprehensive spatial re-zoning and detailed CAD construction drawing sets',
      'Acoustic insulation specification for master and guest bedroom partitions',
      'Bespoke kitchen joinery, stone countertop fabrication, and appliance integration',
      'Full architectural lighting design with Lutron 3-scene mood control switches',
      'Custom furniture sourcing, window drapery fabrication, and area rug design',
      'Complete turnkey execution with on-site dedicated project architect',
    ],
    faqs: [
      {
        question: 'How do you ensure the second bedroom functions equally well as an office and a guest suite?',
        answer:
          'We specify commercial-grade acoustic wall treatments so conference calls remain private, alongside bespoke joinery that incorporates a high-spec executive desk and an effortless European concealed bed mechanism that deploys in seconds without rearranging furniture.',
      },
      {
        question: 'Can we install an open kitchen island in a 1,200 sq ft 2 BHK?',
        answer:
          'In many 2 BHK floorplans, removing the barrier wall between kitchen and living allows for a sculptural 2.4m stone breakfast island with bar seating, transforming the culinary area into the focal entertaining point of the home.',
      },
      {
        question: 'What is the acoustic difference between standard walls and your specification?',
        answer:
          'We specify double-layer acoustic plasterboard with mineral wool cavity insulation, resilient channel decoupling, and solid-core timber doors with bottom drop seals, boosting the sound transmission class (STC) from a standard 33 to over 54 STC.',
      },
      {
        question: 'What is the expected timeline for a 2 BHK transformation?',
        answer:
          'Our standard project timeline is 8 to 12 weeks. Detailed procurement happens in advance so that materials are staged and ready before on-site demolition begins.',
      },
    ],
    caseStudyRef: {
      title: 'Cotswolds Master Bedroom Suite & Country Residence',
      slug: 'cotswolds-master-sanctuary',
      location: 'Gloucestershire, United Kingdom',
    },
  },

  '3-bhk': {
    bhkNumber: 3,
    slug: '3-bhk',
    routePath: '/3-bhk-interior-design/',
    name: '3 BHK Interior Design & Architecture',
    badge: 'The Signature European Family Residence',
    tagline: 'The Signature European Family Residence',
    areaRange: '1,800 – 2,600 sq ft',
    typicalSquareFootage: 2150,
    timeline: '12 – 16 Weeks',
    investmentGuide: '$130,000 – $220,000 (Complete haute-architecture turnkey overhaul)',
    idealProfile: 'Established families seeking generational durability, timeless Parisian architectural moulding details, formal dining capacity, and dedicated private retreats for all family members.',
    heroImage: '/src/assets/images/hero_olive_living_room_1792337181639.webp',
    overviewSummary:
      'Our most celebrated typology. The 3 BHK residence allows for full architectural expression: classical boiserie envelopes, a dedicated formal dining salon seating 8 to 10 guests, an expansive primary master suite with private walk-in dressing room, and two bespoke secondary suites. Every surface is calibrated for tactile warmth, quiet acoustics, and graceful aging over decades.',
    spacePlanningStrategy: {
      philosophy:
        'In a 3 BHK, the architecture must support both grand communal rituals (dinners, celebrations, reading by the fire) and individual sensory decompression without compromise.',
      keyTechniques: [
        'Creation of a formal grand entrance foyer that introduces the architectural tone of the residence',
        'Separation of formal drawing room entertaining from informal family lounge and children zones',
        'Alignment of French enfilade sightlines connecting the formal salon through to the dining area',
        'Dedicated service, laundry, and utility corridors with direct secondary access where available',
      ],
    },
    roomLayoutBreakdown: [
      {
        room: 'Formal Drawing Salon & Reception',
        areaEst: '650 – 850 sq ft',
        description:
          'A majestic room framed by bespoke architectural boiserie paneling in custom sage and olive mineral pigment, floor-to-ceiling blackened steel casements, and low-profile European sofas.',
        architecturalHighlights: [
          'Full-height architectural mouldings crafted by master French plaster artisans',
          'Museum-grade 98+ CRI directional art spotlights framing private collection canvases',
          'Chevron European white oak parquet flooring with hand-planed bevels',
        ],
      },
      {
        room: 'Formal Dining Salon',
        areaEst: '250 – 350 sq ft',
        description:
          'Dedicated dining salon anchored by an 8-to-10 seater fluted oak or honed marble pedestal dining table, crowned by a sculptural washi cloud pendant.',
        architecturalHighlights: [
          'Integrated concealed credenza wall with bespoke silver, glassware, and wine storage',
          'Acoustic plaster ceilings preventing dinner conversation reverberation',
        ],
      },
      {
        room: 'Primary Master Suite & Walk-in Gallery',
        areaEst: '380 – 480 sq ft',
        description:
          'An expansive private wing with bedroom salon, private dressing gallery lined with bespoke joinery, and a 5-fixture bookmatched marble ensuite.',
        architecturalHighlights: [
          'Integrated walk-in wardrobe with glass display islands and automated LED lighting',
          'Freestanding oval stone soaking tub and walk-in double rainfall shower room',
        ],
      },
      {
        room: 'Two Secondary Suites / Children / Guests',
        areaEst: '220 – 280 sq ft each',
        description:
          'Individually tailored bedroom suites featuring built-in acoustic study desks, fluted wardrobes, and private ensuite or adjoining bathrooms.',
        architecturalHighlights: [
          'Ergonomic study nooks with natural daylight exposure and linen pinboards',
          'Bespoke upholstered window reading banquettes with storage drawers below',
        ],
      },
    ],
    bespokeStorageInnovations: [
      {
        title: 'Master Walk-In Dressing Gallery',
        description: 'A 14-square-meter private boutique dressing room with floor-to-ceiling glass-faced wardrobe bays, pull-out velvet accessory trays, and central shoe display console.',
      },
      {
        title: 'Concealed Kitchen Butler’s Galley',
        description: 'A hidden prep kitchen tucked behind seamless boiserie pocket doors, keeping prep messes and appliances invisible during formal dinner parties.',
      },
      {
        title: 'Linen & Household Archive Room',
        description: 'Deep modular cedar-lined storage room for bed linens, cashmere throws, and travel luggage.',
      },
    ],
    materialsAndFinishes: {
      stone: 'Honed Arabescato Corchia Marble, Roman Navona Travertine & Calacatta Viola',
      timber: 'Solid European White Oak (Chevron / Versailles Lay) & Smoked American Walnut',
      metal: 'Hand-Burnished Antique Brass, Dark Bronze & Forged Wrought Iron',
      textile: 'Belgian Heavyweight Linen, Cashmere Drapery, Silk-Wool Rugs & French Bouclé',
      wallFinish: 'Custom Sage & Olive Mineral Pigment Lime Plaster with Gypsum Cornicing',
    },
    designScopeInclusions: [
      'Complete architectural demolition, civil masonry, and structural partition engineering',
      'Historical or contemporary boiserie wall paneling and ornamental cornice detailing',
      'Complete electrical rewire, smart home automation (Lutron, Crestron), and HVAC slot diffusers',
      'Master ensuite and secondary bathroom plumbing, bookmatched stone slab installations',
      'Art procurement, bespoke furniture manufacturing, and custom textile curation',
      'Full-time senior site architect supervision and 10-year craftsmanship warranty',
    ],
    faqs: [
      {
        question: 'How do you balance formal entertaining with daily family life in a 3 BHK?',
        answer:
          'We configure distinct spatial zones: a formal drawing room and dining salon for guests, alongside an intimate family living and media nook adjacent to bedrooms where children can unwind without disturbing the formal areas.',
      },
      {
        question: 'Can you integrate modern smart home automation without ruining the classic boiserie mouldings?',
        answer:
          'Yes. We conceal all motorized shades inside recessed ceiling pockets, flush-mount discrete Lutron keypads into the boiserie rails, and hide multi-room acoustic speakers behind micro-perforated acoustic plaster that renders them completely invisible.',
      },
      {
        question: 'How do you approach color schemes across three separate bedrooms?',
        answer:
          'We establish a shared architectural envelope—such as warm off-white mineral plaster and natural oak flooring—and introduce individuality through curated accent pigments (e.g. botanical olive in the primary suite, muted French blue in the guest wing, and warm terracotta in children’s quarters).',
      },
      {
        question: 'What is the investment bracket for a complete 3 BHK overhaul?',
        answer:
          'Our turnkey 3 BHK transformations typically range from $130,000 to $220,000 depending on stone slab selections, custom millwork volume, and automated building management systems.',
      },
    ],
    caseStudyRef: {
      title: 'The Olive Botanical Salon & Residential Atelier',
      slug: 'olive-botanical-salon',
      location: 'West Kensington, London',
    },
  },

  '4-bhk': {
    bhkNumber: 4,
    slug: '4-bhk',
    routePath: '/4-bhk-interior-design/',
    name: '4 BHK Interior Design & Architecture',
    badge: 'Monumental Scale & Penthouse Luxury',
    tagline: 'Expansive High-Rise & Townhouse Luxury',
    areaRange: '3,000 – 4,500 sq ft',
    typicalSquareFootage: 3600,
    timeline: '16 – 22 Weeks',
    investmentGuide: '$220,000 – $400,000+ (Haute-couture residential architecture)',
    idealProfile: 'High-profile homeowners, art collectors, and multi-generational families demanding monumental scale, double-height entertaining volumes, commercial-grade culinary infrastructure, and private library suites.',
    heroImage: '/src/assets/images/project_penthouse_dining_1792337182747.webp',
    overviewSummary:
      'Uncompromising architectural grandeur. The 4 BHK penthouse or townhouse represents the pinnacle of residential craftsmanship. Designed for connoisseurs of scale, our layouts incorporate double-height reception salons, a monolithic 3.6m Navona travertine kitchen waterfall island, temperature-controlled private wine galleries, an executive corner library, and four full en-suite master sanctuaries.',
    spacePlanningStrategy: {
      philosophy:
        'In a 3,500+ sq ft residence, the greatest danger is cavernous sterility. Our planning introduces human proportion, intimate conversation groupings, and rhythmic material transitions that make vast rooms feel warm, inviting, and emotionally grounded.',
      keyTechniques: [
        'Zoning into three distinct wings: 1) Grand Entertaining Salon, 2) Family Hearth & Culinary Galley, and 3) Private En-Suite Master Quarters',
        'Double-height volumetric framing with acoustic ceiling baffles and motorized solar/blackout drapery pockets',
        'Dual kitchen layout: an exquisite show kitchen island for entertaining paired with a fully equipped back prep kitchen',
        'Separate service entrance and discreet staff/delivery circulation paths',
      ],
    },
    roomLayoutBreakdown: [
      {
        room: 'The Monumental Great Room & Salon',
        areaEst: '1,000 – 1,400 sq ft',
        description:
          'A majestic double-height entertaining salon commanding skyline vistas, anchored by a monumental 3m hand-carved stone fireplace and low-slung Italian seating groupings.',
        architecturalHighlights: [
          'Panoramic floor-to-ceiling glass wall framing skyline or courtyard views',
          'Monolithic hand-carved stone fireplace hearth in honed Italian limestone',
          'Custom acoustic timber coffered ceiling dampening echo and housing indirect lighting',
        ],
      },
      {
        room: 'Show Kitchen & Travertine Island',
        areaEst: '400 – 550 sq ft',
        description:
          'A sculptural culinary salon centered around a monolithic 3.6m honed Navona travertine waterfall island with cantilevered breakfast seating for six.',
        architecturalHighlights: [
          'Full-height smoked European oak cabinetry with touch-latch concealed appliance galleys',
          'Integrated wine preservation wall with temperature and humidity control behind UV-resistant glass',
          'Adjoining concealed chef prep kitchen with commercial-grade extraction',
        ],
      },
      {
        room: 'Presidential Master Suite Wing',
        areaEst: '600 – 800 sq ft',
        description:
          'A self-contained private penthouse wing featuring a king bedroom salon, private sunset terrace, his-and-hers walk-in boutique dressing rooms, and a spa-level marble bathroom.',
        architecturalHighlights: [
          'Bookmatched slab Calacatta Viola marble bathroom walls and Roman soaking bath',
          'Bespoke cedar-lined his-and-hers walk-in dressing rooms with illuminated display vitrines',
        ],
      },
      {
        room: 'Executive Corner Library & Cigar Lounge',
        areaEst: '300 – 420 sq ft',
        description:
          'An intimate, deeply restorative sanctuary with floor-to-cornice lacquered oak bookshelves, velvet reading loungers, and private acoustic doors.',
        architecturalHighlights: [
          'Concealed dry bar with antiqued bronze mirror backing and brass cocktail rail',
          'Integrated acoustic wall panelling in French wool flannel',
        ],
      },
    ],
    bespokeStorageInnovations: [
      {
        title: 'Temperature-Controlled Wine & Glass Gallery',
        description: 'A 200-bottle custom glass and blackened steel architectural wine vault with dual-zone climate precision and back-lit alabaster paneling.',
      },
      {
        title: 'His-and-Hers Dual Boutique Dressing Suites',
        description: 'Over 30 linear meters of custom millwork featuring motorized tie and belt racks, suede watch display vitrines, and dedicated shoe museum shelving.',
      },
      {
        title: 'Hidden Back-Kitchen Prep & Pantry Galley',
        description: 'Complete secondary kitchen with heavy cooking equipment, refrigeration, and pantry shelving hidden behind flush pocket wall panels.',
      },
    ],
    materialsAndFinishes: {
      stone: 'Bookmatched Calacatta Viola, Italian Navona Travertine, Nero Marquina & Belgian Bluestone',
      timber: 'Smoked European Bog Oak, Rift-Sawn American Walnut & Antique Reclaimed Parquet',
      metal: 'Gunmetal Bronze, Blackened Steel, Antiqued Burnished Brass & Polished Nickel',
      textile: 'Cashmere Drapery, Silk-Wool Hand-Knotted Carpets, Loro Piana Wool & Suede Paneling',
      wallFinish: 'Artisanal Marmorino Stucco, French Boiserie & Custom Mineral Pigment Washes',
    },
    designScopeInclusions: [
      'Comprehensive architectural restructuring, structural steel reinforcement calculations, and MEP coordination',
      'Custom quarry stone selection, slab dry-lay inspections in Verona, Italy, and bookmatching',
      'Double-height motorized architectural window drapery, acoustics, and home theater integration',
      'Complete primary and secondary kitchen fabrication, Sub-Zero / Gaggenau appliance integration',
      'Private terrace landscape design, outdoor kitchen, and stone paving coordination',
      'White-glove concierge move-in management and lifetime craftsmanship warranty',
    ],
    faqs: [
      {
        question: 'How do you create warmth in a vast 3,500+ sq ft double-height room?',
        answer:
          'We use the European technique of volumetric grounding: creating intimate conversational islands using large-format hand-knotted wool rugs, lowering the perceived vertical scale with horizontal boiserie datums, and washing perimeter walls in warm 2400K indirect light.',
      },
      {
        question: 'What structural considerations are required for a 3.6m monolithic stone island?',
        answer:
          'Our structural engineering team conducts floor load audits to calculate deflection limits. We design internal cantilevered steel armatures that distribute the weight across multiple joists without straining floor slabs.',
      },
      {
        question: 'How do you handle privacy in a multi-generational 4 BHK layout?',
        answer:
          'We lay out the floorplan into independent wings. Each of the four bedroom suites features its own dedicated acoustic vestibule, walk-in wardrobe, and private bathroom, allowing family members or guests to reside without acoustic or visual overlap.',
      },
      {
        question: 'What is the procurement lead time for rare Italian marble slabs?',
        answer:
          'Quarry extraction, slab slicing, and ocean freight from Italy typically take 6 to 10 weeks. Our team initiates stone selection during the preliminary 3D concept phase so slabs arrive precisely when on-site framing is complete.',
      },
    ],
    caseStudyRef: {
      title: 'Tribeca High-Rise Penthouse Dining & Living Salon',
      slug: 'tribeca-penthouse-dining',
      location: 'Tribeca, New York',
    },
  },
};

export function getBhkConfig(slugOrNumber: string | number): BhkServiceConfig | undefined {
  if (typeof slugOrNumber === 'number') {
    return Object.values(BHK_CONFIGURATIONS).find((c) => c.bhkNumber === slugOrNumber);
  }
  const clean = slugOrNumber.replace('-interior-design', '').replace('/services/', '').replace('/', '');
  return BHK_CONFIGURATIONS[clean] || BHK_CONFIGURATIONS[`${clean}-bhk`] || Object.values(BHK_CONFIGURATIONS).find(c => c.slug === clean);
}
