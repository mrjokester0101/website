import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="Main Page" />
          <link rel="icon" href="/profile.png" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>Main Page</p>
  
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => window.location.href = 'https://mrjokester.vercel.app/'}>
            <h2>Main Page</h2>
          </button>
          <button
            className={styles.button}
            onClick={() => window.location.href = 'https://mrjokester.vercel.app/me'}>
            <h2>About Me</h2>
          </button>
          <button
            className={styles.button}
            onClick={() => window.location.href = 'https://mrjokester.vercel.app/bdfd'}>
            <h2>BDFD Snippets</h2>
          </button>
        </div>
              
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Game Bot</h2>
            <a href="https://discord.com/oauth2/authorize?client_id=1251525661185806336&permissions=8&integration_type=0&scope=bot" className={styles.linkcard}>
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
  );
};

export default Home;
