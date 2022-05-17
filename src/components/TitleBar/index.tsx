import React from 'react';
import './index.css';
import { Radio } from 'antd';

type Props = {
  hook: Function;
  language: string;
}

function TitleBar(props: Props) {

  const { hook, language } = props;

  return (
    <div className="title-bar">
      <img className="title-image" src={language === "jp" ? `${process.env.PUBLIC_URL}/assets/title_jp.png` : `${process.env.PUBLIC_URL}/assets/title_en.png`} alt="background" />
      <img className="background-image" src={`${process.env.PUBLIC_URL}/hutaba_background.jpg`} alt="background" />
      <div className="language-selection">
        {/* TODO: 言語を切り替えられるようにする */}
        <Radio.Group value={language}>
          <Radio.Button value="jp" onClick={ () => hook("jp") }>日本語</Radio.Button>
          <Radio.Button value="en" onClick={ () => hook("en") }>English</Radio.Button>
        </Radio.Group>
      </div>
      {/* スクロールを促すアニメーション */}
      <p className="scroll"><span></span></p>
    </div>
  );
}

export default TitleBar;
