'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { Field, Input, Textarea } from './Field';
import { Button } from '@/components/ui/Button';
import { contactSchema, type ContactInput } from '@/lib/schemas';
import { SUBMITTED_FLAG } from '@/lib/submission';
import {
  HONEYPOT_FIELD,
  LOADED_AT_FIELD,
  MIN_SUBMIT_MS,
} from '@/lib/antispam';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  // Spam guards (see lib/antispam). Both are invisible to real visitors.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const loadedAtRef = useRef<number>(Date.now());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { phone: '', subject: '' },
  });

  const onSubmit = async (data: ContactInput) => {
    // Honeypot: a filled hidden field is a bot. Drop silently, no API call.
    if ((honeypotRef.current?.value ?? '').trim() !== '') return;
    // Time-trap: a submit faster than a human can manage. Ask to resubmit
    // instead of dead-ending, so a rare fast real visitor is never lost.
    if (Date.now() - loadedAtRef.current < MIN_SUBMIT_MS) {
      setStatus('error');
      setServerError('Please take a moment, then submit again.');
      return;
    }

    setStatus('submitting');
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          [HONEYPOT_FIELD]: honeypotRef.current?.value ?? '',
          [LOADED_AT_FIELD]: String(loadedAtRef.current),
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || 'Something went wrong');
      }
      // Send the visitor to the dedicated thank-you URL. A full navigation
      // (not a client-side transition) makes the Google tag fire on /submission
      // so the page-load conversion records reliably.
      try {
        sessionStorage.setItem(SUBMITTED_FLAG, '1');
      } catch {
        // sessionStorage can be unavailable (private mode); navigation still works.
      }
      window.location.assign('/submission');
      return;
    } catch (e) {
      setStatus('error');
      setServerError(
        e instanceof Error ? e.message : 'Something went wrong. Please try again.',
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
      {/* Honeypot: hidden from people, tempting to bots. Must stay empty. */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
      >
        <label htmlFor="company-cf">Company</label>
        <input
          id="company-cf"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          ref={honeypotRef}
          defaultValue=""
        />
      </div>
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
        <Field id="c-phone" label="Phone" required error={errors.phone?.message}>
          <Input
            id="c-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
        </Field>
        <Field id="c-subject" label="Subject" required error={errors.subject?.message}>
          <Input
            id="c-subject"
            type="text"
            aria-invalid={!!errors.subject}
            {...register('subject')}
          />
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
