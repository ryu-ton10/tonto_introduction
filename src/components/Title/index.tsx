import React from 'react';
import './index.css';

type Props = {
  hook: Function;
  language: string;
}

function Title(props: Props) {

  const { hook, language } = props;

  // 言語切替ボタンで enabled な状態
  const languageSelectedStyle = {
    backgroundColor: '#E8C1B8',
    color: 'white',
    borderColor: 'white'
  }

  // 言語切替ボタンで disabled な状態
  const languageNotSelectedStyle = {
    backgroundColor: 'white',
    color: '#E89A8A',
    borderColor: 'white'
  };
  return (
    <div className="title-bar">
      <div className="language-selection">
        <button
          type="button"
          onClick={() => hook("jp")}
          style={language === "jp" ? languageSelectedStyle : languageNotSelectedStyle}
          className="language-selection-button"
        >
          JP
        </button>
        <button
          type="button"
          onClick={() => hook("en")}
          style={language === "en" ? languageSelectedStyle : languageNotSelectedStyle}
          className="language-selection-button"
        >
          EN
        </button>
      </div>
      <picture data-testid="title-image">
        <source
          type="image/webp"
          srcSet={
            language === "jp" ? `${process.env.PUBLIC_URL}/assets/title_jp.webp` : `${process.env.PUBLIC_URL}/assets/title_en.webp`
          }
        >
        </source>
        <img
          className="title-image"
          src={
            language === "jp" ? `${process.env.PUBLIC_URL}/assets/title_jp.png` : `${process.env.PUBLIC_URL}/assets/title_en.png`
          }
          alt="background"
        />
      </picture>
      <img
        className="background-image"
        src={`${process.env.PUBLIC_URL}/assets/kanon_tonto_white.png`}
        alt="background"
      />
      {/* スクロールを促すアニメーション */}
      <p className="scroll-down" data-testid="scroll"><span></span></p>
    </div>
  );
}

export default Title;
