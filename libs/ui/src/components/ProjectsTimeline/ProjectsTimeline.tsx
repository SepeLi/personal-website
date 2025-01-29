'use client';

import { useRouter } from 'next/navigation';
import { Card } from '../Card/Card';
import styles from './projects-timeline.module.css';

interface Project {
  title: string;
  description: string;
  year: string;
  slug?: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Built a full-stack e-commerce platform using Next.js and Stripe integration. asdfqwer awe fsdf wqae rase fasdf wer ',
    year: '2024',
    slug: 'e-commerce-platform',
  },
  {
    title: 'Interactive Portfolio',
    description:
      'Designed and developed an interactive portfolio website with 3D elements',
    year: '2023',
    slug: 'interactive-portfolio',
  },
  {
    title: 'Motion Graphics Showreel',
    description:
      'Created a series of animated motion graphics for various clients',
    year: '2023',
    slug: 'motion-graphics',
  },
];

export function ProjectsTimeline() {
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>My Journey & Projects</h2>

      <div className={styles.timeline}>
        {/* Timeline line */}
        <div className={styles['timeline-line']} />

        {/* Timeline items */}
        <div className={styles['projects']}>
          {projects.map((project, index) => {
            const isEven = (index + 1) % 2 === 0;

            return (
              <div key={index} className={styles['project']}>
                <div
                  className={`
                    ${styles['project-content']}
                    ${isEven ? styles['even'] : styles['odd']}
                  `}
                >
                  <Card
                    onClick={() =>
                      project.slug && handleProjectClick(project.slug)
                    }
                  >
                    <span className={styles['project-year']}>
                      {project.year}
                    </span>
                    <h3 className={styles['project-title']}>{project.title}</h3>
                    <p className={styles['project-description']}>
                      {project.description}
                    </p>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className={styles['timeline-dot']} />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={`button-primary ${styles['view-all-button']}`}
        onClick={() => router.push('/projects')}
      >
        View All Projects
      </button>
    </section>
  );
}
