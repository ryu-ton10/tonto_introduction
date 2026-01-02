import { useEffect } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import './index.css';

function Profile() {

  const twitterUrl = "https://x.com/27ma4_ton10_v1"
  const blueskyUrl = "https://bsky.app/profile/ton10.bsky.social"
  const noteUrl = "https://note.com/kanon_tonto"
  const githubUrl = "https://github.com/ryu-ton10"
  const youtubeUrl = "https://www.youtube.com/@kanon_tonto"
  const youtubeSubscribeUrl = "https://www.youtube.com/@kanon_tonto?sub_confirmation=1"

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

          <div className="profile_content-gallery-links">

            <div className="profile_content-gallery-links-account">
              <a href={twitterUrl} rel="noopener noreferrer" target="_blank">
                <img src="assets/about_me/x_logo.png" alt="x-icon" />
                <div>
                  <p className="profile_content-gallery-links-name">嘉音 とんと@ものづくり系VTuber</p>
                  <p className="profile_content-gallery-links-id">@27ma4_ton10_v1</p>
                </div>
              </a>
            </div>
            <div className="profile_content-gallery-links-account">
              <a href={blueskyUrl} rel="noopener noreferrer" target="_blank">
                <img src="assets/about_me/bluesky_logo.png" alt="bluesky-icon" />
                <div>
                  <p className="profile_content-gallery-links-name">嘉音 とんと@ものづくり系VTuber</p>
                  <p className="profile_content-gallery-links-id">@ton10.bsky.social</p>
                </div>
              </a>
            </div>
            <div className="profile_content-gallery-links-account">
              <a href={noteUrl} rel="noopener noreferrer" target="_blank">
                <img src="assets/about_me/note_logo.png" alt="note-icon" />
                <div>
                  <p className="profile_content-gallery-links-name">嘉音 とんと | note</p>
                  <p className="profile_content-gallery-links-id">note.com</p>
                </div>
              </a>
            </div>
            <div className="profile_content-gallery-links-account">
              <a href={githubUrl} rel="noopener noreferrer" target="_blank">
                <img src="assets/about_me/marshmallow_logo.png" alt="marshmallow-icon" />
                <div>
                  <p className="profile_content-gallery-links-name">マシュマロ</p>
                  <p className="profile_content-gallery-links-id">marshmallow-qa.com</p>
                </div>
              </a>
            </div>
            <div className="profile_content-gallery-links-youtube">
              <div className="profile_content-gallery-links-youtube-button">
                <a href={youtubeUrl} rel="noopener noreferrer" target="_blank">
                  <div className="youtube-icon"><AiFillYoutube /></div>
                </a>
                <a href={youtubeSubscribeUrl} rel="noopener noreferrer" target="_blank">
                  <p>登録する</p>
                </a>
              </div>
              <div className="profile_content-gallery-links-youtube-thumbnail">
                <div>
                  <img src="assets/about_me/youtube_thumbnail_1.png" alt="youtube-thumbnail" />
                </div>
                <div>
                  <img src="assets/about_me/youtube_thumbnail_2.png" alt="youtube-thumbnail" />
                </div>
                <div>
                  <img src="assets/about_me/youtube_thumbnail_3.png" alt="youtube-thumbnail" />
                </div>
                <div>
                  <img src="assets/about_me/youtube_thumbnail_4.png" alt="youtube-thumbnail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
