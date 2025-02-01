import classNames from 'classnames';
import Link from 'next/link';
import styles from './hero.module.css';

interface HeroProps {
  title: string;
  description: string;
  subDescription: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export const Hero = ({
  title,
  description,
  subDescription,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) => {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['gradient-top']}>
        <div className={styles['gradient-top-inner']} />
      </div>
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>{title}</h1>
        <p className={styles['hero-description']}>{description}</p>
        <p className={styles['hero-sub-description']}>{subDescription}</p>
        <div className={styles['button-container']}>
          {primaryButtonText && (
            <Link href={primaryButtonLink} className="button-primary">
              {primaryButtonText}
            </Link>
          )}
          {secondaryButtonText && (
            <Link
              href={secondaryButtonLink}
              className={classNames(
                'button-secondary',
                styles['secondary-button']
              )}
            >
              {secondaryButtonText} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
      <div className={styles['gradient-bottom']}>
        <div className={styles['gradient-bottom-inner']} />
      </div>
    </section>
  );
};
