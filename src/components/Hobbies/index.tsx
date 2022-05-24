import React from 'react';
import { GiConsoleController, GiBattleGear } from 'react-icons/gi';
import { MdLibraryMusic, MdLocalCafe } from 'react-icons/md';
import { Row, Col } from 'antd';
import './index.css';

function Hobbies() {
  return (
    <div className="hobbies">
      <Row>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><GiConsoleController size="8em" /></div>
          <div className="hobby-title"><p>マリオカート8DX</p></div>
          <div className="hobby-description">
            <p>主にデイジー姫を使って野良を走っております。ハイラルサーキット、ヨッシーサーキット、ねじれマンションなどが得意です。</p>
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><GiBattleGear size="8em" /></div>
          <div className="hobby-title"><p>ポケモン</p></div>
          <div className="hobby-description">
            <p>ポケモンというコンテンツそのものが好きです。特に剣盾シリーズではオンラインマッチを楽しんでいます。好きなポケモンは サーナイト、ザングース、バクフーン です。</p>
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><MdLibraryMusic size="8em" /></div>
          <div className="hobby-title"><p>EUROBEAT</p></div>
          <div className="hobby-description">
            <p>作業をする時やドライブの BGM はいつもユーロビートを聴いています。学生の頃に何度もリピートしていたので、これを聴くとどこか懐かしい気分になれます。</p>
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><MdLocalCafe size="8em" /></div>
          <div className="hobby-title"><p>コーヒー</p></div>
          <div className="hobby-description">
            <p>ハンドドリップコーヒーが大好きです。特にブラジルやコスタリカ、ペルーやグアテマラから輸入された豆が好きで、家には必ず 300g ほどストックがあります。</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hobbies;
