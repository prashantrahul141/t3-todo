import { z } from 'zod';
import { prisma } from 'src/server/db';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const folderRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        folderName: z.string(),
        folderDesc: z.string().nullable(),
        folderColor: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const folderCreated = await prisma.notesFolder.create({
        data: {
          name: input.folderName,
          description: input.folderDesc,
          color: input.folderColor,
          userId: ctx.session.user.id,
        },
      });
      return {
        folder_id: folderCreated.id,
      };
    }),

  list: protectedProcedure.query(async ({ ctx }) => {
    const folders = await prisma.notesFolder.findMany({
      where: {
        userId: {
          equals: ctx.session.user.id,
        },
      },
    });
    return {
      folders,
    };
  }),

  get: protectedProcedure
    .input(z.object({ folder_id: z.string() }))
    .query(async ({ input, ctx }) => {
      const foundFolder = await prisma.notesFolder.findUnique({
        where: {
          id: input.folder_id,
        },
        include: {
          Notes: true,
        },
      });

      if (foundFolder !== null && foundFolder.userId == ctx.session.user.id) {
        return {
          status: 200,
          foundFolder: foundFolder,
        };
      }
      return {
        status: 404,
      };
    }),
});
