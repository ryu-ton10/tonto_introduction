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
  switch_code: string;
  discord_id: string;
  language: string;
}

function ProfileDescription(props: Props) {

  const { name, twitter_url, description, switch_code, discord_id, language } = props;

  return (
    <div className="profile-description">
      <Row className="name-and-sns" justify="center">
        <p>{language === "jp" ? name.jp : name.en}</p>
        <a href={twitter_url} rel="noopener noreferrer" target="_blank"><TwitterOutlined /></a>
      </Row>
      <div className="profile-details">
        <p>{language === "jp" ? description.jp : description.en}</p>
        <p>{switch_code}</p>
        <p>{discord_id}</p>
      </div>
    </div>
  );
}

export default ProfileDescription;
