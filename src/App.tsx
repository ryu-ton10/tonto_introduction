import { useState } from 'react';
import 'App.css';
import Title from 'pages/Title';
import Profile from 'pages/Profile';
import Contents from 'pages/Contents';
import Collabo from 'pages/Collabo';
import Works from 'pages/Works';
import Footer from 'pages/Footer';
import {
  name,
  twitter_url,
  youtube_url,
  contents,
  collabos,
  description,
  works,
  privacy_policy
} from 'data/data';

function App() {

  // 言語設定を保持するためのトップに位置するフック
  // これを基に各子コンポーネントは言語表示を制御する
  // 切り替えトグルは、TitleBar コンポーネントに持つ
  // jp:日本語 en:英語
  const [language, setLanguage] = useState("jp")
  const updateLanguageSetting = (langage: string) => {
    setLanguage(langage);
  }

  return (
    <div className="App">
      <Title
        hook={updateLanguageSetting}
        language={language}
      />
      <Profile
        name={name}
        twitter_url={twitter_url}
        youtube_url={youtube_url}
        description={description}
        language={language}
      />
      <Contents contents={contents} />
      <Collabo collabos={collabos} />
      <Works works={works} language={language} />
      <Footer twitter_url={twitter_url} privacy_policy={privacy_policy} language={language} />
    </div>
  );
}

export default App;
