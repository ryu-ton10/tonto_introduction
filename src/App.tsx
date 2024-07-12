import React, { useState } from 'react';
import 'App.css';
import Title from 'components/Title'
import Thumbnail from 'components/Thumbnail'
import ProfileDescription from 'components/ProfileDescription'
import Contents from 'components/Contents'
import Hobbies from 'components/Hobbies';
import Footer from 'components/Footer';
import {
  name,
  twitter_url,
  youtube_url,
  description,
  hobbies,
  contents,
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
      <p className="profile-title">ABOUT ME</p>
      <div className="profile-descriptions" aria-label="grid-container">
        <Thumbnail />
        <ProfileDescription
          name={name}
          twitter_url={twitter_url}
          youtube_url={youtube_url}
          description={description}
          language={language}
        />
      </div>
      <Hobbies hobbies={hobbies} language={language} />
      <Contents contents={contents} language={language} />
      <Footer twitter_url={twitter_url} privacy_policy={privacy_policy} language={language} />
    </div>
  );
}

export default App;
