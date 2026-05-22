import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
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
    source: 'web-contact',
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL;

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
        console.error('GHL contact webhook failed', res.status, await res.text());
        return NextResponse.json(
          { message: 'Could not send message. Please try again or call us.' },
          { status: 502 },
        );
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('GHL contact webhook error', e);
      return NextResponse.json(
        { message: 'Could not send message. Please try again or call us.' },
        { status: 502 },
      );
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('[contact] New contact message (no webhook configured):', payload);
  }

  return NextResponse.json({ ok: true });
}
