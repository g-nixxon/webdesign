import type { Metadata } from 'next';
import { SubmissionThankYou } from '@/components/sections/SubmissionThankYou';

// Dedicated thank-you URL used as the Google Ads conversion trigger (page load).
// Kept out of the index so it is never crawled, ranked, or reached except by a
// real form submit.
export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false, follow: false },
};

export default function SubmissionPage() {
  return <SubmissionThankYou />;
}
