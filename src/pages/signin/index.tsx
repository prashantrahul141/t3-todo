import { type NextPage } from 'next';
import CompHead from '@components/common/CompHead';
import CompSigninForm from '@components/forms/signinform';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Loading from '@components/common/Loading';

const Signin: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status == 'authenticated') {
    router.push('/');
  } else if (status == 'unauthenticated') {
    return (
      <>
        <CompHead headTitle='Sign in'></CompHead>
        <Link href={'/'}>
          <div className='absolute top-1/4 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded  p-4 text-center sm:w-96'>
            <h6 className='font-lato text-xs tracking-wide text-themePrimary-100'>
              WELCOME TO
            </h6>
            <h2 className='font-spaceGrotesk text-6xl tracking-wide text-themePrimary-400'>
              T3-TODO
            </h2>
          </div>
        </Link>
        <CompSigninForm></CompSigninForm>
      </>
    );
  }

  return (
    <>
      <Loading></Loading>
    </>
  );
};

export default Signin;
