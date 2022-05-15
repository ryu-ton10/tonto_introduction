import React from 'react';
import './index.css';


function TitleBar() {

  return (
    <div className="title-bar">
      <p>とんとのひみつきち</p>
      <img className="background-image" src={`${process.env.PUBLIC_URL}/hutaba_background.jpg`} alt="background" />
      {/* スクロールを促すアニメーション */}
      <p className="scroll"><span></span></p>
    </div>
  );
}

export default TitleBar;
