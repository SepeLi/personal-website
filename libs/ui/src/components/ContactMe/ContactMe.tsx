import { ContactMe as ContactMeProps } from '@personal-website/procedures';
import styles from './contact-me.module.css';
import { ContactMeForm } from './ContactMeForm';

export const ContactMe = ({ title, description, ...rest }: ContactMeProps) => (
  <section className={styles['contact-section']}>
    <h2 className={styles.heading}>{title}</h2>
    <p className={styles.description}>{description}</p>
    <ContactMeForm {...rest} />
  </section>
);
