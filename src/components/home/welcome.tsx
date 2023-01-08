import CompHead from '@components/common/CompHead';
import type { NextPage } from 'next';
import Link from 'next/link';

const Welcome: NextPage = () => {
  return (
    <>
      {/* Top text */}
      <CompHead headTitle='None'></CompHead>
      <div className='absolute top-1/3 left-1/2 w-max -translate-x-1/2 sm:top-1/4'>
        <span className='float-left font-spaceGrotesk text-6xl tracking-widest text-themePrimary-300 sm:text-8xl sm:tracking-wider'>
          T3 TODO
        </span>
        <span className='float-left clear-left pl-2 font-lato text-lg tracking-wider text-themePrimary-100 sm:pl-2.5 sm:text-2xl sm:tracking-widest'>
          The easiest way to write notes
        </span>
      </div>

      {/* Button */}
      <Link href='/signin'>
        <div className='absolute top-2/3 left-1/2 w-max -translate-x-1/2 sm:bottom-1/2'>
          <button className='btn-signin'>Sign up for free</button>
        </div>
      </Link>
    </>
  );
};

export default Welcome;
