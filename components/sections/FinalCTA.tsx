import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { site } from '@/lib/site';

interface FinalCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FinalCTA({
  eyebrow = 'Take the next step',
  title = 'Find out what’s in your water.',
  description = 'Free in-home visit and water sample. No pressure, no obligation, just the precise readings, in plain language, after the lab comes back.',
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      <div aria-hidden className="red-rule-thick" />
      <Container className="py-20 text-center sm:py-28">
        <EyebrowLabel className="text-red">{eyebrow}</EyebrowLabel>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <Button
            href="/book"
            size="lg"
            className="bg-cream text-charcoal hover:bg-white"
          >
            Book Your Free Water Test
          </Button>
          <a
            href={`tel:${site.phone}`}
            className="text-base font-medium text-cream underline decoration-red decoration-2 underline-offset-4 hover:text-cream/80"
          >
            Or call {site.phoneDisplay}
          </a>
        </div>
      </Container>
      <div aria-hidden className="red-rule-thick" />
    </section>
  );
}
