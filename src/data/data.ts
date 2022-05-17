import { nanoid } from 'nanoid';

export const title = {
  id: nanoid(),
  jp: "とんとのひみつきち",
  en: "Tonto's workspace"
}

export const name = {
  id: nanoid(),
  jp: "とんと",
  en: "Tonto"
}

export const twitter_url = "https://twitter.com/27ma4_ton10"

export const description = {
  id: nanoid(),
  jp: "石川県で Web エンジニアをやっております。",
  en: "I'm a web application developer who live in Japan :)"
}

export const hobbies = {
  jp: "MK8D / ポケモン / Project DIVA / 太鼓の達人",
  en: "MK8D / Pokemon / EUROBEAT"
}

export const switch_code =  "SW: 0195-9221-0829"
export const discord_id = "Discord: tonto#2290"

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
      en: "Si14 Official website"
    },
    description: {
      jp: "写真サークル 珪素光画の公式ホームページです。サークルメンバーが撮った写真や、メンバーのプロフィール、過去に作成した同人誌などを紹介しています。",
      en: "An official website of Si14. Si14 is a photo club. On the website, you can see a photos which tooked by members. Not only that but also members profile and books can see from this website."
    },
    url: "https://keiso-kouga.netlify.app/",
  },
]
