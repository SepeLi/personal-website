import { getContactMePageContent } from '@personal-website/procedures';
import { publicProcedure, router } from '../trpc';

export const contactMeRouter = router({
  getContactMePageContent: publicProcedure.query(getContactMePageContent),
});
