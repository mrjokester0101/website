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
            <Image src="/title.png" alt="Profile Icon" width={100} height={100} />
  About Me
          </h1>

          <div className={styles.description}>
            <p>Age: 13 Years Old</p>
            <p>Country: Bulgaria</p>
            <p>Email: mrjokester010@gmail.com</p>
          </div>

          <div className={styles.description}>
            <p>——————————————————————————————</p>
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
