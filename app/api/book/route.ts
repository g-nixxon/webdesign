import { NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/schemas';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: 'Validation failed',
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const payload = {
    ...parsed.data,
    source: 'web-booking',
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.GHL_BOOKING_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(process.env.GHL_WEBHOOK_SECRET
            ? { 'X-Webhook-Secret': process.env.GHL_WEBHOOK_SECRET }
            : {}),
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        // eslint-disable-next-line no-console
        console.error('GHL booking webhook failed', res.status, await res.text());
        return NextResponse.json(
          { message: 'Could not forward request. Please try again or call us.' },
          { status: 502 },
        );
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('GHL booking webhook error', e);
      return NextResponse.json(
        { message: 'Could not forward request. Please try again or call us.' },
        { status: 502 },
      );
    }
  } else {
    // No webhook configured yet, log so the dev/owner can see submissions
    // eslint-disable-next-line no-console
    console.log('[booking] New booking request (no webhook configured):', payload);
  }

  return NextResponse.json({ ok: true });
}
