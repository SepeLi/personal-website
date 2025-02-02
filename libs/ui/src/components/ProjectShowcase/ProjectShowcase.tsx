'use client';

import { ProjectShowcase as ProjectShowcaseProps } from '@personal-website/procedures';
import { useRouter } from 'next/navigation';
import { Card } from '../Card/Card';
import styles from './project-showcase.module.css';

export const ProjectShowcase = ({
  title,
  projects,
  buttonText,
  buttonLink,
}: ProjectShowcaseProps) => {
  const router = useRouter();

  const handleProjectClick = (link: string) => {
    router.push(`/projects/${link}`);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

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
                      project.slug?.current &&
                      handleProjectClick(project.slug.current)
                    }
                  >
                    <span className={styles['project-year']}>
                      {new Date(project.timeStarted).toLocaleDateString(
                        'en-GB'
                      )}
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
        onClick={() => router.push(buttonLink)}
      >
        {buttonText}
      </button>
    </section>
  );
};
