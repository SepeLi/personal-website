import { initTRPC } from '@trpc/server';
import { TRPCContext } from './context';

const trpc = initTRPC.context<TRPCContext>().create();

export const router = trpc.router;
export const createCallerFactory = trpc.createCallerFactory;
export const publicProcedure = trpc.procedure;
export const middleware = trpc.middleware;
