import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'text';
type Size = 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60';

const sizes: Record<Size, string> = {
  md: 'min-h-[48px] px-6 text-[15px]',
  lg: 'min-h-[56px] px-8 text-base',
};

const variants: Record<Variant, string> = {
  // Primary: charcoal background. The single hero CTA may use this.
  primary:
    'bg-charcoal text-cream hover:bg-charcoal/90 border border-charcoal',
  // Secondary: outlined charcoal, hover reveals a thin red underline accent
  secondary:
    'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream',
  // Text link with red underline accent on hover
  text:
    'text-charcoal underline decoration-red decoration-2 underline-offset-4 hover:text-red px-0 min-h-0',
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, sizes[size], variants[variant], className);

  if ('href' in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
