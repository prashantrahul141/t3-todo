import { type NextPage } from 'next';
import CompHead from '@components/common/CompHead';
import TopBar from '@components/common/TopBar';
// import Head from "next/head";
// import Link from "next/link";
// import { useSession } from "next-auth/react";

// import { api } from "../utils/api";

const Home: NextPage = () => {
  return (
    <>
      <CompHead headTitle='Home'></CompHead>
      <TopBar avatarUrl='https://cdn.discordapp.com/avatars/995581232459038760/d37933badeb94c9f07d3fabc103df2f0.png'></TopBar>
    </>
  );
};

export default Home;
