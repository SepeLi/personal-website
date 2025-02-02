import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiAdobeillustrator,
  SiAdobexd,
  SiExpress,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiSanity,
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
      {
        Icon: SiTypescript,
        name: 'TypeScript',
        color: '#2563eb',
      },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#3b82f6' },
    ],
  },
  {
    title: 'Backend & Database',
    tools: [
      { Icon: FaNodeJs, name: 'Node.js', color: '#16a34a' },
      { Icon: SiMongodb, name: 'MongoDB', color: '#22c55e' },
      { Icon: SiSanity, name: 'Sanity', color: '#f03e2f' },
      { Icon: SiExpress, name: 'Express', color: '#000000' },
    ],
  },
  {
    title: 'Design',
    tools: [
      { Icon: FaFigma, name: 'Figma', color: '#9333ea' },
      { Icon: SiAdobeillustrator, name: 'Adobe Illustrator', color: '#ff9a00' },
      { Icon: SiAdobexd, name: 'Adobe Xd', color: '#ff61f6' },
    ],
  },
  {
    title: 'Dev Tools',
    tools: [
      { Icon: FaGitAlt, name: 'Git', color: '#ea580c' },
      { Icon: SiPostman, name: 'Postman', color: '#ff6c37' },
      { Icon: SiOpenai, name: 'OpenAI', color: '#00A67E' },
      { Icon: SiJira, name: 'Jira', color: '#0052cc' },
    ],
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
