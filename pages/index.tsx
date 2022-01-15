import type { NextPage } from "next";
import style from "../dist/css/main.module.css";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={style.main}>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="A Netflix recreation with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
