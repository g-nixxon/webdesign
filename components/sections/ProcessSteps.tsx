import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    n: '01',
    title: 'Visit',
    body: 'Jay comes to your home, listens to your concerns, collects water samples, and walks through where a system would go if you need one. No charge.',
  },
  {
    n: '02',
    title: 'Test',
    body: 'Samples go to the lab for precise readings — hardness, chlorine, iron, pH, total dissolved solids, and source-specific markers. You get the full results in plain language.',
  },
  {
    n: '03',
    title: 'Solve',
    body: 'If you need a system, we recommend the one that fits your home. If you don’t, we tell you that too. No pressure to buy.',
  },
];

export function ProcessSteps() {
  return (
    <section className="relative bg-stone-100 py-20 sm:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-red/70" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-red/70" />
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="How It Works"
            title="Three steps. Honest answers."
            description="No high-pressure sales call. No mystery quote. The process is the same every time, because that’s the only way it works."
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
