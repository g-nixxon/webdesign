// Google Ads conversion tracking.
// The gtag.js base tag is loaded globally in app/layout.tsx.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONVERSION_ID = 'AW-18309666529';

// Conversion labels from Google Ads (Goals > Conversions > the action's detail page).
export const conversionLabels = {
  leadFormSubmit: 'FGF-CMqU5uEcEOGt3ZpE',
} as const;

/**
 * Fire a Google Ads conversion. Safe to call anytime: if gtag never loaded
 * (ad blocker, consent tooling, SSR), it silently does nothing.
 */
export function reportConversion(label: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: `${CONVERSION_ID}/${label}`,
  });
}
