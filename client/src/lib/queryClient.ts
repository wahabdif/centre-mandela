import { QueryClient, QueryFunction } from '@tanstack/react-query';

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown,
): Promise<Response> {
  const headers: HeadersInit | undefined = data
    ? { 'Content-Type': 'application/json' }
    : undefined;

  const fetchOptions: RequestInit = {
    method,
    credentials: 'include',
    ...(headers && { headers }),
    ...(data && { body: JSON.stringify(data) }),
  };

  const res = await fetch(url, fetchOptions);

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = 'returnNull' | 'throw';

export function getQueryFn<T>(options: { on401: UnauthorizedBehavior }): QueryFunction<T> {
  return async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: 'include',
    });

    if (options.on401 === 'returnNull' && res.status === 401) {
      return null as unknown as T;
    }

    await throwIfResNotOk(res);
    return (await res.json()) as T;
  };
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: 'throw' }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
