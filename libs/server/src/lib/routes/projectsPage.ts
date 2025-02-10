import { getProjectsPageContent } from '@personal-website/procedures';
import { publicProcedure, router } from '../trpc';

export const projectsPageRouter = router({
  getProjectsPageContent: publicProcedure.query(getProjectsPageContent),
});
