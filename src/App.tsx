import React, { useState } from 'react';
import 'App.css';
import Title from 'components/Title';
import Profile from 'components/Profile';
import Contents from 'components/Contents';
import Works from 'components/Works';
import Footer from 'components/Footer';
import {
  name,
  twitter_url,
  youtube_url,
  contents,
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
      <Works works={works} language={language} />
      <Footer twitter_url={twitter_url} privacy_policy={privacy_policy} language={language} />
    </div>
  );
}

export default App;
