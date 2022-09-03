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
      <div className="name-card-link">
        <a className="name-card-button" href="/assets/name_card.jpg" rel="noopener noreferrer" target="_blank">{language === "jp" ? "名刺を表示" : "Show name card"}</a>
      </div>
    </div>
  );
}

export default ProfileDescription;
