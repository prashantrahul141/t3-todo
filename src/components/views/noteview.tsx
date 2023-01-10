import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CompHead from '@components/common/CompHead';
import Loading from '@components/common/Loading';
import TopBar from '@components/common/TopBar';
import NoteNotFound from '@components/errors/notenotfound';
import TaskForm from '@components/forms/taskform';
import { api } from '@utils/api';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import EachTask from './eachTask';
import type { Task } from '@prisma/client';

const NoteView: FC<{ folder_id: string; note_id: string }> = ({
  folder_id,
  note_id,
}) => {
  const { data: session } = useSession();
  const [taskList, setTaskList] = useState<Task[]>([]);

  const foundTasks = api.note.get.useQuery({
    folder_id: folder_id,
    note_id: note_id,
    // @ts-ignore: checked in parent component
    userid: session?.user?.id,
  });

  useEffect(() => {
    if (foundTasks.isSuccess && foundTasks.data.foundNoteData !== undefined) {
      setTaskList(foundTasks.data.foundNoteData?.tasks);
    }
    //for first time rendering list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTaskMutation = api.task.create.useMutation();

  if (foundTasks.isSuccess) {
    if (foundTasks.data?.status === 200) {
      const taskCreateCallBackFun = async (text: string) => {
        // Call back function for taskform
        const createdTask = await createTaskMutation.mutateAsync({
          noteid: note_id,
          userid: session?.user?.id || '#',
          text: text,
        });
        if (createdTask?.createdTask !== undefined) {
          console.log('adding');
          setTaskList([...taskList, createdTask.createdTask]);
          console.log('added');
        }
      };

      return (
        <>
          <CompHead
            headTitle={foundTasks?.data.foundNoteData?.title}></CompHead>
          <TopBar avatarUrl={session?.user?.image}></TopBar>
          <div className='absolute top-28 left-1/2 w-full max-w-3xl -translate-x-1/2 px-2 sm:top-1/4'>
            {/* bread Crumb */}
            <div className='top-0'>
              <span className='font-spaceGrotesk text-xl tracking-wide text-themePrimary-100 sm:text-3xl'>
                <Link
                  href='/'
                  className='text-3xl hover:text-themePrimary-300 sm:text-4xl'>
                  ⌂
                </Link>
                &nbsp;/&nbsp;
                <Link
                  href={`/view/${foundTasks?.data.foundNoteData?.NotesFolder?.id}`}
                  className='hover:text-themePrimary-300'>
                  {foundTasks?.data.foundNoteData?.NotesFolder?.name}
                </Link>
                &nbsp;/&nbsp;
                {foundTasks?.data.foundNoteData?.title}
              </span>
            </div>

            {/* tasks */}
            <div className='mx-2 my-4 mt-6 w-full'>
              <TaskForm callback={taskCreateCallBackFun}></TaskForm>
              <div>
                {taskList.map((eachTask) => {
                  return (
                    <EachTask key={eachTask.id} eachTask={eachTask}></EachTask>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      );
    } else if (foundTasks?.data.status === 404) {
      return (
        <>
          <CompHead headTitle='Not Found'></CompHead>
          <NoteNotFound></NoteNotFound>
          <TopBar avatarUrl={session?.user?.image}></TopBar>
        </>
      );
    }
  }

  return (
    <>
      <Loading></Loading>
    </>
  );
};

export default NoteView;
