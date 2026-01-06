const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:2001"

export async function getClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(
    `${BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`,
    {
      credentials: "include", // 🔥 browser sends HttpOnly cookie
      headers: {
        Accept: "application/json",
        ...options.headers,
      },
      ...options,
    }
  )

  if (!res.ok) {
    let message = res.statusText
    try {
      const data = await res.json()
      message = data.message || message
    } catch {}
    throw new Error(message)
  }

  if (res.status === 204) return {} as T
  return res.json()
}
