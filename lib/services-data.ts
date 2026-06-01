export interface ServiceImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ServiceContent {
  slug: string;
  title: string;
  blurb: string;
  problem: string;
  how: string[];
  includes: string[];
  fitsHome: string;
  faqs: { q: string; a: string }[];
  bannerImage?: ServiceImage;
  asideImage?: ServiceImage;
  problemHeading?: string;
  howHeading?: string;
  fitsHomeHeading?: string;
}

export const serviceContent: Record<string, ServiceContent> = {
  'whole-house-filtration': {
    slug: 'whole-house-filtration',
    title: 'Whole-House Filtration',
    blurb:
      'Cleaner, conditioned water at every faucet, shower, and appliance — at the point water enters your home.',
    problemHeading: 'What our whole-house system solves',
    problem:
      'A whole-house system filters water before it ever reaches a tap. That matters because what comes through the main line isn’t just one thing — it can be chlorine and chloramine from city treatment, disinfection byproducts (THMs and HAAs), traces of lead from old plumbing, PFAs, sediment from well water, or the hardness that scales appliances and dries out skin. We size and stack a system to fit what your water is actually carrying.',
    howHeading: 'How this system works',
    how: [
      'Water enters your home through a single main line.',
      'We install a multi-stage filter sized to your home’s flow rate. Common stages: catalytic carbon for chlorine, taste, and VOCs; certified lead-reduction media when the testing calls for it; and — when hardness is the issue — a softener or conditioner.',
      'Two softening options: a traditional ion-exchange softener (resin beads regenerated with a salt brine cycle), or a salt-free conditioner using Template Assisted Crystallization (TAC) — no salt, no waste water, low maintenance.',
      'The right combination depends on the lab results from your free in-home water test.',
    ],
    includes: [
      'PDF Files describing your specific system. Solutions made simple.',
      'Free in-home consultation and water sample collection',
      'Catalytic carbon for chlorine, taste, and VOCs',
      'Special systems for unique problems',
      'Softener or salt-free conditioner when hardness is the issue',
      'Professional installation by a Certified Installer',
    ],
    fitsHomeHeading: 'Every home benefits from a filter',
    fitsHome:
      'Every home benefits from filtered water — period. A whole-house system is the right move when you want that protection to cover every faucet, shower, and appliance, not just the kitchen tap. It handles the bulk of what comes through the main line — chlorine, sediment, hardness, taste — at the source, so what reaches each room is already cleaner.',
    faqs: [
      {
        q: 'Will it slow my water pressure?',
        a: 'A properly sized whole-house system has no noticeable pressure drop. We measure your flow rate before recommending a size.',
      },
      {
        q: 'How long before we notice a difference in our water?',
        a: 'Most systems show a significant difference immediately.',
      },
      {
        q: 'Will it remove harmful chemicals (PFAs)?',
        a: 'Carbon-based whole-house filtration removes a meaningful portion of PFAs. For the highest reduction levels, we recommend pairing the whole-house system with a Reverse Osmosis unit at the kitchen for drinking water.',
      },
      {
        q: 'How often does it need service?',
        a: 'Once a year for most homes. Heavy iron or sediment loads may need a six-month check. We’ll tell you what yours needs.',
      },
      {
        q: 'Do I still need a drinking water system if I have a whole-house system?',
        a: 'Often yes. Whole-house systems handle the bulk of problems that stem from bad water while maintaining the pressure and flow rate across the home. A drinking water system is more effective at removing contaminants through reverse osmosis, which filters at the micron level.',
      },
    ],
    asideImage: {
      src: '/images/system-whole-house.jpg',
      alt: 'Finished whole-house filtration installation with twin tanks, brine reservoir, and UV light',
      caption: 'A finished install in a customer garage',
    },
  },

  'reverse-osmosis': {
    slug: 'reverse-osmosis',
    title: 'Reverse Osmosis Drinking Water',
    blurb:
      'One of our most popular drinking water systems. The same filtration hospitals, labs, and bottling plants rely on, right at your kitchen sink.',
    problemHeading: 'What this system solves',
    problem:
      'City water is treated to be safe, not pure. Even after treatment, what comes through your tap can carry chlorine and chloramine, heavy metals, PFAS, and disinfection byproducts like trihalomethanes (THMs) and haloacetic acids (HAAs). Add to that the practical realities — mains break, pipes corrode, boil-water alerts happen. Reverse Osmosis is what hospitals, labs, and bottling plants use when they need water they can count on.',
    how: [
      'Pre-filters strip sediment and chlorine that would otherwise damage the membrane.',
      'Water is forced through a semi-permeable membrane that blocks dissolved salts, heavy metals, PFAS, nitrates, fluoride, and microbes.',
      'Total dissolved solids drop 90 to 99 percent — consistent, measurable results we can show you on a meter.',
      'A small storage tank holds the finished water for instant access at a dedicated faucet.',
      'Optional: a remineralization cartridge puts calcium and magnesium back if you want minerals in the finished water.',
    ],
    includes: [
      'Free in-home consultation and water sample',
      'Multi-stage RO unit',
      'Storage tank and dedicated faucet',
      'Professional installation under the sink',
      'Scheduled filter and membrane replacement reminders',
      'Optional remineralization cartridge',
    ],
    fitsHome:
      'Homes with high TDS readings, well water, or family members with sensitivities. The default for anyone who wants the cleanest possible drinking water at the kitchen sink — and the right call for households worried about PFAS, lead, or boil-water alerts.',
    faqs: [
      {
        q: 'Why does the RO come with a different faucet?',
        a: 'Because the reverse osmosis system is generating its own water on site. A dedicated faucet is tied directly to the RO unit, providing 1 to 2 gallons of purified water on demand.',
      },
      {
        q: 'Why do I need an RO system if I can just buy bottled water?',
        a: 'Great question — two reasons we recommend a system. First, an RO unit makes fresh water daily, on demand. It isn’t stored in a bottle sitting on a shelf for who knows how long. Second, you stop wasting water and money on bottled water — no more half-full bottles lying around the house. You walk up to the faucet and use the RO as needed for drinking and cooking.',
      },
      {
        q: 'How much does it actually remove?',
        a: 'Total dissolved solids drop between 90 and 99 percent. We can show you the reading on a TDS meter before and after — it’s the cleanest demonstration of how the system works.',
      },
      {
        q: 'Does RO remove minerals my body needs?',
        a: 'Most of your minerals come from food, not water. If you want them back in the water anyway, we add a remineralization cartridge after the membrane — calcium and magnesium, the same minerals you’d get from spring water.',
      },
      {
        q: 'How much water does it waste?',
        a: 'Modern RO units have improved efficiency dramatically. We install systems with low waste ratios.',
      },
    ],
    asideImage: {
      src: '/images/system-ro.jpg',
      alt: 'A Filter Tech reverse osmosis system installed under a kitchen sink — storage tank, multi-stage filters, and dedicated faucet line',
      caption: 'Our most popular drinking water system',
    },
  },

  'hydrogen-systems': {
    slug: 'hydrogen-systems',
    title: 'Alkaline-Hydrogen Drinking Water',
    blurb:
      'The Delphi H2 Under-Sink Water Ionizer — filtered, ionized water enriched with molecular hydrogen and balanced minerals.',
    problem:
      'Filtration gets your water to clean. The Delphi H2 Under-Sink Water Ionizer takes the next step: it ionizes filtered water and enriches it with molecular hydrogen (H₂) — the compound at the center of more than a thousand peer-reviewed studies on antioxidant, recovery, and inflammation benefits. For customers already taking supplements for similar reasons, it’s a way to get those benefits from the water they’re drinking anyway.',
    how: [
      'Water enters the Delphi unit and passes through built-in multi-stage pre-filtration — no separate RO required.',
      'The ionization stage enriches the water with dissolved molecular hydrogen (H₂).',
      'Naturally occurring calcium and magnesium are preserved in the finished water, supporting a balanced (slightly alkaline) pH.',
      'Hydrogen-enriched water is delivered to a dedicated faucet at the kitchen sink.',
    ],
    includes: [
      'Free in-home consultation and water sample',
      'Delphi H2 Under-Sink Water Ionizer',
      'Built-in multi-stage pre-filtration',
      'Dedicated kitchen faucet',
      'Professional installation under the sink',
      'Scheduled filter replacement reminders',
    ],
    fitsHome:
      'Health-conscious households who want their drinking water to do more than be clean — particularly people already taking antioxidant or recovery supplements who’d rather get the same benefits from water they’re drinking anyway. Common pick among athletes managing inflammation and recovery.',
    faqs: [
      {
        q: 'What does hydrogen water actually do?',
        a: 'Molecular hydrogen (H₂) acts as a selective antioxidant — it targets the free radicals tied to oxidative stress while leaving healthy molecules alone. Research has explored its role in ATP production, lactic acid reduction, and inflammation. We don’t make medical promises; we install the systems the research is pointing at.',
      },
      {
        q: 'Does it need an RO system upstream?',
        a: 'No. The Delphi unit has its own multi-stage pre-filtration. Some customers pair it with an RO if they want the deepest possible filtration before the ionization step, but it isn’t required.',
      },
      {
        q: 'What’s the pH of the finished water?',
        a: 'Slightly alkaline. The system uses the calcium and magnesium already present in your water — no chemicals added — to keep the pH balanced.',
      },
      {
        q: 'How often do the cartridges need replacement?',
        a: 'Most last 6 to 12 months depending on use and source water. We’ll set you up with the schedule that fits your install.',
      },
    ],
  },

  'water-testing': {
    slug: 'water-testing',
    title: 'Free Water Testing',
    blurb:
      'We come to your home, collect water samples, and look at where a system would go. Lab testing follows. No charge, no obligation.',
    problem:
      'You can’t fix what you haven’t tested. Most water issues are invisible — chlorine, hardness, dissolved solids, iron — and the only way to know what’s in your water is to measure it. The first step is getting a sample to our lab and putting eyes on the install site.',
    how: [
      'You book a time that works for you.',
      'Jay visits your home, listens to your concerns, and collects water samples.',
      'We walk through where a system would sit if your water needs one.',
      'Samples go back to the lab for the precise readings — hardness, chlorine, iron, pH, total dissolved solids, and source-specific markers.',
      'You get the full results with a plain-language explanation and our recommendation.',
    ],
    includes: [
      'In-home visit at your convenience',
      'Water sample collection for lab analysis',
      'On-site survey of potential install locations',
      'Plain-language results report',
      'A specific recommendation — or an honest "you don’t need anything"',
      'No obligation to buy',
    ],
    fitsHome:
      'Anyone who hasn’t had their water tested in the last two years — or ever. The required first step before we recommend any system.',
    faqs: [
      {
        q: 'How long does the home visit take?',
        a: 'Usually 20 to 30 minutes for the consultation, sample collection, and site survey. The lab work happens afterward and the full report follows.',
      },
      {
        q: 'Why don’t you test the water on-site?',
        a: 'For an accurate picture, we use lab equipment that isn’t mobile. The home visit covers concerns, sampling, and looking at the install site — the precise numbers come back from the lab.',
      },
      {
        q: 'Is it really free?',
        a: 'Yes. We do it for free because half the time the answer is "your water’s fine." That builds trust, and trust is what builds the referrals our business runs on.',
      },
    ],
  },

  financing: {
    slug: 'financing',
    title: 'Financing',
    blurb:
      'Cleaner water without the upfront cost. Approved payment plans on installed systems.',
    problem:
      'A whole-house system pays for itself over time — in appliance life, bottled water saved, and what your skin and hair stop reacting to. But the upfront cost can be the thing that gets in the way of doing the work. We offer financing through approved partners so the day-one number isn’t the deciding factor.',
    how: [
      'You book a free in-home consultation.',
      'If a system makes sense for your home, we quote the install.',
      'We walk through financing options — including budget-friendly monthly payment plans.',
      'Once approved, the system gets installed with no large upfront payment.',
    ],
    includes: [
      'Pre-approval check through our financing partners',
      'Transparent monthly payment quote',
      'The same professional installation as a cash buyer',
      'Standard ongoing service and support after install',
    ],
    fitsHome:
      'Homeowners who want filtration but would rather not pay the full install cost on day one — especially for larger whole-house builds.',
    faqs: [
      {
        q: 'What credit profiles qualify?',
        a: 'Most of our customers qualify. We’ll run a soft pre-approval before we get into specifics.',
      },
      {
        q: 'How long are the payment terms?',
        a: 'Depends on the partner and the install size — typically anywhere from 12 to 84 months.',
      },
      {
        q: 'Are there prepayment penalties?',
        a: 'Most plans allow early payoff without penalty. We’ll confirm the terms with you before you sign anything.',
      },
    ],
  },
};
