import Loading from '@components/common/Loading';
import FolderView from '@components/views/folderview';
import type { NextPageContext } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  const { folder_id } = query;
  return {
    props: {
      folder_id,
    },
  };
};

const ViewFolder: FC<{ folder_id: string }> = ({ folder_id }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    return <FolderView folder_id={folder_id}></FolderView>;
  } else if (status === 'unauthenticated') {
    router.push('/signin');
  }
  return (
    <>
      <Loading></Loading>
    </>
  );
};
export default ViewFolder;
