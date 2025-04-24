import styles from './ErrorFallback.module.scss';

export default function ErrorFallback() {
  return (
    <div className={styles.error}>
      <h2>
        죄송해요!
        <br /> 잠시 후 다시 시도해주세요!
      </h2>
      <p>문제가 지속되면 고객센터로 문의해주세요.</p>

      <button type="button" onClick={() => window.location.reload()}>
        다시 시도하기
      </button>
    </div>
  );
}
