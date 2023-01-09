import Loading from '@components/common/Loading';
import NoteView from '@components/views/noteview';
import type { NextPageContext } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  const { folder_id, note_id } = query;
  return {
    props: {
      folder_id: folder_id || '#',
      note_id: note_id || '#',
    },
  };
};

const ViewNote: FC<{ folder_id: string; note_id: string }> = ({
  folder_id,
  note_id,
}) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    return (
      <>
        <NoteView folder_id={folder_id} note_id={note_id}></NoteView>
      </>
    );
  } else if (status === 'unauthenticated') {
    router.push('/signin');
  }

  return (
    <>
      <Loading></Loading>
    </>
  );
};
export default ViewNote;
