import Link from 'next/link';
import Image from 'next/image';
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
        className="flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-sm bg-white p-1 shadow-[0_0_0_1px_rgba(36,49,55,0.08)] sm:h-11 sm:w-11"
      >
        <Image
          src="/images/filter-tech-logo.jpg"
          alt=""
          width={64}
          height={64}
          className="h-full w-full object-contain"
          priority
        />
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
