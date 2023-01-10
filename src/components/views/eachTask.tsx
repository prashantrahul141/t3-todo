import type { FC } from 'react';
import { useState } from 'react';
import type { Task } from '@prisma/client';
import { api } from '@utils/api';
import { useSession } from 'next-auth/react';

const EachTask: FC<{ eachTask: Task }> = ({ eachTask }) => {
  const { data: session } = useSession();
  const [taskDone, setTaskDone] = useState(eachTask.done);
  const mutation = api.task.changeState.useMutation();

  const onStateChange = async () => {
    await mutation.mutateAsync({
      // @ts-ignore: checked in parent component
      userid: session?.user?.id,
      state: !taskDone,
      taskid: eachTask.id,
    });
    setTaskDone(!taskDone);
  };

  return (
    <div
      onClick={onStateChange}
      className={`my-2 inline-grid h-12 w-11/12 cursor-pointer select-none grid-cols-NotesListItems  gap-2 rounded border border-themePrimary-300/20 bg-themePrimary-1100 transition-all duration-200 hover:scale-[1.01] hover:border-themePrimary-300/25 hover:bg-themePrimary-300/5  ${
        taskDone
          ? 'hover:text-themePrimary-100/60'
          : 'hover:text-themePrimary-100'
      } ${taskDone ? 'text-themePrimary-100/40' : 'text-themePrimary-100/90'}`}>
      <div className={`flex items-center justify-center`}>
        {taskDone && (
          <svg
            className='h-7 w-7 fill-themePrimary-300/40'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <g data-name='Layer 2'>
              <g data-name='checkmark-square-2'>
                <rect
                  className='h-7 w-7'
                  transform='rotate(180 12 12)'
                  opacity={0}
                />
                <path d='M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-1.7 6.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z' />
              </g>
            </g>
          </svg>
        )}

        {!taskDone && (
          <svg
            className='h-6 w-6 fill-themePrimary-200'
            viewBox='-32 0 512 512'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z' />
          </svg>
        )}
      </div>
      <p
        className={`flex items-center font-lato tracking-wide ${
          taskDone ? 'line-through' : ''
        }`}>
        {eachTask.text}
      </p>
    </div>
  );
};

export default EachTask;
