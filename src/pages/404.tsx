import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import NonLoginTopBar from '@components/common/NonLoginTopBar';
import TopBar from '@components/common/TopBar';
import FourZeroFourComp from '@components/errors/fourzerofourcomp';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const FourZeroFour: NextPage = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <>
        <CompHead headTitle='404'></CompHead>
        <TopBar avatarUrl={session.user?.image}></TopBar>
        <FourZeroFourComp></FourZeroFourComp>
      </>
    );
  } else if (status === 'unauthenticated') {
    return (
      <>
        <CompHead headTitle='404'></CompHead>
        <NonLoginTopBar></NonLoginTopBar>
        <FourZeroFourComp></FourZeroFourComp>
      </>
    );
  }
  return (
    <>
      <Loading></Loading>
    </>
  );
};

export default FourZeroFour;
