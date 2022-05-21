import renderer from 'react-test-renderer';
import TitleBar from './../components/TitleBar';

it('タイトル画面が表示されていること', () => {
  const updateLanguageSetting = (langage: string) => {};

  const component = renderer.create(<TitleBar hook={updateLanguageSetting("jp")} language="jp" />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})
