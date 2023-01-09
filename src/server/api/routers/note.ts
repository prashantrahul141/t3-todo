import { z } from 'zod';
import { prisma } from 'src/server/db';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const noteRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        noteName: z.string(),
        folderId: z.string(),
        color: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const parentFolder = await prisma.notesFolder.findUnique({
        where: { id: input.folderId },
        include: {
          User: true,
        },
      });

      if (parentFolder !== null && parentFolder.userId === input.userId) {
        const noteCreated = await prisma.note.create({
          data: {
            title: input.noteName,
            color: input.color,
            notesFolderId: input.folderId,
          },
        });

        return { newNoteId: noteCreated.id };
      }
    }),
});
