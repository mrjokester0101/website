import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="About Me" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image className={styles.image} src="/title.png" alt="Profile Icon"/>
          <h1 className={styles.title}>MrJokester</h1>
          <p className={styles.description}>About Me</p>
          </h1>

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
  
          <div className={styles.description}>
            <p>Age: 13 Years Old</p>
            <p>Country: Bulgaria</p>
            <p>Email: mrjokester0101@gmail.com</p>
          </div>

          <div className={styles.description}>
            <p>━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>

          <div className={styles.description}>
            <p>Coding: Bot Designer For Discord, Python, Javascript, CSS, HTML</p>
          </div>
  
        </main>
      </div>
    </div>
  );
};

export default Home;
