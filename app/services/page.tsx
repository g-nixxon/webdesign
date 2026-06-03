import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { Card } from '@/components/ui/Card';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Water Filtration Services',
  description:
    'Whole-house, reverse osmosis, and alkaline-hydrogen drinking water systems, installed by Filter Tech across Georgia, Alabama, the Carolinas, and Florida.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Filtration that fits the water, and the home."
        description="We install the right system for the actual problem. Most homes need one or two of these. Almost none need all of them. Every installation starts with a free in-home water test."
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card
                key={s.slug}
                title={s.title}
                description={s.blurb}
                href={`/services/${s.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        eyebrow="Not sure which you need?"
        title="Let’s test your water first."
        description="The right system depends on what’s actually in your water. The test is free and takes about twenty minutes."
      />
    </>
  );
}
