import fs from 'fs';
import path from 'path';
import { cn } from '@/lib/cn';

/**
 * A customer location for the map.
 *
 * Coordinates are SVG units inside the map's `viewBox` ("0 0 959 593").
 * The US lower-48 (plus AK and HI) is drawn into that space using paths
 * from Wikimedia Commons' public-domain "Blank US Map (states only)" SVG.
 *
 * When the CEO's customer CSV is ready, we'll either:
 *  (a) pre-compute SVG coords per row (works with this same component), or
 *  (b) upgrade this map to a real geo library (e.g. react-simple-maps) and
 *      project from lat/lng instead — the data shape stays the same.
 */
export interface Customer {
  city: string;
  state: 'GA' | 'AL' | 'NC' | 'FL';
  x: number; // SVG x within viewBox (0–959)
  y: number; // SVG y within viewBox (0–593)
  isHQ?: boolean;
}

/**
 * Seed data — a handful of real Filter Tech cities so the map looks alive
 * before the full customer CSV is wired up. Replace with CSV import later.
 */
export const sampleCustomers: Customer[] = [
  // Georgia
  { city: 'Hogansville', state: 'GA', x: 698, y: 430, isHQ: true },
  { city: 'LaGrange', state: 'GA', x: 692, y: 435 },
  { city: 'Newnan', state: 'GA', x: 702, y: 421 },
  { city: 'Atlanta', state: 'GA', x: 712, y: 410 },
  { city: 'Athens', state: 'GA', x: 735, y: 408 },
  { city: 'Macon', state: 'GA', x: 722, y: 445 },
  { city: 'Columbus', state: 'GA', x: 695, y: 455 },
  { city: 'Fitzgerald', state: 'GA', x: 738, y: 470 },
  { city: 'Ocilla', state: 'GA', x: 738, y: 478 },
  // Alabama
  { city: 'Birmingham', state: 'AL', x: 645, y: 410 },
  { city: 'Montgomery', state: 'AL', x: 660, y: 435 },
  { city: 'Auburn', state: 'AL', x: 685, y: 432 },
  // North Carolina
  { city: 'Charlotte', state: 'NC', x: 810, y: 390 },
  { city: 'Asheville', state: 'NC', x: 785, y: 385 },
  // Florida
  { city: 'Tallahassee', state: 'FL', x: 718, y: 462 },
  { city: 'Gainesville', state: 'FL', x: 758, y: 500 },
  { city: 'Pensacola', state: 'FL', x: 672, y: 460 },
];

/**
 * Read the source US map SVG at build time. It's a public-domain SVG from
 * Wikimedia Commons with 51 state paths (plus DC), each tagged with a
 * two-letter lowercase class — `.ga`, `.al`, `.nc`, `.fl`, etc.
 *
 * We extract just the inner `<g class="state">` group and re-style every
 * state ourselves so the map matches Filter Tech's brand palette: charcoal
 * fill for non-service states, red for the four states we serve, with
 * cream separators between them.
 */
const RAW_SVG = fs.readFileSync(
  path.join(process.cwd(), 'public/images/us-map.svg'),
  'utf-8',
);

const STATES_GROUP_MATCH = RAW_SVG.match(/<g class="state">([\s\S]*?)<\/g>/);
const STATES_INNER = (STATES_GROUP_MATCH ? STATES_GROUP_MATCH[1] : '')
  // Strip <title> annotations — we don't need them.
  .replace(/<title>[^<]*<\/title>/g, '')
  // The DC marker is a circle with class "dccircle" — let CSS hide it later
  // if needed; here we just leave it in place.
  .trim();

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
        'overflow-hidden rounded-sm border border-stone-300 bg-cream',
        className,
      )}
    >
      <div className="relative aspect-[959/593]">
        <svg
          viewBox="0 0 959 593"
          className="absolute inset-0 h-full w-full"
          aria-label="Map of the United States showing Filter Tech customer locations across Georgia, Alabama, North Carolina, and Florida."
          role="img"
        >
          <style>
            {`
              .us-states path {
                fill: #243137;
                stroke: #FAF7F2;
                stroke-width: 1;
                stroke-linejoin: round;
              }
              .us-states .ga,
              .us-states .al,
              .us-states .nc,
              .us-states .fl {
                fill: #DE3E40;
              }
              .us-states .dccircle { display: none; }
            `}
          </style>

          <g
            className="us-states"
            dangerouslySetInnerHTML={{ __html: STATES_INNER }}
          />

          {/* Customer pins */}
          {pinned.map((c) => (
            <g key={`${c.city}-${c.state}`}>
              <circle
                cx={c.x}
                cy={c.y}
                r={5.5}
                fill="#FAF7F2"
                opacity={0.5}
              />
              <circle
                cx={c.x}
                cy={c.y}
                r={2.4}
                fill="#FAF7F2"
                stroke="#243137"
                strokeWidth={0.6}
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
                r={13}
                fill="#FAF7F2"
                opacity={0.25}
              />
              <circle
                cx={hq.x}
                cy={hq.y}
                r={7}
                fill="#FAF7F2"
                opacity={0.6}
              />
              <circle
                cx={hq.x}
                cy={hq.y}
                r={3.5}
                fill="#FAF7F2"
                stroke="#243137"
                strokeWidth={1}
              >
                <title>
                  {hq.city}, {hq.state} — Headquarters
                </title>
              </circle>
              <text
                x={hq.x + 13}
                y={hq.y + 3.5}
                fill="#243137"
                style={{ font: '600 10px var(--font-inter)' }}
              >
                {hq.city}, {hq.state}
              </text>
            </g>
          ) : null}
        </svg>

        {/* Floating stats card */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1 rounded-sm bg-cream/95 p-4 backdrop-blur sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-xs">
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
        approximate. Source: Wikimedia Commons (public domain).
      </figcaption>
    </figure>
  );
}
