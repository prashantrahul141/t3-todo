import CompHead from '@components/common/CompHead';
import type { NextPage } from 'next';
import Link from 'next/link';

const Welcome: NextPage = () => {
  return (
    <>
      {/* Top text */}
      <CompHead headTitle='None'></CompHead>
      <div className='absolute top-1/4 left-1/2 w-max -translate-x-1/2'>
        <span className='float-left font-spaceGrotesk text-6xl tracking-widest text-themePrimary-300 sm:text-8xl sm:tracking-wider'>
          T3 TODO
        </span>
        <span className='float-left clear-left pl-2 font-robotoLight text-lg tracking-wider text-themePrimary-100 sm:pl-2.5 sm:text-2xl sm:tracking-widest'>
          The easiest way to write notes
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
