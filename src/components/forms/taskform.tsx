import type { FC } from 'react';
import { useState } from 'react';

const TaskForm: FC<{
  callback: (text: string) => Promise<void>;
}> = ({ callback }) => {
  // add task form component
  const [taskText, setTaskText] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  return (
    <>
      <div className='mt-10 mb-8 flex gap-5'>
        <input
          className='input-nameinput flex-auto'
          placeholder='A great task'
          id='taskform-inputbox'
          maxLength={60}
          minLength={3}
          onChange={(e) => {
            setTaskText(e.target.value.trim());
            e.target.value.trim().length <= 3
              ? setDisableButton(true)
              : setDisableButton(false);
          }}></input>
        <button
          className='btn-signin m-0 w-36'
          id='addtask-btn'
          disabled={disableButton}
          onClick={async (e) => {
            e.preventDefault();
            (
              document.getElementById('taskform-inputbox') as HTMLInputElement
            ).value = '';
            await callback(taskText);
          }}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default TaskForm;
