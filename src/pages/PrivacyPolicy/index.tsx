import './index.css';

type Props = {
  setIsShowModal: (args: boolean) => void;
  privacy_policy: {
    jp: string;
    en: string;
  };
  language: string;
}

function PrivacyPolicy(props: Props) {

  const { setIsShowModal, privacy_policy, language } = props;

  return(
    <div className="overlay">
      <div className="modal">
        <p>{language === "jp" ? privacy_policy.jp : privacy_policy.en }</p>
        <button type="button" onClick={() => setIsShowModal(false)}>OK</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
