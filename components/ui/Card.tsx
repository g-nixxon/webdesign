import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function Card({ title, description, href, icon, className, children }: CardProps) {
  const inner = (
    <>
      {icon ? (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-charcoal">
          {icon}
        </div>
      ) : null}
      <h3 className="font-serif text-2xl leading-tight text-charcoal">
        <span className="bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
          {title}
        </span>
      </h3>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-charcoal/80">{description}</p>
      ) : null}
      {children}
      {href ? (
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal">
          Learn more
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    'group block h-full rounded-sm border border-stone-300 bg-cream p-6 transition-colors hover:border-charcoal sm:p-8',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}
