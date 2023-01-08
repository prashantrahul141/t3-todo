import CompHead from '@components/common/CompHead';
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
        {foundFolder.data.foundNote?.name}
      </>
    );
  }
  return (
    <>
      <CompHead headTitle='Not Found'></CompHead>
      <TopBar avatarUrl={session?.user?.image}></TopBar>
      <FolderNotFound folder_id={folder_id}></FolderNotFound>
    </>
  );
};

export default FolderView;
