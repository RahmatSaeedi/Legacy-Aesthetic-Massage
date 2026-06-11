/**
 * Single source of truth for NAP (Name, Address, Phone) and other business facts.
 * Used across UI and JSON-LD structured data. Keep this consistent everywhere —
 * NAP consistency is itself a local-SEO ranking signal.
 */

export const business = {
  name: "Legacy Aesthetic Men's Spa",
  shortName: 'Legacy Aesthetic',
  legalName: "Legacy Aesthetic Men's Spa",
  // The name this business is listed under on Google & review sites. Surfaced
  // as schema alternateName so Google connects the website to those listings.
  googleName: 'Massage and More Legacy Aesthetics',
  tagline: 'Relax & Unwind',
  // Used as the default meta description seed and hero subtext.
  description:
    "Legacy Aesthetic is a private men's spa in north Edmonton offering relaxation and deep-tissue massage, full-body exfoliation, men's facials, waxing, cupping and men's haircuts. Warm, professional, and discreet — book same-day by phone or text.",

  owner: {
    name: 'Taz Saeedi',
    role: 'Licensed Aesthetician & Massage Practitioner',
  },

  // Contact
  phoneDisplay: '587-712-0719',
  phoneE164: '+15877120719',
  // No public email today — clients book by phone/text. Add later if desired.
  email: '',

  // Location (matches the address published on the live site).
  address: {
    street: '106 Street & 180 Avenue',
    locality: 'Edmonton',
    region: 'AB',
    regionName: 'Alberta',
    postalCode: 'T5X 6G3',
    country: 'CA',
    countryName: 'Canada',
    // Human-friendly note used in copy.
    note: 'North Edmonton — close to Anthony Henday Drive & 97 Street',
  },

  /**
   * Approximate coordinates for 106 St & 180 Ave, north Edmonton.
   * TODO before launch: replace with the exact lat/lng from your Google
   * Business Profile so the map pin and schema are pixel-accurate.
   */
  geo: { lat: 53.643258907680874, lng: -113.51041741993946 },

  // Communities to surface in copy + schema areaServed (local SEO reach).
  areaServed: [
    'Edmonton',
    'North Edmonton',
    'St. Albert',
    'Sherwood Park',
    'Spruce Grove',
    'Fort Saskatchewan',
  ],

  hours: {
    // Open every day, same hours.
    days: 'Monday – Sunday',
    opens: '09:00',
    closes: '21:00',
    display: '9:00 AM – 9:00 PM, every day',
  },

  priceRange: '$$',
  currency: 'CAD',

  url: 'https://legacy-massage.ca',

  social: {
    facebook: 'https://www.facebook.com/MassageLegacyAesthetic/',
    yelp: 'https://www.yelp.com/biz/legacy-aesthetic-edmonton',
  },

  // Google Maps directions link (used by the "Directions" CTAs).
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Legacy+Aesthetic+Men%27s+Spa+106+Street+180+Avenue+Edmonton+AB',
  // Embeddable map (place query — no API key required).
  mapEmbedUrl:
    'https://maps.google.com/maps?q=106%20Street%20%26%20180%20Avenue%2C%20Edmonton%2C%20AB&t=&z=13&ie=UTF8&iwloc=&output=embed',
} as const;

// Convenience pre-built links.
export const telHref = `tel:${business.phoneE164}`;
export const smsHref = `sms:${business.phoneE164}`;

export type Business = typeof business;
