import React from 'react';
import { Video } from 'commonData';
import './index.css';

type Props = {
  collabos: Video[];
}

function Collabos(props: Props) {

  const { collabos } = props;

  function getYouTubeLink(video_id: string) {
    return "https://www.youtube.com/watch?v=" + video_id + "&ab_channel=%E5%98%89%E9%9F%B3%E3%81%A8%E3%82%93%E3%81%A8-KanonTonto-"
  }

  return (
    <div className="collabos">
      <p className="collabos-title">COLLABOS</p>
      {collabos.map((collabo, index) => {
        const { video_id, title, thumbnail_url } = collabo;
        return (
          <div className="video">
            <img src={thumbnail_url} alt="video-thumbnail" />
            <div className="video-title-and-youtube-link">
              <p>{title}</p>
              <div className="youtube-link-button">
                <a href={getYouTubeLink(video_id)} rel="noopener noreferrer" target="_blank">
                  YouTubeで見る
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Collabos;
