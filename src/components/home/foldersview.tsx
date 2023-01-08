import type { FC } from 'react';
import { api } from '@utils/api';

const FoldersView: FC = () => {
  const folders = api.folder.list.useQuery();
  return (
    <>
      <div className='absolute top-1/2 left-1/2 w-full max-w-4xl -translate-x-1/2 border border-themePrimary-100 p-2'>
        {folders.isSuccess &&
          folders.data.folders.map((eachFolder) => {
            return <div key={eachFolder.id}>{eachFolder.name}</div>;
          })}
      </div>
    </>
  );
};

export default FoldersView;
