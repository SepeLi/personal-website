import { aboutMeRouter, homepageRouter, projectRouter } from './routes';
import { router } from './trpc';

export const appRouter = router({
  project: projectRouter,
  homepage: homepageRouter,
  aboutMe: aboutMeRouter,
});

export type AppRouter = typeof appRouter;
