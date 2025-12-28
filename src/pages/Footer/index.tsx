import { useState } from 'react';
import './index.css';
import PrivacyPolicy from 'pages/PrivacyPolicy';

type Props = {
  twitter_url: string;
  privacy_policy: {
    jp: string;
    en: string
  };
};

function Footer(props: Props) {

  const { twitter_url, privacy_policy } = props;
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="footer" data-testid="footer">
      <p className="privacy-policy" onClick={() => setIsShowModal(true)} onKeyUp={ () => setIsShowModal(false) }>
        プライバシーポリシー
      </p>
      {isShowModal &&
        <PrivacyPolicy setIsShowModal={setIsShowModal} privacy_policy={privacy_policy} />
      }
      <p>©︎2024    <a href={twitter_url} rel="noopener noreferrer" target="_blank">@27ma4_ton10_v1</a></p>
    </div>
  );
};

export default Footer;
