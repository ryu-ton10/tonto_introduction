import React, { useState } from 'react';
import 'App.css';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import Title from 'components/Title'
import Thumbnail from 'components/Thumbnail'
import ProfileDescription from 'components/ProfileDescription'
import Contents from 'components/Contents'
import Hobbies from 'components/Hobbies';
import {
  name,
  twitter_url,
  description,
  switch_code,
  hobbies,
  contents
} from 'data/data';

function App() {

  const { Footer } = Layout;
  // 言語設定を保持するためのトップに位置するフック
  // これを基に各子コンポーネントは言語表示を制御する
  // 切り替えトグルは、TitleBar コンポーネントに持つ
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
      {/* グリッドコンテナー */}
      <div className="profile-descriptions">
        <Thumbnail />
        <ProfileDescription
          name={name}
          twitter_url={twitter_url}
          description={description}
          switch_code={switch_code}
          language={language}
        />
      </div>
      <Hobbies hobbies={hobbies} language={language} />
      <Contents contents={contents} language={language} />
      <Layout>
        <Footer style={{ textAlign: 'center' }}>
          ©︎2022 <a href="https://twitter.com/27ma4_ton10" rel="noopener noreferrer" target="_blank">@27ma4_ton10</a>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
