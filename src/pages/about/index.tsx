import CompHead from '@components/common/CompHead';
import NonLoginTopBar from '@components/common/NonLoginTopBar';
import TopBar from '@components/common/TopBar';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const About: NextPage = () => {
  const { data: session } = useSession();

  // about page
  return (
    <>
      <CompHead headTitle='About us'></CompHead>
      {session?.user && <TopBar avatarUrl={session.user.image}></TopBar>}
      {!session?.user && <NonLoginTopBar></NonLoginTopBar>}
      <div className='absolute top-32 left-1/2 w-full max-w-3xl -translate-x-1/2'>
        <div className='about-question mt-0'>
          <p className='about-question-title'>What is T3 Todo?</p>
          <span className='about-question-span'>
            T3 Todo is Todo list app, its the easiest way to write, save and
            maintain your tasks with the help of folders, notes, custom colors.
            Its created by&nbsp;
            <Link
              className='link-text-high'
              href='https://prashantrahul.com'
              passHref={true}
              target='_blank'>
              me
            </Link>
            , while learning the&nbsp;
            <Link
              href='https://create.t3.gg/'
              className='link-text-high'
              target='_blank'
              passHref={true}>
              T3 Stack
            </Link>
            . And its completely open source under the MIT License, the source
            code can be found&nbsp;
            <Link
              className='link-text-high'
              href={'https://github.com/prashantrahul141/t3-todo'}
              passHref={true}
              target='_blank'>
              here
            </Link>
            .
          </span>
        </div>
        <div className='about-question'>
          <p className='about-question-title'>How to use it?</p>
          <span className='about-question-span'>
            You can create folders, also choose a custom folder color while
            creating it, then you add notes in these folders, whose&apos;s
            custom color can also me choosen, then you can add different tasks
            in a note, you can mark them done by clicking them or unmark them by
            clicking them again.
          </span>
        </div>
        <div className='about-question'>
          <p className='about-question-title'>What is the T3 Stack?</p>
          <span className='about-question-span'>
            Its a collection of js/ts web frameworks to create web apps.&nbsp;
            <Link
              className='link-text-high'
              href='https://create.t3.gg/'
              target='_blank'
              passHref={true}>
              Learn more
            </Link>
            .
          </span>
        </div>
        <div className='about-question mb-0'>
          <p className='about-question-title'>Is the T3 Stack good?</p>
          <span className='about-question-span'>
            YES! 11/10, extra point for&nbsp;
            <Link
              className='link-text-high'
              href='https://tailwindcss.com/'
              target='_blank'
              passHref={true}>
              Tailwind CSS
            </Link>
            .
          </span>
        </div>
      </div>
    </>
  );
};
export default About;
