import React from 'react';
import TopBar from './components/TopBar';
import StoreListing from './components/StoreListing';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="background-container">
        <div className="background-text">
          <h1>Welcome to Instacart</h1>
          <p>Get your groceries delivered in as fast as an hour</p>
        </div>
      </div>
      <StoreListing />
    </div>
  );
}

// export default App;
