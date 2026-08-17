/**
 * Build-level feature switches for this branch.
 *
 * The `alphawolf` branch keeps the trainer code compiled in but switched off, so
 * that syncing later releases from `main` stays a plain merge instead of a
 * re-deletion. Everything gated on this flag is a *user-visible surface* or a
 * background job that touches the user's folders — the IPC handlers and types
 * stay in place, unreachable, because nothing calls them once the UI is gone.
 *
 * Flipping this to `true` restores the full feature.
 */
export const TRAINERS_ENABLED = false
