import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Textform from './components/Textform';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar title="TextUtils" home="Home" about="About Us" />
        <div class="container my-3"><Textform  heading="Enter your text here"/></div>
        
      </React.Fragment>
      
    </div>
  );
}

export default App;
