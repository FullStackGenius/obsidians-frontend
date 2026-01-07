import { cookies } from "next/headers";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiOptions extends RequestInit {
  token?: string; // optional manual token
  useAuth?: boolean; // default: true
}

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:2001";

export async function apiServer<T>(
  endpoint: string,
  method: HttpMethod = "GET",
  body?: any,
  options: ApiOptions = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  // 🔹 Read cookies from Next.js request
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  // 🔹 Build headers (use Headers object)
  const headers = new Headers({
    Accept: "application/json",
    ...(body && !(body instanceof FormData)
      ? { "Content-Type": "application/json" }
      : {}),
    ...options.headers,
  });

  // 🔹 Attach Authorization header (default ON)
  if (options.useAuth !== false && authToken) {
    headers.set("Authorization", `Bearer ${authToken}`);
  }

  // 🔹 Build request config
  const config: RequestInit = {
    method,
    headers,
    ...(body && !(body instanceof FormData)
      ? { body: JSON.stringify(body) }
      : body instanceof FormData
      ? { body }
      : {}),
  };

  // 🔹 Debug safely (no confusion)
  console.log("REQUEST →", {
    url,
    method,
    headers: Object.fromEntries(headers.entries()),
  });
  console.log(config);
  const response = await fetch(url, config);

  if (!response.ok) {
    let message = response.statusText;
    try {
      const err = await response.json();
      message = err.message || message;
    } catch {}
    throw new Error(`API Error ${response.status}: ${message}`);
  }

  if (response.status === 204) return {} as T;

  return (await response.json()) as T;
}

/* ===============================
   Convenience helpers
================================ */

export const get = <T>(endpoint: string, opts?: ApiOptions) =>
  apiServer<T>(endpoint, "GET", undefined, opts);

export const post = <T>(endpoint: string, body?: any, opts?: ApiOptions) =>
  apiServer<T>(endpoint, "POST", body, opts);

export const postForm = <T>(
  endpoint: string,
  formData: FormData,
  opts?: ApiOptions
) =>
  apiServer<T>(endpoint, "POST", formData, {
    ...opts,
  });
