export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readMinutes: number;
  category: string;
  body: { heading?: string; paragraph?: string; list?: string[] }[];
}

export const articles: Article[] = [
  {
    slug: 'city-water-vs-well-water',
    title: 'City Water vs. Well Water: What’s the Difference?',
    excerpt:
      'They come from different places, carry different problems, and need different solutions. Here’s how to think about yours.',
    readMinutes: 5,
    category: 'Basics',
    body: [
      {
        paragraph:
          'If you live in town, your water comes from a treatment plant. If you live in the country, it likely comes from a well in your own yard. Both can be perfectly safe — and both can have problems that the other doesn’t.',
      },
      { heading: 'City water: treated, but not pure' },
      {
        paragraph:
          'Municipal water is treated to kill bacteria and stop disease — usually with chlorine or chloramine. That treatment is doing important work. But chlorine doesn’t disappear once it’s done its job. It comes through your tap. It also reacts with naturally occurring organics in water to form disinfection byproducts (DBPs) like trihalomethanes — which some studies link to long-term health concerns.',
      },
      {
        paragraph:
          'On top of that, city water travels through miles of pipes to reach your home. Older pipes can pick up sediment, rust, or even traces of lead. The treatment plant doesn’t control that part.',
      },
      { heading: 'Well water: yours alone' },
      {
        paragraph:
          'A private well taps directly into groundwater under your property. No one is testing it but you. What’s in the soil and the local watershed is what’s in your water.',
      },
      {
        paragraph: 'Common well water issues:',
      },
      {
        list: [
          'Hardness (calcium and magnesium) that scales pipes and dries skin',
          'Iron and manganese that stain sinks, laundry, and porcelain',
          'Sulfur (hydrogen sulfide) that smells like rotten eggs',
          'Bacterial contamination, especially after heavy rain or flooding',
          'Pesticide and herbicide runoff from nearby agriculture',
        ],
      },
      { heading: 'How to choose a filter' },
      {
        paragraph:
          'The short answer: test first. The longer answer: a city home and a well home will almost always need different setups. A whole-house carbon filter is great for chlorine — but it does nothing for well iron staining. A reverse-osmosis system handles dissolved solids — but you don’t need one if your TDS reading is already low.',
      },
      {
        paragraph:
          'The right system is the one your test result points to. Anything else is a guess.',
      },
    ],
  },
  {
    slug: '7-signs-your-water-needs-testing',
    title: '7 Signs Your Water Needs Testing',
    excerpt:
      'You don’t need a lab to suspect a problem. Here are the everyday signs that mean it’s time to test.',
    readMinutes: 4,
    category: 'Diagnostics',
    body: [
      {
        paragraph:
          'Water problems usually show up before anyone notices. By the time you taste it, smell it, or see it, the issue has been around a while. Here are seven everyday signs we hear about most.',
      },
      { heading: '1. Spots on glassware and dishes' },
      {
        paragraph:
          'White spots after the dishwasher cycle mean hardness — calcium and magnesium left behind when water evaporates.',
      },
      { heading: '2. Soap that won’t lather' },
      {
        paragraph:
          'Hard water reacts with soap and prevents it from foaming. If you use more shampoo than you used to, your water may have changed.',
      },
      { heading: '3. Orange or brown staining' },
      {
        paragraph:
          'Iron, common in well water, leaves rust-colored marks on toilets, tubs, and laundry.',
      },
      { heading: '4. A pool-water smell' },
      {
        paragraph:
          'Strong chlorine smell at the tap means high disinfection levels — usually a city water issue, sometimes seasonal.',
      },
      { heading: '5. A rotten-egg smell' },
      {
        paragraph:
          'Hydrogen sulfide. Common in well water. Often gets worse over time. Treatable but needs the right system.',
      },
      { heading: '6. Water that tastes "off"' },
      {
        paragraph:
          'Metallic, salty, earthy, or flat tastes all mean something. Your tongue isn’t wrong.',
      },
      { heading: '7. New skin or hair irritation' },
      {
        paragraph:
          'If your skin gets dry or your hair gets brittle after a shower, water quality is usually the culprit. Chlorine and hardness both contribute.',
      },
    ],
  },
  {
    slug: 'how-reverse-osmosis-actually-works',
    title: 'How a Reverse Osmosis System Actually Works',
    excerpt:
      'No mystery, no marketing — just the actual physics, explained simply.',
    readMinutes: 6,
    category: 'How It Works',
    body: [
      {
        paragraph:
          'Reverse osmosis is the deepest filtration technology used in homes. It can pull out things that ordinary filters can’t touch — dissolved salts, metals, even some pharmaceutical residue. Here’s the simple version.',
      },
      { heading: 'Start with osmosis' },
      {
        paragraph:
          'Osmosis is what plants do. Water naturally moves through a thin membrane from a low-mineral side to a high-mineral side, trying to balance the two. It’s a one-way trip in nature.',
      },
      { heading: 'Now reverse it' },
      {
        paragraph:
          'An RO system uses your home’s water pressure to push water the wrong way through that membrane — from the dirty side to the clean side. The membrane is fine enough that water molecules pass through, but most contaminants are too big and get left behind.',
      },
      { heading: 'The full stack' },
      {
        paragraph:
          'A real-world RO system has multiple stages because the membrane is delicate. A typical setup:',
      },
      {
        list: [
          'Sediment pre-filter — keeps grit out of the membrane',
          'Carbon pre-filter — strips chlorine that would damage the membrane',
          'RO membrane — the deep filtration step',
          'Storage tank — holds clean water for instant use',
          'Carbon post-filter — final polish before the faucet',
        ],
      },
      { heading: 'What it removes — and what it doesn’t' },
      {
        paragraph:
          'RO removes the vast majority of total dissolved solids: salts, lead, fluoride, nitrates, arsenic, and many other contaminants. It does not sterilize water — you still need pre-treatment for bacteria. And because it removes minerals along with contaminants, some people pair RO with an alkaline post-filter to add minerals back.',
      },
    ],
  },
  {
    slug: 'why-annual-maintenance-matters',
    title: 'Why Annual Maintenance Matters',
    excerpt:
      'A filter that isn’t maintained eventually starts feeding contaminants back into your water. Here’s why service isn’t optional.',
    readMinutes: 4,
    category: 'Maintenance',
    body: [
      {
        paragraph:
          'A water filter does one job: it traps things you don’t want in your water. Every gallon you use pushes more contaminants into that trap. Eventually it fills up.',
      },
      { heading: 'A full filter doesn’t fail loudly' },
      {
        paragraph:
          'There’s no warning light. Pressure stays the same. The water still looks clear. But the filter has stopped working — and in some cases can start letting old captured contaminants back through.',
      },
      { heading: 'What annual service actually includes' },
      {
        list: [
          'Replacing cartridges before they’re overloaded',
          'Inspecting housings, fittings, and O-rings for slow leaks',
          'Testing the finished water to confirm performance',
          'Checking pressure and flow rates against the install baseline',
        ],
      },
      { heading: 'The cost of skipping it' },
      {
        paragraph:
          'Beyond the obvious — drinking water that isn’t being filtered — neglected systems can develop microbial growth in saturated carbon, mineral buildup that cracks housings, or pressure issues that damage downstream appliances. Annual service costs a fraction of a replacement system.',
      },
    ],
  },
  {
    slug: 'whole-house-vs-point-of-use',
    title: 'Whole-House vs. Point-of-Use: Which Do You Need?',
    excerpt:
      'They solve different problems. Most homes need one. Some need both.',
    readMinutes: 5,
    category: 'Buying Guide',
    body: [
      {
        paragraph:
          'When people ask "should I get a whole-house system or just a kitchen filter?" the honest answer is "it depends on what you’re trying to fix."',
      },
      { heading: 'Whole-house systems' },
      {
        paragraph:
          'A whole-house (point-of-entry) filter installs on the main water line as it enters your home. Every faucet, shower, and appliance downstream gets filtered water.',
      },
      {
        paragraph: 'Best for:',
      },
      {
        list: [
          'Chlorine removal (so it’s out of your showers too)',
          'Sediment that affects laundry and appliances',
          'Hardness that scales fixtures and water heaters',
          'Iron staining throughout the house',
        ],
      },
      { heading: 'Point-of-use systems' },
      {
        paragraph:
          'A point-of-use system filters at a single tap — usually the kitchen sink. Drinking water systems and reverse osmosis units are both point-of-use.',
      },
      {
        paragraph: 'Best for:',
      },
      {
        list: [
          'Removing dissolved solids that affect taste',
          'Polishing water you drink and cook with',
          'Removing specific contaminants (lead, arsenic, nitrates)',
          'Lower-budget setups, or rentals',
        ],
      },
      { heading: 'The combination' },
      {
        paragraph:
          'In most homes, the best result comes from a whole-house unit handling the bulk problems and a point-of-use system polishing the kitchen tap. The whole-house unit protects the point-of-use system’s filters from getting overloaded, and the point-of-use system handles the things the whole-house unit can’t.',
      },
    ],
  },
];
