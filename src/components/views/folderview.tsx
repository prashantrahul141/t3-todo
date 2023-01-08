import { api } from '@utils/api';
import { useSession } from 'next-auth/react';
import type { FC } from 'react';

const FolderView: FC<{ folder_id: string }> = ({ folder_id }) => {
  const { data: session, status } = useSession();
  const foundFolder = api.folder.get.useQuery({
    folder_id: folder_id,
    // @ts-ignore
    userid: session?.user?.id,
  });
  return <></>;
};

export default FolderView;
