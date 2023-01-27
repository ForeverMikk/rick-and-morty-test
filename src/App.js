import React, {useEffect} from 'react';

import logo from './assets/img/rick-title.png';

import './App.scss';
import Home from './components/Home';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function App() {

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);


  const downloadApp = async() => {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Link to={`/`}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>

        {isReadyForInstall && <Button onClick={downloadApp}>Download App</Button>}
        
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
