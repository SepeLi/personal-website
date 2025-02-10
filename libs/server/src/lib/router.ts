import {
  aboutMeRouter,
  homepageRouter,
  projectRouter,
  projectsPageRouter,
} from './routes';
import { router } from './trpc';

export const appRouter = router({
  project: projectRouter,
  homepage: homepageRouter,
  aboutMe: aboutMeRouter,
  projectsPage: projectsPageRouter,
});

export type AppRouter = typeof appRouter;
