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
        {/* landing page for non logged in users */}
        <Welcome></Welcome>
      </>
    );
  } else if (status == 'authenticated') {
    return (
      <>
        {/* folders view for logged in users */}
        <CompHead headTitle='Home'></CompHead>
        <TopBar avatarUrl={session.user?.image}></TopBar>
        <FoldersView></FoldersView>
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
