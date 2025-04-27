import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import { Providers } from './Providers';
import { ErrorFallback } from './shared/components';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
        )}
      >
        <Providers>
          <App />
        </Providers>
      </ErrorBoundary>
    </StrictMode>,
  );
});
