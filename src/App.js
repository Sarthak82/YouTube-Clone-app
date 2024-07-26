import './App.css';
import Header from './Header'
import RecommendedVideo from './RecommendedVideo';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
        <Header />
        <div className='app__page'>
          <Sidebar/>
          <RecommendedVideo/>
        </div>
    </div>
  );
}

export default App;
