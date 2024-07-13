import React from 'react';
import './index.css';
import { Content } from 'commonData';

type Props = {
  contents: Content[]
  language: string;
}

function Contents(props: Props) {

  const { contents, language } = props;

  return (
    <div className="contents">
      <p className="content-title">CONTENTS</p>
      <div className="content-area">
        {contents.map((content, index) => {
          const { image, title, url } = content;
          return (
            <div className="content">
              <picture data-testid="content-thumbnail">
                <source type="image/webp" srcSet={`${process.env.PUBLIC_URL + image.webp}`} ></source>
                <img src={`${process.env.PUBLIC_URL + image.others}`} alt="thumbnail" />
              </picture>
              <p data-testid="content-description-title">{language === "jp" ? title.jp : title.en}</p>
              <a className="link-button" href={url} rel="noopener noreferrer" target="_blank">{language === "jp" ? "Webサイトへ行ってみる" : "Go website"}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contents;
