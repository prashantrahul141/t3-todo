import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import TopBar from '@components/common/TopBar';
import FolderNotFound from '@components/errors/foldernotfound';
import { api } from '@utils/api';
import { useSession } from 'next-auth/react';
import type { FC } from 'react';

const FolderView: FC<{ folder_id: string }> = ({ folder_id }) => {
  const { data: session } = useSession();
  const foundFolder = api.folder.get.useQuery({
    folder_id: folder_id,
    // @ts-ignore: checked in parent component
    userid: session?.user?.id,
  });

  if (foundFolder.data?.status === 200) {
    return (
      <>
        <CompHead headTitle={foundFolder.data.foundNote?.name}></CompHead>
        <TopBar avatarUrl={session?.user?.image}></TopBar>
      </>
    );
  } else if (foundFolder.data?.status === 404) {
    return (
      <>
        <CompHead headTitle='Not Found'></CompHead>
        <FolderNotFound folder_id={folder_id}></FolderNotFound>
        <TopBar avatarUrl={session?.user?.image}></TopBar>
      </>
    );
  }

  return <Loading></Loading>;
};

export default FolderView;
