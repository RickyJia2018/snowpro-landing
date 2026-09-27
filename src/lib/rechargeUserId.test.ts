import { describe, it, expect } from 'vitest';
import { rechargeUserId } from './rechargeSession';

describe('gateway purchase account identity', () => {
  it('reads the actual protobuf ID without losing int64 precision', () => {
    expect(rechargeUserId({ID:'7'})).toBe('7');
    expect(rechargeUserId({ID:'9223372036854775807'})).toBe('9223372036854775807');
    expect(rechargeUserId({id:'7'})).toBe('7');
    expect(rechargeUserId({ID:'7',id:7})).toBe('7');
  });
  it.each([null, {}, {ID:0}, {ID:'-1'}, {ID:'user_7'}, {ID:'9223372036854775808'},
    {ID:9007199254740993}, {ID:'7',id:'8'}, {ID:null,id:'7'}])(
    'rejects missing, invalid or conflicting identities: %j', user => {
      expect(rechargeUserId(user)).toBeNull();
    });
});
