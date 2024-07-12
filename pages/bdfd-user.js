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
          <meta name="description" content="My Website" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image src="/title.png" alt="Profile Icon" width={40} height={40} /> User Info
          </h1>

          <div className={styles.snippet}>
            <p className={styles.snippet}>Main Code</p>
            <code className={styles.code} text={`$nomention
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

          <div className={styles.grid}>
            <a href="https://mrjokester.netlify.app/bdfd" className={styles.card}>
              <h2>BDFD Snippets</h2>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
