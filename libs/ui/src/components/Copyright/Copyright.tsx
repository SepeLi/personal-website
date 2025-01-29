import styles from './copyright.module.css';

export const Copyright = () => {
  return (
    <div className={styles.container}>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </div>
  );
};
