import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Sorting from './pages/Sorting';
import Pathfinding from './pages/Pathfinding';
import Topbar from './components/Topbar';
import Subscribe from './pages/Subscribe';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <ScrollToTop>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sorting" element={<Sorting />} />
            <Route path="/pathfinding" element={<Pathfinding />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>

        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}
