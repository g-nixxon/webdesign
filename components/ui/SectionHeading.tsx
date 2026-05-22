import { cn } from '@/lib/cn';
import { EyebrowLabel } from './EyebrowLabel';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  const Heading = Tag as React.ElementType;
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
      <Heading
        className={cn(
          'font-serif tracking-tight text-charcoal',
          Tag === 'h1'
            ? 'text-4xl leading-[1.1] sm:text-5xl md:text-6xl'
            : 'text-3xl leading-[1.15] sm:text-4xl md:text-5xl',
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            'max-w-prose text-base leading-relaxed text-charcoal/80 sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
