import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppleLogo, AndroidLogo } from './BrandIcons';

it('renders AppleLogo with correct svg attributes and custom size', () => {
  const { container } = render(<AppleLogo size={32} className="text-blue-400" data-testid="apple-icon" />);
  const svg = container.querySelector('svg');
  expect(svg).not.toBeNull();
  expect(svg?.getAttribute('width')).toBe('32');
  expect(svg?.getAttribute('height')).toBe('32');
  expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
  expect(svg?.getAttribute('fill')).toBe('currentColor');
  expect(svg?.getAttribute('class')).toContain('text-blue-400');
});

it('renders AndroidLogo with correct svg attributes and custom size', () => {
  const { container } = render(<AndroidLogo size={20} className="fill-white" data-testid="android-icon" />);
  const svg = container.querySelector('svg');
  expect(svg).not.toBeNull();
  expect(svg?.getAttribute('width')).toBe('20');
  expect(svg?.getAttribute('height')).toBe('20');
  expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
  expect(svg?.getAttribute('fill')).toBe('currentColor');
  expect(svg?.getAttribute('class')).toContain('fill-white');
});

it('renders default size 24 when size is omitted', () => {
  const { container } = render(<AppleLogo />);
  const svg = container.querySelector('svg');
  expect(svg?.getAttribute('width')).toBe('24');
  expect(svg?.getAttribute('height')).toBe('24');
});
