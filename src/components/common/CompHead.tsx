import Head from "next/head";

const CompHead = ({ headTitle }: { headTitle: string }) => {
  return (
    <Head>
      <title>{`Todo | ${headTitle}`}</title>
      <meta name="description" charSet="UTF-8" content="Simple todo app" />
    </Head>
  );
};

export default CompHead;
