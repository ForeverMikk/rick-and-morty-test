import logo from './assets/img/rick-title.png';

import './App.scss';
import Home from './components/Home';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={`/`}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        
        <div className='link-container'>
          <Link to={`characters`} style={{fontSize: '2rem', textDecoration: 'none'}}>Characters</Link>
          <Link to={`episodes`} style={{fontSize: '2rem', textDecoration: 'none'}}>Episodes</Link>
        </div>

        <Home />
      </header>
    </div>
  );
}

export default App;
