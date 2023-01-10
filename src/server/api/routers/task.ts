import { z } from 'zod';
import { prisma } from 'src/server/db';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const taskRouter = createTRPCRouter({
  changeState: protectedProcedure
    .input(z.object({ taskid: z.string(), state: z.boolean() }))
    .mutation(async ({ input, ctx }) => {
      const presentTask = await prisma.task.findUnique({
        where: {
          id: input.taskid,
        },
        include: {
          Note: {
            include: {
              NotesFolder: {
                include: {
                  User: true,
                },
              },
            },
          },
        },
      });

      if (
        presentTask !== null &&
        presentTask.Note?.NotesFolder?.User?.id === ctx.session.user.id
      ) {
        const changedTask = await prisma.task.update({
          where: {
            id: input.taskid,
          },
          data: {
            done: input.state,
          },
        });

        return {
          state: true,
          changedTask,
        };
      }

      return {
        state: false,
      };
    }),

  create: protectedProcedure
    .input(z.object({ text: z.string(), noteid: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const presentNote = await prisma.note.findUnique({
        where: {
          id: input.noteid,
        },
        include: {
          NotesFolder: {
            include: {
              User: true,
            },
          },
        },
      });

      if (presentNote?.NotesFolder?.User?.id === ctx.session.user.id) {
        const createdTask = await prisma.task.create({
          data: { text: input.text, noteId: input.noteid },
        });

        return { createdTask };
      }
    }),
});
