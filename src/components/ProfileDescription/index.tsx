import React from 'react';
import './index.css';

type Props = {
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

  const { description, hobbies, switch_code, discord_id, language } = props;

  return (
    <div className="profile-description">
      <p>{language === "jp" ? description.jp : description.en}</p>
      <p>{language === "jp" ? hobbies.jp : hobbies.en}</p>
      <p>{switch_code}</p>
      <p>{discord_id}</p>
    </div>
  );
}

export default ProfileDescription;
