import { cn } from '@/lib/cn';

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

export function Label({ htmlFor, children, required, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'block text-xs font-semibold uppercase tracking-widest text-charcoal',
        className,
      )}
    >
      {children}
      {required ? <span className="text-red"> *</span> : null}
    </label>
  );
}

interface FieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label ? (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      ) : null}
      {children}
      {hint && !error ? (
        <p className="text-xs text-stone-600">{hint}</p>
      ) : null}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs font-medium text-red"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputStyles =
  'w-full min-h-[48px] rounded-sm border border-stone-300 bg-white px-4 text-base text-charcoal placeholder:text-stone-600 focus-visible:border-charcoal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal disabled:opacity-50 aria-[invalid=true]:border-red';

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cn(inputStyles, className)} {...props} />
);

export const Textarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={cn(inputStyles, 'min-h-[120px] py-3 leading-relaxed', className)}
    {...props}
  />
);

export const Select = ({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={cn(inputStyles, 'appearance-none bg-no-repeat pr-10', className)}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%23243137' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
      backgroundPosition: 'right 1rem center',
    }}
    {...props}
  >
    {children}
  </select>
);
