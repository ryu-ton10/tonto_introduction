import React from 'react';
import './index.css';

type Props = {
  hook: Function;
  language: string;
}

function TitleBar(props: Props) {

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
      <img className="title-image" src={language === "jp" ? `${process.env.PUBLIC_URL}/assets/title_jp.png` : `${process.env.PUBLIC_URL}/assets/title_en.png`} alt="background" />
      <img className="background-image" src={`${process.env.PUBLIC_URL}/hutaba_background.jpg`} alt="background" />
      <div className="language-selection">
        <div className="language-selection-button">
          <button type="button" onClick={() => hook("jp")} style={language === "jp" ? languageSelectedStyle : languageNotSelectedStyle}>日本語</button>
        </div>
        <div className="language-selection-button">
          <button type="button" onClick={() => hook("en")} style={language === "en" ? languageSelectedStyle : languageNotSelectedStyle}>English</button>
        </div>
      </div>
      {/* スクロールを促すアニメーション */}
      <p className="scroll"><span></span></p>
    </div>
  );
}

export default TitleBar;
