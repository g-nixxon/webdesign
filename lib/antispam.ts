// Lightweight, friction-free form spam defenses shared by the forms (client)
// and the API routes (server). A hidden honeypot field plus a timestamp the
// client sets on load. Both are invisible to real visitors.

export const HONEYPOT_FIELD = 'company'; // hidden input; humans leave it empty
export const LOADED_AT_FIELD = 'loadedAt'; // ms timestamp set by client JS on mount

// Shortest time a real person plausibly takes from the form loading to hitting
// submit. The client enforces this; a hard floor here keeps it tunable.
export const MIN_SUBMIT_MS = 1500;

/**
 * Server-side bot check. Returns a short reason string when the submission
 * looks automated, or null when it looks human.
 *
 * Note: the time *floor* is enforced on the client (same clock, no skew). The
 * server only checks that the timestamp is present and numeric, which catches
 * scrapers that POST straight to the API without ever running the page JS.
 */
export function spamReason(raw: Record<string, unknown>): string | null {
  const hp = raw[HONEYPOT_FIELD];
  if (typeof hp === 'string' && hp.trim() !== '') return 'honeypot';

  const loadedAt =
    typeof raw[LOADED_AT_FIELD] === 'string' ? Number(raw[LOADED_AT_FIELD]) : NaN;
  if (!Number.isFinite(loadedAt) || loadedAt <= 0) return 'missing-timestamp';

  return null;
}
