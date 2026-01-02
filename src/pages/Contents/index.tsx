import './index.css';

function Contents() {

  const marshmallowUrl = "https://marshmallow-qa.com/pttp733qamn4v32"
  const noteUrl = "https://note.com/kanon_tonto"
  const podcastUrl = "https://www.youtube.com/playlist?list=PLMvdQ3-WJSOqUpEt3EOAnNBNk70g6DpHP"

  return (
    <div className="content">
      <div className="content_block">
        <div className="content_block-bubble-and-button">
          <picture>
            <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/contents/marshmallow.webp`} />
            <img src={`${process.env.PUBLIC_URL}/assets/contents/marshmallow.png`} alt="thumbnail" />
          </picture>
          <div>
            <a href={marshmallowUrl} target="_blank" rel="noopener noreferrer">
              <p>マシュマロを投げる</p>
            </a>
          </div>
        </div>
        <picture>
          <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/contents/tonto_1.webp`} />
          <img src={`${process.env.PUBLIC_URL}/assets/contents/tonto_1.png`} alt="thumbnail" />
        </picture>
      </div>
      <div className="content_block">
        <div className="content_block-bubble-and-button">
          <picture>
            <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/contents/note.webp`} />
            <img src={`${process.env.PUBLIC_URL}/assets/contents/note.png`} alt="thumbnail" />
          </picture>
          <div>
            <a href={noteUrl} target="_blank" rel="noopener noreferrer">
              <p>記事を見る</p>
            </a>
          </div>
        </div>
        <picture>
          <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/contents/tonto_2.webp`} />
          <img src={`${process.env.PUBLIC_URL}/assets/contents/tonto_2.png`} alt="thumbnail" />
        </picture>
      </div>
      <div className="content_block">
        <div className="content_block-bubble-and-button">
          <picture>
            <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/contents/podcast_intro.webp`} />
            <img src={`${process.env.PUBLIC_URL}/assets/contents/podcast_intro.png`} alt="thumbnail" />
          </picture>
          <div>
            <a href={podcastUrl} target="_blank" rel="noopener noreferrer">
              <p>ラジオを聴く</p>
            </a>
          </div>
        </div>
        <picture>
          <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/assets/contents/tonto_3.webp`} />
          <img src={`${process.env.PUBLIC_URL}/assets/contents/tonto_3.png`} alt="thumbnail" />
        </picture>
      </div>
    </div>
  );
}

export default Contents;
