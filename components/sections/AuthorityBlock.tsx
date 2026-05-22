import { Container } from '@/components/layout/Container';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { PullQuote } from '@/components/ui/PullQuote';
import { Button } from '@/components/ui/Button';

const certs = [
  'Certified Water Specialist (WQA)',
  'Certified Installer',
  'Reverse Osmosis & Ultra-filtration Certified',
];

export function AuthorityBlock() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-sm border border-stone-300 bg-stone-100 lg:max-w-none">
            {/* Photo placeholder */}
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(36,49,55,0.08),transparent_60%)]"
            >
              <svg
                viewBox="0 0 100 100"
                className="h-24 w-24 text-charcoal/40"
                aria-hidden
              >
                <circle cx="50" cy="38" r="16" fill="currentColor" opacity="0.4" />
                <path
                  d="M20 88 C20 70 35 60 50 60 C65 60 80 70 80 88 Z"
                  fill="currentColor"
                  opacity="0.4"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-stone-300 bg-cream/95 p-4 text-center">
              <p className="text-eyebrow font-semibold uppercase tracking-widest text-red">
                Owner & Operator
              </p>
              <p className="mt-1 font-serif text-lg text-charcoal">Jay Hanlon</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <EyebrowLabel>Meet Your Specialist</EyebrowLabel>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
            30 years of Southern water — read by one person.
          </h2>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-charcoal/85 sm:text-lg">
            Jay started as a plumber. Twelve years in the trade, then nine more
            managing filtration for a national company in Florida. He bought Filter
            Tech in 2010 and has run it the same way ever since: test first, explain
            everything, and only recommend what the water actually needs.
          </p>
          <div className="mt-8">
            <PullQuote
              quote="If I can&rsquo;t show you the problem in your own water, I won&rsquo;t try to sell you a system."
              cite="Jay Hanlon"
              attribution="Certified Water Specialist"
            />
          </div>
          <ul className="mt-8 grid gap-2">
            {certs.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 text-sm font-medium text-charcoal"
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-red"
                />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Read Jay&rsquo;s Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
