import styles from './ErrorFallback.module.scss';

export default function ErrorFallback({
  resetErrorBoundary,
  height,
}: {
  resetErrorBoundary: () => void;
  height?: string;
}) {
  return (
    <div className={styles.error} style={{ height }}>
      <p>
        죄송해요! <br /> 잠시 후 다시 시도해주세요!
      </p>

      <button type="button" onClick={resetErrorBoundary}>
        다시 시도하기
      </button>
    </div>
  );
}
