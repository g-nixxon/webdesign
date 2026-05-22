import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote:
      'Jay came out, tested our well, and showed us exactly what was going on. No pressure to buy anything. We ended up with a whole-house system and the water is night and day.',
    name: 'Linda M.',
    town: 'LaGrange, GA',
    system: 'Whole-House + RO',
  },
  {
    quote:
      'We&rsquo;d been on city water for years and never thought about it. The test took twenty minutes. The drinking water system Jay installed pays for itself in bottled water alone.',
    name: 'Robert & Susan T.',
    town: 'Greenville, SC',
    system: 'Drinking Water System',
  },
  {
    quote:
      'Our iron staining ruined two sets of towels before we called Filter Tech. He fixed it the first time. Annual service has been worth every penny.',
    name: 'Henry P.',
    town: 'Auburn, AL',
    system: 'Whole-House Filtration',
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="From Our Neighbors"
            title="90% of our work comes from referrals."
            description="That&rsquo;s not marketing. That&rsquo;s the way it&rsquo;s been for two decades."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex h-full flex-col border-l-[3px] border-red bg-stone-100 p-7 sm:p-8"
            >
              <blockquote className="flex-1 font-serif text-lg leading-snug text-charcoal sm:text-xl">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-stone-300 pt-4">
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="mt-0.5 text-xs text-stone-600">
                  {t.town} · {t.system}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
