import Link from 'next/link';
import type { FC } from 'react';

const NonLoginTopBar: FC = () => {
  //  Top navigation bar
  return (
    <>
      <div className='fixed top-0 z-50 h-14 w-full outline outline-1 outline-themePrimary-200/20 backdrop-blur-xl backdrop-opacity-95'>
        <div className='relative mx-auto flex h-full w-full max-w-4xl items-center'>
          {/* logo */}
          <Link href={'/'}>
            <span className='ml-4 font-spaceGrotesk text-4xl text-themePrimary-100'>
              T3T
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NonLoginTopBar;
