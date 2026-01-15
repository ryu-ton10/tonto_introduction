import { nanoid } from 'nanoid';

export const twitter_url = "https://twitter.com/27ma4_ton10_v1"
export const youtube_url = "https://youtube.com/user/MeiTonto06"

export const works = [
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/pt_logo.webp",
      others: "/assets/works/pt_logo.png"
    },
    title: "ポケモン種族値サーチ",
    url: "https://pokemon-tribe-rate-searcher.netlify.app/",
  },
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/si14_logo.webp",
      others: "/assets/works/si14_logo.png"
    },
    title: "珪素光画ホームページ",
    url: "https://keiso-kouga.netlify.app/",
  },
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/kokon_website.webp",
      others: "/assets/works/kokon_website.jpeg"
    },
    title: "ここんのかくれが",
    url: "https://kiyubi-kokon.netlify.app/",
  },
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/kayano_au.webp",
      others: "/assets/works/kayano_au.png"
    },
    title: "Kayano AU オフィシャルサイト",
    url: "https://kayanoau.netlify.app/",
  },
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/bar_momo.webp",
      others: "/assets/works/bar_momo.png"
    },
    title: "BAR MOMO オフィシャルサイト",
    url: "https://whisky-bar-momo.netlify.app/",
  },
]

export const privacy_policy = {
  id: nanoid(),
  jp: "当サイトでは、データ収集のために Google アナリティクスを利用しています。\nこのデータは匿名で収集されるものであり、個人を特定するものではありません。\nまた、この機能は Cookie を無効にすることで収集を拒否することが出来ます。",
  en: "We collect a data such as a count of visit by using Google Analytics.\nThese data are collected anonymously so we won't identify an individual.\nAlso, you can reject the collection by disabling Cookie."
}
