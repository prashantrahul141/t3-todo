import Head from 'next/head';
import type { FC } from 'react';

const CompHead: FC<{ headTitle: string }> = ({ headTitle = 'None' }) => {
  return (
    <Head>
      {headTitle === 'None' && <title>{`Todo`}</title>}
      {headTitle !== 'None' && <title>{`Todo | ${headTitle}`}</title>}
      <meta name='description' charSet='UTF-8' content='Simple todo app' />
    </Head>
  );
};

export default CompHead;
