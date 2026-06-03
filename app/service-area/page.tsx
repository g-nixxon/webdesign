import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { CustomerMap } from '@/components/sections/CustomerMap';
import { customerLocations } from '@/lib/customer-locations';

export const metadata: Metadata = {
  title: 'Service Area',
  description:
    'Filter Tech serves Georgia, Alabama, North Carolina, and Florida. Free in-home water testing throughout the region.',
};

// The four primary marketing states. For each, we derive the top cities
// by install count from the real customer data — so adding new customers
// in a city automatically updates this list on the next deploy.
const PRIMARY_STATES = [
  { code: 'GA', name: 'Georgia' },
  { code: 'AL', name: 'Alabama' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'FL', name: 'Florida' },
] as const;

const TOP_CITIES_PER_STATE = 10;

const regions = PRIMARY_STATES.map(({ code, name }) => {
  const cities = customerLocations
    .filter((c) => c.state === code)
    .sort((a, b) => b.count - a.count)
    .slice(0, TOP_CITIES_PER_STATE)
    .map((c) => c.city);
  return { state: name, cities };
});

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="From the Mountains to the Gulf Coast, we cover it all."
        description="We’re based in Hogansville, Georgia and cover most of the Southeast. We market across Georgia, Alabama, North Carolina, and Florida, but we’ve installed systems in eight states and counting. If you’re not sure whether we cover your area, give us a call — we travel further than the map shows for the right job."
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <CustomerMap />

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((r) => (
              <div key={r.state}>
                <EyebrowLabel>{r.state}</EyebrowLabel>
                {r.cities.length > 0 ? (
                  <ul className="mt-4 space-y-1.5 text-sm text-charcoal/85">
                    {r.cities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-stone-600">
                    Coming soon.
                  </p>
                )}
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
