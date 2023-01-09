import Link from 'next/link';
import type { FC } from 'react';

const NoteNotFound: FC = () => {
  // note not found component
  return (
    <>
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 text-center'>
        <p className=' font-lato text-xl'>Note not found {':('}</p>
        <Link href='/new/note'>
          <button className='btn-signin mt-16 w-max'>Create New Note</button>
        </Link>
      </div>
    </>
  );
};
export default NoteNotFound;
