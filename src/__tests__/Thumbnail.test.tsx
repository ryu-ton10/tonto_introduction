import renderer from 'react-test-renderer';
import Thumbnail from './../components/Thumbnail';

it('サムネイル画像が表示されていること', () => {
  const component = renderer.create(<Thumbnail />)
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
