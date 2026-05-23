'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Field, Input, Textarea } from './Field';
import { Button } from '@/components/ui/Button';
import { contactSchema, type ContactInput } from '@/lib/schemas';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { phone: '', subject: '' },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus('submitting');
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
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
        <h3 className="font-serif text-2xl text-charcoal">Got it.</h3>
        <p className="text-base leading-relaxed text-charcoal/85">
          We’ll respond within one business day.
        </p>
        <Button variant="secondary" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="c-name" label="Your name" required error={errors.name?.message}>
          <Input
            id="c-name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </Field>
        <Field id="c-email" label="Email" required error={errors.email?.message}>
          <Input
            id="c-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="c-phone" label="Phone (optional)">
          <Input
            id="c-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            {...register('phone')}
          />
        </Field>
        <Field id="c-subject" label="Subject (optional)">
          <Input id="c-subject" type="text" {...register('subject')} />
        </Field>
      </div>
      <Field id="c-message" label="Message" required error={errors.message?.message}>
        <Textarea
          id="c-message"
          aria-invalid={!!errors.message}
          {...register('message')}
        />
      </Field>
      {status === 'error' && serverError ? (
        <p role="alert" className="rounded-sm border border-red bg-red/5 px-4 py-3 text-sm text-red">
          {serverError}
        </p>
      ) : null}
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
          'Send Message'
        )}
      </Button>
    </form>
  );
}
