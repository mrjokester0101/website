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
          <meta name="description" content="BDFD Server Info Snippet" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image className={styles.image} src="/title.png" alt="Profile Icon"/>
          <h1 className={styles.title}>MrJokester</h1>
          <p className={styles.description}>Server Info</p>
          </h1>
  
          <div className={styles.snippet}>
            <p className={styles.snippet}>!server info</p>
            <code className={styles.code}>{`$nomention
$onlyIf[$guildID!=;❌️ Can't use command in dm!]
$thumbnail[$serverIcon]
$title[📋 Server Info 📋]
$description[
💳 Name
$serverName[$guildID]

🆔️ ID
$guildID

👑 Owner
<@$serverOwner[$guildID]>

🗂 Categories
$categoryCount[$guildID]

📑 Channels
$channelCount

💳 Roles
$roleCount
]
$addTimestamp
$color[$random[0;999999]]`}</code>
     <CopyTextButton text={`$nomention
$onlyIf[$guildID!=;❌️ Can't use command in dm!]
$thumbnail[$serverIcon]
$title[📋 Server Info 📋]
$description[
💳 Name
$serverName[$guildID]

🆔️ ID
$guildID

👑 Owner
<@$serverOwner[$guildID]>

🗂 Categories
$categoryCount[$guildID]

📑 Channels
$channelCount

💳 Roles
$roleCount
]
$addTimestamp
$color[$random[0;999999]]`}/>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
            <h2>BDFD Snippets</h2>
            <a href="https://mrjokester.vercel.app/bdfd" className={styles.linkcard}>
              <p>See Codes</p>
            </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
