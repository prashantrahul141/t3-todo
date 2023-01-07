import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';

const TopBar: FC<{ avatarUrl: string }> = ({ avatarUrl }) => {
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);

  return (
    <>
      <div
        className='top-0 h-14 w-full outline outline-1 outline-themePrimary-200/20 backdrop-blur-md backdrop-opacity-90'
        onMouseLeave={() => setShowOptionsMenu(true)}>
        <div className='relative mx-auto flex h-full w-full max-w-4xl items-center'>
          {/* logo */}
          <Link href={'./'}>
            <span className='ml-4 font-oswald text-4xl text-themePrimary-100'>
              T3T
            </span>
          </Link>

          {/* User Avatar */}
          <button
            className='ml-full btn-ghost btn mr-2 ml-auto hover:bg-transparent'
            onClick={() => setShowOptionsMenu(!showOptionsMenu)}>
            <div className='avatar'>
              <div className='w-9  rounded-full'>
                <Image
                  src={avatarUrl}
                  alt={'avatar'}
                  width='100'
                  height='100'
                />
              </div>
            </div>
          </button>

          {/* Nav options */}
          {showOptionsMenu && (
            <div className='absolute top-12 right-12 w-max rounded-md bg-themePrimary-1050 pt-1 pb-1 outline outline-1 outline-themePrimary-200/50'>
              <div className='nav-navitem pt-1 pb-1'>Create Note</div>
              <div className='nav-navitem py-1'>Create Folder</div>
              <div className='nav-navitem pb-1 pt-1'>Sign Out</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopBar;
