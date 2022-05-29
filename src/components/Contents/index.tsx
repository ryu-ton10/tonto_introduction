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
      {contents.map((content, index) => {
        const { image, title, description, url } = content;
        return (
          <div className="content">
            <picture>
              <source type="image/webp" srcSet={`${process.env.PUBLIC_URL + image.webp}`} ></source>
              <img src={`${process.env.PUBLIC_URL + image.others}`} alt="thumbnail" />
            </picture>
            <div className="content-description">
              <p className="content-description-title">{language === "jp" ? title.jp : title.en}</p>
              <p className="content-description-detail">{language === "jp" ? description.jp : description.en}</p>
              <div className="link">
                <a className="link-button" href={url} rel="noopener noreferrer" target="_blank">{language === "jp" ? "Webサイトへ行ってみる" : "Go website"}</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contents;
