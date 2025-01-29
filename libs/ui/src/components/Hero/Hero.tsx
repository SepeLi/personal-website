import classNames from 'classnames';
import Link from 'next/link';
import styles from './hero.module.css';

export const Hero = () => {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['gradient-top']}>
        <div className={styles['gradient-top-inner']} />
      </div>
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>Multimedia Developer</h1>
        <p className={styles['hero-description']}>
          I&apos;m a passionate Multimedia Developer specializing in creating
          engaging digital experiences through various media formats.
        </p>
        <p className={styles['hero-sub-description']}>
          With expertise in web development, video production, animation, and
          interactive media, I bring creative concepts to life using
          cutting-edge technologies and industry best practices.
        </p>
        <div className={styles['button-container']}>
          <Link href="/about" className="button-primary">
            Explore More
          </Link>
          <Link
            href="/contact"
            className={classNames(
              'button-secondary',
              styles['secondary-button']
            )}
          >
            Contact Me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className={styles['gradient-bottom']}>
        <div className={styles['gradient-bottom-inner']} />
      </div>
    </section>
  );
};
