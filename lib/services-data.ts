export interface ServiceContent {
  slug: string;
  title: string;
  blurb: string;
  problem: string;
  how: string[];
  includes: string[];
  fitsHome: string;
  faqs: { q: string; a: string }[];
}

export const serviceContent: Record<string, ServiceContent> = {
  'whole-house-filtration': {
    slug: 'whole-house-filtration',
    title: 'Whole-House Filtration',
    blurb:
      'Cleaner water at every faucet, shower, and appliance — not just the kitchen.',
    problem:
      'Hard water destroys appliances and dries out skin. Chlorine and sediment fade clothes, stain fixtures, and pass through every shower you take. A whole-house system handles it all at the point your water enters the home.',
    how: [
      'Water enters your home through a single main line.',
      'We install a multi-stage filter on that line, sized to your home’s flow rate.',
      'Sediment, chlorine, and dissolved hardness are removed before water ever reaches a tap.',
      'Annual service swaps filter media and inspects the housing.',
    ],
    includes: [
      'Free in-home water test before we recommend',
      'Pre-filter housing and media',
      'Carbon block for chlorine and taste',
      'Conditioning stage for hardness',
      'Professional installation by a Certified Installer',
      'One-year service visit included',
    ],
    fitsHome:
      'Homes on city water with chlorine concerns, or any home with hardness, sediment, or staining issues. Great for families who want one solution for the whole house.',
    faqs: [
      {
        q: 'Will it slow my water pressure?',
        a: 'A properly sized whole-house system has no noticeable pressure drop. We measure your flow rate before recommending a size.',
      },
      {
        q: 'How often does it need service?',
        a: 'Once a year for most homes. Heavy iron or sediment loads may need a six-month check. We’ll tell you what yours needs.',
      },
      {
        q: 'Do I still need a drinking water system at the kitchen?',
        a: 'Often yes. Whole-house handles the bulk problems; an RO or drinking water system polishes the water you actually drink.',
      },
    ],
  },
  'drinking-water-systems': {
    slug: 'drinking-water-systems',
    title: 'Drinking Water Systems',
    blurb: 'Polished, great-tasting water at the kitchen sink.',
    problem:
      'Even filtered house water can carry taste and odor from dissolved solids that a whole-house unit can’t remove. A drinking water system handles that last mile — for what you actually drink and cook with.',
    how: [
      'A compact filter system installs under your kitchen sink.',
      'Water passes through multiple stages — typically sediment, carbon, and a polishing filter.',
      'A dedicated faucet on your counter delivers the finished water.',
      'No tank required for most models.',
    ],
    includes: [
      'Free in-home water test',
      'Multi-stage drinking water unit',
      'Dedicated kitchen faucet',
      'Professional installation under the sink',
      'Filter change schedule and reminders',
    ],
    fitsHome:
      'Homes where the priority is great-tasting drinking and cooking water without the cost of a whole-house upgrade. Renters with landlord approval can also use these.',
    faqs: [
      {
        q: 'How is this different from reverse osmosis?',
        a: 'A drinking water system removes taste, odor, and many contaminants but leaves more minerals in. RO is the deepest filtration we install.',
      },
      {
        q: 'How long do the filters last?',
        a: 'Most cartridges last 6–12 months. Heavy use or higher contaminant levels may shorten that.',
      },
    ],
  },
  'reverse-osmosis': {
    slug: 'reverse-osmosis',
    title: 'Reverse Osmosis Systems',
    blurb:
      'The deepest filtration we install — strips dissolved solids most filters leave behind.',
    problem:
      'Total dissolved solids — minerals, salts, traces of metals — pass straight through ordinary filters. They affect taste, leave spots on glassware, and matter for sensitive households. RO uses a semi-permeable membrane to filter at the molecular level.',
    how: [
      'Pre-filters remove sediment and chlorine that would damage the membrane.',
      'The RO membrane filters water under pressure, separating dissolved solids.',
      'A small storage tank holds the finished water for instant access.',
      'A post-filter polishes the water before it reaches your faucet.',
    ],
    includes: [
      'Free water test with TDS reading',
      'Four- or five-stage RO unit',
      'Storage tank and dedicated faucet',
      'Professional installation',
      'Annual membrane and filter service plan',
    ],
    fitsHome:
      'Homes with high TDS readings, well water, or family members with sensitivities. Anyone who wants the cleanest possible drinking water.',
    faqs: [
      {
        q: 'Does RO remove minerals my body needs?',
        a: 'Most minerals come from food, not water. If you want minerals added back, we can pair an RO with an alkaline post-filter.',
      },
      {
        q: 'How much water does it waste?',
        a: 'Modern RO units have improved efficiency dramatically. We install systems with low waste ratios.',
      },
    ],
  },
  'alkaline-systems': {
    slug: 'alkaline-systems',
    title: 'Alkaline Systems',
    blurb:
      'Adds minerals back after deep filtration for a smoother taste and balanced pH.',
    problem:
      'Reverse osmosis strips almost everything out — which is great for purity but leaves the water with a flat taste and a slightly acidic pH. An alkaline stage replaces healthy minerals and brings the pH back up.',
    how: [
      'Water leaves the RO membrane in its most filtered state.',
      'A mineral cartridge introduces calcium, magnesium, and trace minerals.',
      'The pH rises naturally as the water absorbs them.',
      'You get a smoother, rounder flavor at the tap.',
    ],
    includes: [
      'Free water test and pH reading',
      'Alkaline post-filter stage',
      'Installation alongside an existing or new RO',
      'Filter replacement schedule',
    ],
    fitsHome:
      'Households with an RO system who want a fuller-tasting water and a higher pH. Also a good fit for anyone who prefers mineral water flavor.',
    faqs: [
      {
        q: 'Can I add alkaline to my existing RO?',
        a: 'In most cases yes — we’ll inspect your unit and confirm.',
      },
      {
        q: 'How alkaline does it make the water?',
        a: 'Typically pH 8.5–9.5, depending on the cartridge.',
      },
    ],
  },
  'water-testing': {
    slug: 'water-testing',
    title: 'Free Water Testing',
    blurb:
      'A trained technician comes to your home and tests your water on the spot. No charge.',
    problem:
      'You can’t fix what you haven’t tested. Most water problems are invisible — chlorine, hardness, dissolved solids, iron — and the only way to know what’s in your water is to actually measure it.',
    how: [
      'You book a time that works for you.',
      'A technician arrives with portable test equipment.',
      'We test hardness, chlorine, iron, pH, total dissolved solids, and a few markers based on your source.',
      'You see the results in real time and we explain each one.',
    ],
    includes: [
      'In-home visit at your convenience',
      'Multi-point water testing',
      'Plain-language explanation',
      'A written summary you can keep',
      'No obligation to buy anything',
    ],
    fitsHome:
      'Anyone who hasn’t had their water tested in the last two years — or ever. Required first step before we recommend any system.',
    faqs: [
      {
        q: 'How long does it take?',
        a: 'About twenty minutes from setup to results.',
      },
      {
        q: 'Is it really free?',
        a: 'Yes. We test for free because half the time the answer is "your water’s fine." That builds trust, and trust builds referrals.',
      },
    ],
  },
  'system-rentals': {
    slug: 'system-rentals',
    title: 'System Rentals',
    blurb: 'Clean water without the upfront cost. Maintenance included.',
    problem:
      'Some homes need filtration but can’t justify a several-thousand-dollar install. Renters need clean water too. A rental gets you a professionally maintained system for a low monthly payment.',
    how: [
      'We test your water and recommend a system that fits.',
      'You sign a simple month-to-month agreement — no long contracts.',
      'We install the system and include all maintenance.',
      'Cancel any time. We come pick it up.',
    ],
    includes: [
      'Free water test',
      'Choice of drinking water or RO system',
      'Installation included',
      'All filter changes and service included',
      'Month-to-month, cancel any time',
    ],
    fitsHome:
      'Renters, short-term homeowners, or anyone who wants to try filtration without a big upfront commitment.',
    faqs: [
      {
        q: 'What if my landlord doesn’t allow it?',
        a: 'Most under-sink units leave no permanent changes. We’ll talk through installation before you commit.',
      },
      {
        q: 'Can I buy out the rental later?',
        a: 'Yes — we credit a portion of past payments toward the purchase if you decide to keep it.',
      },
    ],
  },
};
