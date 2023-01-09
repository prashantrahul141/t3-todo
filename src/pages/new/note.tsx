import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import TopBar from '@components/common/TopBar';
import NoteForm from '@components/forms/noteform';
import { api } from '@utils/api';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const NewNote: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const mutation = api.note.create.useMutation();

  const createNote = async (
    noteName: string,
    noteFolderId: string,
    noteColor: string
  ) => {
    const createdNoteId = await mutation.mutateAsync({
      folderId: noteFolderId,
      noteName: noteName,
      color: noteColor,
      userId: session?.user?.id || '#',
    });

    router.push(`/view/${noteFolderId}/${createdNoteId?.newNoteId}`);
  };

  if (status == 'authenticated') {
    return (
      <>
        <CompHead headTitle='New Note'></CompHead>
        <TopBar avatarUrl={session.user?.image}></TopBar>
        <NoteForm
          titleText='Create New Note'
          noteName={undefined}
          noteFolderName={undefined}
          noteColor={undefined}
          callBackFunc={createNote}
          buttonText='Create Note'></NoteForm>
      </>
    );
  } else if (status == 'unauthenticated') {
    router.push('/signin');
  }

  return (
    <>
      <Loading></Loading>
    </>
  );
};

export default NewNote;
