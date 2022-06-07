import { cleanup, fireEvent } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Title from './../components/Title';

let container = null;
let prop_language:string = "";

beforeEach(() => {
  // conteiner の定義
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 定義した container の除去
  unmountComponentAtNode(container);
  container.remove();
  container = null;

  cleanup;
});

// =============== snapshot test =================
it('タイトル画面が表示されていること', () => {
  // 言語切替用のダミー関数
  const updateLanguageSetting = (language: string) => {
    prop_language = language;
  };
  const toggleSecret = jest.fn();
  const component = renderer.create(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="down" language={prop_language} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('日本語を選択している時、日本語用タイトル画像が表示されていること', () => {
  // 言語切替用のダミー関数
  const updateLanguageSetting = (language: string) => {
    prop_language = language;
  };
  const toggleSecret = jest.fn();
  act(() => {
    render(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="down" language={prop_language} />, container);
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
  // 言語切替用のダミー関数
  const updateLanguageSetting = (language: string) => {
    prop_language = language;
  };
  // 隠し要素出現用のダミー関数
  const toggleSecret = jest.fn();
  act(() => {
    render(<Title hook={updateLanguageSetting("en")} toggle={toggleSecret} scrollDirection="down" language={prop_language} />, container);
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
  // 言語切替用のダミー関数
  const updateLanguageSetting = (language: string) => {
    prop_language = language;
  };
  // 隠し要素出現用のダミー関数
  const toggleSecret = jest.fn();

  act(() => {
    render(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="up" language={prop_language} />, container);
  });

  // img タグの検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("img").src
  ).toBe("http://localhost/assets/title_hutaba.png");
  // source タグの検証
  expect(
    container.querySelector("[data-testid=title-image]").querySelector("source").srcset
  ).toBe("/assets/title_hutaba.webp");

})

it('scrollDirection が下の場合、スクロールを促すアニメーションが下になること', () => {
  // 言語切替用のダミー関数
  const updateLanguageSetting = (language: string) => {
    prop_language = language;
  };
  // 隠し要素出現用のダミー関数
  const toggleSecret = jest.fn();

  act(() => {
    render(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="down" language={prop_language} />, container)
  });

  expect(
    container.querySelector("[data-testid=scroll]").className
  ).toBe("scroll-down");
});

it('scrollDirection が上の場合、スクロールを促すアニメーションが上になること', () => {
  // 言語切替用のダミー関数
  const updateLanguageSetting = (language: string) => {
    prop_language = language;
  };
  // 隠し要素出現用のダミー関数
  const toggleSecret = jest.fn();

  act(() => {
    render(<Title hook={updateLanguageSetting("jp")} toggle={toggleSecret} scrollDirection="up" language={prop_language} />, container)
  });

  expect(
    container.querySelector("[data-testid=scroll]").className
  ).toBe("scroll-up");
});
