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
          <div className="hobby-title">マリオカート8DX</div>
          <div className="hobby-description">
            主にデイジー姫を使って野良を走っております。ハイラルサーキット、ヨッシーサーキット、ねじれマンションなどが得意です。
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><GiBattleGear size="8em" /></div>
          <div className="hobby-title">ポケモン</div>
          <div className="hobby-description">
            ポケモンというコンテンツそのものが好きです。特に剣盾シリーズではオンラインマッチを楽しんでいます。好きなポケモンは サーナイト、ザングース、バクフーン です。
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><MdLibraryMusic size="8em" /></div>
          <div className="hobby-title">EUROBEAT</div>
          <div className="hobby-description">
            作業をする時やドライブの BGM はいつもユーロビートを聴いています。学生の頃に何度もリピートしていたので、これを聴くとどこか懐かしい気分になれます。
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><MdLocalCafe size="8em" /></div>
          <div className="hobby-title">コーヒー</div>
          <div className="hobby-description">
            ハンドドリップコーヒーが大好きです。特にブラジルやコスタリカ、ペルーやグアテマラから輸入された豆が好きで、家には必ず 300g ほどストックがあります。
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hobbies;
