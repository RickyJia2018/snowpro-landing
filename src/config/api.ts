/**
 * Resolves the backend API base URL from environment variables.
 *
 * Rules:
 * 1. Reads from VITE_API_BASE_URL first, then NEXT_PUBLIC_API_URL as a fallback.
 * 2. Works in both browser (Vite import.meta.env) and Node.js runtime (Vercel Serverless / process.env).
 * 3. Strips any trailing slashes to guarantee clean path joins.
 * 4. In production builds and deployments, throws an explicit error if missing.
 */
export function getApiBaseUrl(): string {
  let rawUrl: string | undefined;

  if (typeof process !== 'undefined' && process.env) {
    rawUrl = process.env.VITE_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL;
  }

  if (!rawUrl) {
    try {
      if (typeof import.meta !== 'undefined' && import.meta.env) {
        rawUrl = import.meta.env.VITE_API_BASE_URL || import.meta.env.NEXT_PUBLIC_API_URL;
      }
    } catch {
      // ignore
    }
  }

  const trimmed = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (trimmed) {
    return trimmed.replace(/\/+$/, '');
  }

  const isProduction =
    (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') ||
    (typeof import.meta !== 'undefined' && (import.meta.env?.PROD || import.meta.env?.MODE === 'production'));

  if (isProduction) {
    throw new Error(
      '[API Config] Missing required environment variable: VITE_API_BASE_URL. ' +
      'In production environment, VITE_API_BASE_URL must be configured. ' +
      'Refusing to connect to any unconfigured server.'
    );
  }

  return 'http://localhost:8000';
}

export const API_BASE_URL = getApiBaseUrl();
