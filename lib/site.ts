export const site = {
  name: 'Filter Tech Inc.',
  shortName: 'Filter Tech',
  tagline: "Know What You're Drinking Before You Drink It.",
  description:
    'Free in-home water sampling and custom filtration systems for Georgia, North Carolina, South Carolina, Alabama, and North Florida. Filter Tech Inc. since 2010 — 30+ years in the water filtration trade.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://filtertechinc.com',
  phone: '+17704871066',
  phoneDisplay: '(770) 487-1066',
  email: 'filtertechinc@gmail.com',
  address: {
    street: '101 Main Street',
    city: 'Hogansville',
    region: 'GA',
    postalCode: '30230',
    country: 'US',
  },
  hours: 'Mon–Fri 8:00 AM – 5:00 PM',
  serviceArea: ['Georgia', 'Alabama', 'North Carolina', 'Florida'],
  social: {
    facebook: 'https://www.facebook.com/filtertechinc',
    google: 'https://g.page/filtertechinc',
  },
};

export const nav = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/water-101', label: 'Water 101' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/contact', label: 'Contact' },
];

// Publicly listed services — drives the homepage grid, services hub, footer,
// and sitemap. Water Testing and Financing content still lives in
// services-data.ts and their detail URLs still resolve, but they're not
// surfaced in any list right now (they'll be moved to dedicated pages later).
export const services = [
  {
    slug: 'whole-house-filtration',
    title: 'Whole-House Filtration',
    blurb:
      'Cleaner water at every faucet, shower, and appliance — at the point water enters your home.',
  },
  {
    slug: 'reverse-osmosis',
    title: 'Reverse Osmosis',
    blurb:
      'One of our most popular drinking water systems. The same filtration hospitals, labs, and bottling plants rely on, right at your kitchen sink.',
  },
  {
    slug: 'hydrogen-systems',
    title: 'Alkaline-Hydrogen Drinking Water',
    blurb:
      'Filtered, ionized water enriched with molecular hydrogen — the Delphi H2 by AlkaViva, installed at your kitchen sink for daily antioxidant-rich drinking water.',
  },
];
