import './index.css';

function Title() {

  return (
    <div className="title-bar">
      <picture data-testid="title-image">
        <source
          type="image/webp"
          srcSet={`${process.env.PUBLIC_URL}/assets/title_jp.webp`}/>
        <img
          className="title-image"
          src={`${process.env.PUBLIC_URL}/assets/title_jp.png`}
          alt="background"
        />
      </picture>
      <img
        className="background-image"
        src={`${process.env.PUBLIC_URL}/assets/kanon_tonto_white.png`}
        alt="background"
      />
      {/* スクロールを促すアニメーション */}
      <p className="scroll-down" data-testid="scroll"><span /></p>
    </div>
  );
}

export default Title;
