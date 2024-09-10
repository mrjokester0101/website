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
          <meta name="description" content="BDFD User Info Snippet" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>User Info</p>

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
            <p className={styles.snippet}>!user info</p>
            <code className={styles.code}>{`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]

$title[👤 User Info👤]
$thumbnail[$userAvatar[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]]
$description[
👤 User
$if[$mentioned[1]==] <@$authorID> $else <@$mentioned[1]> $endif

🆔️ ID
$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif

🪪 Nickname
 $nickname[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]

🔖 Display Name
$if[$displayName[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]==] No display name. $else $displayName[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif] $endif

🥇 Badges
$if[$userBadges[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif;, ]==] No badges. $else $userBadges[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif;, ] $endif

🛠 Admin
 $isAdmin[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]

🤖 Bot
 $isBot[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]

📅 Creation Date
 $creationDate[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]

🗓 Join Date
 $userJoined[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]
]
$addTimestamp
$color[$random[0;999999]]`}</code>
     <CopyTextButton text={`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]

$title[👤 User Info👤]
$thumbnail[$userAvatar[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]]
$description[
👤 User
$if[$mentioned[1]==] <@$authorID> $else <@$mentioned[1]> $endif

🆔️ ID
$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif

🪪 Nickname
 $nickname[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]

🔖 Display Name
$if[$displayName[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]==] No display name. $else $displayName[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif] $endif

🥇 Badges
$if[$userBadges[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif;, ]==] No badges. $else $userBadges[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif;, ] $endif

🛠 Admin
 $isAdmin[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]

🤖 Bot
 $isBot[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]

📅 Creation Date
 $creationDate[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]

🗓 Join Date
 $userJoined[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]
]
$addTimestamp
$color[$random[0;999999]]`}/>
  
          </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
