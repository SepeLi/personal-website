import { getHomePageContent } from '@personal-website/procedures';
import { publicProcedure, router } from '../trpc';

export const homepageRouter = router({
  getHomePageContent: publicProcedure.query(getHomePageContent),
});
