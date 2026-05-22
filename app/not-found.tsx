import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';

export default function NotFound() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <EyebrowLabel>404</EyebrowLabel>
        <h1 className="mt-5 font-serif text-4xl text-charcoal sm:text-5xl">
          That page doesn’t exist.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-charcoal/80 sm:text-lg">
          The link may be old, or you may have typed the URL incorrectly. From
          here you can head back to the homepage or book a free water test.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            Back home
          </Button>
          <Link
            href="/book"
            className="text-base font-medium text-charcoal underline decoration-red decoration-2 underline-offset-4 hover:text-red"
          >
            Book a free water test
          </Link>
        </div>
      </Container>
    </section>
  );
}
