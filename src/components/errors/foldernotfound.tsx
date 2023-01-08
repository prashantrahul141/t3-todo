import type { FC } from 'react';

const FolderNotFound: FC<{ folder_id: string }> = ({ folder_id }) => {
  return <>{folder_id} not found.</>;
};
export default FolderNotFound;
