import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { CustomerMap, sampleCustomers } from '@/components/sections/CustomerMap';

export const metadata: Metadata = {
  title: 'Service Area',
  description:
    'Filter Tech serves Georgia, Alabama, North Carolina, and Florida. Free in-home water testing throughout the region.',
};

const regions = [
  { state: 'Georgia', note: 'Top cities listed soon.' },
  { state: 'Alabama', note: 'Top cities listed soon.' },
  { state: 'North Carolina', note: 'Top cities listed soon.' },
  { state: 'Florida', note: 'Top cities listed soon.' },
];

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
          <CustomerMap customers={sampleCustomers} />

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((r) => (
              <div key={r.state}>
                <EyebrowLabel>{r.state}</EyebrowLabel>
                <p className="mt-3 text-sm text-stone-600">{r.note}</p>
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
