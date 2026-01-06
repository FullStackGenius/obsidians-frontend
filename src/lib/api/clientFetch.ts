"use client";

type Options = RequestInit & {
  auth?: boolean;
};

const clientFetch = async <T>(
  url: string,
  options: Options = {}
): Promise<T> => {
  const { auth = true, headers, ...rest } = options;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
    {
      ...rest,
      credentials: auth ? "include" : "omit", // 🔥 cookies
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    }
  );

  const data = await res.json().catch(() => null);

  if (!res.ok) throw data;
  return data;
};

export default clientFetch;
