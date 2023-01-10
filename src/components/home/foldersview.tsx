import type { FC } from 'react';
import { api } from '@utils/api';
import Link from 'next/link';

const FoldersView: FC = () => {
  const folders = api.folder.list.useQuery();

  // view folders when user is logged in
  return (
    <>
      <div className='absolute top-1/4 left-1/2 grid w-full max-w-4xl -translate-x-1/2 grid-cols-FolderCardsSm gap-6 p-4 sm:grid-cols-FolderCards'>
        {folders.isSuccess &&
          folders.data.folders.map((eachFolder) => {
            return (
              <div key={eachFolder.id} className='w-max text-center'>
                <Link href={`/view/${eachFolder.id}`}>
                  <div className='rounded-xl py-2 px-4 text-themePrimary-100/70 transition-all duration-200 hover:scale-[1.05] hover:border-themePrimary-300/25  hover:bg-themePrimary-300/5 hover:text-themePrimary-100 hover:shadow-themePrimary-300 hover:drop-shadow-noteItems'>
                    <div className='flex w-full justify-center'>
                      <svg
                        className='h-[70px] w-[70px] sm:h-[90px] sm:w-[90px]'
                        fill={eachFolder.color}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'>
                        <path d='M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80V160h512V144C512 117.5 490.5 96 464 96zM0 432C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48V192H0V432z' />
                      </svg>
                    </div>
                    <div className='w-16 sm:w-32'>
                      <span className='break-words font-lato text-base sm:text-lg'>
                        {eachFolder.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        {folders.isSuccess && folders.data.folders.length <= 0 && (
          <>
            <div className='absolute top-1/3 left-1/2 w-max -translate-x-1/2 sm:top-1/2'>
              <div className='mb-2 w-full font-lato text-xl'>
                <span>You haven&apos;t created any folders yet</span>
              </div>
              <div className='w-full text-center'>
                <Link href='/new/folder'>
                  <button className='btn-signin w-max px-8'>CREATE ONE!</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FoldersView;
