import React from 'react';
import './index.css';
import { Row } from 'antd';
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
  hobbies: {
    jp: string;
    en: string;
  }
  switch_code: string;
  discord_id: string;
  language: string;
}

function ProfileDescription(props: Props) {

  const { name, twitter_url, description, hobbies, switch_code, discord_id, language } = props;

  return (
    <div className="profile-description">
      <Row className="name-and-sns" justify="center">
        <p>{language === "jp" ? name.jp : name.en}</p>
        <a href={twitter_url} rel="noopener noreferrer" target="_blank"><TwitterOutlined /></a>
      </Row>
      <p className="profile-details">{language === "jp" ? description.jp : description.en}</p>
      <p className="profile-details">{language === "jp" ? hobbies.jp : hobbies.en}</p>
      <p className="profile-details">{switch_code}</p>
      <p className="profile-details">{discord_id}</p>
    </div>
  );
}

export default ProfileDescription;
