import React from 'react';
import logo from './logo.svg';
import './App.css';
import mageInSrc from './mageInSrc.png';
import './style.css'
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: '100vw' }}>

        <h1 className='title red'>HEDI</h1>

        <img src={mageInSrc} alt="image" />
        <br />
        <img src="/imageInPublic.jpg" alt="image" />

      </div>

      <video width="320" height="240" controls>

        <source src="/myVideo.mp4" type="video/mp4" />

      </video>

    </div>
  );
}

export default App;
