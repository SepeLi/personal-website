'use client';

import { NavigationLink } from '@personal-website/procedures';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { NavLink } from './NavLink';
import styles from './nav-bar.module.css';

interface NavBarProps {
  siteName: string;
  items: NavigationLink[];
}

export const NavBar = ({ items, siteName }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbar-content']}>
        <Link href="/" className={styles['logo']}>
          <h1>{siteName}</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles['desktop-menu']}>
          {items?.map(({ link, label }, idx) => (
            <NavLink key={idx} href={link} label={label} />
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <HamburgerButton
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Navigation */}
      <div
        className={classNames(styles['mobile-menu'], {
          [styles['active']]: isMenuOpen,
        })}
      >
        <div className={styles['mobile-menu-content']}>
          {items.map(({ link, label }, idx) => (
            <NavLink
              key={idx}
              href={link}
              onClick={() => setIsMenuOpen(false)}
              label={label}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
