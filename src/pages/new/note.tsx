import Loading from '@components/common/Loading';
import TopBar from '@components/common/TopBar';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const NewNote: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == 'authenticated') {
    return (
      <>
        <TopBar avatarUrl={session.user?.image}></TopBar>
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
