import Head from 'next/head';
import type { FC } from 'react';

const CompHead: FC<{ headTitle: string | undefined }> = ({
  headTitle = undefined,
}) => {
  // Head component, use to give head title
  return (
    <Head>
      {headTitle === undefined && <title>{`Todo`}</title>}
      {headTitle !== undefined && <title>{`Todo | ${headTitle}`}</title>}
      <meta name='description' charSet='UTF-8' content='Simple todo app' />
      <link rel='manifest' href='/manifest.json'></link>
      <meta name='darkreader-lock' />
    </Head>
  );
};

export default CompHead;
