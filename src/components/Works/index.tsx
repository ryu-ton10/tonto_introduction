import { useEffect } from 'react';
import './index.css';
import type { Work } from 'commonData';

type Props = {
  works: Work[];
  language: string;
}

function Works(props: Props) {

  const { works, language } = props;

  const toggleFadeIn = () => {
    const currentScrollY = window.scrollY;
    const works = document.querySelectorAll('.work') as NodeListOf<HTMLElement>;
    for ( const work of works ) {
      const workTop = work.getBoundingClientRect().top;

      if (currentScrollY > workTop) {
        work.style.animation = "animationToRight 2s forwards";
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleFadeIn)
    return () => window.addEventListener('scroll', toggleFadeIn)
  })

  return (
    <div className="works">
      <p className="work-title">WORKS</p>
      <div className="work-area">
        {works.map((work, index) => {
          const { id, image, title, url } = work;
          return (
            <div key={id} className="work">
              <picture className="work-thumbnail" data-testid="work-thumbnail">
                <source type="image/webp" srcSet={`${process.env.PUBLIC_URL + image.webp}`} />
                <img src={`${process.env.PUBLIC_URL + image.others}`} alt="thumbnail" />
              </picture>
              <p data-testid="work-description-title">{language === "jp" ? title.jp : title.en}</p>
              <a className="link-button" href={url} rel="noopener noreferrer" target="_blank">{language === "jp" ? "Webサイトへ行ってみる" : "Go website"}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
