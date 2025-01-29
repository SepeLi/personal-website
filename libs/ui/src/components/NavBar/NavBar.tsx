'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { NavLink } from './NavLink';
import styles from './nav-bar.module.css';

interface NavItem {
  href: string;
  label: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

export const NavBar = ({ navItems }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbar-content']}>
        <Link href="/" className={styles['logo']}>
          <h1>Logo.</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles['desktop-menu']}>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
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
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
