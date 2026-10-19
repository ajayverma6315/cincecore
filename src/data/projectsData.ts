import { Project } from '../utils/projects';

export const projectsData: Project[] = [
  {
    id: 'olive-botanical-salon',
    title: 'The Olive Botanical Salon',
    category: 'Living',
    location: 'West Kensington, London',
    year: 2026,
    image: '/src/assets/images/hero_olive_living_room_1792337181639.webp',
    areaSqFt: 860,
    description:
      'A harmonious sanctuary balancing deep olive mouldings, tailored Belgian linen, and expansive black steel glazing that drinks in golden afternoon light.',
    palette: ['#2F3E34', '#EAE6DD', '#181A19', '#9C886B'],
    materials: ['Honed Travertine', 'Deep Olive Velvet', 'Herringbone Walnut', 'Hand-Forged Steel'],
    keyFeatures: [
      'Full-height black steel multi-pane glazing',
      'Architectural boiserie paneling in custom sage pigment',
      'Bespoke hand-knitted wool and jute rug layering',
      'Suspended architectural cone pendant cluster'
    ]
  },
  {
    id: 'tribeca-penthouse-dining',
    title: 'Tribeca High-Rise Dining Salon',
    category: 'Dining',
    location: 'Tribeca, New York',
    year: 2025,
    image: '/src/assets/images/project_penthouse_dining_1792337182747.webp',
    areaSqFt: 640,
    description:
      'Commanding skyline vistas framed by soft olive plaster and an anchored fluted dark oak circular dining table crowned with a sculptural washi paper pendant.',
    palette: ['#38463B', '#F5F2EC', '#4A3728', '#C4B097'],
    materials: ['Fluted White Oak', 'Textured Bouclé', 'Brushed Brass', 'Washi Cloud Paper'],
    keyFeatures: [
      'Circular 8-seater fluted solid oak pedestal',
      'Custom sculptural cloud pendant luminaire',
      'Low-sheen Venetian plaster accent envelope',
      'Seamless urban panoramic integration'
    ]
  },
  {
    id: 'cotswolds-master-sanctuary',
    title: 'Cotswolds Master Bedroom Suite',
    category: 'Bedroom',
    location: 'Gloucestershire, United Kingdom',
    year: 2026,
    image: '/src/assets/images/project_minimalist_bedroom_1792337182811.webp',
    areaSqFt: 540,
    description:
      'Warm acoustic vertical fluting behind low platform bedding draped in French flax linens and grounded by a sun-drenched private courtyard outlook.',
    palette: ['#4E543D', '#DDD8CE', '#868B75', '#3A2C23'],
    materials: ['Vertical Oak Slats', 'Organic Flax Linen', 'Aged Patina Brass', 'Raw Terracotta'],
    keyFeatures: [
      'Integrated acoustic fluted timber acoustic wall',
      'Articulated warm brass reading sconces',
      'Floor-to-ceiling iron casement garden portal',
      'Layered tactile wool and jute floor treatment'
    ]
  },
  {
    id: 'minimalist-travertine-kitchen',
    title: 'Chelsea Culinary Studio',
    category: 'Kitchen',
    location: 'Chelsea, New York',
    year: 2025,
    image: '/src/assets/images/project_travertine_kitchen_1792337183640.webp',
    areaSqFt: 720,
    description:
      'Monolithic honed travertine waterfall island anchored against rich smoked oak millwork and linear architectural task lighting.',
    palette: ['#282420', '#D9CEBF', '#61584F', '#1F2022'],
    materials: ['Honed Navona Travertine', 'Smoked Dark Oak', 'Burnished Bronze', 'Micro-Cement'],
    keyFeatures: [
      'Monolithic 3.6m waterfall island in Roman travertine',
      'Concealed pocket-door pantry and appliance galleys',
      'Dual suspended architectural linear pendants',
      'Seamless micro-cement continuous flooring'
    ]
  },
  {
    id: 'west-village-study-lounge',
    title: 'West Village Private Library',
    category: 'Study',
    location: 'Greenwich Village, New York',
    year: 2026,
    image: '/src/assets/images/project_reading_lounge_1792337182414.webp',
    areaSqFt: 480,
    description:
      'Floor-to-ceiling floor-to-cornice bookshelves coated in deep evergreen eggshell lacquer, featuring an iconic caramel leather recliner and leaded window light.',
    palette: ['#243427', '#E5DFD3', '#8F532B', '#D0A865'],
    materials: ['Lacquered Pine Joinery', 'Full-Grain Caramel Leather', 'Leaded Glass', 'Antique Brass'],
    keyFeatures: [
      'Double-height custom millwork with integrated picture lights',
      'Mid-century reading armchair and matching ottoman',
      'Original leaded window pane restoration',
      'Herringbone European parquet with vintage Persian runner'
    ]
  }
];

export interface StudioNotification {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  read: boolean;
  linkText: string;
}

export const notificationsData: StudioNotification[] = [
  {
    id: 'n1',
    title: 'Architectural Digest Feature',
    date: 'October 2026',
    excerpt: 'The Olive Botanical Salon has been recognized in the annual "Great Living Spaces of Europe" issue.',
    read: false,
    linkText: 'Read Editorial'
  },
  {
    id: 'n2',
    title: '2027 Private Commissions Open',
    date: 'September 2026',
    excerpt: 'We are accepting 6 new residential transformation commissions for the upcoming European spring calendar.',
    read: false,
    linkText: 'Inquire Now'
  },
  {
    id: 'n3',
    title: 'Aura Studio Monograph Vol. II',
    date: 'August 2026',
    excerpt: 'Our tactile hardcover survey detailing 14 private residences is now available in limited print.',
    read: true,
    linkText: 'View Volume'
  }
];
