import {
  aboutMeRouter,
  homepageRouter,
  projectRouter,
  projectsPageRouter,
} from './routes';
import { contactMeRouter } from './routes/contactMe';
import { router } from './trpc';

export const appRouter = router({
  project: projectRouter,
  homepage: homepageRouter,
  aboutMe: aboutMeRouter,
  projectsPage: projectsPageRouter,
  contactMe: contactMeRouter,
});

export type AppRouter = typeof appRouter;
