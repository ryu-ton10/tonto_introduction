import { nanoid } from 'nanoid';

export const name = {
  id: nanoid(),
  jp: "嘉音 とんと",
  en: "Kanon Tonto"
}

export const twitter_url = "https://twitter.com/27ma4_ton10_v1"
export const youtube_url = "https://youtube.com/user/MeiTonto06"

export const description = {
  id: nanoid(),
  jp: "フェネックレーサー VTuber です！\n主にマリオカートの配信を行っています",
  en: "I'm fennex fox VTuber!\n I mainly play MK8DX at broadcast.\nPlease check it out!"
}

export const works = [
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/pt_logo.webp",
      others: "/assets/works/pt_logo.png"
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
      webp: "/assets/works/si14_logo.webp",
      others: "/assets/works/si14_logo.png"
    },
    title: {
      jp: "珪素光画ホームページ",
      en: "Si14 Picture website"
    },
    description: {
      jp: "写真サークル 珪素光画の公式ホームページです。\nサークルメンバーが撮った写真や、メンバーのプロフィール、過去に作成した同人誌などを紹介しています。",
      en: "A website of Si14 Picture. On the website, you can see not only a photos which tooked by members but also members profile and books"
    },
    url: "https://keiso-kouga.netlify.app/",
  },
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/kokon_website.webp",
      others: "/assets/works/kokon_website.jpeg"
    },
    title: {
      jp: "ここんのかくれが",
      en: "Kokon's introduction page"
    },
    description: {
      jp: "妖怪ケモノ系 VTuber 杞憂火 狐今の個人ページです。\nYouTube へのリンクや立ち絵など、彼の魅力が存分に詰まったページです。",
      en: "A website of Kiyubi Kokon. On the website, you can see not only his profile but also his charm point."
    },
    url: "https://kiyubi-kokon.netlify.app/",
  },
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/kayano_au.webp",
      others: "/assets/works/kayano_au.png"
    },
    title: {
      jp: "Kayano AU オフィシャルサイト",
      en: "Kayano AU Official Website"
    },
    description: {
      jp: "ペンギンと女の子のコンビで活動する KanayoA と茅野ユウを紹介する Web ページです。\nポップで可愛らしいページになっています。",
      en: "A website of Kayano AU. On the website, you can know about them and activity."
    },
    url: "https://kayanoau.netlify.app/",
  },
  {
    id: nanoid(),
    image: {
      webp: "/assets/works/bar_momo.webp",
      others: "/assets/works/bar_momo.png"
    },
    title: {
      jp: "BAR MOMO オフィシャルサイト",
      en: "BAR MOMO Official Website"
    },
    description: {
      jp: "ペンギンと女の子のコンビで活動する KanayoA と茅野ユウを紹介する Web ページです。\nポップで可愛らしいページになっています。",
      en: "A website of Kayano AU. On the website, you can know about them and activity."
    },
    url: "https://whisky-bar-momo.netlify.app/",
  },
]

export const privacy_policy = {
  id: nanoid(),
  jp: "当サイトでは、データ収集のために Google アナリティクスを利用しています。\nこのデータは匿名で収集されるものであり、個人を特定するものではありません。\nまた、この機能は Cookie を無効にすることで収集を拒否することが出来ます。",
  en: "We collect a data such as a count of visit by using Google Analytics.\nThese data are collected anonymously so we won't identify an individual.\nAlso, you can reject the collection by disabling Cookie."
}
