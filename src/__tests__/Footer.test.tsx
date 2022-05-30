import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Footer from './../components/Footer';

let container = null;

beforeEach(() => {
  // container の定義
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 定義した container の除去
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// =============== snapshot test =================
it('Footer が表示されていること', () => {
  const component = renderer.create(<Footer />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('Footer に西暦と twitter id が表示されていること', () => {
  act(() => {
    render(<Footer />, container);
  })

  const displayed = document.querySelector("[data-testid=footer]");
  expect(displayed.textContent).toBe("©︎2022    @27ma4_ton10");
  console.log(displayed.textContent);
});
