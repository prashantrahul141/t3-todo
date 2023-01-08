import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import TopBar from '@components/common/TopBar';
import FolderForm from '@components/forms/newfolderform';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const NewFolder: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const createFolder = (folderName: string, folderColor: string) => {
    console.log(folderName, folderColor);
  };

  if (status == 'authenticated') {
    return (
      <>
        <CompHead headTitle='New Folder'></CompHead>
        <TopBar avatarUrl={session.user?.image}></TopBar>
        <FolderForm
          titleText='Create New Folder'
          folderName={undefined}
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
