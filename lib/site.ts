export const site = {
  name: 'Filter Tech Inc.',
  shortName: 'Filter Tech',
  tagline: "Know What You're Drinking Before You Drink It.",
  description:
    'Free in-home water testing and custom filtration systems for Georgia, North Carolina, South Carolina, Alabama, and North Florida. Family-owned since 2004.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://filtertechinc.com',
  phone: '+17067123456',
  phoneDisplay: '(706) 712-3456',
  email: 'info@filtertechinc.com',
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
      'Cleaner water at every faucet, shower, and appliance. Removes chlorine, sediment, and the things that make your water taste, smell, or look off.',
  },
  {
    slug: 'drinking-water-systems',
    title: 'Drinking Water Systems',
    blurb:
      'Polished, great-tasting water at the kitchen sink. The final step for what you actually drink and cook with.',
  },
  {
    slug: 'reverse-osmosis',
    title: 'Reverse Osmosis',
    blurb:
      'The deepest filtration we install. Strips out dissolved solids most filters leave behind — great for sensitive households.',
  },
  {
    slug: 'alkaline-systems',
    title: 'Alkaline Systems',
    blurb:
      'Adds minerals back after deep filtration for a smoother taste and balanced pH.',
  },
  {
    slug: 'water-testing',
    title: 'Free Water Testing',
    blurb:
      'A trained technician comes to your home and tests your water on the spot. No charge, no obligation.',
  },
  {
    slug: 'system-rentals',
    title: 'System Rentals',
    blurb:
      'Clean water without the upfront cost. Maintenance included. Cancel any time.',
  },
];
