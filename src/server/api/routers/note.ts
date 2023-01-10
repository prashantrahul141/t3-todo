import { z } from 'zod';
import { prisma } from 'src/server/db';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const noteRouter = createTRPCRouter({
  get: protectedProcedure
    .input(
      z.object({
        note_id: z.string(),
        folder_id: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const foundNoteData = await prisma.note.findUnique({
        where: {
          id: input.note_id,
        },
        include: {
          NotesFolder: {
            include: {
              User: true,
            },
          },
          tasks: true,
        },
      });

      if (
        foundNoteData !== null &&
        foundNoteData.NotesFolder?.id === input.folder_id &&
        foundNoteData.NotesFolder.userId === ctx.session.user.id
      ) {
        return {
          status: 200,
          foundNoteData: foundNoteData,
        };
      }

      return {
        status: 404,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        noteName: z.string(),
        folderId: z.string(),
        color: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const parentFolder = await prisma.notesFolder.findUnique({
        where: { id: input.folderId },
        include: {
          User: true,
        },
      });

      if (
        parentFolder !== null &&
        parentFolder.userId === ctx.session.user.id
      ) {
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
