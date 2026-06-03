'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/cn';

/**
 * Testimonials carousel.
 *
 * 9 testimonials, displayed 3 at a time with prev/next arrow controls and
 * page indicator dots. The content below is PLACEHOLDER until the real
 * Google reviews are pasted in by the CEO. Swap each `quote`/`name`/`town`/
 * `system` value with the actual review and you're done; no other changes
 * needed.
 */
interface Testimonial {
  quote: string;
  name: string;
  town: string;
  system: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Jay came out, sampled our well, and showed us exactly what was going on. No pressure to buy anything. We ended up with a whole-house system and the water is night and day.',
    name: 'Linda M.',
    town: 'LaGrange, GA',
    system: 'Whole-House + RO',
  },
  {
    quote:
      'We’d been on city water for years and never thought about it. Jay walked us through the results and recommended a small RO at the kitchen. Pays for itself in bottled water alone.',
    name: 'Robert & Susan T.',
    town: 'Greenville, SC',
    system: 'Reverse Osmosis',
  },
  {
    quote:
      'Our iron staining ruined two sets of towels before we called Filter Tech. He fixed it the first time. The service plan has been worth every penny.',
    name: 'Henry P.',
    town: 'Auburn, AL',
    system: 'Whole-House Filtration',
  },
  {
    quote:
      'We started with the Hydrogen system after Karen walked us through how it worked. Two weeks in and my husband stopped buying bottled water.',
    name: 'Sarah K.',
    town: 'Newnan, GA',
    system: 'Alkaline-Hydrogen',
  },
  {
    quote:
      'Jay drove all the way out to Fitzgerald to look at our water. He didn’t try to sell us a thing on that first visit. We called him back ourselves.',
    name: 'David W.',
    town: 'Fitzgerald, GA',
    system: 'Reverse Osmosis',
  },
  {
    quote:
      'Our well had a sulfur smell for years. Jay fixed it. That simple.',
    name: 'Margaret F.',
    town: 'Tallahassee, FL',
    system: 'Whole-House Filtration',
  },
  {
    quote:
      'Both systems, no regrets. The water finally tastes like water, and the showers don’t leave my skin tight.',
    name: 'James & Lisa B.',
    town: 'Fayetteville, GA',
    system: 'Whole-House + RO',
  },
  {
    quote:
      'Honest people. Jay told us we didn’t need a whole-house system, just the RO. Saved us thousands. We refer everyone we know.',
    name: 'Tom & Carol R.',
    town: 'Athens, GA',
    system: 'Reverse Osmosis',
  },
  {
    quote:
      'Best money we’ve spent on the house. The annual service makes sure it stays that way.',
    name: 'Patrick H.',
    town: 'Birmingham, AL',
    system: 'Whole-House Filtration',
  },
];

const PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / PER_PAGE);

export function Testimonials() {
  const [page, setPage] = useState(0);

  const start = page * PER_PAGE;
  const visible = testimonials.slice(start, start + PER_PAGE);

  const go = (direction: -1 | 1) => {
    setPage((p) => (p + direction + totalPages) % totalPages);
  };

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="From Our Neighbors"
              title="90% of our work comes from referrals."
              description="That’s not marketing. That’s the way it’s been for two decades."
            />
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal text-charcoal transition-colors hover:bg-charcoal hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal text-charcoal transition-colors hover:bg-charcoal hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {visible.map((t, i) => (
            <figure
              key={`${page}-${i}`}
              className="flex h-full animate-fade-in flex-col border-l-[3px] border-red bg-stone-100 p-7 sm:p-8"
            >
              <blockquote className="flex-1 font-serif text-base leading-snug text-charcoal sm:text-lg">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-stone-300 pt-4">
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="mt-1 text-xs text-stone-600">
                  {t.town} · {t.system}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Page indicator dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Show testimonials page ${i + 1}`}
              aria-current={i === page ? 'true' : undefined}
              className={cn(
                'h-2 rounded-full transition-all',
                i === page
                  ? 'w-8 bg-red'
                  : 'w-2 bg-stone-300 hover:bg-stone-600',
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
