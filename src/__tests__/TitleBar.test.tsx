import { cleanup, fireEvent } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import TitleBar from './../components/TitleBar';

let container = null;
const updateLanguageSetting = (langage: string) => {};

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
  const component = renderer.create(<TitleBar hook={updateLanguageSetting("jp")} language="jp" />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('日本語を選択している時、日本語用タイトル画像が表示されていること', () => {
  act(() => {
    render(<TitleBar hook={updateLanguageSetting("jp")} language="jp" />, container);
  })
  // img タグの存在検証
  const displayedImgImage = document.querySelector("img");
  expect(displayedImgImage.alt).toBe("background");
  // source タグの存在検証
  const displayedSourceImage = document.querySelector("source");
  expect(displayedSourceImage.srcset).toBe("/assets/title_jp.webp");
});

it('言語設定を英語に切り替えた時、英語用タイトル画像が表示されていること', () => {
  const onChange = jest.fn(); // ダミーの変更イベント
  act(() => {
    render(<TitleBar hook={onChange} language="jp" />, container);
  })

  // クリックイベント発火のためにボタン要素を取得
  const jp_button = document.querySelector("[data-testid=jp-toggle]");
  expect(jp_button.innerHTML).toBe("JP");

  // ボタン押下イベントの発火
  act(() => {
    jp_button.dispatchEvent(new MouseEvent("click", { bubbles: true}));
  });

  expect(onChange).toHaveBeenCalledTimes(1);

  // 画像の読み込みまで少し時間がかかるため
  setTimeout(() => {
    const displayedSourceImage = document.querySelector("source");
    expect(displayedSourceImage.srcset).toBe("/assets/title_en.webp");
  }, 1500);
});
