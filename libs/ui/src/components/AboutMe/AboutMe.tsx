import { AboutMe as AboutMeProps } from '@personal-website/procedures';
import { SanityContent } from '@personal-website/sanity-toolkit';
import styles from './about-me.module.css';

export const AboutMe = ({ title, content }: AboutMeProps) => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>{title}</h1>
      <div className={styles['content']}>
        <SanityContent value={content} />
      </div>
    </div>
  );
};
