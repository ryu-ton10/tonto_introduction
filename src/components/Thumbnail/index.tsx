import React from 'react';
import './index.css';

function Thumbnail() {

  return (
    <div className="thumbnail-image">
      <picture>
        <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/thumbnail.webp`} ></source>
        <img src={`${process.env.PUBLIC_URL}/thumbnail.jpeg`} alt="thumbnail" />
      </picture>
    </div>
  );
}

export default Thumbnail;
