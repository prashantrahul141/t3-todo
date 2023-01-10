import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import NonLoginTopBar from '@components/common/NonLoginTopBar';
import TopBar from '@components/common/TopBar';
import ErrorComp from '@components/errors/generalerrorcomp';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Error: NextPage<{ statusCode: number | undefined }> = ({
  statusCode,
}) => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <>
        <CompHead headTitle='Error'></CompHead>
        <TopBar avatarUrl={session.user?.image}></TopBar>
        <ErrorComp statusCode={statusCode}></ErrorComp>
      </>
    );
  } else if (status === 'unauthenticated') {
    return (
      <>
        <CompHead headTitle='Error'></CompHead>
        <NonLoginTopBar></NonLoginTopBar>
        <ErrorComp statusCode={statusCode}></ErrorComp>
      </>
    );
  }
  return (
    <>
      <Loading></Loading>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
