import { getAllProjects } from '@personal-website/procedures';
import { publicProcedure, router } from '../trpc';

export const projectRouter = router({
  getAllProjects: publicProcedure.query(getAllProjects),
});
