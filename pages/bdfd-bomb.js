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
          <meta name="description" content="BDFD Bomb Game Snippet" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>Bomb Game</p>

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
            <code className={styles.code}>{`1. Name: bsc Value: 0`}</code>
          </div>
          
          <div className={styles.snippet}>
            <p className={styles.snippet}>!bomb</p>
            <code className={styles.code}>{`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]
$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;⬛️;secondary]
$addButton[no;1️⃣-3-$authorID;⬛️;secondary]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;⬛️;secondary]
$addButton[no;1️⃣-5-$authorID;⬛️;secondary]

$addButton[yes;💥-2-$authorID;⬛️;secondary]
$addButton[no;2️⃣-3-$authorID;⬛️;secondary]
$addButton[no;💥-3-$authorID;⬛️;secondary]
$addButton[no;3️⃣-1-$authorID;⬛️;secondary]
$addButton[no;2️⃣-4-$authorID;⬛️;secondary]

$addButton[yes;2️⃣-6-$authorID;⬛️;secondary]
$addButton[no;3️⃣-2-$authorID;⬛️;secondary]
$addButton[no;3️⃣-3-$authorID;⬛️;secondary]
$addButton[no;3️⃣-4-$authorID;⬛️;secondary]
$addButton[no;💥-4-$authorID;⬛️;secondary]

$addButton[yes;1️⃣-7-$authorID;⬛️;secondary]
$addButton[no;💥-5-$authorID;⬛️;secondary]
$addButton[no;💥-6-$authorID;⬛️;secondary]
$addButton[no;2️⃣-5-$authorID;⬛️;secondary]
$addButton[no;1️⃣-8-$authorID;⬛️;secondary]`}</code>
            <CopyTextButton text={`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]
$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;⬛️;secondary]
$addButton[no;1️⃣-3-$authorID;⬛️;secondary]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;⬛️;secondary]
$addButton[no;1️⃣-5-$authorID;⬛️;secondary]

$addButton[yes;💥-2-$authorID;⬛️;secondary]
$addButton[no;2️⃣-3-$authorID;⬛️;secondary]
$addButton[no;💥-3-$authorID;⬛️;secondary]
$addButton[no;3️⃣-1-$authorID;⬛️;secondary]
$addButton[no;2️⃣-4-$authorID;⬛️;secondary]

$addButton[yes;2️⃣-6-$authorID;⬛️;secondary]
$addButton[no;3️⃣-2-$authorID;⬛️;secondary]
$addButton[no;3️⃣-3-$authorID;⬛️;secondary]
$addButton[no;3️⃣-4-$authorID;⬛️;secondary]
$addButton[no;💥-4-$authorID;⬛️;secondary]

$addButton[yes;1️⃣-7-$authorID;⬛️;secondary]
$addButton[no;💥-5-$authorID;⬛️;secondary]
$addButton[no;💥-6-$authorID;⬛️;secondary]
$addButton[no;2️⃣-5-$authorID;⬛️;secondary]
$addButton[no;1️⃣-8-$authorID;⬛️;secondary]`} />
          </div>

          <div className={styles.snippet}>
            <p className={styles.snippet}>$onInteraction</p>
            <code className={styles.code}>{`$nomention
$if[$customID==💥-1-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;danger;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-2-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;danger;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-3-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;danger;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-4-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;danger;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-5-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;danger;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-6-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;danger;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-2-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-2-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-3-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-3-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-4-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-4-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-5-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-5-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==2️⃣-6-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[2️⃣-6-$authorID;2️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-7-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-7-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-8-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==2️⃣-3-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[2️⃣-3-$authorID;2️⃣;secondary;yes]
$endif

$if[$customID==2️⃣-4-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[2️⃣-4-$authorID;2️⃣;secondary;yes]
$endif

$if[$customID==2️⃣-5-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[2️⃣-5-$authorID;2️⃣;secondary;yes]
$endif

$if[$customID==3️⃣-1-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[3️⃣-1-$authorID;3️⃣;secondary;yes]
$endif

$if[$customID==3️⃣-2-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[3️⃣-2-$authorID;3️⃣;secondary;yes]
$endif

$if[$customID==3️⃣-3-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[3️⃣-3-$authorID;3️⃣;secondary;yes]
$endif

$if[$customID==3️⃣-4-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[3️⃣-4-$authorID;3️⃣;secondary;yes]
$endif

$if[$getUserVar[bsc;$authorID]==13]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You win!
You managed to avoid all the bombs!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif`}</code>
            <CopyTextButton text={`$nomention
$if[$customID==💥-1-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;danger;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-2-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;danger;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-3-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;danger;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-4-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;danger;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-5-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;danger;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==💥-6-$authorID]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You lose!
You clicked on a bomb!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;danger;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-2-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-2-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-3-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-3-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-4-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-4-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-5-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-5-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==2️⃣-6-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[2️⃣-6-$authorID;2️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-7-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-7-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==1️⃣-8-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif

$if[$customID==2️⃣-3-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[2️⃣-3-$authorID;2️⃣;secondary;yes]
$endif

$if[$customID==2️⃣-4-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[2️⃣-4-$authorID;2️⃣;secondary;yes]
$endif

$if[$customID==2️⃣-5-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[2️⃣-5-$authorID;2️⃣;secondary;yes]
$endif

$if[$customID==3️⃣-1-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[3️⃣-1-$authorID;3️⃣;secondary;yes]
$endif

$if[$customID==3️⃣-2-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[3️⃣-2-$authorID;3️⃣;secondary;yes]
$endif

$if[$customID==3️⃣-3-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[3️⃣-3-$authorID;3️⃣;secondary;yes]
$endif

$if[$customID==3️⃣-4-$authorID]
$setUserVar[bsc;$sum[$getUserVar[bsc;$authorID];1];$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[Click on one of the buttons to start playing.
There are 6 bombs.]
$addTimestamp
$color[$random[0;999999]]

$editButton[3️⃣-4-$authorID;3️⃣;secondary;yes]
$endif

$if[$getUserVar[bsc;$authorID]==13]
$setUserVar[bsc;0;$authorID]
$title[💣 Bomb Game 💥]
$thumbnail[$authorAvatar]
$description[You win!
You managed to avoid all the bombs!]
$addTimestamp
$color[$random[0;999999]]
$removeButtons

$addButton[yes;Indicator-1;⬛️;secondary;yes]
$addButton[no;Indicator-2;⬛️;secondary;yes]
$addButton[no;Indicator-3;1️⃣;secondary;yes]
$addButton[no;1️⃣-2-$authorID;1️⃣;secondary;yes]
$addButton[no;1️⃣-3-$authorID;1️⃣;secondary;yes]

$addButton[yes;Indicator-4;1️⃣;secondary;yes]
$addButton[no;Indicator-5;2️⃣;secondary;yes]
$addButton[no;Indicator-6;2️⃣;secondary;yes]
$addButton[no;💥-1-$authorID;💥;secondary;yes]
$addButton[no;1️⃣-5-$authorID;1️⃣;secondary;yes]

$addButton[yes;💥-2-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-3-$authorID;2️⃣;secondary;yes]
$addButton[no;💥-3-$authorID;💥;secondary;yes]
$addButton[no;3️⃣-1-$authorID;3️⃣;secondary;yes]
$addButton[no;2️⃣-4-$authorID;2️⃣;secondary;yes]

$addButton[yes;2️⃣-6-$authorID;2️⃣;secondary;yes]
$addButton[no;3️⃣-2-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-3-$authorID;3️⃣;secondary;yes]
$addButton[no;3️⃣-4-$authorID;3️⃣;secondary;yes]
$addButton[no;💥-4-$authorID;💥;secondary;yes]

$addButton[yes;1️⃣-7-$authorID;1️⃣;secondary;yes]
$addButton[no;💥-5-$authorID;💥;secondary;yes]
$addButton[no;💥-6-$authorID;💥;secondary;yes]
$addButton[no;2️⃣-5-$authorID;2️⃣;secondary;yes]
$addButton[no;1️⃣-8-$authorID;1️⃣;secondary;yes]
$endif`} />
          </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
