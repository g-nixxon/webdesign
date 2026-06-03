import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { services } from '@/lib/site';

export function ServicesGrid() {
  return (
    <section className="border-y border-stone-300 bg-stone-100 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="What We Install"
            title="Here’s a list of the filtration systems we provide."
            description="There’s no one-size-fits-all in water. It’s all chemistry-related, we start with your pH balance and go from there."
          />
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
