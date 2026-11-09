import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { getApiBaseUrl, API_BASE_URL } from './api';

describe('getApiBaseUrl', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.stubEnv('VITE_API_BASE_URL', '');
    vi.stubEnv('NEXT_PUBLIC_API_URL', '');
    vi.stubEnv('NODE_ENV', 'test');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('reads VITE_API_BASE_URL from environment', () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.com');
    expect(getApiBaseUrl()).toBe('https://api.example.com');
  });

  it('strips trailing slashes from the API URL', () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.com///');
    expect(getApiBaseUrl()).toBe('https://api.example.com');
  });

  it('trims surrounding whitespace from the API URL', () => {
    vi.stubEnv('VITE_API_BASE_URL', '  https://api.example.com/  ');
    expect(getApiBaseUrl()).toBe('https://api.example.com');
  });

  it('falls back to NEXT_PUBLIC_API_URL if VITE_API_BASE_URL is not set', () => {
    vi.stubEnv('NEXT_PUBLIC_API_URL', 'https://next-api.example.com/');
    expect(getApiBaseUrl()).toBe('https://next-api.example.com');
  });

  it('prefers VITE_API_BASE_URL over NEXT_PUBLIC_API_URL', () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://vite-api.example.com');
    vi.stubEnv('NEXT_PUBLIC_API_URL', 'https://next-api.example.com');
    expect(getApiBaseUrl()).toBe('https://vite-api.example.com');
  });

  it('falls back to http://localhost:8000 in test environment when unset', () => {
    expect(getApiBaseUrl()).toBe('http://localhost:8000');
  });

  it('throws an explicit error in production when VITE_API_BASE_URL is missing', () => {
    vi.stubEnv('NODE_ENV', 'production');

    expect(() => getApiBaseUrl()).toThrowError(
      /Missing required environment variable: VITE_API_BASE_URL/
    );
  });

  it('exports API_BASE_URL string', () => {
    expect(typeof API_BASE_URL).toBe('string');
    expect(API_BASE_URL.length).toBeGreaterThan(0);
  });
});
