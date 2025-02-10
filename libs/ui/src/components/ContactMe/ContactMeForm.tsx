'use client';

import { ContactMe as ContactMeProps } from '@personal-website/procedures';
import {
  Provider as TRPCProvider,
  browserClient as trpc,
} from '@personal-website/server';
import classNames from 'classnames';
import { FC, useActionState } from 'react';
import styles from './contact-me.module.css';

const ContactMeFormComponent = ({
  formFields,
  buttonText,
}: Partial<ContactMeProps>) => {
  const sendEmail = trpc.contactMe.sendEmail.useMutation();
  const [data, submitAction, isPending] = useActionState(
    async (previousState: unknown, formData: FormData) => {
      try {
        await sendEmail.mutateAsync({
          email: formData.get('email') as string,
          name: formData.get('name') as string,
          subject: formData.get('subject') as string,
          message: formData.get('message') as string,
        });
      } catch {
        return {
          error:
            'Oops! Something went wrong. Please try again or email me directly at seanpeterlee1994@gmail.com',
        };
      }
      return {
        message:
          "Thanks for reaching out! I'll get back to you as soon as possible.",
      };
    },
    null
  );
  return (
    <div className={styles['form-container']}>
      <form className={styles.form} action={submitAction}>
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
          className={classNames(
            'button-primary',
            styles['submit-button'],
            isPending && styles.loading,
            data?.error && styles.error,
            data?.message && styles.success
          )}
          disabled={isPending || data !== null}
        >
          {isPending ? (
            <div className={styles.loader}>
              <div className={styles['loader-spinner']} />
              <span>Sending...</span>
            </div>
          ) : data ? (
            <div className={styles.status}>
              {data.error ? (
                <>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5C7.5 4.5 4.5 7.5 4.5 12C4.5 16.5 7.5 19.5 12 19.5C16.5 19.5 19.5 16.5 19.5 12C19.5 7.5 16.5 4.5 12 4.5ZM15.75 14.25L14.25 15.75L12 13.5L9.75 15.75L8.25 14.25L10.5 12L8.25 9.75L9.75 8.25L12 10.5L14.25 8.25L15.75 9.75L13.5 12L15.75 14.25Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>{data.error}</span>
                </>
              ) : (
                <>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5C7.5 4.5 4.5 7.5 4.5 12C4.5 16.5 7.5 19.5 12 19.5C16.5 19.5 19.5 16.5 19.5 12C19.5 7.5 16.5 4.5 12 4.5ZM10.5 15.75L6.75 12L8.25 10.5L10.5 12.75L15.75 7.5L17.25 9L10.5 15.75Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>{data.message}</span>
                </>
              )}
            </div>
          ) : (
            buttonText
          )}
        </button>
      </form>
    </div>
  );
};

export const ContactMeForm: FC<Partial<ContactMeProps>> = (props) => (
  <TRPCProvider>
    <ContactMeFormComponent {...props} />
  </TRPCProvider>
);
