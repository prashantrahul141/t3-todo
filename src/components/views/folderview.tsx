import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import TopBar from '@components/common/TopBar';
import FolderNotFound from '@components/errors/foldernotfound';
import { api } from '@utils/api';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import type { FC } from 'react';

const FolderView: FC<{ folder_id: string }> = ({ folder_id }) => {
  const { data: session } = useSession();
  const foundFolder = api.folder.get.useQuery({
    folder_id: folder_id,
  });

  if (foundFolder.data?.status === 200) {
    return (
      <>
        <CompHead headTitle={foundFolder.data.foundFolder?.name}></CompHead>
        <TopBar avatarUrl={session?.user?.image}></TopBar>

        {/* Bread Crumb */}
        <div className='absolute top-28 left-1/2 w-full max-w-3xl -translate-x-1/2 px-2 sm:top-1/4'>
          <div className='top-0'>
            <span className='font-spaceGrotesk text-lg tracking-wide text-themePrimary-100 sm:text-xl'>
              <Link
                href='/'
                className='text-3xl hover:text-themePrimary-300 sm:text-3xl'>
                ⌂
              </Link>
              &nbsp;/&nbsp;
              {foundFolder.data.foundFolder?.name}
            </span>
          </div>

          {/* Notes */}
          <div className='mx-2 my-4 mt-6'>
            {foundFolder.data.foundFolder?.Notes.map((eachNote) => {
              return (
                <Link
                  key={eachNote.id}
                  href={`/view/${eachNote.notesFolderId}/${eachNote.id}`}>
                  <div className='my-2 inline-grid h-12 w-full cursor-pointer grid-cols-NotesListItems gap-2 rounded border border-themePrimary-500/20 bg-themePrimary-500/5  text-themePrimary-100/70 transition-all duration-200 hover:scale-[1.01] hover:border-themePrimary-300/25 hover:bg-themePrimary-300/5 hover:text-themePrimary-100 hover:shadow-themePrimary-300 hover:drop-shadow-noteItems'>
                    <div className='flex items-center justify-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill={eachNote.color}
                        className='h-6 w-6'
                        viewBox='0 0 16 16'>
                        <path d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z' />
                      </svg>
                    </div>
                    <p className='flex items-center font-lato tracking-wide'>
                      {eachNote.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {foundFolder.data.foundFolder?.Notes.length === 0 && (
          <>
            {/* If no note is present in the folder */}
            <div className='absolute top-2/4 left-1/2 -translate-x-1/2 text-center'>
              <div className='mb-8'>
                <p className='font-lato text-lg text-themePrimary-100'>
                  There are no notes in this folder
                </p>
              </div>
              <div>
                <Link href='/new/note'>
                  <button className='btn-signin w-max px-4'>Create one!</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </>
    );
  } else if (foundFolder.data?.status === 404) {
    return (
      <>
        {/* note not found */}
        <CompHead headTitle='Not Found'></CompHead>
        <FolderNotFound></FolderNotFound>
        <TopBar avatarUrl={session?.user?.image}></TopBar>
      </>
    );
  }

  return <Loading></Loading>;
};

export default FolderView;
