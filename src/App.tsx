import 'App.css';
import Title from 'pages/Title';
import Profile from 'pages/Profile';
import Works from 'pages/Works';
import Footer from 'pages/Footer';
import {
  twitter_url,
  works,
  privacy_policy
} from 'data/data';

function App() {
  return (
    <div className="App">
      <Title />
      <Profile />
      <Works works={works} />
      <Footer twitter_url={twitter_url} privacy_policy={privacy_policy} />
    </div>
  );
}

export default App;
