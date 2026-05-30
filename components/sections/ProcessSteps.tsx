import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    n: '01',
    title: 'Visit',
    body: 'Filter Tech comes to your home to assess your water and discuss the filtration system that fits your household. Free of charge.',
  },
  {
    n: '02',
    title: 'Test',
    body: 'We collect water samples and send them to the lab. They’re tested for hardness, chlorine, iron, pH, total dissolved solids, and specific contaminants such as arsenic, radon, and pesticides. Full results back within 48 to 72 hours.',
  },
  {
    n: '03',
    title: 'Final Recommendations',
    body: 'To be clear: everyone benefits from a water filtration system. Our job is to provide as much information as possible and steer you in the right direction.',
  },
];

export function ProcessSteps() {
  return (
    <section className="border-y border-stone-300 bg-stone-100 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="How We Find the Right System for You"
            title="Our Simple Process."
            description="No high-pressure sales call. No random quotes. In three steps, we give you the honest answers you need."
          />
        </div>

        <ol className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-3 lg:gap-12">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <p className="text-eyebrow font-semibold uppercase tracking-widest text-red">
                {s.n}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-charcoal sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/80">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
