import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="My Website" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image src="/title.png" alt="Profile Icon" width={40} height={40} /> BDFD Snippets
          </h1>

          <div className={styles.grid}>
            <a href="https://mrjokester.netlify.app/bdfd-bomb" className={styles.card}>
              <h2>Bomb Game</h2>
            </a>

            <a href="https://mrjokester.netlify.app/bdfd-chat" className={styles.card}>
             <h2>ChatBot</h2>
            </a>

            <a href="https://mrjokester.netlify.app/bdfd-user" className={styles.card}>
             <h2>User Info</h2>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
