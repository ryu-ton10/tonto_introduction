import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Thumbnail from './../components/Thumbnail';

let container = null;
let root = null;

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
});

// =============== snapshot test =================
it('サムネイル画像が表示されていること', () => {
  const component = renderer.create(<Thumbnail />)
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('サムネイル画像が img 要素で表示されていること', () => {
  act(() => {
    root.render(<Thumbnail />);
  });
  const displayedImage = document.querySelector("img");
  expect(displayedImage.src).toContain("thumbnail");
});

it('サムネイル画像が source 要素で表示されていること', () => {
  act(() => {
    root.render(<Thumbnail />);
  });
  const displayedImage = document.querySelector("source");
  expect(displayedImage.srcset).toBe("/thumbnail.webp");
});
