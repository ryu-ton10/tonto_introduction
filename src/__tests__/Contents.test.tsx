import renderer from 'react-test-renderer';
import Contents from './../components/Contents';

it('コンテンツ群が表示されていること', () => {
  const content = [{
    image: {webp: "sample_webp_image.webp", others: "sample_png_image.png"},
    title: {jp: "サンプル日本語タイトル", en: "sample english title"},
    description: {jp: "サンプル日本語説明文", en: "sample english description"},
    url: "http://hoge.fuga"
  }];
  const component = renderer.create(<Contents contents={content} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})
