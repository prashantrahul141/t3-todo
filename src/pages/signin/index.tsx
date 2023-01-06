import { type NextPage } from "next";
import CompHead from "@components/common/CompHead";
import CompSigninForm from "@components/forms/signin";

// import Head from "next/head";
// import Link from "next/link";
// import { useSession } from "next-auth/react";

// import { api } from "../utils/api";

const Signin: NextPage = () => {
  return (
    <>
      <CompHead headTitle="Sign in"></CompHead>
      <CompSigninForm></CompSigninForm>
    </>
  );
};

export default Signin;
