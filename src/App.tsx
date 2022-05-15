import React from 'react';
import 'App.css';
import 'antd/dist/antd.min.css';
import TitleBar from 'components/TitleBar'
import Thumbnail from 'components/Thumbnail'
import ProfileDescription from 'components/ProfileDescription'

function App() {
  return (
    <div className="App">
      <header>
        <TitleBar />
        <Thumbnail />
        <ProfileDescription />
      </header>
    </div>
  );
}

export default App;
