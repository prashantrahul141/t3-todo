import { createTRPCRouter } from './trpc';
import { folderRouter } from './routers/folder';
import { noteRouter } from './routers/note';
import { taskRouter } from './routers/task';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  folder: folderRouter,
  note: noteRouter,
  task: taskRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
