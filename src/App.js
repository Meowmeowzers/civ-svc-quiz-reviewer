// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import FlashCards from './components/FlashCards';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const SelectedItemsContext = React.createContext();

function App() {

  const [selectedQuizItems, setSelectedQuizItems] = React.useState([{}]);

  return (
     <BrowserRouter>
     <SelectedItemsContext.Provider value={[selectedQuizItems, setSelectedQuizItems]}>  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/flashcards' element={<FlashCards />}/>
      </Routes>
    </SelectedItemsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
