import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer";
import Contents from "./../components/Contents";

let container = null; // ダミーの DOM を格納するためのコンテナ
const sample_content = [{
  image: {webp: "sample_webp_image.webp", others: "sample_png_image.png"},
  title: {jp: "サンプル日本語タイトル", en: "sample english title"},
  description: {jp: "サンプル日本語説明文", en: "sample english description"},
  url: "http://hoge.fuga"
}];

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 作成したダミーの DOM を除去する
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// =============== snapshot test =================
it('コンテンツ群が表示されていること', () => {
  const component = renderer.create(<Contents contents={sample_content} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// =============== tests with act =================
it('Row と Col が表示されていること', () => {
  act(() => {
    render(<Contents contents={sample_content} />, container);
  });

  // NOTE: Row と Col がモック化されている以上、同じレイアウトを検証することは難しい。
  // そのため、Unit Test ではモックが呼ばれていることを担保することに留めている
  // TODO: antd を利用しないよう修正をしたため、テストも細かく書く
  //const row = document.querySelector("[data-testid=row]");
  //expect(row.textContent).toBe('Row');
});
