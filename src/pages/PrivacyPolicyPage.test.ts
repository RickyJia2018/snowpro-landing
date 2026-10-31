import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const html = readFileSync('public/privacy.html', 'utf8');

describe('public privacy notice', () => {
  it('identifies the actual operator and current contact information', () => {
    expect(html).toContain('Googuar Technology Inc.');
    expect(html).toContain('5611 Goring St');
    expect(html).toContain('href="mailto:snowpro-support@googuar.com"');
    expect(html).not.toContain('support@snowpro.googuar.com');
    expect(html).not.toContain('contact@snowpro.app');
  });
  it('covers adult accounts, private media access and staged deletion without claiming immediate erasure', () => {
    expect(html).toContain('age of majority');
    expect(html).toContain('parent or legal guardian');
    expect(html).toContain('moderation');
    expect(html).toContain('staged');
    expect(html).toContain('PayPal');
    expect(html).toContain('AdMob');
    expect(html).not.toContain('children under the age of 13');
  });
});
