import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { PullQuote } from '@/components/ui/PullQuote';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Jay Hanlon',
  description:
    'Jay Hanlon has been working in plumbing and water filtration for more than 30 years. Filter Tech is his family-owned operation, headquartered in Hogansville, Georgia.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A water specialist, not a salesman."
        description="Filter Tech Inc. is owned and operated by Jay Hanlon, a water specialist with three decades in the water filtration trade, and a stubborn belief that the customer should see the test before they hear the price."
      />

      {/* Family banner */}
      <section className="bg-cream pt-12 sm:pt-16">
        <Container>
          <figure className="relative overflow-hidden rounded-sm border border-stone-300 bg-stone-100">
            <div className="relative aspect-[3/2] sm:aspect-[16/9]">
              <Image
                src="/images/family.jpg"
                alt="The Hanlon family, Jay, Karen, their children, and granddaughter, in matching Filter Tech shirts"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center"
                priority
              />
            </div>
            <figcaption className="border-t border-stone-300 bg-cream/95 p-4 text-center text-sm text-stone-600 sm:p-5">
              <span className="text-eyebrow font-semibold uppercase tracking-widest text-red">
                Family-Owned
              </span>
              <span className="ml-3">Three generations of the Hanlon family</span>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <EyebrowLabel>The Path Here</EyebrowLabel>
            <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
              Three decades, one trade.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 sm:text-lg">
              <p>
                Jay spent his first twelve years as a plumber. He saw firsthand
                what water does to pipes, fixtures, and water heaters when
                nobody’s filtering it, and what happens when somebody
                tries to sell a family the wrong fix.
              </p>
              <p>
                After plumbing, he moved into filtration full-time, spending
                nine years as the operations manager for a national water
                company in Florida. He learned every system on the market, and
                more importantly, learned which ones live up to their brochures
                and which ones don’t.
              </p>
              <p>
                In 2004 he joined Filter Tech of Georgia, then based in Tyrone.
                He bought the company in 2010, renamed it Filter Tech Inc., and
                moved the headquarters to Hogansville in 2019. He’s run it the
                same way the whole time: <em>test first, explain everything,
                never sell a system you don’t need.</em>
              </p>
            </div>

            <div className="mt-10">
              <PullQuote
                quote="My favorite test result is the one where the water’s fine and I get to drive home without selling anything. That’s how you build a business that lasts."
                cite="Jay Hanlon"
              />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 rounded-sm border border-stone-300 bg-stone-100 p-7 sm:p-9">
              <EyebrowLabel>By the Numbers</EyebrowLabel>
              <dl className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-stone-600">
                    Years in Trade
                  </dt>
                  <dd className="mt-1 font-serif text-3xl text-charcoal">30+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-stone-600">
                    Homes Served
                  </dt>
                  <dd className="mt-1 font-serif text-3xl text-charcoal">1,200+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-stone-600">
                    Referral Business
                  </dt>
                  <dd className="mt-1 font-serif text-3xl text-charcoal">90%</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-stone-600">
                    Years Owning Filter Tech
                  </dt>
                  <dd className="mt-1 font-serif text-3xl text-charcoal">15+</dd>
                </div>
              </dl>
              <div className="mt-8 border-t border-stone-300 pt-6">
                <p className="text-xs uppercase tracking-widest text-stone-600">
                  Certifications
                </p>
                <ul className="mt-4 space-y-2 text-sm text-charcoal">
                  <li>Certified Installer</li>
                  <li>RO / Ultra-filtration Certified</li>
                </ul>
              </div>
              <div className="mt-8 border-t border-stone-300 pt-6">
                <p className="text-xs uppercase tracking-widest text-stone-600">
                  Headquarters
                </p>
                <p className="mt-3 text-sm text-charcoal">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </p>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-stone-300 bg-stone-100 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <EyebrowLabel>What We Stand For</EyebrowLabel>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
                Education first. Sales second.
              </h2>
            </div>
            <ul className="lg:col-span-7 space-y-8">
              {[
                {
                  title: 'Test before you sell.',
                  body: 'Every job starts with a free, in-home test. If we don’t see a problem, we don’t make one up.',
                },
                {
                  title: 'Explain in plain language.',
                  body: 'You should leave the conversation knowing what’s in your water. No jargon, no scare tactics.',
                },
                {
                  title: 'Recommend what fits.',
                  body: 'Sometimes that’s a whole-house system. Sometimes it’s a single cartridge. We tell you which.',
                },
                {
                  title: 'Stand behind it.',
                  body: 'Annual service keeps your system working, and keeps us accountable to the result we promised.',
                },
              ].map((v) => (
                <li
                  key={v.title}
                  className="border-l-[3px] border-red pl-6 sm:pl-7"
                >
                  <h3 className="font-serif text-xl text-charcoal sm:text-2xl">
                    {v.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-base leading-relaxed text-charcoal/80">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FinalCTA
        eyebrow="Work with Jay"
        title="The first step is a free water test."
      />
    </>
  );
}
