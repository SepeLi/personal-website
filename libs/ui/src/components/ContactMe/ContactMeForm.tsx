import { ContactMe as ContactMeProps } from '@personal-website/procedures';
import classNames from 'classnames';
import styles from './contact-me.module.css';

export const ContactMeForm = ({
  formFields,
  buttonText,
}: Partial<ContactMeProps>) => (
  <div className={styles['form-container']}>
    <form className={styles.form}>
      <div className={styles['input-grid']}>
        {formFields?.map((field) => (
          <div
            key={field.id}
            className={styles['input-group']}
            style={{ gridColumn: field.fullWidth ? '1 / -1' : 'auto' }}
          >
            <label htmlFor={field.id} className={styles.label}>
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                className={classNames('input-field', styles.textarea)}
                placeholder={field.placeholder}
                required={field.required}
                rows={field.rows}
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="input-field"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className={classNames('button-primary', styles['submit-button'])}
      >
        {buttonText}
      </button>
    </form>
  </div>
);
