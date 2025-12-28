import './index.css';

type Props = {
  setIsShowModal: (args: boolean) => void;
  privacy_policy: {
    jp: string;
    en: string;
  };
}

function PrivacyPolicy(props: Props) {

  const { setIsShowModal, privacy_policy } = props;

  return(
    <div className="overlay">
      <div className="modal">
        <p>{privacy_policy.jp}</p>
        <button type="button" onClick={() => setIsShowModal(false)}>OK</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
