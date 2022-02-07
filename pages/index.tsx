import type { NextPage } from "next";
import style from "../dist/css/main.module.css";
import Head from "next/head";

import Header from "../components/Header";
import Cards from "../components/Cards";

import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <div className={style.main}>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="A Netflix recreation with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePage />
    </div>
  );
};

export default Home;
