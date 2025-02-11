import {
  getAllProjects,
  getHomePageContent,
  getProjectBySlug,
} from '@personal-website/procedures';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const projectRouter = router({
  getAllProjects: publicProcedure.query(getAllProjects),
  getProjectBySlug: publicProcedure
    .input(z.string())
    .mutation(async (opt) => getProjectBySlug(opt.input)),
  getHomePageContent: publicProcedure.query(getHomePageContent),
});
