import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav-link.module.css';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavLink = ({ href, label, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={classNames(styles['container'], {
        [styles['active']]: isActive,
      })}
      onClick={onClick}
    >
      <p className={styles['label']}>{label}</p>
      <span
        className={classNames(styles['indicator'], {
          [styles['active']]: isActive,
        })}
      />
    </Link>
  );
};
