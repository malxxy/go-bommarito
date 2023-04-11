import React from 'react';
import './App.css';
import Navbar from './components';
import Hero from './components/hero';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from '../src/components/pages/discover';
import Categories from './components/pages/Categories'; 
import Media from './components/pages/media';
import Signup from './components/pages/signup';
import Login from './components/pages/login';


function App() {
  return (
    <Router>
     <Navbar />
     <Hero />
     <Routes>
      {/* <Switch> */}
        <Route path="/discover" element ={<Discover />} />
        <Route path="/Categories" element={<Categories />}/> 
        <Route path="/media" element={<Media />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
     {/* </Switch> */}
     </Routes>
    </Router>
  );
}

export default App; 