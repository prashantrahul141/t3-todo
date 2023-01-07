import { type NextPage } from 'next';
import CompHead from '@components/common/CompHead';
import TopBar from '@components/common/TopBar';
// import Link from "next/link";
import { useSession } from 'next-auth/react';
import Welcome from '@components/home/welcome';
import Loading from '@components/common/Loading';

// import { api } from "../utils/api";

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
        <TopBar
          avatarUrl={
            session.user?.image || '/public/static/defaultavatar.jpg'
          }></TopBar>
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
