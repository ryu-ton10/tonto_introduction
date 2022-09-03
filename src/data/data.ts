import { nanoid } from 'nanoid';

export const name = {
  id: nanoid(),
  jp: "とんと",
  en: "Tonto"
}

export const twitter_url = "https://twitter.com/27ma4_ton10"
export const youtube_url = "https://youtube.com/user/MeiTonto06"

export const description = {
  id: nanoid(),
  jp: "石川県で Web エンジニアをやっております。 趣味で動画投稿も行っており、主にマリオカートの動画をアップロードしています！",
  en: "I'm a web application developer who live in Japan :)  My hobby is uploading MarioKart8DX video for YouTube. Please check it out!"
}

export const hobbies = [
  {
    id: nanoid(),
    title: {
      jp: "マリオカート8DX",
      en: "MarioKart8DX"
    },
    description: {
      jp: "主にデイジー姫を使って野良を走っております。ハイラルサーキット、ヨッシーサーキット、ねじれマンションなどが得意です。",
      en: "I'm big fan of Daisy. I always run with Daisy. My favorite courses are Hyrule Circuit, GCN Yoshi Circuit and Twisted Mansion."
    }
  },
  {
    id: nanoid(),
    title: {
      jp: "ポケモン",
      en: "Pokemon"
    },
    description: {
      jp: "主に剣盾シリーズでオンラインマッチをやっております。好きなポケモンは サーナイト、ザングース、バクフーン です。",
      en: "I'm often at online battle with Sword and Shield. My favorite pokemons are Sirnight, Zangoose and Typhiosion."
    }
  },
  {
    id: nanoid(),
    title: {
      jp: "EUROBEAT",
      en: "Listening EUROBEAT"
    },
    description: {
      jp: "作業をする時やドライブの BGM はいつもユーロビートを聴いています。学生の頃に何度もリピートしていたので、これを聴くとどこか懐かしい気分になれます。",
      en: "I prefer to listen EUROBEAT when driving or programming. There is a goog memory from when I was a student because I often listen there."
    }
  },
  {
    id: nanoid(),
    title: {
      jp: "コーヒー",
      en: "Dripping coffee"
    },
    description: {
      jp: "ハンドドリップコーヒーが大好きです。特にブラジルやコスタリカ、ペルーやグアテマラから輸入された豆が好きで、家には必ず 300g ほどストックがあります。",
      en: "I really love coffee. Especially, coffee beans of Brazil, Costa Rica, Peru and Guatemala are my favorite."
    }
  }
]

export const contents = [
  {
    id: nanoid(),
    image: {
      webp: "/assets/pt_logo.webp",
      others: "/assets/pt_logo.png"
    },
    title: {
      jp: "ポケモン種族値サーチ",
      en: "Pokemon TribeRate Searcher"
    },
    description: {
      jp: "ポケットモンスター ソード・シールドに登場するポケモンの種族値を検索できる Web アプリケーションです。",
      en: "A web application which can search pokemon's tribe rate which you can see on Pokemon Sword and Shield."
    },
    url: "https://pokemon-tribe-rate-searcher.netlify.app/",
  },
  {
    id: nanoid(),
    image: {
      webp: "/assets/si14_logo.webp",
      others: "/assets/si14_logo.png"
    },
    title: {
      jp: "珪素光画ホームページ",
      en: "Si14 Picture website"
    },
    description: {
      jp: "写真サークル 珪素光画の公式ホームページです。サークルメンバーが撮った写真や、メンバーのプロフィール、過去に作成した同人誌などを紹介しています。",
      en: "A website of Si14 Picture. On the website, you can see not only a photos which tooked by members but also members profile and books"
    },
    url: "https://keiso-kouga.netlify.app/",
  },
]

export const privacy_policy = {
  id: nanoid(),
  jp: "当サイトでは、データ収集のために Google アナリティクスを利用しています。このデータは匿名で収集されるものであり、個人を特定するものではありません。また、この機能は Cookie を無効にすることで収集を拒否することが出来ます。",
  en: "We collect a data such as a count of visit by using Google Analytics. These data are collected anonymously so we won't identify an individual. Also, you can reject the collection by disabling Cookie."
}
