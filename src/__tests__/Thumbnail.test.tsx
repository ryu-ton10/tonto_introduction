import { cleanup, act } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
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

afterEach(cleanup);

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
  expect(displayedImage.src).toContain("icon.jpeg");
});

it('サムネイル画像が source 要素で表示されていること', () => {
  act(() => {
    root.render(<Thumbnail />);
  });
  const displayedImage = document.querySelector("source");
  expect(displayedImage.srcset).toContain("icon.webp");
});
