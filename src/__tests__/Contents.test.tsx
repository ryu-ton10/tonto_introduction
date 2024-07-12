import { cleanup, act } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import renderer from "react-test-renderer";
import Contents from "./../components/Contents";

let container = null; // ダミーの DOM を格納するためのコンテナ
let root = null;
const sample_content = [{
  image: {webp: "/test/sample_webp_image.webp", others: "/test/sample_png_image.png"},
  title: {jp: "サンプル日本語タイトル", en: "sample english title"},
  description: {jp: "サンプル日本語説明文", en: "sample english description"},
  url: "http://hoge.fuga"
}];

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(cleanup);

// =============== snapshot test =================
it('コンテンツ群が表示されていること', () => {
  const component = renderer.create(<Contents contents={sample_content} language="jp" />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// =============== tests with act =================
it('コンテンツのサムネイルが表示されていること', () => {
  act(() => {
    root.render(<Contents contents={sample_content} language="jp" />);
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
    root.render(<Contents contents={sample_content} language="jp" />);
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
    root.render(<Contents contents={sample_content} language="en" />);
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
