import { createContext } from '@personal-website/server/lib/context';
import { appRouter } from '@personal-website/server/lib/router';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

// Using a namespaced router, our trpc endpoints look like: http://localhost:4200/api/{namespace}.{procedure}
const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api',
    req,
    router: appRouter,
    createContext: async () =>
      await createContext({ req, resHeaders: {} as Headers }),
  });
};

export { handler as GET, handler as POST };
