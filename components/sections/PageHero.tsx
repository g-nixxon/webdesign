import { Container } from '@/components/layout/Container';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-stone-300 bg-cream">
      <Container className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/85 sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
