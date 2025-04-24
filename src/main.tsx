import { ErrorFallback, Loader } from '@shared/components';
import { Provider } from 'jotai';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import './shared/styles/global.scss';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Provider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
