import { useRouter } from 'next/router';
import styles from './BackButton.module.css';

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className={styles.backButton} onClick={handleClick}>
      <svg className={styles.icon} viewBox="0 0 24 24">
        <path fill="currentColor" d="M14.5 3l-9.5 9.5 9.5 9.5"></path>
      </svg>
    </button>
  );
};

export default BackButton;