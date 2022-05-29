import React from 'react';
import './index.css';
import { TwitterOutlined } from '@ant-design/icons';

type Props = {
  name: {
    jp: string;
    en: string;
  }
  twitter_url: string;
  description: {
    jp: string;
    en: string;
  }
  switch_code: string;
  language: string;
}

function ProfileDescription(props: Props) {

  const { name, twitter_url, description, switch_code, language } = props;

  return (
    <div className="profile-description">
      <div className="name-and-sns">
        <p>{language === "jp" ? name.jp : name.en}</p>
        <a href={twitter_url} rel="noopener noreferrer" target="_blank"><TwitterOutlined /></a>
      </div>
      <div className="profile-details">
        <p>{language === "jp" ? description.jp : description.en}</p>
        <p>{switch_code}</p>
      </div>
      <div className="name-card-link">
        <a className="name-card-button" href="/assets/name_card.jpg" rel="noopener noreferrer" target="_blank">{language === "jp" ? "名刺を表示" : "Show name card"}</a>
      </div>
    </div>
  );
}

export default ProfileDescription;
