import CompHead from '@components/common/CompHead';
import type { NextPage } from 'next';
import Link from 'next/link';

const Welcome: NextPage = () => {
  //  landing page for non logged in users
  return (
    <>
      {/* Top text */}
      <CompHead headTitle={undefined}></CompHead>
      <div className='absolute top-1/4 left-1/2 w-max -translate-x-1/2'>
        <span className='float-left font-spaceGrotesk text-7xl tracking-widest text-themePrimary-300 sm:text-[6.6rem] sm:tracking-wider'>
          T3 TODO
        </span>
        <span className='float-left clear-left pl-1 font-roboto text-xl tracking-wider text-themePrimary-100 sm:pl-2.5 sm:text-2xl sm:tracking-widest'>
          The easiest way to maintain tasks
        </span>
      </div>

      {/* Button */}
      <div className='absolute top-2/4 left-1/2 flex w-max -translate-x-1/2 gap-5 sm:top-2/3'>
        <Link href='/signin'>
          <div className=''>
            <button className='btn-signin'>Sign up for free</button>
          </div>
        </Link>
        <Link href='/about'>
          <div className=''>
            <button className='btn-signin'>Learn more</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Welcome;
