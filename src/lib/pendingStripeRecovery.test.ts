import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { addPendingStripeSessionId, readPendingStripeSessionIds,
  removePendingStripeSessionId, removePendingStripeSessionForUser } from './pendingStripeSessions';

const old = Date.now() - 30 * 24 * 60 * 60 * 1000;
describe('unconfirmed checkout evidence', () => {
  beforeEach(() => { localStorage.clear(); sessionStorage.clear(); });
  afterEach(() => vi.restoreAllMocks());

  it('adding a checkout does not erase an older unresolved payment', () => {
    localStorage.setItem('pending_stripe_sessions_1', JSON.stringify([
      { sessionId: 'cs_test_oldpaid', createdAt: old },
    ]));
    addPendingStripeSessionId('cs_test_new', '1');
    expect(readPendingStripeSessionIds('1')).toEqual(['cs_test_oldpaid', 'cs_test_new']);
  });

  it('confirming one checkout does not prune unrelated old evidence', () => {
    localStorage.setItem('pending_stripe_sessions_2', JSON.stringify([
      { sessionId: 'cs_test_otherpaid', createdAt: old },
    ]));
    addPendingStripeSessionId('cs_test_confirmed', '1');
    removePendingStripeSessionId('cs_test_confirmed');
    expect(readPendingStripeSessionIds('2')).toEqual(['cs_test_otherpaid']);
  });

  it('an unsuccessful reader cannot claim the anonymous receipt from its actual owner', () => {
    addPendingStripeSessionId('cs_test_unknown');
    expect(readPendingStripeSessionIds('wrong')).toEqual(['cs_test_unknown']);
    expect(localStorage.getItem('pending_stripe_sessions_wrong')).toBeNull();
    expect(readPendingStripeSessionIds('actual')).toEqual(['cs_test_unknown']);
    removePendingStripeSessionForUser('cs_test_unknown', 'actual');
    expect(readPendingStripeSessionIds('wrong')).toEqual([]);
    expect(readPendingStripeSessionIds()).toEqual([]);
  });

  it('storage write failure cannot destroy the only anonymous or legacy copy', () => {
    addPendingStripeSessionId('cs_test_shared');
    sessionStorage.setItem('pending_stripe_session_id', 'cs_test_legacy');
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('QuotaExceededError'); });
    expect(readPendingStripeSessionIds('wrong')).toEqual(['cs_test_shared', 'cs_test_legacy']);
    expect(readPendingStripeSessionIds('actual')).toEqual(['cs_test_shared', 'cs_test_legacy']);
  });

  it('legacy evidence survives closing the original tab without adopting its visitor', () => {
    sessionStorage.setItem('pending_stripe_session_id', 'cs_test_legacy');
    sessionStorage.setItem('pending_stripe_session_ids', JSON.stringify(['cs_test_second']));
    expect(readPendingStripeSessionIds('wrong')).toEqual(['cs_test_legacy', 'cs_test_second']);
    sessionStorage.clear(); // A later visit is a new tab.
    expect(readPendingStripeSessionIds('actual')).toEqual(['cs_test_legacy', 'cs_test_second']);
    expect(localStorage.getItem('pending_stripe_sessions_wrong')).toBeNull();
  });

  it('confirmed owner cleanup preserves other unknown and private receipts', () => {
    addPendingStripeSessionId('cs_test_target');
    addPendingStripeSessionId('cs_test_other');
    addPendingStripeSessionId('cs_test_private', '2');
    sessionStorage.setItem('pending_stripe_session_ids', JSON.stringify([
      { sessionId: 'cs_test_target', createdAt: old }, 'cs_test_legacy_other',
    ]));
    removePendingStripeSessionForUser('cs_test_target', '1');
    expect(readPendingStripeSessionIds('1')).toEqual(['cs_test_other', 'cs_test_legacy_other']);
    expect(readPendingStripeSessionIds('2')).toEqual(['cs_test_private', 'cs_test_other', 'cs_test_legacy_other']);
  });
});
