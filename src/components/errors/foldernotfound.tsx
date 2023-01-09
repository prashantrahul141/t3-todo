import Link from 'next/link';
import type { FC } from 'react';

const FolderNotFound: FC = () => {
  return (
    <>
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 text-center'>
        <p className=' font-lato text-xl'>Folder not found {':('}</p>
        <Link href='/new/folder'>
          <button className='btn-signin mt-16 w-max'>Create New Folder</button>
        </Link>
      </div>
    </>
  );
};
export default FolderNotFound;
