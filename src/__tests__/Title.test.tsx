import { cleanup, act } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import { createRoot } from 'react-dom/client';
import renderer from 'react-test-renderer';
import Title from './../components/Title';

let container = null;
let root = null;
let prop_language:string = "";

// 言語切替用のダミー関数
const updateLanguageSetting = (language: string) => {
  prop_language = language;
};

beforeEach(() => {
  // conteiner の定義
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(cleanup);

// =============== snapshot test =================
it('タイトル画面が表示されていること', () => {
  const component = renderer.create(<Title hook={updateLanguageSetting("jp")} language={prop_language} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('日本語を選択している時、日本語用タイトル画像が表示されていること', async () => {
  act(() => {
    root.render(<Title hook={updateLanguageSetting("jp")} language={prop_language} />);
  })

  const webpImg = container.querySelector("source")
  const pngImg = container.querySelector("img")

  // img タグの存在検証
  expect(pngImg).toHaveAttribute("src", "/assets/title_jp.png");
  // source タグの存在検証
  expect(webpImg).toHaveAttribute("srcSet", "/assets/title_jp.webp");
});

it('英語を選択している時、英語用タイトル画像が表示されていること', async () => {
  act(() => {
    root.render(<Title hook={updateLanguageSetting("en")} language={prop_language} />);
  })

  const webpImg = container.querySelector("source")
  const pngImg = container.querySelector("img")

  // img タグの存在検証
  expect(pngImg).toHaveAttribute("src", "/assets/title_en.png");
  // source タグの存在検証
  expect(webpImg).toHaveAttribute("srcSet", "/assets/title_en.webp");
});
