import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { articles } from '@/lib/articles-data';

export const metadata: Metadata = {
  title: 'Water 101: A Plain-Language Guide',
  description:
    'Articles and guides on water quality, filtration, testing, and maintenance, written for homeowners, not chemists.',
};

export default function WaterEducationHub() {
  return (
    <>
      <PageHero
        eyebrow="Water 101"
        title="Plain-language guides to your water."
        description="Short, useful reads that help you understand what’s in your water, what filters actually do, and when to call a professional. Written by people who do this for a living."
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/water-101/${a.slug}`}
                  className="group flex h-full flex-col rounded-sm border border-stone-300 bg-stone-100 p-7 transition-colors hover:border-charcoal sm:p-8"
                >
                  <EyebrowLabel>{a.category}</EyebrowLabel>
                  <h2 className="mt-4 font-serif text-xl leading-tight text-charcoal sm:text-2xl">
                    <span className="bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                      {a.title}
                    </span>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/80">
                    {a.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-end border-t border-stone-300 pt-4">
                    <span className="flex items-center gap-1 text-xs font-medium text-charcoal">
                      Read
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA
        eyebrow="Skip the reading"
        title="Get answers about your specific water."
        description="A free in-home water test is the fastest way to know what you’re actually drinking."
      />
    </>
  );
}
