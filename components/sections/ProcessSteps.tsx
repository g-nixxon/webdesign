import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    n: '01',
    title: 'Test',
    body: 'We come to your home with the equipment and test your water on the spot — for hardness, chlorine, iron, pH, and dissolved solids. No charge.',
  },
  {
    n: '02',
    title: 'Explain',
    body: 'You see the results in plain language. We walk through what each number means for your family — what to worry about, and what not to.',
  },
  {
    n: '03',
    title: 'Solve',
    body: 'If you need a system, we recommend the one that fits your home. If you don&rsquo;t, we tell you that too. No pressure to buy.',
  },
];

export function ProcessSteps() {
  return (
    <section className="border-y border-stone-300 bg-stone-100 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="How It Works"
            title="Three steps. Honest answers."
            description="No high-pressure sales call. No mystery quote. The process is the same every time, because that&rsquo;s the only way it works."
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
              <p
                className="mt-4 max-w-md text-base leading-relaxed text-charcoal/80"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
