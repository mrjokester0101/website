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
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>About Me</p>

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
  
          <div className={styles.aboutme}>
<h2>1. Introduction</h2>
<p>   • Name: MrJokester</p>
<p>   • Age: 13 years old</p>
<p>   • Gender: Male</p>
<p>   • Hobbies: Coding, Designing Games</p>
<p>   • Country: Bulgaria</p>

<h2>2. Skills</h2>
<p>   • Technical Skills: Javascript, Python,</p>
<p>     CSS, Json, HTML, BDScript</p>

<h2>3. Contact Information</h2>
<p>   • Email: mrjokester0101@gmail.com</p>
          </div>
  
        </main>
      </div>
    </div>
  );
};

export default Home;
