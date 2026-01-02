// src/lib/api/server.ts
import { cookies } from 'next/headers';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ApiOptions extends RequestInit {
  token?: string;           // optional override
  useAuth?: boolean;        // default: true on server
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2001';

export async function apiServer<T>(
  endpoint: string,
  method: HttpMethod = 'GET',
  body?: any,
  options: ApiOptions = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  const headers = new Headers({
    'Accept': 'application/json',
    ...(body && !(body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}),
    ...options.headers,
  });

  // 1. Try to get token automatically (Server Components are safe)
  let token = options.token;

  if (options.useAuth !== false) {
    token = token ?? cookies().get('auth_token')?.value;
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config: RequestInit = {
    method,
    headers,
    ...options,
    ...(body && !(body instanceof FormData)
      ? { body: JSON.stringify(body) }
      : { body }), // FormData goes as-is
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMessage = response.statusText;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {}
    
    throw new Error(`API Error ${response.status}: ${errorMessage}`);
  }

  // Handle empty responses (204, DELETE, etc)
  if (response.status === 204) return {} as T;

  return response.json() as Promise<T>;
}

// Convenience wrappers
export const get = <T>(endpoint: string, opts: ApiOptions = {}) =>
  apiServer<T>(endpoint, 'GET', undefined, opts);

export const post = <T>(endpoint: string, body?: any, opts: ApiOptions = {}) =>
  apiServer<T>(endpoint, 'POST', body, opts);

export const postForm = <T>(endpoint: string, formData: FormData, opts: ApiOptions = {}) =>
  apiServer<T>(endpoint, 'POST', formData, {
    ...opts,
    headers: { ...opts.headers }, // don't set Content-Type for FormData
  });