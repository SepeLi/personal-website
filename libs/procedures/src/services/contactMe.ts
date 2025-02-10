import { sanityFetch } from '@personal-website/sanity-toolkit';
import sendGridMail from '@sendgrid/mail';
import { defineQuery } from 'next-sanity';
import { ContactMe } from './homepage';

export const getContactMePageContent = async (): Promise<ContactMe> =>
  (
    await sanityFetch({
      query: defineQuery(
        `*[!(_id in path("drafts.**")) && _id == "contactMe"][0]{
          ...,
        }`
      ),
    })
  ).data;

export interface SendEmailParams {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export const sendEmail = async ({
  email,
  name,
  subject,
  message,
}: SendEmailParams) => {
  if (process.env.SENDGRID_API_KEY) {
    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
  } else {
    throw new Error('No SENDGRID_API_KEY found');
  }

  await sendGridMail.send({
    to: 'seanpeterlee1994@gmail.com',
    from: 'sean.li@colosl.com',
    subject,
    text: `Message from ${name}, email: ${email}:
    ${message}`,
  });

  return { status: 'ok', message: 'email sent' };
};
