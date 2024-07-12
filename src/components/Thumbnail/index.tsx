import React from 'react';
import './index.css';

function Thumbnail() {

  return (
    <div className="thumbnail-image" aria-label="thumbnail-wrapper">
      <picture>
        <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/icon.webp`} ></source>
        <img src={`${process.env.PUBLIC_URL}/assets/icon.jpeg`} alt="thumbnail" />
      </picture>
    </div>
  );
}

export default Thumbnail;
