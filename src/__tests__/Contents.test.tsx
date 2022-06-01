import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer";
import Contents from "./../components/Contents";

let container = null; // ダミーの DOM を格納するためのコンテナ
const sample_content = [{
  image: {webp: "/test/sample_webp_image.webp", others: "/test/sample_png_image.png"},
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
  const component = renderer.create(<Contents contents={sample_content} language="jp" />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// =============== tests with act =================
it('コンテンツのサムネイルが表示されていること', () => {
  act(() => {
    render(<Contents contents={sample_content} language="jp" />, container);
  });

  // webp
  expect(
    container.querySelector("[data-testid=content-thumbnail]").querySelector("source").srcset
  ).toBe("/test/sample_webp_image.webp");
  // png
  expect(
    container.querySelector("[data-testid=content-thumbnail]").querySelector("img").src
  ).toBe("http://localhost/test/sample_png_image.png");
});

it('コンテンツの説明が日本語で表示されていること', () => {
  act(() => {
    render(<Contents contents={sample_content} language="jp" />, container);
  });

  // title
  expect(
    container.querySelector("[data-testid=content-description-title]").textContent
  ).toBe("サンプル日本語タイトル")
  // detail
  expect(
    container.querySelector("[data-testid=content-description-detail]").textContent
  ).toBe("サンプル日本語説明文")
});

it('コンテンツの説明が英語で表示されていること', () => {
  act(() => {
    render(<Contents contents={sample_content} language="en" />, container);
  });

  // title
  expect(
    container.querySelector("[data-testid=content-description-title]").textContent
  ).toBe("sample english title")
  // detail
  expect(
    container.querySelector("[data-testid=content-description-detail]").textContent
  ).toBe("sample english description")
});
