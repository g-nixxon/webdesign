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
  serviceArea: ['Georgia', 'North Carolina', 'South Carolina', 'Alabama', 'North Florida'],
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
      'Our most popular drinking water system. The deepest filtration we install.',
  },
  {
    slug: 'hydrogen-systems',
    title: 'Alkaline-Hydrogen Drinking Water',
    blurb:
      'The Delphi H2 Under-Sink Ionizer — filtered water enriched with molecular hydrogen and balanced minerals.',
  },
  {
    slug: 'water-testing',
    title: 'Free Water Testing',
    blurb:
      'We come to your home, collect samples, and look at where a system would go. Lab testing follows.',
  },
  {
    slug: 'financing',
    title: 'Financing',
    blurb:
      'Cleaner water without the upfront cost. Approved payment plans on installed systems.',
  },
];
