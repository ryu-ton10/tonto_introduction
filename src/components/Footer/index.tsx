import React from 'react';
import './index.css';

type Props = {
  twitter_url: string;
};

function Footer(props: Props) {

  const { twitter_url } = props;

  return (
    <div className="footer" data-testid="footer">
      <p>©︎2022    <a href={twitter_url} rel="noopener noreferrer" target="_blank">@27ma4_ton10</a></p>
    </div>
  );
};

export default Footer;
