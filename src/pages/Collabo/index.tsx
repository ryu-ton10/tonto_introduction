import { useEffect } from 'react';
import type { Video } from 'commonData';
import './index.css';

type Props = {
  collabos: Video[];
}

function Collabos(props: Props) {

  const { collabos } = props;

  const toggleFadeIn = () => {
    const currentScrollY = window.scrollY;
    const videos = document.querySelectorAll('.collabo-video') as NodeListOf<HTMLElement>;
    for ( const video of videos ) {
      const videoTop = video.getBoundingClientRect().top;

      if (currentScrollY > videoTop) {
        video.style.animation = "animationToRight 2s forwards";
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleFadeIn)
    return () => window.addEventListener('scroll', toggleFadeIn)
  })

  function getYouTubeLink(video_id: string) {
    return `https://www.youtube.com/watch?v=${video_id}&ab_channel=%E5%98%89%E9%9F%B3%E3%81%A8%E3%82%93%E3%81%A8-KanonTonto-`
  }

  return (
    <div className="collabos">
      <p className="collabos-title">COLLABOS</p>
      {collabos.map((collabo, index) => {
        const { id, video_id, title, thumbnail_url } = collabo;
        return (
          <div key={id} className="collabo-video">
            <img src={thumbnail_url} alt="video-thumbnail" />
            <div className="video-title-and-youtube-link">
              <p>{title}</p>
              <a className="collabo-youtube-link-button" href={getYouTubeLink(video_id)} rel="noopener noreferrer" target="_blank">
                YouTubeで見る
              </a>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Collabos;
