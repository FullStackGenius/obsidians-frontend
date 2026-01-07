// src/lib/api/serverFetch.ts
import { cookies } from "next/headers";

type Options = RequestInit & { auth?: boolean };

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export default async function serverFetch<T>(
  endpoint: string,
  options: Options = {}
): Promise<T> {
  const { auth = true, headers, ...rest } = options;

  let token: string | undefined;

  if (auth) {
    const cookieStore = await cookies();
    token = cookieStore.get("auth_token")?.value;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) throw data;

  return data;
}
