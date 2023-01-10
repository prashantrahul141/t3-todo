import Link from 'next/link';
import type { FC } from 'react';

const ErrorComp: FC<{ statusCode: number | undefined }> = ({ statusCode }) => {
  return (
    <>
      <div className='absolute top-1/3 left-1/2 w-max -translate-x-1/2 sm:top-1/2'>
        <div className='mb-2 w-full font-lato text-xl'>
          <span>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
            &nbsp;
            {':/'}
          </span>
        </div>
        <div className='w-full text-center'>
          <Link href='/'>
            <button className='btn-signin w-max px-8'>Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorComp;
