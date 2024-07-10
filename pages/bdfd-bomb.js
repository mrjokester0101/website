import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CopyTextButton from "../components/CopyTextButton";

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
            <Image src="/title.png" alt="Profile Icon" width={40} height={40} /> Bomb Game
          </h1>

          <div className={styles.snippet}>
            <p className={styles.snippet}>Vars</p>
            <code className={styles.code}>1. Name: bsc Value: 0</code>
          </didiv>
          
          <div className={stylesstyles.sni
            <p className={styles.snippet}>Main Code</p>
            <code className={styles.code}>Code here</code>
            <CopyTextButton text={`Code Here`} />
          </div>

          <div className={styles.snippet}>
            <p className={styles.snippet}>Name</p>
            <code className={styles.code}>Code here</code>
            <CopyTextButton text={`Code here`} />
          </div>

          <div className={styles.grid}>
            <a href="https://mrjokester.netlify.app/bdfd" className={styles.card}>
              <h2>BDFD Snippets</h2>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
