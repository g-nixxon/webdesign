import { cn } from '@/lib/cn';

interface EyebrowLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'div';
}

export function EyebrowLabel({
  children,
  className,
  as: Tag = 'span',
}: EyebrowLabelProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        'font-sans text-eyebrow font-semibold uppercase tracking-widest text-red',
        className,
      )}
    >
      {children}
    </Component>
  );
}
