import React from 'react';
import './index.css';
import { Row, Col } from 'antd';

function Contents() {

  return (
    <div className="content">
      <div className="content-title"><p>CONTENTS</p></div>
      <Row>
        <Col xs={24} sm={24} md={8} lg={10} >
          <div className="content-image">
            <picture>
              <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/pt_logo.webp`} ></source>
              <img src={`${process.env.PUBLIC_URL}/assets/pt_logo.png`} alt="thumbnail" />
            </picture>
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={14} >
          <div className="content-description">
            <p className="content-description-title">ポケモン種族値サーチ</p>
            <p className="content-description-detail">ポケットモンスター ソード・シールドに登場するポケモンの種族値を検索できる Web アプリケーション</p>
            <a href="https://pokemon-tribe-rate-searcher.netlify.app/" rel="noopener noreferrer" target="_blank">https://pokemon-tribe-rate-searcher.netlify.app/</a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contents;
