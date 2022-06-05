import React from 'react';
import './index.css';

type Props = {
  toggleScroll: Function;
}

function SecretA(props: Props) {

  const { toggleScroll } = props;

  return (
    <div className="secret-a-background">
      <button
        className="secret-a-button"
        type="button"
        onClick={() => toggleScroll("up")}
      >
      ｵ  ｽ?
      </button>
    </div>
  );
}

export default SecretA;
