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
            <Image className={styles.image} src="/title.png" alt="Profile Icon"/>
          <h1 className={styles.title}>MrJokester</h1>
          <p> className={styles.description}>Testing</p>
          </h1>
  
          <div className={styles.grid}>
            <a href="https://mrjokester.netlify.app/bdfd" className={styles.card}>
              <h2>BDFD Snippets</h2>
            </a>

            <a href="https://mrjokester.netlify.app/me" className={styles.card}>
              <h2>About Me</h2>
            </a>

            <a href="https://discord.com/oauth2/authorize?client_id=1251525661185806336" className={styles.card}>
              <h2>Doors Moderator Bot</h2>
            </a>

             <a href="https://discord.com/invite/VWEcYvKztc" className={styles.card}>
              <h2>MrJokester Studios</h2>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
