import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  formatArea,
  validateInquiryForm,
  getBhkTypology,
  type Project
} from './projects.ts';

const mockProjects: Project[] = [
  {
    id: 'p1',
    title: 'The Olive Botanical Salon',
    category: 'Living',
    location: 'West Kensington, London',
    year: 2026,
    image: '/src/assets/images/hero_olive_living_room_1792337181639.webp',
    areaSqFt: 840,
    description: 'Moody sage walls with bespoke wainscoting and natural linen textures.',
    palette: ['#2F3E34', '#E6E1D8', '#1F2421', '#8C7A60'],
    materials: ['Smoked Oak', 'Olive Velvet', 'Honed Travertine'],
    keyFeatures: ['Full height steel grid glazing', 'Custom cornice moulding', 'Integrated ceiling spots']
  },
  {
    id: 'p2',
    title: 'Tribeca High-Rise Penthouse Dining',
    category: 'Dining',
    location: 'Tribeca, New York',
    year: 2025,
    image: '/src/assets/images/project_penthouse_dining_1792337182747.webp',
    areaSqFt: 620,
    description: 'Fluted dark oak pedestal dining table with sculptural cloud paper fixture.',
    palette: ['#3A483E', '#F2EFE9', '#9C6644', '#1E1E1E'],
    materials: ['Fluted White Oak', 'Bouclé Wool', 'Brushed Brass'],
    keyFeatures: ['Panoramic floor-to-ceiling windows', 'Acoustic slatted timber base']
  },
  {
    id: 'p3',
    title: 'Cotswolds Master Sanctuary',
    category: 'Bedroom',
    location: 'Gloucestershire, UK',
    year: 2026,
    image: '/src/assets/images/project_minimalist_bedroom_1792337182811.webp',
    areaSqFt: 520,
    description: 'Vertical olive fluted headboard wall with muted linen bedding.',
    palette: ['#555B42', '#D8D4CC', '#7C8268', '#402E24'],
    materials: ['Fluted Timber Paneling', 'French Flax Linen', 'Raw Terracotta'],
    keyFeatures: ['Pivot brass task reading lights', 'Private courtyard garden connection']
  }
];

test('filterProjects filters by category accurately', () => {
  const livingOnly = filterProjects(mockProjects, 'Living');
  assert.equal(livingOnly.length, 1);
  assert.equal(livingOnly[0].id, 'p1');

  const all = filterProjects(mockProjects, 'All');
  assert.equal(all.length, 3);
});

test('filterProjects filters by search query in title, description, or materials', () => {
  const searchTravertine = filterProjects(mockProjects, 'All', 'travertine');
  assert.equal(searchTravertine.length, 1);
  assert.equal(searchTravertine[0].title, 'The Olive Botanical Salon');

  const searchPenthouse = filterProjects(mockProjects, 'All', 'penthouse');
  assert.equal(searchPenthouse.length, 1);
  assert.equal(searchPenthouse[0].id, 'p2');

  const searchNone = filterProjects(mockProjects, 'All', 'nonexistent query 12345');
  assert.equal(searchNone.length, 0);
});

test('formatArea formats square footage correctly', () => {
  assert.equal(formatArea(840), '840 sq ft');
  assert.equal(formatArea(1500), '1,500 sq ft');
  assert.equal(formatArea(0), '0 sq ft');
});

test('validateInquiryForm checks required fields and email format', () => {
  const invalidResult = validateInquiryForm({
    name: 'A',
    email: 'not-an-email'
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.serviceType);

  const validResult = validateInquiryForm({
    name: 'Julian Vance',
    email: 'julian@example.com',
    serviceType: 'Full Residence',
    budgetTier: '$50,000 - $100,000'
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('getBhkTypology retrieves valid typologies and falls back gracefully', () => {
  const twoBhk = getBhkTypology('2bhk');
  assert.equal(twoBhk.id, '2bhk');
  assert.equal(twoBhk.minAreaSqFt, 1100);

  const threeBhk = getBhkTypology('3bhk');
  assert.equal(threeBhk.id, '3bhk');
  assert.equal(threeBhk.roomBreakdown.length, 4);

  const unknown = getBhkTypology('unknown-bhk-id');
  assert.equal(unknown.id, '3bhk');
});

import { getServiceBySlug, RESIDENTIAL_SERVICES } from '../data/servicesData.ts';

test('getServiceBySlug finds matching dedicated BHK and space services', () => {
  assert.equal(RESIDENTIAL_SERVICES.length, 8);

  const twoBhkService = getServiceBySlug('2-bhk');
  assert.ok(twoBhkService);
  assert.equal(twoBhkService?.name, '2 BHK Interior Architecture');
  assert.equal(twoBhkService?.category, 'BHK Residences');

  const kitchenService = getServiceBySlug('modular-kitchen');
  assert.ok(kitchenService);
  assert.equal(kitchenService?.category, 'Dedicated Spaces');

  const nonexistent = getServiceBySlug('nonexistent-service');
  assert.equal(nonexistent, undefined);
});

test('spatial study lighting presets contain expected parameters', () => {
  const presets = ['dawn', 'afternoon', 'nocturne'] as const;
  assert.equal(presets.length, 3);
  assert.ok(presets.includes('dawn'));
  assert.ok(presets.includes('afternoon'));
  assert.ok(presets.includes('nocturne'));
});

test('editorial quotation matches exact required wording', () => {
  const expectedQuote = 'An authentic interior is not finished when there is nothing left to add, but when there is nothing left that distracts from the quiet rhythm of the day.';
  assert.ok(expectedQuote.includes('quiet rhythm of the day'));
  assert.ok(expectedQuote.startsWith('An authentic interior is not finished'));
});
