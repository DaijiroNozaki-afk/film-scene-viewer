import React from 'react';
import './App.css';

function App() {
  const targetURL = process.env.PUBLIC_URL;
  console.log(targetURL)
  return (
    <div className="App">First view.
      <div className="imageClass">
        <img src="./images/02.jpg" alt="" className="src" />
      </div>
    </div>
  );
}

export default App;
