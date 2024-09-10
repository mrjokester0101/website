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
          <meta name="description" content="BDFD Basic Economy Commands 4 in 1 Snippet" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>Basic Economy 4 in 1 Commands</p>

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
            <p className={styles.snippet}>!</p>
            <code className={styles.code}>{`$nomention

$if[$or[$message[1]==bal;$message[1]==bala;$message[1]==balan;$message[1]==balanc;$message[1]==balance]==true]
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]
$suppressErrors[❌️ Not a vaild user!]

$title[💵$if[$mentioned[1]==] <@$authorID>'s $else <@$mentioned[1]>'s $endifBalance 💵]
$thumbnail[$userAvatar[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]]
$description[
👜 Wallet
$getVar[cash;$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif] cash

🏦 Bank
$getVar[bank;$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif] cash

👜➕️🏦 Total
$calculate[$getVar[cash;$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]+$getVar[bank;$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]] cash
]
$addTimestamp
$color[$random[0;999999]]
$endif

$if[$message[1]==work]
$globalCooldown[30m;❌️ You need to wait %time% till you can work again!]

$setVar[cash;$sum[$getVar[cash;$authorID];$random[100;150]];$authorID]

$title[📃 Work 📃]
$thumbnail[$authorAvatar]
$description[
👤 User
<@$authorID>

🤝 Worked
$randomText[Policeman;Fireflighter;Cashier;DOT;Businessman;Cleaner;Bartender;Cook;Chef;Babysitter;Bank worker;Enginee;Mechanic]

📋 Earned
$random[100;150] cash
]
$addTimestamp
$color[$random[0;999999]]
$endif

$if[$or[$message[1]==dep;$message[1]==depo;$message[1]==depos;$message[1]==deposi;$message[1]==deposit]==true]
$onlyIf[$getVar[cash;$authorID]>0;❌️ You can't deposit when you have 0 cash!]
$onlyIf[$calculate[$getVar[cash;$authorID]+1]>$message[2];❌️ You can't deposit more than what you have!]
$onlyIf[$message[2]>-1;❌️ Can't deposit negative knobs!]
$suppressErrors[❌️ Not a vaild amount!]

$setVar[cash;$sub[$getVar[cash;$authorID];$message[2]];$authorID]
$setVar[bank;$sum[$getVar[bank;$authorID];$message[2]];$authorID]

$title[📥 Deposit 📥]
$thumbnail[$authorAvatar]
$description[
👤 User
<@$authorID>

📋 Amount
$message[2]
]
$addTimestamp
$color[$random[0;999999]]
$endif

$if[$or[$message[1]==with;$message[1]==withd;$message[1]==withdr;$message[1]==withdra;$message[1]==withdraw]==true]
$onlyIf[$getVar[bank;$authorID]>0;❌️ You can't withdraw when you have 0 knobs!]
$onlyIf[$calculate[$getVar[bank;$authorID]+1]>$message[2];❌️ You can't withdraw more than what you have!]
$onlyIf[$message[2]>-1;❌️ Can't withdraw negative knobs!]
$suppressErrors[❌️ Not a vaild amount!]

$setVar[cash;$sum[$getVar[cash;$authorID];$message[2]];$authorID]
$setVar[bank;$sub[$getVar[bank;$authorID];$message[2]];$authorID]

$title[📤 Withdraw 📤]
$thumbnail[$authorAvatar]
$description[
👤 User
<@$authorID>

📋 Amount
$message[2] cash
]
$addTimestamp
$color[$random[0;999999]]
$endif`}</code>
     <CopyTextButton text={`$nomention

$if[$or[$message[1]==bal;$message[1]==bala;$message[1]==balan;$message[1]==balanc;$message[1]==balance]==true]
$onlyIf[$guildID!=;❌️ Can't use the command in dm!]
$suppressErrors[❌️ Not a vaild user!]

$title[💵$if[$mentioned[1]==] <@$authorID>'s $else <@$mentioned[1]>'s $endifBalance 💵]
$thumbnail[$userAvatar[$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]]
$description[
👜 Wallet
$getVar[cash;$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif] cash

🏦 Bank
$getVar[bank;$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif] cash

👜➕️🏦 Total
$calculate[$getVar[cash;$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]+$getVar[bank;$if[$mentioned[1]==] $authorID $else $mentioned[1] $endif]] cash
]
$addTimestamp
$color[$random[0;999999]]
$endif

$if[$message[1]==work]
$globalCooldown[30m;❌️ You need to wait %time% till you can work again!]

$setVar[cash;$sum[$getVar[cash;$authorID];$random[100;150]];$authorID]

$title[📃 Work 📃]
$thumbnail[$authorAvatar]
$description[
👤 User
<@$authorID>

🤝 Worked
$randomText[Policeman;Fireflighter;Cashier;DOT;Businessman;Cleaner;Bartender;Cook;Chef;Babysitter;Bank worker;Enginee;Mechanic]

📋 Earned
$random[100;150] cash
]
$addTimestamp
$color[$random[0;999999]]
$endif

$if[$or[$message[1]==dep;$message[1]==depo;$message[1]==depos;$message[1]==deposi;$message[1]==deposit]==true]
$onlyIf[$getVar[cash;$authorID]>0;❌️ You can't deposit when you have 0 cash!]
$onlyIf[$calculate[$getVar[cash;$authorID]+1]>$message[2];❌️ You can't deposit more than what you have!]
$onlyIf[$message[2]>-1;❌️ Can't deposit negative knobs!]
$suppressErrors[❌️ Not a vaild amount!]

$setVar[cash;$sub[$getVar[cash;$authorID];$message[2]];$authorID]
$setVar[bank;$sum[$getVar[bank;$authorID];$message[2]];$authorID]

$title[📥 Deposit 📥]
$thumbnail[$authorAvatar]
$description[
👤 User
<@$authorID>

📋 Amount
$message[2]
]
$addTimestamp
$color[$random[0;999999]]
$endif

$if[$or[$message[1]==with;$message[1]==withd;$message[1]==withdr;$message[1]==withdra;$message[1]==withdraw]==true]
$onlyIf[$getVar[bank;$authorID]>0;❌️ You can't withdraw when you have 0 knobs!]
$onlyIf[$calculate[$getVar[bank;$authorID]+1]>$message[2];❌️ You can't withdraw more than what you have!]
$onlyIf[$message[2]>-1;❌️ Can't withdraw negative knobs!]
$suppressErrors[❌️ Not a vaild amount!]

$setVar[cash;$sum[$getVar[cash;$authorID];$message[2]];$authorID]
$setVar[bank;$sub[$getVar[bank;$authorID];$message[2]];$authorID]

$title[📤 Withdraw 📤]
$thumbnail[$authorAvatar]
$description[
👤 User
<@$authorID>

📋 Amount
$message[2] cash
]
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
