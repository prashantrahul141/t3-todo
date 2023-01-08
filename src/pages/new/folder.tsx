import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import TopBar from '@components/common/TopBar';
import FolderForm from '@components/forms/newfolderform';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '@utils/api';

const NewFolder: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const mutation = api.folder.create.useMutation();

  const createFolder = (
    folderName: string,
    folderDesc: string | null = null,
    folderColor: string
  ) => {
    mutation.mutate({
      folderName,
      folderDesc,
      folderColor,
      userId: session ? (session.user ? session.user.id : null) : null,
    });
  };

  if (status == 'authenticated') {
    if (mutation.isSuccess) {
      router.push(`/view/${mutation.data.folder_id}`);
    }
    return (
      <>
        <CompHead headTitle='New Folder'></CompHead>
        <TopBar avatarUrl={session.user?.image}></TopBar>
        <FolderForm
          titleText='Create New Folder'
          folderName={undefined}
          folderDesc={undefined}
          folderColor={undefined}
          callBackFunc={createFolder}
          buttonText='Create Folder'></FolderForm>
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

export default NewFolder;
