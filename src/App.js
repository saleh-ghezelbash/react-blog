import Header from './components/header';
import './App.css';
import Carousel from './components/carousel';
import Search from './components/search';
import Main from './components/main';

function App() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4">
        <Header />
        <Carousel />
        <Search/>
        <Main />
      </div>
    </div>
  );
}

export default App;
