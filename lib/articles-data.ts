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
          'Before we get into the differences, the foundation: all water starts in the ground. Every drop you drink — whether it came from a city treatment plant or a well in your own yard — originated as groundwater. City water is, in a sense, well water that’s been treated with chemicals on its way to you.',
      },
      { heading: 'City water: treated with chemicals' },
      {
        paragraph:
          'Municipal water is treated to kill bacteria and stop disease — usually with chlorine or chloramine. That treatment is doing important work. But the chemicals don’t disappear once they’ve done the job. They come right through your tap. Chlorine also reacts with naturally occurring organics in the water to form disinfection byproducts (DBPs) like trihalomethanes — which some studies link to long-term health concerns.',
      },
      {
        paragraph:
          'On top of that, city water travels miles of pipes to reach your home. Older pipes can pick up sediment, rust, or even traces of lead. The treatment plant doesn’t control that part.',
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
          'The short answer: test first. The longer answer: a city home and a well home almost always need different setups. A catalytic carbon filter is great for chlorine, which makes it the right call for most city homes — but it’s seldom the answer for well water dealing with iron staining. A reverse-osmosis system handles dissolved solids at a .0005 micron removal rating, but you don’t need one if your TDS reading is already low.',
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
      'Clear water and no off-taste don’t mean safe water. Here are the everyday signs that mean it’s time to test — and the invisible reasons it’s worth testing even when nothing seems wrong.',
    readMinutes: 4,
    category: 'Diagnostics',
    body: [
      {
        paragraph:
          'Here’s the honest answer up front: everyone can benefit from a water filtration system. Just because your water is clear and has no strange "off" taste doesn’t mean it’s completely safe to drink.',
      },
      {
        paragraph:
          'Some of the most concerning contaminants — Arsenic and Radon, for example — are tasteless and clear to the human eye. You won’t notice them. That’s why we always recommend testing your water first.',
      },
      {
        paragraph:
          'Even so, there are everyday signs that make testing more urgent. If you notice any of these, give us a call.',
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
          'Hydrogen sulfide. Common in well water. Often gets worse over time. Treatable, but it needs the right system.',
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
      'The actual physics, explained simply — plus why Filter Tech pairs every RO unit with a post-alkaline cartridge.',
    readMinutes: 6,
    category: 'How It Works',
    body: [
      {
        paragraph:
          'Reverse osmosis is the deepest filtration technology used in homes. The membrane works at a .0005 micron removal rating — fine enough to pull out things ordinary filters can’t touch, including dissolved salts, metals, and many pharmaceutical residues. Here’s the simple version.',
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
          'A real-world RO system has multiple stages, because the membrane is delicate and needs protection on both sides. A typical Filter Tech setup:',
      },
      {
        list: [
          'Sediment pre-filter — keeps grit out of the membrane',
          'Carbon pre-filter — strips chlorine that would damage the membrane',
          'RO membrane — .0005 micron removal rating, the deep filtration step',
          'Storage tank — holds clean water for instant use',
          'Carbon post-filter — final polish before the faucet',
          'Post-alkaline cartridge — adds calcium and magnesium back for taste and balanced pH',
        ],
      },
      { heading: 'What it removes — and what it doesn’t' },
      {
        paragraph:
          'RO removes the vast majority of total dissolved solids: salts, lead, fluoride, nitrates, arsenic, and many other contaminants. It does not sterilize water — pre-treatment is still needed for bacterial concerns.',
      },
      {
        paragraph:
          'Because the membrane strips minerals out along with everything else, Filter Tech includes a post-alkaline cartridge with our RO unit by default. It puts the healthy minerals — calcium and magnesium — back in after filtration, so you get pure water with the taste and pH balance of spring water. No flatness, no chemicals added.',
      },
    ],
  },
  {
    slug: 'why-annual-maintenance-matters',
    title: 'Why Annual Maintenance Matters',
    excerpt:
      'A filter that isn’t maintained eventually slows down — and in some cases starts letting contaminants back through. Service isn’t optional.',
    readMinutes: 4,
    category: 'Maintenance',
    body: [
      {
        paragraph:
          'To maintain efficiency, every filter system should be checked and serviced annually. That’s the rule. A water filter does one job: it traps things you don’t want in your water. Every gallon you use pushes more contaminants into that trap. Eventually it fills up.',
      },
      { heading: 'A full filter doesn’t fail loudly' },
      {
        paragraph:
          'There’s no warning light. Pressure stays close to the same. The water still looks clear. There are a few warning signs — low pressure, return of staining — but usually a filter that isn’t serviced will just slowly stop working. And in some cases, a saturated filter can start letting contaminants back through.',
      },
      { heading: 'What annual service actually includes' },
      {
        list: [
          'Replacing cartridges before they’re overloaded',
          'Inspecting valves, programming, and O-rings for slow leaks or drift',
          'Grabbing a sample of finished water to test efficiency',
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
      'They solve different problems. Every house benefits from at least one. Most end up choosing both.',
    readMinutes: 5,
    category: 'Buying Guide',
    body: [
      {
        paragraph:
          'The honest answer is yes — to both. Whole-house systems and point-of-use systems solve different problems. Every house can benefit from at least one of them. And most houses, once they think about it, end up choosing both to ensure the cleanest and safest water possible.',
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
          'Iron staining or sulfur smells throughout the house',
          'Chlorine removal at every faucet and shower',
          'Sediment that affects laundry and appliances',
          'Hardness that scales fixtures and water heaters',
        ],
      },
      { heading: 'Point-of-use systems' },
      {
        paragraph:
          'A point-of-use system filters at a single tap — usually the kitchen sink. Drinking water systems, reverse osmosis units, and alkaline-hydrogen systems are all point-of-use.',
      },
      {
        paragraph: 'Best for:',
      },
      {
        list: [
          'Removing specific contaminants — lead, chlorine, arsenic, nitrates',
          'Polishing the water you drink and cook with',
          'Lower cost per gallon compared to bottled water',
          'Households without a whole-house budget yet',
        ],
      },
      { heading: 'The combination' },
      {
        paragraph:
          'In most homes, the best result comes from running both. The whole-house unit handles the bulk problems at the main line and protects the point-of-use system from getting overloaded. The point-of-use system polishes the kitchen tap and tackles the contaminants the whole-house unit can’t reach. Together, that’s the cleanest, safest water this side of the source.',
      },
    ],
  },
];
