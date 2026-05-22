import Link from 'next/link';
import { Droplet } from 'lucide-react';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  const color = variant === 'dark' ? 'text-charcoal' : 'text-cream';
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2.5 font-serif', color, className)}
      aria-label="Filter Tech Inc. home"
    >
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-full border border-current"
      >
        <Droplet size={16} strokeWidth={2.25} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-medium tracking-tight sm:text-lg">
          Filter Tech
        </span>
        <span className="text-[10px] uppercase tracking-widest opacity-70">
          Water Specialists
        </span>
      </span>
    </Link>
  );
}
