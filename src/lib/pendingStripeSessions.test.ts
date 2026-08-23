import { beforeEach, describe, expect, it } from 'vitest';
import {
  addPendingStripeSessionId,
  readPendingStripeSessionIds,
  removePendingStripeSessionId,
  replacePendingStripeSessionIds,
} from './pendingStripeSessions';

describe('pending Stripe sessions', () => {
  beforeEach(() => sessionStorage.clear());

  it('preserves concurrent checkout sessions without duplicates', () => {
    addPendingStripeSessionId('cs_test_first');
    addPendingStripeSessionId('cs_test_second');
    addPendingStripeSessionId('cs_test_first');

    expect(readPendingStripeSessionIds()).toEqual(['cs_test_first', 'cs_test_second']);
  });

  it('reads and migrates the legacy single-session value', () => {
    sessionStorage.setItem('pending_stripe_session_id', 'cs_test_legacy');
    sessionStorage.setItem('pending_stripe_session_ids', JSON.stringify(['cs_test_current', 'cs_test_legacy']));

    addPendingStripeSessionId('cs_test_new');

    expect(readPendingStripeSessionIds()).toEqual(['cs_test_legacy', 'cs_test_current', 'cs_test_new']);
    expect(sessionStorage.getItem('pending_stripe_session_id')).toBeNull();
  });

  it('removes only the fulfilled session', () => {
    replacePendingStripeSessionIds(['cs_test_first', 'cs_test_second']);

    removePendingStripeSessionId('cs_test_first');

    expect(readPendingStripeSessionIds()).toEqual(['cs_test_second']);
  });

  it('clears storage when no sessions remain', () => {
    replacePendingStripeSessionIds(['cs_test_only']);

    removePendingStripeSessionId('cs_test_only');

    expect(sessionStorage.getItem('pending_stripe_session_ids')).toBeNull();
  });
});
