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
            <Image src="/title.png" alt="Profile Icon" width={40} height={40} /> ChatBot
          </h1>

          <div className={styles.snippet}>
            <p className={styles.snippet}>Main Code</p>
            <code className={styles.code}>{`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]
$var[msg;$message]
$var[clr;$random[0;999999]]
$httpGet[https://api.kastg.xyz/api/ai/llamaV3?prompt=$url[encode;$var[msg]]]
$botTyping
$if[$var[msg]==]
$replyIn[4s]
$title[🌐 Chatbot 🌐]
$thumbnail[$userAvatar[$botID]]
$description[Sorry! Can you repeat what you wanted to say to me? I'm all ears (Or rather, any text input!)]
$addTimestamp
$color[$var[clr]]
$else
$httpGet[https://api.kastg.xyz/api/ai/llamaV3?prompt=$url[encode;$var[msg]]]
$title[🌐 Chatbot 🌐]
$thumbnail[$userAvatar[$botID]]
$description[$httpResult[result;0;response]]
$addTimestamp
$color[$var[clr]]
$endif`}</code>
     <CopyTextButton text={`$nomention
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]
$var[msg;$message]
$var[clr;$random[0;999999]]
$httpGet[https://api.kastg.xyz/api/ai/llamaV3?prompt=$url[encode;$var[msg]]]
$botTyping
$if[$var[msg]==]
$replyIn[4s]
$title[🌐 Chatbot 🌐]
$thumbnail[$userAvatar[$botID]]
$description[Sorry! Can you repeat what you wanted to say to me? I'm all ears (Or rather, any text input!)]
$addTimestamp
$color[$var[clr]]
$else
$httpGet[https://api.kastg.xyz/api/ai/llamaV3?prompt=$url[encode;$var[msg]]]
$title[🌐 Chatbot 🌐]
$thumbnail[$userAvatar[$botID]]
$description[$httpResult[result;0;response]]
$addTimestamp
$color[$var[clr]]
$endif`}/>

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