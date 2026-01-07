// src/lib/api/clientFetch.ts
type Options = RequestInit & { auth?: boolean };

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function clientFetch<T>(
  endpoint: string,
  options: Options = {}
): Promise<T> {
  const { auth = true, headers, ...rest } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...rest,
    credentials: auth ? "include" : "omit",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) throw data;

  return data;
}
