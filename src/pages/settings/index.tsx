import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import TopBar from '@components/common/TopBar';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Settings: NextPage = () => {
  // user settings page
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == 'authenticated') {
    return (
      <>
        <CompHead headTitle='Settings'></CompHead>
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

export default Settings;
