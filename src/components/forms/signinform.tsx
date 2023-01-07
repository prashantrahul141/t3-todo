import { signIn } from 'next-auth/react';
import type { FC } from 'react';

const CompSigninForm: FC = () => {
  return (
    <div className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2  p-4 sm:w-96'>
      <button className='btn-signin' onClick={() => signIn('github')}>
        Github
      </button>
      <button className='btn-signin' onClick={() => signIn('discord')}>
        Discord
      </button>
    </div>
  );
};

export default CompSigninForm;
