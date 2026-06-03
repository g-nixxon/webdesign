import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { BookingForm } from '@/components/forms/BookingForm';

export const metadata: Metadata = {
  title: 'Book Your Free Water Test',
  description:
    'Book a free in-home visit and water sample with a water specialist. No charge, no pressure, no obligation.',
};

const trustPoints = [
  'Free in-home consultation, no charge',
  'Water samples collected for precise lab testing',
  'On-site survey of where a system would go',
  'No pressure to buy anything',
  'Plain-language results report when the lab comes back',
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Your Visit"
        title="Free in-home visit. Lab-grade testing."
        description="Tell us a little about your water and where you live. Jay will reach out to confirm a time that works for you."
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-stone-300 bg-stone-100 p-7 sm:p-10">
              <BookingForm />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              <div>
                <EyebrowLabel>What You Get</EyebrowLabel>
                <h2 className="mt-4 font-serif text-2xl text-charcoal sm:text-3xl">
                  No pressure. No obligation. Just answers.
                </h2>
                <ul className="mt-6 space-y-3">
                  {trustPoints.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-base text-charcoal/85"
                    >
                      <span
                        aria-hidden
                        className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-charcoal text-cream"
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-[3px] border-red bg-cream p-6">
                <blockquote className="font-serif text-lg leading-snug text-charcoal sm:text-xl">
                  <p>
                    “Half of the homes I visit don’t need a system at all. I’m
                    happy to tell them so.”
                  </p>
                </blockquote>
                <p className="mt-3 text-xs text-stone-600">
                  Jay Hanlon, Water Specialist
                </p>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
