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
          <meta name="description" content="BDFD Leaderboard Snippet" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>Leaderboard</p>

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
  
          <div className={styles.snippet}>
            <p className={styles.snippet}>Variables</p>
            <code className={styles.code}>{`1. Name: "cash" Value: "0"
2. Name: "bank" Value: "0"`}</code>
          </div>
          <div className={styles.snippet}>
            <p className={styles.snippet}>!leaderboard</p>
            <code className={styles.code}>{`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]

$title[🏠 Home 🏠]
$thumbnail[$authorAvatar]
$description[Choose which leaderboard you want to see below.]
$addTimestamp
$color[$random[0;999999]]
$addButton[yes;cash-$authorID;Wallet Leaderboard;danger;no;👜;]
$addButton[yes;bank-$authorID;Bank Leaderboard;success;no;🏦;]`}</code>
          <CopyTextButton text={`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]

$title[🏠 Home 🏠]
$thumbnail[$authorAvatar]
$description[Choose which leaderboard you want to see below.]
$addTimestamp
$color[$random[0;999999]]
$addButton[yes;cash-$authorID;Wallet Leaderboard;danger;no;👜;]
$addButton[yes;bank-$authorID;Bank Leaderboard;success;no;🏦;]`}/>
          </div>
          <div className={styles.snippet}>
            <p className={styles.snippet}>$onInteraction</p>
            <code className={styles.code}>{`$nomention
$if[$customID==cash-$authorID]
$title[👜 Wallet Leaderboard 👜]
$thumbnail[$authorAvatar]
$globalUserLeaderboard[cash;asc]
$addTimestamp
$color[$random[0;999999]]
$endif

$if[$customID==bank-$authorID]
$title[🏦 Bank Leaderboard 🏦]
$thumbnail[$authorAvatar]
$globalUserLeaderboard[bank;asc]
$addTimestamp
$color[$random[0;999999]]
$endif`}</code>
          <CopyTextButton text={`$nomention
$if[$customID==cash-$authorID]
$title[👜 Wallet Leaderboard 👜]
$thumbnail[$authorAvatar]
$globalUserLeaderboard[cash;asc]
$addTimestamp
$color[$random[0;999999]]
$endif

$if[$customID==bank-$authorID]
$title[🏦 Bank Leaderboard 🏦]
$thumbnail[$authorAvatar]
$globalUserLeaderboard[bank;asc]
$addTimestamp
$color[$random[0;999999]]
$endif`}/>
          </div>
              
        </main>
      </div>
    </div>
  );
};

export default Home;
