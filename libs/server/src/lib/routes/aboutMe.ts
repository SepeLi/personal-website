import { getAboutMePageContent } from '@personal-website/procedures';
import { publicProcedure, router } from '../trpc';

export const aboutMeRouter = router({
  getAboutMePageContent: publicProcedure.query(getAboutMePageContent),
});
