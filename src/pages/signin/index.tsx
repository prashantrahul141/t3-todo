import { type NextPage } from 'next';
import CompHead from '@components/common/CompHead';
import CompSigninForm from '@components/forms/signinform';
import Link from 'next/link';

const Signin: NextPage = () => {
  return (
    <>
      <CompHead headTitle='Sign in'></CompHead>
      <Link href={'./'}>
        <div className='absolute top-1/4 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded  p-4 text-center sm:w-96'>
          <h6 className='font-lato text-xs tracking-wide text-themePrimary-100'>
            WELCOME TO
          </h6>
          <h2 className='font-oswald text-6xl tracking-wide text-themePrimary-400'>
            T3-TODO
          </h2>
        </div>
      </Link>
      <CompSigninForm></CompSigninForm>
    </>
  );
};

export default Signin;
