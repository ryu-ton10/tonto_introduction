declare module "commonData" {
  /* Hobbies コンポーネントで趣味を表示するための型定義 */
  export type Hobby = {
    id: string;
    title: {
      jp: string;
      en: string;
    },
    description: {
      jp: string;
      en: string;
    }
  }

  export type Content = {
    id: string;
    video_id: string;
    title: string;
    thumbnail_url: string;
  }

  /* 成果物の説明や URL などを表示するための型定義 */
  export type Work = {
    /* 成果物のイメージ画像( webp とそれ以外の拡張子画像) */
    image: {
      webp: string;
      others: string;
    },
    /* 成果物のタイトル */
    title: {
      jp: string;
      en: string;
    }
    /* 成果物の説明文 */
    description: {
      jp: string;
      en: string;
    },
    /* 成果物のリンク */
    url: string;
  }
}
