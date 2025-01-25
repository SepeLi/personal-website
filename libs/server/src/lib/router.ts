import { projectRouter } from './routes';
import { router } from './trpc';

export const appRouter = router({
  project: projectRouter,
});

export type AppRouter = typeof appRouter;
