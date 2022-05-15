import React from 'react';
import './index.css';
import { Row } from 'antd';  
import { TwitterOutlined } from '@ant-design/icons';

function Thumbnail() {

  return (
    <div className="thumbnail-image">
      <picture>
        <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/thumbnail.webp`} ></source>
        <img src={`${process.env.PUBLIC_URL}/thumbnail.jpeg`} alt="thumbnail" />
      </picture>
      <Row justify="center">
        <p>とんと</p>
        <a href="https://twitter.com/27ma4_ton10" rel="noopener noreferrer" target="_blank"><TwitterOutlined /></a>
      </Row>
    </div>
  );
}

export default Thumbnail;
