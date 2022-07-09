import { cleanup, fireEvent } from '@testing-library/react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Title from './../components/Title';

let container = null;
let root = null;
let prop_language:string = "";

// 言語切替用のダミー関数
const updateLanguageSetting = (language: string) => {
  prop_language = language;
};
// 隠し要素出現用のダミー関数
const toggleSecret = jest.fn();

beforeEach(() => {
  // conteiner の定義
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // 定義した container の除去
  root.unmount(container);
  container.remove();
  container = null;

  cleanup;
});

// =============== snapshot test =================
it('タイトル画面が表示されていること', () => {
  const component = renderer.create(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="down" language={prop_language} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('日本語を選択している時、日本語用タイトル画像が表示されていること', () => {
  act(() => {
    root.render(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="down" language={prop_language} />);
  })
  // img タグの存在検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("img").src
  ).toBe("http://localhost/assets/title_jp.png");
  // source タグの存在検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("source").srcset
  ).toBe("/assets/title_jp.webp");
});

it('英語を選択している時、英語用タイトル画像が表示されていること', async () => {
  act(() => {
    root.render(<Title hook={updateLanguageSetting("en")} toggle={toggleSecret} scrollDirection="down" language={prop_language} />);
  })

  // img タグの存在検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("img").src
  ).toBe("http://localhost/assets/title_en.png");
  // source タグの存在検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("source").srcset
  ).toBe("/assets/title_en.webp");
});

it('スクロール方向が上の時、タイトル画像がふーちゃんバージョンになること', () => {
  act(() => {
    root.render(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="up" language={prop_language} />)
  });

  // img タグの検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("img").src
  ).toBe("http://localhost/assets/title_hutaba.png");
  // source タグの検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("source").srcset
  ).toBe("/assets/title_hutaba.webp");
});

it('スクロール方向が上の時、英語の場合でもタイトル画像がふーちゃんバージョンになること', () => {
  act(() => {
    root.render(<Title hook={updateLanguageSetting("en")} toggle={toggleSecret} scrollDirection="up" language={prop_language} />)
  });

  // img タグの検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("img").src
  ).toBe("http://localhost/assets/title_hutaba.png");
  // source タグの検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("source").srcset
  ).toBe("/assets/title_hutaba.webp");
});

it('scrollDirection が下の場合、スクロールを促すアニメーションが下になること', () => {
  act(() => {
    root.render(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="down" language={prop_language} />)
  });

  expect(
    container.querySelector("[data-testid=scroll]").className
  ).toBe("scroll-down");
});

it('scrollDirection が上の場合、スクロールを促すアニメーションが上になること', () => {
  act(() => {
    root.render(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="up" language={prop_language} />)
  });

  expect(
    container.querySelector("[data-testid=scroll]").className
  ).toBe("scroll-up");
});
