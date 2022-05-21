import renderer from 'react-test-renderer';
import ProfileDescription from './../components/ProfileDescription';

it('自己紹介文が表示されていること', () => {
  const sample_name = {jp: "テスト名前", en: "test-name"}
  const sample_twitter_url = "sample-test-twitter-url"
  const sample_description = {jp: "サンプル説明文", en: "sample-description"}
  const sample_hobbies = {jp: "サンプル趣味", en: "sample-hobbies"}
  const sample_sw_code = "0000-0000-0000-0000"
  const sample_discord_id = "sample#0000"

  const component = renderer.create(<ProfileDescription name={sample_name} twitter_url={sample_twitter_url} description={sample_description} hobbies={sample_hobbies} switch_code={sample_sw_code} discord_id={sample_discord_id} language="jp" />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})
