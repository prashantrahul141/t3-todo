import { type NextPage } from 'next';
import CompHead from '@components/common/CompHead';
import TopBar from '@components/common/TopBar';
import { useSession } from 'next-auth/react';
import Welcome from '@components/home/welcome';
import Loading from '@components/common/Loading';
import FoldersView from '@components/home/foldersview';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status == 'unauthenticated') {
    return (
      <>
        <Welcome></Welcome>
      </>
    );
  } else if (status == 'authenticated') {
    return (
      <>
        <CompHead headTitle='Home'></CompHead>
        <FoldersView></FoldersView>
        <TopBar avatarUrl={session.user?.image}></TopBar>
      </>
    );
  }

  return (
    <>
      <Loading></Loading>
    </>
  );
};

export default Home;
