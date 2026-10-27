'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/site';
import { SUBMITTED_FLAG } from '@/lib/submission';

export function SubmissionThankYou() {
  const router = useRouter();
  const [allowed, setAllowed] = useState<boolean | null>(null);
  // Guard so the flag is consumed exactly once, even when React StrictMode
  // double-invokes this effect in development.
  const decided = useRef(false);

  useEffect(() => {
    if (decided.current) return;
    decided.current = true;

    let ok = false;
    try {
      ok = sessionStorage.getItem(SUBMITTED_FLAG) === '1';
      if (ok) sessionStorage.removeItem(SUBMITTED_FLAG);
    } catch {
      ok = false;
    }
    if (ok) {
      setAllowed(true);
    } else {
      router.replace('/');
    }
  }, [router]);

  if (!allowed) return null;

  return (
    <section className="flex flex-1 items-center justify-center py-20 sm:py-28">
      <Container size="prose">
        <div className="mx-auto flex max-w-xl flex-col items-center rounded-sm border border-stone-300 bg-white px-8 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red text-red">
            <CheckCircle2 size={28} />
          </div>
          <h1 className="mt-6 font-serif text-3xl text-charcoal sm:text-4xl">
            Thank you for telling us about your water.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-charcoal/85">
            We look forward to helping you get the cleanest drinking water
            possible for you and your family.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/">Back to home</Button>
            <Button href={`tel:${site.phone}`} variant="secondary">
              Or call {site.phoneDisplay}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
