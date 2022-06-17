import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import SecretA from './../components/SecretA';

let container = null;

beforeEach(() => {
  // container の定義
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  // 定義した contaienr の除去
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

// =============== snapshot test =================
it('SecretA コンポーネントが表示されること', () => {
  // スクロール矢印の向きを制御するダミーの関数
  const toggleScroll = jest.fn();
  const component = renderer.create(<SecretA toggleScroll={toggleScroll} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('ボタンが 1 つ存在していること', () => {
  // スクロール矢印の向きを制御するモック関数
  const toggleScroll = jest.fn();

  act(() => {
    render(<SecretA toggleScroll={toggleScroll} />, container)
  });

  expect(document.querySelector("[data-testid=secret-a-button]")).toBeTruthy();

});

it('ボタンをクリックした時、スクロールの向きが切り替わる関数が呼ばれること', () => {
  // スクロール矢印の向きを制御するモック関数
  const toggleScroll = jest.fn();

  act(() => {
    render(<SecretA toggleScroll={toggleScroll} />, container)
  });

  expect(toggleScroll).toHaveBeenCalledTimes(0);

  const button = document.querySelector("[data-testid=secret-a-button]");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  })

  expect(toggleScroll).toHaveBeenCalledTimes(1);
});
