import { z } from 'zod';
import { prisma } from 'src/server/db';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const taskRouter = createTRPCRouter({
  changeState: protectedProcedure
    .input(
      z.object({ taskid: z.string(), state: z.boolean(), userid: z.string() })
    )
    .mutation(async ({ input }) => {
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
        presentTask.Note?.NotesFolder?.User?.id === input.userid
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
    .input(
      z.object({ text: z.string(), noteid: z.string(), userid: z.string() })
    )
    .mutation(async ({ input }) => {
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

      if (presentNote?.NotesFolder?.User?.id === input.userid) {
        const createdTask = await prisma.task.create({
          data: { text: input.text, noteId: input.noteid },
        });

        return { createdTask };
      }
    }),
});
