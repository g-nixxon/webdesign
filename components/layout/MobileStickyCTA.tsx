'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { site } from '@/lib/site';
import { cn } from '@/lib/cn';

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide on the booking page itself — the form IS the conversion
  if (pathname === '/book') return null;

  return (
    <div
      aria-hidden={!show}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-stone-300 bg-cream/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden',
        show ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="flex items-center gap-3">
        <a
          href={`tel:${site.phone}`}
          aria-label="Call Filter Tech"
          className="flex h-12 w-12 flex-none items-center justify-center rounded-sm border border-charcoal text-charcoal"
        >
          <Phone size={18} />
        </a>
        <Link
          href="/book"
          className="flex h-12 flex-1 items-center justify-center rounded-sm bg-charcoal px-4 text-sm font-medium text-cream"
        >
          Book Free Water Test
        </Link>
      </div>
    </div>
  );
}
