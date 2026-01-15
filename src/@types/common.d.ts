declare module "commonData" {
  /* 成果物の説明や URL などを表示するための型定義 */
  export type Work = {
    id: string;
    /* 成果物のイメージ画像( webp とそれ以外の拡張子画像) */
    image: {
      webp: string;
      others: string;
    },
    /* 成果物のタイトル */
    title: string;
    /* 成果物のリンク */
    url: string;
  }
}
