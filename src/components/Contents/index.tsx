import React from 'react';
import './index.css';
import { Row, Col } from 'antd';

type Content = {

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

type Props = {
  contents: Content[]
  language: string;
}

function Contents(props: Props) {

  const { contents, language } = props;

  return (
    <div className="content">
      <div className="content-title"><p>CONTENTS</p></div>
      {contents.map((content, index) => {
        const { image, title, description, url } = content;
        return (
          <Row>
            <Col xs={24} sm={24} md={8} lg={10} >
              <div className="content-image">
                <picture>
                  <source type="image/webp" srcSet={`${process.env.PUBLIC_URL + image.webp}`} ></source>
                  <img src={`${process.env.PUBLIC_URL + image.others}`} alt="thumbnail" />
                </picture>
              </div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={14} >
              <div className="content-description">
                <p className="content-description-title">{language === "jp" ? title.jp : title.en}</p>
                <p className="content-description-detail">{language === "jp" ? description.jp : description.en}</p>
                <a href={url} rel="noopener noreferrer" target="_blank">{url}</a>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default Contents;
