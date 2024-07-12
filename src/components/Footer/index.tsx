import React, { useState } from 'react';
import './index.css';
import PrivacyPolicy from 'components/PrivacyPolicy';

type Props = {
  twitter_url: string;
  privacy_policy: {
    jp: string;
    en: string
  };
  language: string;
};

function Footer(props: Props) {

  const { twitter_url, privacy_policy, language } = props;
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="footer" data-testid="footer">
      <p className="privacy_policy" onClick={() => setIsShowModal(true)}>{language === "jp" ? "プライバシーポリシー" : "Privacy Policy"}</p>
      {isShowModal &&
        <PrivacyPolicy setIsShowModal={setIsShowModal} privacy_policy={privacy_policy} language={language} />
      }
      <p>©︎2024    <a href={twitter_url} rel="noopener noreferrer" target="_blank">@27ma4_ton10_v1</a></p>
    </div>
  );
};

export default Footer;
