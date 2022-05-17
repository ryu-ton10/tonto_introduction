import React, { useState } from 'react';
import 'App.css';
import 'antd/dist/antd.min.css';
import { Row, Col, Layout } from 'antd';
import TitleBar from 'components/TitleBar'
import Thumbnail from 'components/Thumbnail'
import ProfileDescription from 'components/ProfileDescription'
import {
  title,
  name,
  twitter_url,
  description,
  hobbies,
  switch_code,
  discord_id
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
      <TitleBar
        title={title}
        hook={updateLanguageSetting}
        language={language}
      />
      <Row justify="center">
        <p className="profile-title">ABOUT ME</p>
      </Row>
      <Row>
        {/* TODO: タブレットサイズ以上の場合は横並びのレイアウトにする */}
        <Col xs={24} sm={24} md={11} lg={11} >
          <Thumbnail />
        </Col>
        <Col xs={24} sm={24} md={13} lg={13} >
          <ProfileDescription
            name={name}
            twitter_url={twitter_url}
            description={description}
            hobbies={hobbies}
            switch_code={switch_code}
            discord_id={discord_id}
            language={language}
          />
        </Col>
        <Layout>
          <Footer style={{ textAlign: 'center' }}>
            ©︎2022 <a href="https://twitter.com/home" rel="noopener noreferrer" target="_blank">@27ma4_ton10</a>
          </Footer>
      </Layout>
      </Row>
    </div>
  );
}

export default App;
