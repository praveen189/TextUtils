import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import React, { useState } from 'react';


function App() {
  // const [mode, setMode] = useState('light');

  // const toggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('dark')
  //   }else{
  //     setMode('light')
  //   }
    
  // }
  return (
    <>
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
    <Navbar title="Text" />
    <div className="container my-3"> 
      <TextForm heading = "Enter the text to analyze"/>
      {/* <About/> */}
    </div>

    </>


  );
}

export default App;



// comments:
// my-3 is going to give margine of 3 in y-axis.
