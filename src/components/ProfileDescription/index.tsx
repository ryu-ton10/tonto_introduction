import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import './index.css';

type Props = {
  name: {
    jp: string;
    en: string;
  }
  twitter_url: string;
  youtube_url: string;
  description: {
    jp: string;
    en: string;
  }
  language: string;
}

function ProfileDescription(props: Props) {

  const { name, twitter_url, youtube_url, description, language } = props;

  return (
    <>
      <p className="profile-title">ABOUT ME</p>
      <div className="profile">
        <div className="thumbnail-image" aria-label="thumbnail-wrapper">
          <picture>
            <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/icon.webp`} ></source>
            <img src={`${process.env.PUBLIC_URL}/assets/icon.jpeg`} alt="thumbnail" />
          </picture>
        </div>
        <div className="profile-description">
          <div className="name-and-sns">
            <p>{language === "jp" ? name.jp : name.en}</p>
            <div className="sns">
              <a href={twitter_url} rel="noopener noreferrer" target="_blank"><img src="assets/twitter_logo_blue.png" alt="twitter-icon"></img></a>
              <a href={youtube_url} rel="noopener noreferrer" target="_blank"><div className="youtube-icon"><AiFillYoutube /></div></a>
            </div>
          </div>
          <div className="profile-details">
            <p>{language === "jp" ? description.jp : description.en}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDescription;
