import { Carousel } from '@/features/banner';
import { ContentSlides, NavigationTab } from '@/features/curation';
import { ErrorFallback, Footer, Loader } from '@/shared/components';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <NavigationTab />

      <main className={styles.main}>
        <ErrorBoundary
          fallbackRender={({ resetErrorBoundary }) => (
            <ErrorFallback
              resetErrorBoundary={resetErrorBoundary}
              height="250px"
            />
          )}
        >
          <Suspense fallback={<Loader height="250px" />}>
            <Carousel />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary
          fallbackRender={({ resetErrorBoundary }) => (
            <ErrorFallback
              resetErrorBoundary={resetErrorBoundary}
              height="550px"
            />
          )}
        >
          <Suspense fallback={<Loader height="550px" />}>
            <ContentSlides />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
