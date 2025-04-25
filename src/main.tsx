import { ErrorFallback, Loader } from '@/shared/components';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import './shared/styles/global.scss';
import App from './App';
import { Providers } from './Providers';

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
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Providers>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </Providers>
      </ErrorBoundary>
    </StrictMode>,
  );
});
