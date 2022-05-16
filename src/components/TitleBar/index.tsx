import React from 'react';
import './index.css';

type Props = {
  title: {
    jp: string;
    en: string;
  }
}

function TitleBar(props: Props) {

  const { title } = props;

  return (
    <div className="title-bar">
      <p>{title.jp}</p>
      <img className="background-image" src={`${process.env.PUBLIC_URL}/hutaba_background.jpg`} alt="background" />
      {/* スクロールを促すアニメーション */}
      <p className="scroll"><span></span></p>
    </div>
  );
}

export default TitleBar;
