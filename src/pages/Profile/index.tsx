import { useEffect } from 'react';
import './index.css';

function Profile() {

  const toggleFadeIn = () => {
    const currentScrollY = window.scrollY;
    const thumbnailImage = document.getElementsByClassName('profile_content-thumbnail')[0] as HTMLElement;
    const thumbnailImageTop = thumbnailImage.getBoundingClientRect().top;
    const profileDescription = document.getElementsByClassName('profile_content-gallery')[0] as HTMLElement;
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
      <p className="profile_title">PROFILE</p>
      <div className="profile_content">
        <div className="profile_content-thumbnail" aria-label="thumbnail-wrapper">
          <picture className="profile_content-thumbnail-image">
            <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/about_me/thumbnail.webp`} />
            <img src={`${process.env.PUBLIC_URL}/assets/about_me/thumbnail.png`} alt="thumbnail" />
          </picture>
          <picture className="profile_content-name">
            <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/about_me/name.webp`} />
            <img src={`${process.env.PUBLIC_URL}/assets/about_me/name.png`} alt="thumbnail" />
          </picture>
        </div>
        <div className="profile_content-gallery">
          <div className="profile_content-gallery-standing">
            <picture>
              <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/about_me/standing_paka.webp`} />
              <img src={`${process.env.PUBLIC_URL}/assets/about_me/standing_paka.png`} alt="thumbnail" />
            </picture>
            <picture>
              <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/about_me/standing_pakaboushi.webp`} />
              <img src={`${process.env.PUBLIC_URL}/assets/about_me/standing_pakaboushi.png`} alt="thumbnail" />
            </picture>
          </div>
          <div className="profile_content-gallery-illust">
            <picture>
              <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/about_me/gallery_illust.webp`} />
              <img src={`${process.env.PUBLIC_URL}/assets/about_me/gallery_illust.png`} alt="thumbnail" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
