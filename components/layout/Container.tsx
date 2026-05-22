import { cn } from '@/lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'prose' | 'wide';
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  children,
  className,
  size = 'wide',
  as: Tag = 'div',
}: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(size === 'prose' ? 'container-prose' : 'container-wide', className)}
    >
      {children}
    </Component>
  );
}
