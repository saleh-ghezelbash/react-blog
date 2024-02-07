import Header from './components/header';
import './App.css';
import Carousel from './components/carousel';

function App() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4">
        <Header />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
