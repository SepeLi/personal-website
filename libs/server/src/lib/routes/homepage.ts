import {
  getHomePageContent,
  getPageWidgets,
} from '@personal-website/procedures';
import { publicProcedure, router } from '../trpc';

export const homepageRouter = router({
  getHomePageContent: publicProcedure.query(getHomePageContent),
  getPageWidgets: publicProcedure.query(getPageWidgets),
});
