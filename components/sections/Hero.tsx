import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { site } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Soft warm gradient — no blue, stays neutral */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(36,49,55,0.06),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(222,62,64,0.04),transparent_45%)]"
      />
      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <EyebrowLabel>Certified Water Specialists · Hogansville, GA</EyebrowLabel>
          <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Know what you&rsquo;re drinking{' '}
            <span className="relative inline-block">
              before
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-red"
              />
            </span>{' '}
            you drink it.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
            For more than 30 years, Jay Hanlon has been testing Southern water and
            building filtration systems that fit the home, the family, and the
            problem. No pressure. No guessing. Just answers.
          </p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <Button href="/book" size="lg">
              Book Your Free Water Test
            </Button>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 text-base font-medium text-charcoal underline decoration-red decoration-2 underline-offset-4 hover:text-red"
            >
              <Phone size={16} />
              Call {site.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-sm text-stone-600">
            No charge. No obligation. We come to you.
          </p>
        </div>

        {/* Visual panel — James Hanlon headshot with quote caption */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-stone-300 bg-stone-100">
              <Image
                src="/images/jay-headshot.jpg"
                alt="Jay Hanlon, Certified Water Specialist and owner of Filter Tech Inc., smiling in a Filter Tech t-shirt and cap"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 border-t border-stone-300 bg-cream/95 p-5 backdrop-blur">
                <p className="font-serif text-base leading-tight text-charcoal sm:text-lg">
                  &ldquo;You can&rsquo;t fix what you haven&rsquo;t tested.&rdquo;
                </p>
                <p className="mt-1 text-xs text-stone-600">
                  — Jay Hanlon, Certified Water Specialist
                </p>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-stone-300"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
