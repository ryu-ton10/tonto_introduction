import { useEffect } from 'react';
import './index.css';
import type { Work } from 'commonData';

type Props = {
  works: Work[];
}

function Works(props: Props) {

  const { works } = props;

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
      <p className="works_title">WORKS</p>
      {works.map((work, _) => {
        const { id, image, title, url } = work;
        return (
          <div key={id} className="works_content">
            <a href={url} rel="noopener noreferrer" target="_blank">
              <img src={`${process.env.PUBLIC_URL + image.others}`} alt="thumbnail" />
              <div>
                <p>{title}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
