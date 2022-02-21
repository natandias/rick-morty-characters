import Head from "next/head";

import CharacterList from "../components/characterList";

export default function Home() {
  return (
    <>
      <Head>
        <title>RickAndMorty Info</title>
        <meta name="description" content="InfoFruits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CharacterList />
    </>
  );
}
