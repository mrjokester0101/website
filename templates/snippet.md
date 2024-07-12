# Snippet
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CopyTextButton from "../components/CopyTextButton";

const Home: NextPage = () => {
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
            <Image src="/title.png" alt="Profile Icon" width={40} height={40} /> Name
          </h1>

          <div className={styles.snippet}>
            <p className={styles.snippet}>Name</p>
            <code className={styles.code}>Code here</code>
            <CopyTextButton text={`Code here`} />
          </div>

          <div className={styles.grid}>
            <a href="https://3621d689-8f08-41be-9cfd-27404c776dae-00-1y9ohzghjd8xs.spock.replit.dev/bdfd" className={styles.card}>
              <h2>BDFD Snippets</h2>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
