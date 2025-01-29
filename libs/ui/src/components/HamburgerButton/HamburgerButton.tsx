import classNames from 'classnames';
import styles from './hamburger-button.module.css';

interface HamburgerButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton = ({
  isMenuOpen,
  onClick,
}: HamburgerButtonProps) => {
  return (
    <button
      className={styles['hamburger-button']}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className={styles['hamburger']}>
        {Array.from({ length: 3 }).map((_, index) => (
          <span
            key={index}
            className={classNames(styles['hamburger-line'], {
              [styles['active']]: isMenuOpen,
            })}
          />
        ))}
      </div>
    </button>
  );
};
