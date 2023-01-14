import Head from 'next/head';
import type { FC } from 'react';
import image from 'public/static/meta/screenshot-1.png';

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
      <meta content='T3 Todo' property='og:title' />
      <meta
        content='The easiest way to maintain tasks.'
        property='og:description'
      />
      <meta content='https://t3-todo.up.railway.app' property='og:url' />
      <meta content={image.src} property='og:image' />
      <meta content='#c393f6' data-react-helmet='true' name='theme-color' />
    </Head>
  );
};

export default CompHead;
