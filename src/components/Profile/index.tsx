import React, { useEffect } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import './index.css';

type Props = {
  name: {
    jp: string;
    en: string;
  }
  twitter_url: string;
  youtube_url: string;
  description: {
    jp: string;
    en: string;
  }
  language: string;
}

function Profile(props: Props) {

  const { name, twitter_url, youtube_url, description, language } = props;

  const toggleFadeIn = () => {
    let currentScrollY = window.scrollY;
    const thumbnailImage = document.getElementsByClassName('thumbnail-image')[0] as HTMLElement;
    const thumbnailImageTop = thumbnailImage.getBoundingClientRect().top;
    const profileDescription = document.getElementsByClassName('profile-description')[0] as HTMLElement;
    const profileDescriptionTop = profileDescription.getBoundingClientRect().top;

    if (currentScrollY > thumbnailImageTop) {
      thumbnailImage.style.animation = "animationToRight 2s forwards";
    }
    if (currentScrollY > profileDescriptionTop) {
      profileDescription.style.animation = "animationToRight 2s forwards";
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleFadeIn)
    return () => window.addEventListener('scroll', toggleFadeIn)
  })

  return (
    <div className="profile">
      <p className="profile-title">ABOUT ME</p>
      <div className="thumbnail-image" aria-label="thumbnail-wrapper">
        <picture>
          <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/toa_tonto.webp`} ></source>
          <img src={`${process.env.PUBLIC_URL}/assets/toa_tonto.jpeg`} alt="thumbnail" />
        </picture>
      </div>
      <div className="profile-description">
        <p className="name">{language === "jp" ? name.jp : name.en}</p>
        <div className="sns">
          <a href={twitter_url} rel="noopener noreferrer" target="_blank"><img src="assets/twitter_logo_blue.png" alt="twitter-icon"></img></a>
          <a href={youtube_url} rel="noopener noreferrer" target="_blank"><div className="youtube-icon"><AiFillYoutube /></div></a>
        </div>
        <div className="profile-details">
          <p>{language === "jp" ? description.jp : description.en}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
