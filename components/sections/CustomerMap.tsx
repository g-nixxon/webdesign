import fs from 'fs';
import path from 'path';
import { cn } from '@/lib/cn';
import {
  customerLocations,
  TOTAL_INSTALLS,
  STATES_WITH_INSTALLS,
  type CustomerLocation,
} from '@/lib/customer-locations';

/**
 * The map renders customer pins on a stylized US states SVG.
 *
 * Pin coordinates come from `lib/customer-locations.ts`, which is
 * AUTO-GENERATED from the master customer CSV by `scripts/build-customer-map.py`.
 * Customer PII (names, addresses, phones, emails) never leaves that script —
 * only aggregated (city, state, count, SVG x/y) reach this file.
 *
 * Regenerate after adding new customers by re-running the python script.
 */

/**
 * Read the source US map SVG at build time. It's a public-domain SVG from
 * Wikimedia Commons with 51 state paths (plus DC), each tagged with a
 * two-letter lowercase class — `.ga`, `.al`, `.nc`, `.fl`, etc.
 *
 * We strip the original styling and re-style the whole thing in the brand
 * palette: charcoal fill for non-install states, red for any state we've
 * installed in, with cream separators between them.
 */
const RAW_SVG = fs.readFileSync(
  path.join(process.cwd(), 'public/images/us-map.svg'),
  'utf-8',
);
const STATES_GROUP_MATCH = RAW_SVG.match(/<g class="state">([\s\S]*?)<\/g>/);
const STATES_INNER = (STATES_GROUP_MATCH ? STATES_GROUP_MATCH[1] : '')
  .replace(/<title>[^<]*<\/title>/g, '')
  .trim();

// CSS selectors for the install states — generated from the data so adding
// a customer in a new state automatically lights up that state on the map.
const RED_STATE_SELECTORS = STATES_WITH_INSTALLS.map(
  (s) => `.us-states .${s.toLowerCase()}`,
).join(',\n              ');

interface CustomerMapProps {
  customers?: CustomerLocation[];
  className?: string;
}

/**
 * Pin radius scales with customer count — small towns get small pins,
 * dense metros get bigger pins. Clamped so single-customer cities are still
 * legible and 75+ -customer cities don't dominate.
 */
function pinRadius(count: number): number {
  return Math.min(11, Math.max(2.5, Math.sqrt(count) * 1.4));
}

export function CustomerMap({
  customers = customerLocations,
  className,
}: CustomerMapProps) {
  const totalInstalls = customers.reduce((sum, c) => sum + c.count, 0);
  const stateCount = new Set(customers.map((c) => c.state)).size;

  // Treat Hogansville, GA as the HQ marker — rendered with a labeled ring
  const hq = customers.find(
    (c) => c.city.toLowerCase() === 'hogansville' && c.state === 'GA',
  );
  const pinned = customers.filter((c) => c !== hq);

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
          aria-label={`Map of the United States showing ${totalInstalls} Filter Tech installs across ${stateCount} states.`}
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
              /* States where Filter Tech has installed systems */
              ${RED_STATE_SELECTORS} {
                fill: #DE3E40;
              }
              /* Hide Alaska, Hawaii, the DC circle, and the inset separator */
              .us-states .ak,
              .us-states .hi,
              .us-states .dccircle,
              .us-states .separator1 {
                display: none;
              }
            `}
          </style>

          <g
            className="us-states"
            dangerouslySetInnerHTML={{ __html: STATES_INNER }}
          />

          {/* Customer pins — radius scales with install count per city */}
          {pinned.map((c) => {
            const r = pinRadius(c.count);
            return (
              <g key={`${c.city}-${c.state}`}>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={r + 2.5}
                  fill="#FAF7F2"
                  opacity={0.35}
                />
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={r}
                  fill="#FAF7F2"
                  stroke="#243137"
                  strokeWidth={0.5}
                  opacity={0.95}
                >
                  <title>
                    {c.city}, {c.state} — {c.count} install
                    {c.count > 1 ? 's' : ''}
                  </title>
                </circle>
              </g>
            );
          })}

          {/* HQ marker for Hogansville, GA */}
          {hq ? (
            <g>
              <circle cx={hq.x} cy={hq.y} r={14} fill="#FAF7F2" opacity={0.3} />
              <circle cx={hq.x} cy={hq.y} r={8} fill="#FAF7F2" opacity={0.65} />
              <circle
                cx={hq.x}
                cy={hq.y}
                r={4}
                fill="#FAF7F2"
                stroke="#243137"
                strokeWidth={1}
              >
                <title>
                  Hogansville, GA — Headquarters ({hq.count} installs)
                </title>
              </circle>
              <text
                x={hq.x + 14}
                y={hq.y + 4}
                fill="#243137"
                style={{ font: '600 11px var(--font-inter)' }}
              >
                Hogansville, GA
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
            {totalInstalls}+ installs across {stateCount} states
          </p>
          <p className="text-xs text-stone-600">
            Each pin marks a city where we&rsquo;ve installed a system. Bigger
            pin, more installs.
          </p>
        </div>
      </div>
      <figcaption className="border-t border-stone-300 px-4 py-3 text-center text-xs text-stone-600 sm:px-5">
        Pin positions are approximate (Albers USA projection). Map source:
        Wikimedia Commons (public domain).
      </figcaption>
    </figure>
  );
}
