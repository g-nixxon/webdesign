import { cn } from '@/lib/cn';

/**
 * A customer location for the map.
 *
 * Coordinates are SVG units inside the map's `viewBox` ("0 0 1000 580").
 * The US lower-48 is drawn into that space — see `US_OUTLINE` below for the
 * stylized outline that anchors all positioning.
 *
 * When the CEO's customer CSV is ready, we'll either:
 *  (a) pre-compute SVG coords per row (works with this same component), or
 *  (b) upgrade this map to a real geo library (e.g. react-simple-maps) and
 *      project from lat/lng instead — the data shape stays the same.
 */
export interface Customer {
  city: string;
  state: 'GA' | 'AL' | 'NC' | 'FL';
  x: number; // SVG x within viewBox
  y: number; // SVG y within viewBox
  isHQ?: boolean;
}

/**
 * Seed data — a handful of real Filter Tech cities so the map looks alive
 * before the full customer CSV is wired up. Replace with CSV import later.
 */
export const sampleCustomers: Customer[] = [
  { city: 'Hogansville', state: 'GA', x: 718, y: 358, isHQ: true },
  { city: 'LaGrange', state: 'GA', x: 712, y: 365 },
  { city: 'Newnan', state: 'GA', x: 725, y: 348 },
  { city: 'Atlanta', state: 'GA', x: 730, y: 338 },
  { city: 'Athens', state: 'GA', x: 748, y: 335 },
  { city: 'Macon', state: 'GA', x: 745, y: 378 },
  { city: 'Columbus', state: 'GA', x: 705, y: 380 },
  { city: 'Fitzgerald', state: 'GA', x: 758, y: 405 },
  { city: 'Ocilla', state: 'GA', x: 760, y: 410 },
  { city: 'Auburn', state: 'AL', x: 690, y: 382 },
  { city: 'Birmingham', state: 'AL', x: 672, y: 360 },
  { city: 'Montgomery', state: 'AL', x: 680, y: 388 },
  { city: 'Charlotte', state: 'NC', x: 790, y: 320 },
  { city: 'Asheville', state: 'NC', x: 762, y: 312 },
  { city: 'Tallahassee', state: 'FL', x: 738, y: 432 },
  { city: 'Gainesville', state: 'FL', x: 778, y: 458 },
  { city: 'Pensacola', state: 'FL', x: 668, y: 432 },
];

/**
 * A stylized SVG of the contiguous US. Not surveyor-accurate — the goal is
 * a recognizable outline that anchors the service-area highlighting and
 * customer pins. Service-area states (GA, AL, NC, FL) are drawn over the
 * outline as filled regions.
 */
const US_OUTLINE_PATH =
  // Rough outline of the lower 48 — west coast → north → east coast → gulf.
  'M 70,210 L 90,170 L 130,150 L 175,140 L 230,135 L 275,130 L 330,125 L 395,120 L 465,118 L 540,118 L 615,120 L 680,122 L 745,128 L 810,135 L 870,148 L 905,165 L 920,195 L 905,230 L 895,265 L 905,300 L 920,330 L 905,360 L 875,385 L 855,395 L 830,400 L 815,420 L 800,445 L 805,478 L 790,500 L 770,505 L 760,498 L 760,478 L 730,468 L 700,455 L 670,448 L 635,452 L 605,460 L 575,475 L 545,485 L 515,492 L 480,498 L 450,500 L 425,495 L 400,478 L 380,460 L 355,445 L 325,430 L 295,420 L 265,408 L 235,395 L 205,380 L 175,360 L 145,335 L 120,305 L 95,275 L 78,245 Z';

const STATES = {
  GA: 'M 705,335 L 740,332 L 760,330 L 770,348 L 770,365 L 768,388 L 770,408 L 758,415 L 740,418 L 720,415 L 710,400 L 700,378 L 700,358 Z',
  AL: 'M 660,338 L 705,335 L 700,358 L 700,378 L 710,400 L 705,418 L 685,420 L 670,418 L 660,395 L 655,375 L 658,355 Z',
  NC: 'M 755,302 L 800,305 L 835,310 L 822,330 L 800,338 L 770,335 L 755,330 Z',
  FL: 'M 720,418 L 758,415 L 770,418 L 790,430 L 805,445 L 802,470 L 790,490 L 778,498 L 770,480 L 760,460 L 750,448 L 738,440 L 725,432 L 718,425 Z',
};

interface CustomerMapProps {
  customers: Customer[];
  className?: string;
}

export function CustomerMap({ customers, className }: CustomerMapProps) {
  const total = customers.length;
  const pinned = customers.filter((c) => !c.isHQ);
  const hq = customers.find((c) => c.isHQ);

  return (
    <figure
      className={cn(
        'overflow-hidden rounded-sm border border-stone-300 bg-stone-100',
        className,
      )}
    >
      <div className="relative aspect-[16/9] sm:aspect-[16/8]">
        <svg
          viewBox="0 0 1000 580"
          className="absolute inset-0 h-full w-full"
          aria-label="Map of the United States showing Filter Tech customer locations across Georgia, Alabama, North Carolina, and Florida."
          role="img"
        >
          {/* Continental US — stylized outline */}
          <path
            d={US_OUTLINE_PATH}
            className="fill-cream stroke-stone-300"
            strokeWidth={1.5}
          />

          {/* Service-area states — highlighted */}
          {Object.entries(STATES).map(([abbr, d]) => (
            <path
              key={abbr}
              d={d}
              className="fill-red/10 stroke-red/50"
              strokeWidth={1.25}
            />
          ))}

          {/* State labels */}
          <g
            className="fill-charcoal/60"
            style={{ font: '600 11px var(--font-inter)' }}
          >
            <text x={735} y={378} textAnchor="middle">
              GA
            </text>
            <text x={680} y={378} textAnchor="middle">
              AL
            </text>
            <text x={790} y={325} textAnchor="middle">
              NC
            </text>
            <text x={760} y={460} textAnchor="middle">
              FL
            </text>
          </g>

          {/* Customer pins */}
          {pinned.map((c) => (
            <g key={`${c.city}-${c.state}`}>
              <circle
                cx={c.x}
                cy={c.y}
                r={6}
                className="fill-red/25"
              />
              <circle
                cx={c.x}
                cy={c.y}
                r={2.5}
                className="fill-red"
              >
                <title>
                  {c.city}, {c.state}
                </title>
              </circle>
            </g>
          ))}

          {/* HQ marker */}
          {hq ? (
            <g>
              <circle
                cx={hq.x}
                cy={hq.y}
                r={14}
                className="fill-red/20"
              />
              <circle
                cx={hq.x}
                cy={hq.y}
                r={7}
                className="fill-red/40"
              />
              <circle
                cx={hq.x}
                cy={hq.y}
                r={3.5}
                className="fill-red stroke-cream"
                strokeWidth={1.5}
              >
                <title>
                  {hq.city}, {hq.state} — Headquarters
                </title>
              </circle>
              <text
                x={hq.x + 16}
                y={hq.y + 4}
                className="fill-charcoal"
                style={{ font: '600 11px var(--font-inter)' }}
              >
                {hq.city}, {hq.state}
              </text>
            </g>
          ) : null}
        </svg>

        {/* Floating stats card */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 rounded-sm bg-cream/95 p-4 backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
          <p className="text-eyebrow font-semibold uppercase tracking-widest text-red">
            Service Area
          </p>
          <p className="font-serif text-lg text-charcoal sm:text-xl">
            {total}+ installs across 4 states
          </p>
          <p className="text-xs text-stone-600">
            Each pin marks a household we&rsquo;ve served.
          </p>
        </div>
      </div>
      <figcaption className="border-t border-stone-300 px-4 py-3 text-center text-xs text-stone-600 sm:px-5">
        Map is a representation of our service area — pin positions are
        approximate.
      </figcaption>
    </figure>
  );
}
