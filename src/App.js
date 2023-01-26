import logo from './assets/img/rick-title.png';

import './App.scss';
import Home from './components/Home';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <Link to={`characters`}>Characters</Link>
        <Link to={`episodes`}>Episodes</Link>
        <Home />
      </header>
    </div>
  );
}

export default App;
