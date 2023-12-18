// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import FlashCards from './components/FlashCards';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/flashcards' element={<FlashCards />}/>
    </Routes>

    // {/* <div className="App"> */}
    //  {/* <Home /> */}
    //  {/* <FlashCards /> */}
    //   {/* <header className="App-header"> */}
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     {/* <p> */}
    //       {/* Edit <code>src/App.js</code> and save to reload. */}
    //     {/* </p> */}
    //     {/* <a */}
    //       // className="App-link"
    //       // href="https://reactjs.org"
    //       // target="_blank"
    //       // rel="noopener noreferrer"
    //     // >
    //       {/* Learn React */}
    //     {/* </a> */}
    //   {/* </header> */}
    // {/* </div> */}
  );
}

export default App;
