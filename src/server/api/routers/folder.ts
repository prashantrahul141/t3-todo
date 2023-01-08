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
    .mutation(async ({ input }) => {
      const folderCreated = await prisma.notesFolder.create({
        data: {
          name: input.folderName,
          description: input.folderDesc,
          color: input.folderColor,
        },
      });
      return {
        folder_id: folderCreated.id,
      };
    }),

  list: protectedProcedure.query(async () => {
    const folders = await prisma.notesFolder.findMany();
    return {
      folders,
    };
  }),

  get: protectedProcedure
    .input(z.object({ folder_id: z.string(), userid: z.string().nullable() }))
    .query(async ({ input }) => {
      const foundNote = await prisma.notesFolder.findUnique({
        where: {
          id: input.folder_id,
        },
      });
      if (foundNote !== null && foundNote.userId == input.userid) {
        return {
          status: 200,
          ...foundNote,
        };
      }
      return {
        status: 404,
      };
    }),
});
