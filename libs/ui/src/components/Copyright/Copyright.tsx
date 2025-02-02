import { Copyright as CopyrightProps } from '@personal-website/procedures';
import styles from './copyright.module.css';

export const Copyright = ({ text }: CopyrightProps) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
};
