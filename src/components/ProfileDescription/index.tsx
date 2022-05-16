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
}

function ProfileDescription(props: Props) {

  const { description, hobbies, switch_code, discord_id } = props;

  return (
    <div className="profile-description">
      <p>{description.jp}</p>
      <p>{hobbies.jp}</p>
      <p>{switch_code}</p>
      <p>{discord_id}</p>
    </div>
  );
}

export default ProfileDescription;
