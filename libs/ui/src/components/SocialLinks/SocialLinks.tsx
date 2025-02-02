import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './social-links.module.css';

const socialLinks = [
  {
    id: 1,
    href: 'https://github.com/SepeLi',
    icon: FaGithub,
    label: 'GitHub',
    iconColor: '#333333',
    needsTarget: true,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/sean-li-bne/',
    icon: FaLinkedin,
    label: 'LinkedIn',
    iconColor: '#0077b5',
    needsTarget: true,
  },
  {
    id: 3,
    href: '/contact',
    icon: FaEnvelope,
    label: 'Email',
    iconColor: '#ea4335',
    needsTarget: false,
  },
];

export const SocialLinks = () => {
  return (
    <div className={styles['social-links-wrapper']}>
      {socialLinks.map(
        ({ id, href, icon: Icon, label, iconColor, needsTarget }) => (
          <a
            key={id}
            href={href}
            {...(needsTarget && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className={styles['social-link']}
            style={{ '--icon-color': iconColor } as React.CSSProperties}
            aria-label={label}
          >
            <Icon className={styles.icon} />
          </a>
        )
      )}
      {/* Vertical line - only shown on desktop */}
      <div className={styles['vertical-line']} />
    </div>
  );
};
