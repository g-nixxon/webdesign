'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Field, Input, Textarea, Select, Label } from './Field';
import { Button } from '@/components/ui/Button';
import {
  bookingSchema,
  concernOptions,
  stateOptions,
  type BookingInput,
} from '@/lib/schemas';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function BookingForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      contactMethod: 'phone',
      concerns: [],
      notes: '',
      state: '',
    },
  });

  const onSubmit = async (data: BookingInput) => {
    setStatus('submitting');
    setServerError(null);
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || 'Something went wrong');
      }
      setStatus('success');
      reset();
    } catch (e) {
      setStatus('error');
      setServerError(
        e instanceof Error ? e.message : 'Something went wrong. Please try again.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-charcoal text-charcoal">
          <CheckCircle2 size={24} />
        </div>
        <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">
          Thank you. We’ll be in touch shortly.
        </h2>
        <p className="text-base leading-relaxed text-charcoal/85">
          A specialist will reach out within 1–2 business days to confirm a
          time that works for you. If your situation is urgent, please call us
          directly.
        </p>
        <Button
          variant="secondary"
          onClick={() => setStatus('idle')}
          className="mt-4"
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6" noValidate>
      <fieldset className="grid gap-6">
        <legend className="sr-only">Your details</legend>
        <Field id="name" label="Your name" required error={errors.name?.message}>
          <Input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="phone" label="Phone" required error={errors.phone?.message}>
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              {...register('phone')}
            />
          </Field>
          <Field id="email" label="Email" required error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register('email')}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="grid gap-6">
        <legend className="text-eyebrow font-semibold uppercase tracking-widest text-red">
          Home Address
        </legend>
        <Field id="street" label="Street address" required error={errors.street?.message}>
          <Input
            id="street"
            type="text"
            autoComplete="street-address"
            aria-invalid={!!errors.street}
            {...register('street')}
          />
        </Field>
        <div className="grid gap-6 sm:grid-cols-3">
          <Field id="city" label="City" required error={errors.city?.message} className="sm:col-span-1">
            <Input
              id="city"
              type="text"
              autoComplete="address-level2"
              aria-invalid={!!errors.city}
              {...register('city')}
            />
          </Field>
          <Field id="state" label="State" required error={errors.state?.message}>
            <Select
              id="state"
              autoComplete="address-level1"
              aria-invalid={!!errors.state}
              {...register('state')}
            >
              <option value="">Select…</option>
              {stateOptions.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </Select>
          </Field>
          <Field id="zip" label="ZIP" required error={errors.zip?.message}>
            <Input
              id="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              aria-invalid={!!errors.zip}
              {...register('zip')}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-eyebrow font-semibold uppercase tracking-widest text-red">
          Water Source
        </legend>
        <p className="mt-2 text-sm text-stone-600">
          Helps us know what equipment to bring.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { value: 'city', label: 'City water' },
            { value: 'well', label: 'Well water' },
            { value: 'unsure', label: 'Not sure' },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex min-h-[56px] cursor-pointer items-center gap-3 rounded-sm border border-stone-300 bg-white px-4 has-[:checked]:border-charcoal has-[:checked]:bg-charcoal has-[:checked]:text-cream"
            >
              <input
                type="radio"
                value={opt.value}
                className="sr-only"
                {...register('waterSource')}
              />
              <span
                aria-hidden
                className="flex h-5 w-5 items-center justify-center rounded-full border border-current"
              >
                <span className="hidden h-2 w-2 rounded-full bg-current peer-checked:block" />
              </span>
              <span className="text-sm font-medium">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.waterSource ? (
          <p role="alert" className="mt-2 text-xs font-medium text-red">
            {errors.waterSource.message}
          </p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="text-eyebrow font-semibold uppercase tracking-widest text-red">
          Main Concerns
        </legend>
        <p className="mt-2 text-sm text-stone-600">Select all that apply.</p>
        <Controller
          control={control}
          name="concerns"
          render={({ field }) => (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {concernOptions.map((opt) => {
                const checked = field.value?.includes(opt.value);
                return (
                  <label
                    key={opt.value}
                    className={cn(
                      'flex min-h-[48px] cursor-pointer items-center gap-3 rounded-sm border border-stone-300 bg-white px-4',
                      checked && 'border-charcoal bg-charcoal text-cream',
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={!!checked}
                      onChange={(e) => {
                        const set = new Set(field.value || []);
                        if (e.target.checked) set.add(opt.value);
                        else set.delete(opt.value);
                        field.onChange(Array.from(set));
                      }}
                    />
                    <span
                      aria-hidden
                      className={cn(
                        'flex h-5 w-5 items-center justify-center rounded-sm border border-current',
                        checked && 'bg-cream text-charcoal',
                      )}
                    >
                      {checked ? '✓' : ''}
                    </span>
                    <span className="text-sm font-medium">{opt.label}</span>
                  </label>
                );
              })}
            </div>
          )}
        />
      </fieldset>

      <Field id="contactMethod" label="Preferred contact method">
        <Select id="contactMethod" {...register('contactMethod')}>
          <option value="phone">Phone call</option>
          <option value="text">Text message</option>
          <option value="email">Email</option>
        </Select>
      </Field>

      <Field id="notes" label="Notes (optional)" hint="Anything specific you’d like us to know.">
        <Textarea id="notes" {...register('notes')} />
      </Field>

      {status === 'error' && serverError ? (
        <p role="alert" className="rounded-sm border border-red bg-red/5 px-4 py-3 text-sm text-red">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5">
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          className="sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            'Book My Free Water Test'
          )}
        </Button>
        <p className="text-xs text-stone-600">
          By submitting, you agree we may contact you about your water test.
        </p>
      </div>
    </form>
  );
}
