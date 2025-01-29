// import styles from './ContactMe.module.css';

// const formFields = [
//   {
//     id: 'name',
//     label: 'Name',
//     type: 'text',
//     placeholder: 'John Doe',
//     required: true,
//   },
//   {
//     id: 'email',
//     label: 'Email',
//     type: 'email',
//     placeholder: 'john@example.com',
//     required: true,
//   },
//   {
//     id: 'subject',
//     label: 'Subject',
//     type: 'text',
//     placeholder: 'What is this regarding?',
//     required: true,
//     fullWidth: true,
//   },
//   {
//     id: 'message',
//     label: 'Message',
//     type: 'textarea',
//     placeholder: 'Your message here...',
//     required: true,
//     fullWidth: true,
//     rows: 6,
//   },
// ];

// export const ContactMe = () => {
//   return (
//     <section className={styles['contact-section']}>
//       <h2 className={styles.heading}>Get In Touch</h2>
//       <p className={styles.description}>
//         Have a question or want to work together? Feel free to send me a message.
//       </p>

//       <div className={styles['form-container']}>
//         <form className={styles.form}>
//           <div className={styles['input-grid']}>
//             {formFields.map((field) => (
//               <div
//                 key={field.id}
//                 className={styles['input-group']}
//                 style={{ gridColumn: field.fullWidth ? '1 / -1' : 'auto' }}
//               >
//                 <label htmlFor={field.id} className={styles.label}>
//                   {field.label}
//                 </label>
//                 {field.type === 'textarea' ? (
//                   <textarea
//                     id={field.id}
//                     name={field.id}
//                     className={styles.textarea}
//                     placeholder={field.placeholder}
//                     required={field.required}
//                     rows={field.rows}
//                   />
//                 ) : (
//                   <input
//                     type={field.type}
//                     id={field.id}
//                     name={field.id}
//                     className={styles.input}
//                     placeholder={field.placeholder}
//                     required={field.required}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           <button type="submit" className={styles['submit-button']}>
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };
import classNames from 'classnames';
import styles from './contact-me.module.css';

const formFields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'john@example.com',
    required: true,
  },
  {
    id: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'What is this regarding?',
    required: true,
    fullWidth: true,
  },
  {
    id: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Your message here...',
    required: true,
    fullWidth: true,
    rows: 6,
  },
];

export const ContactMe = () => {
  return (
    <section className={styles['contact-section']}>
      <h2 className={styles.heading}>Get In Touch</h2>
      <p className={styles.description}>
        Have a question or want to work together? Feel free to send me a
        message.
      </p>

      <div className={styles['form-container']}>
        <form className={styles.form}>
          <div className={styles['input-grid']}>
            {formFields.map((field) => (
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
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
