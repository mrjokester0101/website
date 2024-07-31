import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="BDFD Snippets" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image className={styles.image} src="/title.png" alt="Profile Icon"/>
          <h1 className={styles.title}>MrJokester</h1>
          <p className={styles.description}>BDFD Snippets</p>
          </h1>
  
       <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Bomb Game</h2>
            <a href="https://mrjokester.netlify.app/bdfd-bomb" className={styles.card1}>
              <p>Get Code</p>
            </a>
          </div>

          <div className={styles.card}>
            <h2>ChatBot</h2>
            <a href="https://mrjokester.netlify.app/bdfd-chat" className={styles.card1}>
              <p>Get Code</p>
            </a>
          </div>

          <div className={styles.card}>
            <h2>User Info</h2>
            <a href="https://mrjokester.netlify.app/bdfd-user" className={styles.card1}>
              <p>Get Code</p>
            </a>
          </div>
  
          <div className={styles.card}>
            <h2>Server Info</h2>
            <a href="https://mrjokester.netlify.app/bdfd-server" className={styles.card1}>
              <p>Get Code</p>
            </a>
          </div>
  
          <div className={styles.card}>
            <h2>Basic Economy 4 in 1 Commands</h2>
            <a href="https://mrjokester.netlify.app/bdfd-eco-4in1" className={styles.card1}>
              <p>Get Code</p>
            </a>
          </div>
         
        </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
