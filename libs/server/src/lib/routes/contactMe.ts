import {
  getContactMePageContent,
  sendEmail,
} from '@personal-website/procedures';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const sendEmailSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  subject: z.string(),
  message: z.string(),
});

export const contactMeRouter = router({
  getContactMePageContent: publicProcedure.query(getContactMePageContent),
  sendEmail: publicProcedure
    .input(sendEmailSchema)
    .mutation(async (opt) => sendEmail(opt.input)),
});
