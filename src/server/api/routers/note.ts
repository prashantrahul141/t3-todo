import { z } from 'zod';
import { prisma } from 'src/server/db';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const noteRouter = createTRPCRouter({
  get: protectedProcedure
    .input(
      z.object({
        note_id: z.string(),
        folder_id: z.string(),
        userid: z.string(),
      })
    )
    .query(async ({ input }) => {
      const foundNote = await prisma.note.findUnique({
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
        foundNote !== null &&
        foundNote.NotesFolder?.id === input.folder_id &&
        foundNote.NotesFolder.userId === input.userid
      ) {
        return {
          status: 200,
          foundNote: foundNote,
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
