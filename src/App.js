import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Homescreen';
import Navbar from './pages/Home/NavBar';
import MySkills from './pages/Home/MySkills';
import AboutMe from './pages/Home/AboutMe';
import ContactMe from './pages/Home/ContactMe';
import MyPortfolio from './pages/Home/MyPortfolio';
function App() {
  return (
    <div className="App">
      
     <Home />
     <Navbar />
     <AboutMe />
     <MySkills />
     <MyPortfolio />
     <ContactMe />
    </div>
  );
}

export default App;
