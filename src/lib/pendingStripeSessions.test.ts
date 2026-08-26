import { beforeEach, describe, expect, it } from 'vitest';
import {
  addPendingStripeSessionId,
  readPendingStripeSessionIds,
  removePendingStripeSessionId,
  replacePendingStripeSessionIds,
  readPendingStripeSessionEntries,
} from './pendingStripeSessions';

describe('pending Stripe sessions', () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  it('preserves concurrent checkout sessions without duplicates', () => {
    addPendingStripeSessionId('cs_test_first', 'user1');
    addPendingStripeSessionId('cs_test_second', 'user1');
    addPendingStripeSessionId('cs_test_first', 'user1');

    expect(readPendingStripeSessionIds('user1')).toEqual(['cs_test_first', 'cs_test_second']);
  });

  it('isolates pending sessions by user ID', () => {
    addPendingStripeSessionId('cs_test_user1', 'user1');
    addPendingStripeSessionId('cs_test_user2', 'user2');

    expect(readPendingStripeSessionIds('user1')).toEqual(['cs_test_user1']);
    expect(readPendingStripeSessionIds('user2')).toEqual(['cs_test_user2']);
    expect(readPendingStripeSessionIds('user3')).toEqual([]);
  });

  it('reads and migrates the legacy sessionStorage single-session and array values', () => {
    sessionStorage.setItem('pending_stripe_session_id', 'cs_test_legacy');
    sessionStorage.setItem('pending_stripe_session_ids', JSON.stringify(['cs_test_current', 'cs_test_legacy']));

    addPendingStripeSessionId('cs_test_new', 'user1');

    expect(readPendingStripeSessionIds('user1')).toContain('cs_test_legacy');
    expect(readPendingStripeSessionIds('user1')).toContain('cs_test_current');
    expect(readPendingStripeSessionIds('user1')).toContain('cs_test_new');
    expect(sessionStorage.getItem('pending_stripe_session_id')).toBeNull();
    expect(sessionStorage.getItem('pending_stripe_session_ids')).toBeNull();
  });

  it('drops sessions older than TTL (24 hours)', () => {
    const now = Date.now();
    const twentyFiveHoursAgo = now - 25 * 60 * 60 * 1000;
    const twoHoursAgo = now - 2 * 60 * 60 * 1000;

    localStorage.setItem(
      'pending_stripe_sessions_user1',
      JSON.stringify([
        { sessionId: 'cs_test_expired', createdAt: twentyFiveHoursAgo },
        { sessionId: 'cs_test_valid', createdAt: twoHoursAgo },
      ])
    );

    const activeSessions = readPendingStripeSessionIds('user1');
    expect(activeSessions).toEqual(['cs_test_valid']);
    expect(readPendingStripeSessionEntries('user1').length).toBe(1);
  });

  it('removes only the fulfilled session', () => {
    replacePendingStripeSessionIds(['cs_test_first', 'cs_test_second'], 'user1');

    removePendingStripeSessionId('cs_test_first', 'user1');

    expect(readPendingStripeSessionIds('user1')).toEqual(['cs_test_second']);
  });

  it('clears storage when no sessions remain', () => {
    replacePendingStripeSessionIds(['cs_test_only'], 'user1');

    removePendingStripeSessionId('cs_test_only', 'user1');

    expect(localStorage.getItem('pending_stripe_sessions_user1')).toBeNull();
  });

  it('removes pending session across all user scopes even when userId is omitted (e.g. on RechargeSuccessPage)', () => {
    addPendingStripeSessionId('cs_test_target', 'user42');
    addPendingStripeSessionId('cs_test_other', 'user42');
    addPendingStripeSessionId('cs_test_target', 'anonymous');

    // Called on RechargeSuccessPage without userId
    removePendingStripeSessionId('cs_test_target');

    expect(readPendingStripeSessionIds('user42')).toEqual(['cs_test_other']);
    expect(readPendingStripeSessionIds()).toEqual([]);
  });
});
