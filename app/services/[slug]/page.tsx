import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { Accordion } from '@/components/ui/Accordion';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Button } from '@/components/ui/Button';
import { serviceContent } from '@/lib/services-data';

export function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = serviceContent[params.slug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.blurb,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceContent[params.slug];
  if (!service) return notFound();

  return (
    <>
      <PageHero eyebrow="Services" title={service.title} description={service.blurb}>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal underline decoration-red decoration-2 underline-offset-4 hover:text-red"
        >
          <ArrowLeft size={14} />
          All services
        </Link>
      </PageHero>

      {service.bannerImage ? (
        <section className="bg-cream pt-12 sm:pt-16">
          <Container>
            <figure className="overflow-hidden rounded-sm border border-stone-300 bg-stone-100">
              <div className="relative aspect-[3/2] sm:aspect-[16/9]">
                <Image
                  src={service.bannerImage.src}
                  alt={service.bannerImage.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {service.bannerImage.caption ? (
                <figcaption className="border-t border-stone-300 bg-cream/95 p-4 text-center text-sm text-stone-600">
                  {service.bannerImage.caption}
                </figcaption>
              ) : null}
            </figure>
          </Container>
        </section>
      ) : null}

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <EyebrowLabel>The Problem</EyebrowLabel>
            <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
              What this solves
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-charcoal/85 sm:text-lg">
              {service.problem}
            </p>

            <div className="mt-14">
              <EyebrowLabel>How It Works</EyebrowLabel>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
                Step by step
              </h2>
              <ol className="mt-6 space-y-4">
                {service.how.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-4 border-l-[3px] border-stone-300 pl-5"
                  >
                    <span className="font-serif text-xl text-red">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-base leading-relaxed text-charcoal/85 sm:text-lg">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-14">
              <EyebrowLabel>Who This Is For</EyebrowLabel>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
                Homes that benefit most
              </h2>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-charcoal/85 sm:text-lg">
                {service.fitsHome}
              </p>
            </div>

            <div className="mt-14">
              <EyebrowLabel>Common Questions</EyebrowLabel>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
                FAQ
              </h2>
              <div className="mt-6">
                <Accordion
                  items={service.faqs.map((f) => ({
                    question: f.q,
                    answer: <p>{f.a}</p>,
                  }))}
                />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {service.asideImage ? (
                <figure className="overflow-hidden rounded-sm border border-stone-300 bg-stone-100">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={service.asideImage.src}
                      alt={service.asideImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                  {service.asideImage.caption ? (
                    <figcaption className="border-t border-stone-300 bg-cream/95 p-3 text-center text-xs text-stone-600">
                      {service.asideImage.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
              <div className="rounded-sm border border-stone-300 bg-stone-100 p-7 sm:p-9">
              <EyebrowLabel>What’s Included</EyebrowLabel>
              <ul className="mt-6 space-y-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-charcoal/90"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-red"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-stone-300 pt-6">
                <Button href="/book" size="lg" className="w-full">
                  Book Free Water Test
                </Button>
                <p className="mt-3 text-center text-xs text-stone-600">
                  No charge. No obligation.
                </p>
              </div>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <FinalCTA
        eyebrow="The next step"
        title="See what your water actually needs."
        description="Every system we install starts with a free in-home test. We won’t recommend anything until we’ve seen the results together."
      />
    </>
  );
}
