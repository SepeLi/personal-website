import { FaFigma, FaGitAlt, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa';
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import styles from './tech-stack-showcase.module.css';

const TECH_STACK = [
  {
    title: 'Frontend',
    tools: [
      { Icon: SiNextdotjs, name: 'Next.js', color: '#111827' },
      { Icon: FaReact, name: 'React', color: '#3b82f6' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#3b82f6' },
      {
        Icon: SiTypescript,
        name: 'TypeScript',
        color: '#2563eb',
      },
    ],
  },
  {
    title: 'Backend & Database',
    tools: [
      { Icon: FaNodeJs, name: 'Node.js', color: '#16a34a' },
      { Icon: SiMongodb, name: 'MongoDB', color: '#22c55e' },
      { Icon: FaStripe, name: 'Stripe', color: '#a855f7' },
    ],
  },
  {
    title: 'Design',
    tools: [
      { Icon: FaFigma, name: 'Figma', color: '#9333ea' },
      {
        Icon: SiAdobeaftereffects,
        name: 'After Effects',
        color: '#1e40af',
      },
      {
        Icon: SiAdobepremierepro,
        name: 'Premiere Pro',
        color: '#6b21a8',
      },
    ],
  },
  {
    title: 'Dev Tools',
    tools: [{ Icon: FaGitAlt, name: 'Git', color: '#ea580c' }],
  },
];

export const TechStackShowcase = () => {
  return (
    <section className={styles['tech-stack-section']}>
      <h2 className={styles['section-title']}>Technologies I Work With</h2>

      <div className={styles['category-grid']}>
        {TECH_STACK.map((category) => (
          <div key={category.title} className={styles['category-card']}>
            <h3 className={styles['category-title']}>{category.title}</h3>
            <div className={styles['tools-grid']}>
              {category.tools.map((tool) => (
                <div key={tool.name} className={styles['tool-item']}>
                  <tool.Icon
                    className={styles['tool-icon']}
                    style={{ color: tool.color }}
                  />
                  <span className={styles['tool-name']}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
