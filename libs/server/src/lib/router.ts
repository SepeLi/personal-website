import { homepageRouter, projectRouter } from './routes';
import { router } from './trpc';

export const appRouter = router({
  project: projectRouter,
  homepage: homepageRouter,
});

export type AppRouter = typeof appRouter;
