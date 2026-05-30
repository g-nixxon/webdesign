import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const cityWater = [
  'Chlorine taste and smell',
  'Disinfection byproducts',
  'Hard water scale on fixtures and appliances',
  'Lingering pipe-borne residue',
];

const wellWater = [
  'Sulfur or rotten-egg smell',
  'Iron staining on sinks and laundry',
  'Hardness that wrecks appliances',
  'Pesticide and runoff exposure',
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base leading-relaxed text-charcoal/85"
        >
          <span
            aria-hidden
            className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-red"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProblemSplit() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="The Problem"
            title="Two Types of Water"
            description="Whether you’re on city water or pulling from a well, what comes out of your tap isn’t the same as what your neighbor drinks. The right system depends on what contaminants reside in your water and what your goals are with a water filtration system."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-sm border border-stone-300 bg-white p-7 sm:p-10">
            <p className="text-eyebrow font-semibold uppercase tracking-widest text-red">
              City Water
            </p>
            <h3 className="mt-3 font-serif text-2xl text-charcoal sm:text-3xl">
              Treated. Not always clean.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Municipal water is treated according to EPA guidelines, but the
              chemicals used to treat city water can be harmful to consume.
            </p>
            <BulletList items={cityWater} />
          </div>

          <div className="rounded-sm border border-stone-300 bg-white p-7 sm:p-10">
            <p className="text-eyebrow font-semibold uppercase tracking-widest text-red">
              Well Water
            </p>
            <h3 className="mt-3 font-serif text-2xl text-charcoal sm:text-3xl">
              Your Well = Your Responsibility
            </h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              No one is testing well water but you. What’s in the ground around
              your home is what’s in your water.
            </p>
            <BulletList items={wellWater} />
          </div>
        </div>
      </Container>
    </section>
  );
}
