import type { FC } from 'react';

const Loading: FC = () => {
  // basic loading animation
  return (
    <>
      <progress className='progress progress-primary absolute top-1/2 left-1/2 w-56 -translate-x-1/2 '></progress>
    </>
  );
};
export default Loading;
