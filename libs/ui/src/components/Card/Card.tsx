import { ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Card({ children, onClick, className = '' }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`${styles.card} ${onClick ? styles.clickable : ''} ${className}`}
    >
      {children}
    </div>
  );
}
