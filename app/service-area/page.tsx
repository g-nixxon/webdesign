import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Service Area',
  description:
    'Filter Tech serves Georgia, North Carolina, South Carolina, Alabama, and North Florida. Free in-home water testing throughout the region.',
};

const regions = [
  {
    state: 'Georgia',
    cities: [
      'Hogansville (HQ)',
      'Fitzgerald & Ocilla (largest service area)',
      'LaGrange',
      'Newnan',
      'Carrollton',
      'Columbus',
      'Atlanta Metro',
      'Athens',
      'Macon',
      'Griffin',
      'Peachtree City',
      'Warner Robins',
    ],
  },
  {
    state: 'North Carolina',
    cities: [
      'Charlotte',
      'Greensboro',
      'Winston-Salem',
      'Asheville',
      'Hickory',
      'Statesville',
    ],
  },
  {
    state: 'South Carolina',
    cities: [
      'Greenville',
      'Spartanburg',
      'Columbia',
      'Anderson',
      'Rock Hill',
    ],
  },
  {
    state: 'Alabama',
    cities: [
      'Birmingham',
      'Montgomery',
      'Auburn',
      'Opelika',
      'Anniston',
      'Tuscaloosa',
    ],
  },
  {
    state: 'North Florida',
    cities: [
      'Tallahassee',
      'Pensacola',
      'Panama City',
      'Lake City',
      'Gainesville',
    ],
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="From the foothills to the Gulf coast."
        description="We’re based in Hogansville, Georgia and serve homes across five states. If you’re not sure whether we cover your area, give us a call — we travel further than the map shows for the right job."
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          {/* Map placeholder */}
          <div className="relative mb-16 aspect-[16/8] overflow-hidden rounded-sm border border-stone-300 bg-stone-100 sm:aspect-[16/6]">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_45%_55%,rgba(36,49,55,0.08),transparent_55%)]"
            />
            <svg
              viewBox="0 0 800 350"
              className="absolute inset-0 h-full w-full text-charcoal/30"
              aria-hidden
            >
              {/* Stylized service area outline (abstract — not literal geography) */}
              <path
                d="M120 80 Q200 60 280 75 T440 85 Q540 95 620 110 T720 140 L740 180 Q700 220 640 240 T500 280 Q400 300 300 285 T160 240 Q100 200 100 150 Z"
                fill="currentColor"
                opacity="0.1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              {/* Marker for HQ */}
              <g transform="translate(330,180)">
                <circle r="6" className="fill-red" />
                <circle r="14" className="fill-red/30" />
                <text
                  x="14"
                  y="4"
                  className="fill-charcoal"
                  style={{ font: '600 12px var(--font-inter)' }}
                >
                  Hogansville, GA
                </text>
              </g>
            </svg>
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto">
              <p className="rounded-sm bg-cream/95 px-3 py-1.5 text-xs uppercase tracking-widest text-stone-600 sm:inline-block">
                Service area · five states
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {regions.map((r) => (
              <div key={r.state}>
                <EyebrowLabel>{r.state}</EyebrowLabel>
                <ul className="mt-4 space-y-1.5 text-sm text-charcoal/85">
                  {r.cities.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-prose text-base leading-relaxed text-charcoal/85 sm:text-lg">
            Don’t see your town? Give us a call. Many of our long-time customers
            are an hour or more outside the cities listed — we make the trip
            when the work is there.
          </p>
        </Container>
      </section>

      <FinalCTA
        eyebrow="Schedule a visit"
        title="We’ll come to you."
        description="Free in-home water testing throughout the service area."
      />
    </>
  );
}
