import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="My Website" />
          <link rel="icon" href="public/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image src="public/title.png" alt="Profile Icon" width={40} height={40} /> About Me
          </h1>

          <div className={styles.description}>
            <h1>Coding</h1>
            <p>Medium Discord.js</p>
            <p>Medium Next.js</p>
            <p>Learning Python</p>
            <p>A lot Bot Designer For Discord</p>
          </div>

          <div className={styles.description}>
            <h1>Favorite Foods</h1>
            <p>Kremverski</p>
            <p>Cupcakes</p>
            <p>Pancakes</p>
          </div>

          <div className={styles.description}>
            <h1>Favorite Pets</h1>
            <p>Cat</p>
            <p>Dogs</p>
          </div>

          <div className={styles.description}>
            <h1>Favorite Coding Languages</h1>
            <p>Javascript</p>
            <p>Python</p>
          </div>

          <div className={styles.description}>
            <h1>Little bit more info about me</h1>
            <p>I'm MrJokester, I'm 13 years old and love hobby coding, love to help people as well, and like reading books.</p>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default Home;
