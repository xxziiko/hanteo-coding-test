import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>{children}</Provider>
    </QueryClientProvider>
  );
}
