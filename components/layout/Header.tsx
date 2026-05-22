'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { nav, site } from '@/lib/site';
import { cn } from '@/lib/cn';

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-300 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="container-wide flex h-16 items-center justify-between gap-6 sm:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium text-charcoal transition-colors hover:text-red',
                  active && 'text-red',
                )}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-1.5 text-sm font-medium text-charcoal hover:text-red sm:inline-flex"
          >
            <Phone size={14} />
            {site.phoneDisplay}
          </a>
          <Button href="/book" size="md" className="hidden sm:inline-flex">
            Book Free Water Test
          </Button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center text-charcoal lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="lg:hidden">
          <div className="border-t border-stone-300 bg-cream">
            <nav className="container-wide flex flex-col py-2" aria-label="Mobile">
              {nav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex min-h-[48px] items-center border-b border-stone-300/60 font-serif text-xl text-charcoal',
                      active && 'text-red',
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${site.phone}`}
                className="flex min-h-[48px] items-center gap-2 border-b border-stone-300/60 text-base font-medium text-charcoal"
              >
                <Phone size={16} />
                {site.phoneDisplay}
              </a>
              <div className="py-4">
                <Button href="/book" size="lg" className="w-full">
                  Book Free Water Test
                </Button>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
