import React from 'react';
import './App.css';
import Topbar from './Components/Topbar';
import People from './Components/People';
import MissionStatement from './Components/MissionStatement';
import About from './Components/About';
import Games from './Components/Games'
function App() {
  return (
    <div className="App">
      <header>
        <Topbar />
        <MissionStatement />
        <About />
        <Games />
        <People />
      </header>
    </div>
  );
}

export default App;
