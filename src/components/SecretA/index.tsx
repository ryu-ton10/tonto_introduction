import React from 'react';
import './index.css';

type Props = {
  toggleScroll: Function;
}

function SecretA(props: Props) {

  const { toggleScroll } = props;
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth",
    });
  }
  const toggleEvents = () => {
    toggleScroll("up");
    scrollToTop();
  }

  return (
    <div className="secret-a-background">
      <button
        className="secret-a-button"
        data-testid="secret-a-button"
        type="button"
        onClick={() => toggleEvents()}
      >
      ｴ  ﾝ ｹﾞ ｲﾌﾞ       ﾆ   ﾅﾙ?
      </button>
    </div>
  );
}
export default SecretA;
