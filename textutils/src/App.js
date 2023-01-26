import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import Textform from './components/Textform';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('dark');
  // document.body.style.backgroundColor = 'grey';
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div className="App">
      <React.Fragment>
        <Navbar title="TextUtils" home="Home" about="About Us" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3"><Textform  heading="Enter your text here" mode={mode} /></div>
        
        {/* <About/> */}
      </React.Fragment>
      
    </div>
  );
}

export default App;
