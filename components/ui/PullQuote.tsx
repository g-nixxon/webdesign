import { cn } from '@/lib/cn';

interface PullQuoteProps {
  quote: string;
  cite?: string;
  attribution?: string;
  className?: string;
}

export function PullQuote({ quote, cite, attribution, className }: PullQuoteProps) {
  return (
    <figure
      className={cn(
        'relative border-l-[3px] border-red pl-6 sm:pl-8',
        className,
      )}
    >
      <blockquote className="font-serif text-xl leading-snug text-charcoal sm:text-2xl">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      {(cite || attribution) && (
        <figcaption className="mt-4 text-sm text-stone-600">
          {cite && <span className="font-medium text-charcoal">{cite}</span>}
          {cite && attribution && <span> · </span>}
          {attribution && <span>{attribution}</span>}
        </figcaption>
      )}
    </figure>
  );
}
