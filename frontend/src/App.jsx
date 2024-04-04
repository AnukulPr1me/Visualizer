import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Sorting from './pages/Sorting';
import Pathfinding from './pages/Pathfinding';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/sorting" element={<Sorting/>} />
            <Route path="/pathfinding" element={<Pathfinding/>} />
            
          </Routes>
          <Navbar />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}
