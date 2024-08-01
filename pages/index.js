import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpeedInsights from "../@vercel/speed-insights/next";

const Home = () => {
  return (
    <SpeedInsights>
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="Main Page" />
          <link rel="icon" href="/profile.png" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image className={styles.image} src="/title.png" alt="Profile Icon"/>
          <h1 className={styles.title}>MrJokester</h1>
          <p className={styles.description}>Main Page</p>
          </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>BDFD Snippets</h2>
            <a href="https://mrjokester.vercel.app/bdfd" className={styles.linkcard}>
              <p>See Codes</p>
            </a>
          </div>

          <div className={styles.card}>
            <h2>About Me</h2>
            <a href="https://mrjokester.vercel.app/me" className={styles.linkcard}>
              <p>Click Me</p>
            </a>
          </div>
  
          <div className={styles.card}>
            <h2>Doors Moderator Bot</h2>
            <a href="https://discord.com/oauth2/authorize?client_id=1251525661185806336" className={styles.linkcard}>
              <p>Get Invite</p>
            </a>
          </div>

          <div className={styles.card}>
            <h2>MrJokester Studios</h2>
            <a href="https://discord.com/invite/VWEcYvKztc" className={styles.linkcard}>
              <p>Get Invite</p>
            </a>
          </div>
        </div>

        </main>
      </div>
    </div>
  </SpeedInsights>
  );
};

export default Home;
